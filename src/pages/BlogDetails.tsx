import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { BLOG_POSTS } from '@/data/blogPosts';
import { ContactForm } from '@/components/common/ContactForm';
import { 
  ArrowLeft, Clock, Link as LinkIcon, Mail, Printer, 
  ArrowRight, Sparkles, Star, CheckCircle, ShieldCheck, Quote
} from 'lucide-react';

export const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts (excluding current post)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        {/* Article Header & Reading Canvas */}
        <section className="w-full bg-surface pb-12 sm:pb-16 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            {/* Top Navigation / Breadcrumbs */}
            <div className="pt-6 pb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-sans text-xs sm:text-sm text-on-surface-variant">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-on-surface transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to all articles</span>
                </Link>
                <span className="opacity-40">/</span>
                <Link to="/" className="hover:text-on-surface transition-colors">
                  Home
                </Link>
                <span className="opacity-40">/</span>
                <Link to="/blog" className="hover:text-on-surface transition-colors">
                  Blog
                </Link>
                <span className="opacity-40">/</span>
                <span className="text-on-surface truncate max-w-[200px] sm:max-w-none font-medium">
                  {post.title}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{post.category}</span>
              </div>
            </div>

            {/* Editorial Title & Metas */}
            <div className="max-w-4xl mx-auto pt-4 pb-8 text-center flex flex-col items-center">
              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight max-w-3xl mb-4 animate-fade-in-up">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="font-sans text-base sm:text-lg text-on-surface-variant italic font-normal max-w-2xl leading-relaxed">
                  {post.excerpt.length > 90 ? post.excerpt.slice(0, 87) + '...' : post.excerpt}
                </p>
              )}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 font-sans text-xs sm:text-sm text-on-surface-variant">
                <span className="font-semibold text-on-surface">By Judye Hess, Ph.D.</span>
                <span className="inline-block w-1 h-1 rounded-full bg-outline-variant" />
                <time>{post.date}</time>
                <span className="inline-block w-1 h-1 rounded-full bg-outline-variant" />
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>4 min read</span>
                </span>
              </div>

              {/* Utility / Sharing Bar */}
              <div className="mt-6 flex items-center justify-center gap-2 p-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 shadow-xs">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full hover:bg-white transition-colors text-on-surface-variant font-sans text-xs font-medium cursor-pointer"
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
                <a
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full hover:bg-white transition-colors text-on-surface-variant font-sans text-xs font-medium"
                  href={`mailto:?subject=${encodeURIComponent(`Read this article by Judye Hess, Ph.D.: ${post.title}`)}&body=${encodeURIComponent(`I thought you might appreciate this reflection by Dr. Judye Hess: ${window.location.href}`)}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Article</span>
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full hover:bg-white transition-colors text-on-surface-variant font-sans text-xs font-medium cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF</span>
                </button>
              </div>
            </div>

            {/* Feature Editorial Visual or Embedded Media */}
            {post.media ? (
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-outline-variant/40 bg-surface-container">
                <div className="aspect-video w-full">
                  <iframe
                    src={post.media.url}
                    title={post.media.caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                {post.media.caption && (
                  <div className="p-3 bg-surface-container-low text-on-surface-variant font-sans text-xs text-center border-t border-outline-variant/30">
                    <span>{post.media.caption}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-outline-variant/40 bg-surface-container">
                <div
                  className="h-72 sm:h-96 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/therapist/judye-hess-about.jpg')` }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white font-sans text-xs sm:text-sm">
                  <span>
                    Judye Hess, Ph.D. — South Berkeley consultation study & California statewide telehealth practice.
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Editorial Column Section */}
        <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Sticky Sidebar */}
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-32 flex flex-col gap-6">
                  <div className="bg-white rounded-2xl p-5 shadow-card border border-outline-variant/40 space-y-3">
                    <span className="font-sans text-xs uppercase tracking-wider text-primary font-bold block">
                      Article Outline
                    </span>
                    <nav className="flex flex-col gap-2 font-sans text-xs text-on-surface-variant">
                      <a className="hover:text-primary transition-colors py-1" href="#lead-concept">
                        Core Concept & Opening
                      </a>
                      <a className="hover:text-primary transition-colors py-1" href="#clinical-essay">
                        Clinical Perspective
                      </a>
                      <a className="hover:text-primary transition-colors py-1" href="#reflection-exercise">
                        Reflection Points
                      </a>
                      <a className="hover:text-primary transition-colors py-1" href="#author-bio">
                        About the Author
                      </a>
                    </nav>
                  </div>

                  <div className="p-5 rounded-2xl bg-white shadow-card border border-outline-variant/40 space-y-2">
                    <span className="font-sans text-xs font-bold text-on-surface block">
                      Clinical Practice
                    </span>
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                      Core Focused Family Therapy & Relationship Differentiation in California.
                    </p>
                    <Link
                      to="/couples-therapy"
                      className="text-primary hover:underline font-sans text-xs font-semibold pt-2 inline-flex items-center gap-1"
                    >
                      <span>Explore Couples Modality</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Reading Center */}
              <article className="lg:col-span-9 flex flex-col gap-8 text-left">
                {/* Lead Quote Callout */}
                <div
                  className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white shadow-card border border-outline-variant/40 relative overflow-hidden"
                  id="lead-concept"
                >
                  <Quote className="w-12 h-12 text-primary/10 absolute top-4 right-4 pointer-events-none" />
                  <blockquote className="relative z-10 font-serif text-xl sm:text-2xl text-on-surface italic leading-relaxed">
                    {post.slug === 'less-is-more'
                      ? '“All companionship can consist only in the strengthening of two neighboring solitudes, whereas everything that one is wont to call giving oneself is by nature harmful to companionship...”'
                      : `“${post.content[0]?.text || post.excerpt}”`}
                  </blockquote>
                  <div className="mt-4 pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-sans text-xs sm:text-sm text-primary font-semibold">
                    <span>
                      {post.slug === 'less-is-more'
                        ? '— Rainer Maria Rilke, Letters to a Young Poet'
                        : '— Judye Hess, Ph.D.'}
                    </span>
                    <span className="text-on-surface-variant font-normal">
                      Clinical reflection by Judye Hess, Ph.D.
                    </span>
                  </div>
                </div>

                {/* Section Content Elements */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 space-y-6" id="clinical-essay">
                  {post.content.map((el, idx) => {
                    if (el.type === 'quote') {
                      return (
                        <blockquote
                          key={idx}
                          className="p-5 rounded-2xl bg-surface-container-low border-l-4 border-primary font-serif text-lg italic text-on-surface my-3"
                        >
                          "{el.text}"
                        </blockquote>
                      );
                    }
                    if (el.type === 'heading') {
                      return (
                        <h2
                          key={idx}
                          className="font-serif font-bold text-2xl sm:text-3xl text-on-surface pt-4"
                        >
                          {el.text}
                        </h2>
                      );
                    }
                    if (el.type === 'list' && el.items) {
                      return (
                        <ul key={idx} className="space-y-2.5 list-disc list-inside font-sans text-base text-on-surface-variant leading-relaxed">
                          {el.items.map((item, iIdx) => (
                            <li key={iIdx}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p
                        key={idx}
                        className="font-sans text-base sm:text-lg text-on-surface leading-relaxed"
                      >
                        {el.text}
                      </p>
                    );
                  })}
                </div>

                {/* Relational Differentiation Matrix on less-is-more */}
                {post.slug === 'less-is-more' && (
                  <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-card border border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 space-y-2">
                      <span className="font-sans text-xs uppercase tracking-wider text-primary font-bold block">
                        Relational Differentiation Matrix
                      </span>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface">
                        The Spectrum of Connectedness
                      </h3>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                        Lasting companionship thrives not at the extremes of anxious enmeshment or defensive disengagement, but in the resonant middle of differentiated communion.
                      </p>
                    </div>
                    <div className="w-full md:w-72 flex flex-col gap-3 shrink-0 bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
                      <div>
                        <div className="flex justify-between font-sans text-xs text-on-surface-variant mb-1">
                          <span>Enmeshment (Loss of Self)</span>
                          <span className="font-semibold text-red-600">Panic</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-outline-variant/30 overflow-hidden">
                          <div className="w-full h-full bg-red-400" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between font-sans text-xs text-on-surface mb-1">
                          <span className="font-bold text-primary">Neighboring Solitudes</span>
                          <span className="font-bold text-primary">Intimacy</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-outline-variant/30 overflow-hidden">
                          <div className="w-4/5 h-full bg-primary rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between font-sans text-xs text-on-surface-variant mb-1">
                          <span>Isolation (Emotional Wall)</span>
                          <span className="font-semibold text-on-surface-variant">Defensive</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-outline-variant/30 overflow-hidden">
                          <div className="w-1/4 h-full bg-outline" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Clinical Reflection Exercise */}
                <div
                  className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-card border border-outline-variant/40 space-y-5"
                  id="reflection-exercise"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="font-sans text-xs font-bold uppercase tracking-wider">
                      Clinical Reflection Exercise
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-on-surface">
                    Questions to Consider in Your Relationship
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                    <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                      <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block">
                        01. Autonomy
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Where in your daily routine do you preserve private time solely for your own thoughts, without checking in or seeking validation?
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                      <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block">
                        02. Boundaries
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Can you witness your partner feeling anxious, disappointed, or sad without urgently leaping in to fix or absorb their emotional climate?
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                      <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block">
                        03. Merging
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        What dormant interest, circle of friendship, or intellectual passion might you reactivate to nourish your own unique center?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Author Bio Card */}
                <div
                  className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-card border border-outline-variant/40 flex flex-col sm:flex-row items-center sm:items-start gap-6"
                  id="author-bio"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-surface-container shadow-md border border-outline-variant/30">
                    <img
                      className="w-full h-full object-cover"
                      alt="Portrait of Judye Hess, Ph.D."
                      src="/images/therapist/judye-hess-hero.jpg"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <h4 className="font-serif font-bold text-xl text-on-surface">
                        Judye Hess, Ph.D.
                      </h4>
                      <span className="font-sans text-xs text-primary font-bold uppercase tracking-wider">
                        Licensed Psychologist #PSY 7468
                      </span>
                    </div>
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                      Judye Hess, Ph.D. is a licensed clinical psychologist with over 40 years of clinical experience and Professor Emerita at the California Institute of Integral Studies (CIIS). She specializes in couples, family, and group therapy in Berkeley, CA and statewide California telehealth.
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 font-sans text-xs font-semibold">
                      <Link to="/about-me" className="text-primary hover:underline">
                        About Dr. Hess
                      </Link>
                      <Link to="/couples-therapy" className="text-primary hover:underline">
                        Couples Therapy
                      </Link>
                      <Link to="/my-qualifications" className="text-primary hover:underline">
                        Qualifications & CIIS
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Reader Engagement Box */}
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-primary text-white shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left max-w-xl">
                    <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
                      Have a thought or question on this reflection?
                    </h4>
                    <p className="font-sans text-sm text-white/90 leading-relaxed">
                      Dr. Hess welcomes confidential questions on relational dilemmas, differentiation, and partnership for future essays.
                    </p>
                  </div>
                  <a
                    href={`mailto:help@judyehess.com?subject=${encodeURIComponent(`Question regarding ${post.title}`)}`}
                    className="bg-white text-primary hover:bg-surface-container-low font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-sm shrink-0"
                  >
                    <span>Send a Question</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="w-full bg-surface py-14 sm:py-20 text-left border-b border-outline-variant/30">
            <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                    Further Reading
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-on-surface">
                    Related Essays & Dialogue
                  </h2>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline"
                >
                  <span>View all clinical writing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {relatedPosts.map((related) => (
                  <div
                    key={related.slug}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-6 text-left"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-on-surface-variant">
                        <span className="bg-surface-container px-2.5 py-0.5 rounded-full font-medium">
                          {related.category}
                        </span>
                        <time>{related.date}</time>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-on-surface mt-1 hover:text-primary transition-colors">
                        <Link to={`/${related.slug}`}>
                          {related.title}
                        </Link>
                      </h3>
                      <p className="font-sans text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                        {related.excerpt}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-outline-variant/30">
                      <Link
                        to={`/${related.slug}`}
                        className="text-primary hover:underline font-sans text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5"
                      >
                        <span>Read Essay</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Free Consultation Form Section */}
        <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <ContactForm />
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
