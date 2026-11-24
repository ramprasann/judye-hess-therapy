import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { BLOG_POSTS } from '@/data/blogPosts';
import { CONTACT_INFO } from '@/data/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Search, MessageSquare, BookOpen, Quote, 
  Phone, Smartphone, Mail, Lock, CheckCircle
} from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTopic, setActiveTopic] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' }
  });

  const onConsultationSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 600));
    console.log('Blog Consultation Request:', data);
    setIsSubmitting(false);
    setFormSubmitted(true);
    reset();
  };

  const featuredPost = BLOG_POSTS.find(p => p.slug === 'less-is-more') || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter(p => p.slug !== featuredPost.slug);

  const filteredPosts = regularPosts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = activeTopic === 'all' || 
                         (activeTopic === 'couples' && p.category.toLowerCase().includes('couples')) ||
                         (activeTopic === 'lat' && (p.category.toLowerCase().includes('lat') || p.category.toLowerCase().includes('autonomy')));
    return matchesSearch && matchesTopic;
  });

  return (
    <PageLayout>
      {/* Editorial Hero Header */}
      <section className="relative overflow-hidden bg-surface py-14 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 relative z-10">
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest animate-fade-in w-fit">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span>Relationship Insights & Essays</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
              Blog & Perspectives
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed animate-fade-in-up delay-100">
              Essays, clinical reflections, and practical guidance on intimacy, family systems, autonomy, and the courage to communicate honestly.
            </p>

            {/* Search & Topic Filter Bar */}
            <div className="mt-4 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-outline-variant/30">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white text-on-surface placeholder:text-on-surface-variant/50 pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm border border-outline-variant/50 shadow-xs focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                <button
                  type="button"
                  onClick={() => setActiveTopic('all')}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold shrink-0 transition-all ${
                    activeTopic === 'all'
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-white text-on-surface-variant border border-outline-variant/50 hover:bg-surface-container-low'
                  }`}
                >
                  All Topics
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTopic('couples')}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold shrink-0 transition-all ${
                    activeTopic === 'couples'
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-white text-on-surface-variant border border-outline-variant/50 hover:bg-surface-container-low'
                  }`}
                >
                  Couples Therapy
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTopic('lat')}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold shrink-0 transition-all ${
                    activeTopic === 'lat'
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-white text-on-surface-variant border border-outline-variant/50 hover:bg-surface-container-low'
                  }`}
                >
                  LAT & Autonomy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lead Article */}
      {featuredPost && (
        <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-card border border-outline-variant/40 card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs text-primary font-bold uppercase tracking-wider">
                      Featured Reflection
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-sans text-xs text-on-surface-variant">{featuredPost.date}</span>
                  </div>

                  <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface leading-tight hover:text-primary transition-colors">
                    <Link to={`/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="font-sans text-base text-on-surface-variant leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={`/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 font-sans text-sm text-primary font-semibold hover:underline"
                    >
                      <span>Read Full Essay</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-primary text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card flex flex-col justify-between gap-4">
                  <Quote className="w-8 h-8 text-white/40" />
                  <blockquote className="font-serif text-lg sm:text-xl text-white italic leading-relaxed">
                    “All companionship can consist only in the strengthening of two neighboring solitudes...”
                  </blockquote>
                  <span className="font-sans text-xs text-white/80 font-medium block">
                    — Rainer Maria Rilke (Letters to a Young Poet)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles Grid */}
      <section className="w-full bg-surface py-14 sm:py-20 text-left border-b border-outline-variant/30">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-8">
          <div className="flex flex-col gap-2 max-w-3xl">
            <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest block">
              Archive & Dialogue
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
              Recent Articles & Clinical Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant">
                    <span className="bg-surface-container px-2.5 py-0.5 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface leading-snug hover:text-primary transition-colors">
                    <Link to={`/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/30">
                  <Link
                    to={`/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary font-semibold hover:underline"
                  >
                    <span>Read Article</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Have a Question Callout Banner */}
      <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card border border-outline-variant/40 card-hover flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                Submit Your Query
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-on-surface">
                Have a Relationship Question for Dr. Hess?
              </h2>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed">
                Send in questions regarding relationship dilemmas, living apart together, pursuer-distancer patterns, or communication hurdles for future clinical commentary.
              </p>
            </div>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-primary text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-full shadow-sm hover:bg-primary/90 btn-hover cursor-pointer shrink-0 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask Dr. Hess</span>
            </a>
          </div>
        </div>
      </section>

      {/* Harmonized Trustworthy Consultation Section */}
      <section className="w-full bg-surface py-14 sm:py-20 text-left" id="consultation">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Practice Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest w-fit">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
                  Contact Me For A Free Consultation
                </h2>
                <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                  Reach out to schedule a complimentary phone consultation to discuss your situation and explore working together.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-outline-variant/40 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-on-surface-variant font-medium block">Berkeley Office Phone</span>
                    <a href={`tel:${CONTACT_INFO.landlineRaw}`} className="font-sans text-lg font-bold text-on-surface hover:text-primary transition-colors block">
                      {CONTACT_INFO.landline}
                    </a>
                    <span className="font-sans text-xs text-on-surface-variant">Messages checked daily M–F</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-outline-variant/40 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-on-surface-variant font-medium block">Direct Cellular</span>
                    <a href={`tel:${CONTACT_INFO.cellRaw}`} className="font-sans text-lg font-bold text-on-surface hover:text-primary transition-colors block">
                      {CONTACT_INFO.cell}
                    </a>
                    <span className="font-sans text-xs text-on-surface-variant">Direct calls & urgent scheduling</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-outline-variant/40 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-on-surface-variant font-medium block">Direct Email</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-sans text-base font-bold text-on-surface hover:text-primary transition-colors block break-all">
                      {CONTACT_INFO.email}
                    </a>
                    <span className="font-sans text-xs text-on-surface-variant">Confidential intake inquiries</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: White Consultation Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-outline-variant/30">
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface">
                      Confidential Consultation Inquiry
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant mt-0.5">
                      Direct to Dr. Hess • Typical response within 24 business hours
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>

                <form onSubmit={handleSubmit(onConsultationSubmit)} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="font-sans text-xs font-semibold text-on-surface">Your Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Jane Doe"
                        {...register('name')}
                        className={`w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                          errors.name ? 'border-red-500' : 'border-outline-variant/40'
                        }`}
                      />
                      {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="font-sans text-xs font-semibold text-on-surface">Email Address *</label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        {...register('email')}
                        className={`w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                          errors.email ? 'border-red-500' : 'border-outline-variant/40'
                        }`}
                      />
                      {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-sans text-xs font-semibold text-on-surface">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="(510) 555-0199"
                      {...register('phone')}
                      className={`w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                        errors.phone ? 'border-red-500' : 'border-outline-variant/40'
                      }`}
                    />
                    {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-sans text-xs font-semibold text-on-surface">Your Message (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Share a brief note about what brings you to therapy or any question for Dr. Hess..."
                      {...register('message')}
                      className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-full shadow-sm hover:bg-primary/90 btn-hover cursor-pointer disabled:opacity-70 transition-all"
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'Send Consultation Request'}</span>
                    </button>

                    {formSubmitted && (
                      <span className="font-sans text-xs sm:text-sm text-primary font-medium flex items-center gap-1.5 animate-fade-in">
                        <CheckCircle className="w-4 h-4" />
                        <span>Thank you! Your request has been sent directly to Dr. Hess.</span>
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
