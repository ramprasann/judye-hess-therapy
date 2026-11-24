import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { CONTACT_INFO } from '@/data/navigation';
import { TESTIMONIALS } from '@/data/testimonials';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Star,
  ChevronDown,
  ChevronUp,
  Video,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  MessageCircle,
  Share2,
  Award,
  Sparkles,
  BookOpen,
  Quote,
  HeartHandshake,
  Phone,
  Smartphone,
  Mail,
  Lock,
  Check
} from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const Home: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  const toggleReview = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
    await new Promise((r) => setTimeout(r, 600));
    console.log('Consultation Submitted:', data);
    setIsSubmitting(false);
    setFormSubmitted(true);
    reset();
  };

  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        {/* 1. Hero Section */}
        <section className="relative w-full bg-surface-container-low overflow-hidden py-space-xl lg:py-24 text-left">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-16 items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-sm animate-fade-in">
                  <span className="w-8 h-0.5 bg-primary" />
                  <span className="font-sans text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold">
                    Relationship Therapy • Telehealth (Zoom)
                  </span>
                </div>
                <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
                  Welcome
                </h1>
                <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed animate-fade-in-up delay-100">
                  Contact me Now for a Free Consultation. I would love to speak with you.
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-sm animate-fade-in-up delay-200">
                  <a
                    className="inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container font-sans text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full transition-all shadow-sm btn-hover"
                    href="#consultation"
                  >
                    <span>Contact</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-space-xs text-primary hover:text-primary-container font-sans text-sm sm:text-base font-semibold px-5 py-3.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors btn-hover"
                    href="#introduction"
                  >
                    <span>Read My Approach</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative animate-fade-in delay-150">
                <div className="relative rounded-2xl overflow-hidden bg-surface-container shadow-md aspect-[4/5] max-w-md mx-auto img-zoom-container">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/therapist/judye-hess-hero.jpg"
                    alt="Warm, approachable portrait of Dr. Judye Hess"
                  />
                </div>
                <div className="hidden sm:flex items-center gap-3 bg-white text-on-surface px-5 py-3.5 rounded-2xl shadow-card absolute -bottom-4 -left-4 lg:-left-6 border border-outline-variant/40 card-hover">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">Clinical Experience</span>
                    <span className="font-serif text-base text-on-surface font-bold">40+ Years in Practice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Welcome & Introduction Section */}
        <section className="w-full bg-surface-container-lowest/70 py-16 sm:py-20 lg:py-24 text-left border-y border-outline-variant/30 scroll-mt-24" id="introduction">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
              
              {/* Left Column / Practice Highlights (Sticky on Desktop, 2-col on Tablet) */}
              <aside className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6 order-2 lg:order-1">
                {/* Session Format Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs uppercase tracking-wider text-primary font-bold">
                      Session Format
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-sans text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Active Practice
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Video className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif text-lg font-bold text-on-surface leading-tight">
                        Telehealth Exclusively
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Working on telehealth (Zoom) exclusively for individuals, couples, families, and groups.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-outline-variant/20 flex flex-col gap-2 font-sans text-xs text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>California Statewide Telehealth via Zoom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Individual, Couples &amp; Family Therapy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Interpersonal Therapy Groups</span>
                    </div>
                  </div>
                </div>

                {/* Professional Network Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      Professional Network
                    </span>
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>

                  <a
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 transition-all btn-hover"
                    href={CONTACT_INFO.theraviveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-sans text-[11px] text-on-surface-variant font-medium">
                          Network of Therapy Professionals
                        </span>
                        <span className="font-sans text-xs sm:text-sm font-bold text-primary group-hover:underline truncate">
                          Theravive Verified
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-outline group-hover:text-primary transition-colors shrink-0 ml-2" />
                  </a>

                  <div className="flex flex-col gap-2.5 pt-2 border-t border-outline-variant/20">
                    <span className="font-serif text-sm font-semibold text-on-surface">
                      Join the Conversation!
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        className="btn-hover inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container-low hover:bg-primary hover:text-white text-on-surface font-sans text-xs font-semibold transition-all border border-outline-variant/30"
                        href={CONTACT_INFO.facebookUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Facebook</span>
                      </a>
                      <a
                        className="btn-hover inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container-low hover:bg-primary hover:text-white text-on-surface font-sans text-xs font-semibold transition-all border border-outline-variant/30"
                        href="#consultation"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Connect</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Practice Focus Tags Card (Spans both cols on tablet) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-3 text-left md:col-span-2 lg:col-span-1">
                  <span className="font-sans text-xs uppercase tracking-wider text-primary font-bold">
                    Specialized Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {['Relationship Therapy', 'Couples Counseling', 'Family Systems', 'Interpersonal Groups', 'Telehealth Zoom'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-xs font-medium border border-outline-variant/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Main Editorial Content */}
              <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6 sm:gap-7 order-1 lg:order-2">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>01 / Philosophy &amp; Practice</span>
                  </div>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-[1.18]">
                    A Collaborative Path to Healing
                  </h2>
                </div>

                {/* Welcoming Lead Quote Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border-l-4 border-primary shadow-sm border border-outline-variant/30">
                  <p className="font-serif text-base sm:text-lg italic text-on-surface leading-relaxed">
                    “Welcome and thank you for your interest in my psychotherapy practice. Finding the right therapist can be challenging at best and this is only magnified when one is feeling stressed or confused in their relationship life.”
                  </p>
                </div>

                {/* Editorial Body Text */}
                <div className="flex flex-col gap-4 sm:gap-5 font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    <strong className="font-semibold text-on-surface">My focus is on Relationship Therapy,</strong> seeing two or more people in a session together, be they a couple, a family, or a group. I also work with individual clients and focus on their relationships with significant others in their lives, their relationship with themselves, and their relationship with me.
                  </p>
                  <p>
                    I have found that <strong className="font-semibold text-on-surface">interpersonal therapy</strong> (what I call RELATIONSHIP THERAPY), is quicker, goes right to the heart of the matter, and can actually be enjoyable. I don’t necessarily believe in the “no pain/no gain” philosophy of healing. I also found that working in the interpersonal dimension is where my <strong className="font-semibold text-on-surface">natural talents and interests</strong> lie. I have seen situations where people who don’t work out well in individual therapy, can do a lot more healing when working together with a partner, a family member, or in a group.
                  </p>
                  <p>
                    For me, the <strong className="font-semibold text-on-surface">therapy process,</strong> be it with one individual or with many, <strong className="font-semibold text-on-surface">is one of collaboration and mutual transformation.</strong> Fostering a trusting environment, built on a foundation of respect, compassion, and self-growth for all concerned. I have seen many moments of change occur in people who have been <strong className="font-semibold text-on-surface">struggling with their lives and have had relationship issues</strong> for years. It can be very exciting as well as empowering to break through one of these <strong className="font-semibold text-on-surface">challenging aspects of relationships</strong>. Rarely am I not moved in some way by a session.
                  </p>
                </div>

                {/* Elevated Telehealth & Consultation Action Banner */}
                <div className="mt-2 p-5 sm:p-6 rounded-2xl bg-white border border-primary/20 shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 card-hover">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Video className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif text-base sm:text-lg font-bold text-on-surface">
                        Working on telehealth (Zoom) exclusively.
                      </span>
                      <span className="font-sans text-xs sm:text-sm text-on-surface-variant">
                        Confidential, convenient video sessions across California.
                      </span>
                    </div>
                  </div>
                  <a
                    href="#consultation"
                    className="btn-hover inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-white font-sans text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all shrink-0 self-stretch sm:self-auto text-center"
                  >
                    Request Consultation
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Quote Section */}
        <section className="w-full bg-primary text-on-primary py-16 sm:py-20 text-center relative overflow-hidden">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 text-white/90 flex items-center justify-center">
              <Quote className="w-6 h-6 rotate-180" />
            </div>
            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed max-w-4xl">
              “No Garden is weed free; no mind free from unwanted thoughts..many psychological problems arise because we mistake our thoughts for reality”
            </blockquote>
            <span className="font-sans text-xs tracking-widest uppercase text-white/70 font-semibold mt-1">
              — Guiding Therapeutic Philosophy
            </span>
          </div>
        </section>

        {/* 4. Book Promotion Section */}
        <section className="w-full bg-surface-container-lowest/60 py-16 sm:py-20 lg:py-28 text-left border-y border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-card border border-outline-variant/40 card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                
                {/* Book Presentation with Realistic Elevation & Depth */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center">
                  <div className="relative group max-w-[260px] sm:max-w-[280px] w-full">
                    {/* Realistic 3D Book Elevation Shadow */}
                    <div className="relative rounded-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_10px_20px_-5px_rgba(0,0,0,0.15)] border border-black/10 bg-surface-container-low transition-transform duration-500 group-hover:-translate-y-1">
                      <img
                        className="w-full aspect-[3/4] object-cover"
                        src="/images/books/core-focused-family-therapy.jpg"
                        alt="Core Focused Family Therapy: Moving from Chaos to Clarity by Judye Hess, Ph.D."
                      />
                      {/* Subtle spine glare effect */}
                      <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white/20 via-white/5 to-transparent pointer-events-none" />
                    </div>

                    {/* Book Metadata Badge */}
                    <div className="mt-4 text-center flex flex-col items-center gap-1">
                      <span className="font-serif text-sm font-semibold text-on-surface">
                        Judye Hess, Ph.D. &amp; Ross Cohen, M.A.
                      </span>
                      <span className="font-sans text-xs text-on-surface-variant">
                        Paperback • Clinical Psychology
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Details & Action */}
                <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>02 / Published Clinical Work</span>
                    </div>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-snug">
                      Core Focused Family Therapy: Moving from Chaos to Clarity
                    </h2>
                  </div>

                  <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
                    Core Focused Family Therapy is a unique approach to family therapy in that it is particularly appropriate for students and practitioners who favor a humanistic, experiential approach to working with families but lack the guidance to put this kind of approach into practice. The book guides the student or individual therapy practitioner in making the paradigm shift to working with a systemic model by explaining this shift in a clear and specific way that can easily be understood.
                  </p>

                  {/* Highlights checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 font-sans text-xs sm:text-sm text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Humanistic &amp; experiential family systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Practical paradigm shift for clinicians</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Accessible for students &amp; seasoned therapists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Translates theory into direct practice</span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <a
                      className="btn-hover inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 font-sans text-sm font-semibold px-7 py-3.5 rounded-full shadow-sm transition-all"
                      href="https://www.amazon.com/Core-Focused-Family-Therapy-Clarity/dp/1882883705"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Order on Amazon</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                      to="/publications"
                      className="btn-hover inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-sans text-sm font-semibold px-6 py-3.5 rounded-full transition-all border border-outline-variant/30"
                    >
                      <span>Explore All Publications</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 5. Client & Colleague Reflections Section */}
        <section className="w-full bg-surface py-16 sm:py-20 lg:py-24 text-left">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 flex flex-col gap-10 sm:gap-12">
            
            {/* Header: Editorial & Trust Badge */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-outline-variant/20">
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>03 / Client &amp; Colleague Reflections</span>
                </div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-snug">
                  Trusted by Couples, Families &amp; Peers
                </h2>
                <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Genuine reflections from couples, families, and long-standing professional colleagues on their therapeutic journey with Dr. Judye Hess.
                </p>
              </div>

              {/* Rating Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-outline-variant/40 shadow-sm shrink-0">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="h-4 w-px bg-outline-variant/40" />
                <span className="font-sans text-xs font-bold text-on-surface">
                  5.0 Rating • Verified Google Reviews
                </span>
              </div>
            </div>

            {/* Testimonials Grid: Responsive, warm editorial cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
              {TESTIMONIALS.map((t) => {
                const isExpanded = !!expandedReviews[t.id];
                const isLong = t.content.length > 240;
                const isColleague = t.id === 'cathy-diamond';

                return (
                  <article
                    key={t.id}
                    className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-md transition-all flex flex-col justify-between gap-5 border border-outline-variant/40 text-left card-hover"
                  >
                    {/* Top Accent Quote Mark */}
                    <div className="absolute top-5 right-5 text-primary/10 pointer-events-none">
                      <Quote className="w-8 h-8 rotate-180" />
                    </div>

                    <div className="flex flex-col gap-4 relative">
                      {/* Rating & Category Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-amber-500">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                            isColleague
                              ? 'bg-primary/10 text-primary border border-primary/20'
                              : 'bg-surface-container text-on-surface-variant border border-outline-variant/30'
                          }`}
                        >
                          {isColleague ? 'Colleague (40 Yrs)' : 'Verified Google Review'}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="text-xs sm:text-[13.5px] text-on-surface-variant leading-relaxed">
                        <p className={!isExpanded && isLong ? 'line-clamp-5' : 'whitespace-pre-line'}>
                          {t.content}
                        </p>
                        {isLong && (
                          <button
                            type="button"
                            onClick={() => toggleReview(t.id)}
                            className="mt-2.5 text-primary hover:text-primary/80 font-semibold text-xs inline-flex items-center gap-1 focus:outline-none"
                          >
                            <span>{isExpanded ? 'Show less' : 'Read full reflection'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Reviewer Profile */}
                    <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/20">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0 border border-outline-variant/40 shadow-xs"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-serif font-bold text-sm text-on-surface truncate">
                          {t.name}
                        </span>
                        <span className="font-sans text-[11px] text-on-surface-variant truncate">
                          {t.role ? `${t.role} • Consultation Partner` : 'Couples & Family Client'}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section className="w-full bg-surface-container py-16 sm:py-20 lg:py-24 text-left border-t border-outline-variant/30 scroll-mt-24" id="consultation">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
              {/* Left Column: Direct Contact Info */}
              <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>04 / Get In Touch</span>
                  </div>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-snug">
                    Contact Me For A Free Consultation
                  </h2>
                </div>
                <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
                  Reach out by phone, email, or use the consultation form to schedule a complimentary introductory conversation.
                </p>

                <div className="flex flex-col gap-3.5 sm:gap-4">
                  <a
                    className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-card hover:shadow-md transition-all border border-outline-variant/40 card-hover group"
                    href={`tel:${CONTACT_INFO.landlineRaw}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-base text-on-surface font-bold group-hover:text-primary transition-colors">
                        {CONTACT_INFO.landline}
                      </span>
                      <span className="font-sans text-xs text-on-surface-variant">
                        land line, messages only
                      </span>
                    </div>
                  </a>

                  <a
                    className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-card hover:shadow-md transition-all border border-outline-variant/40 card-hover group"
                    href={`tel:${CONTACT_INFO.cellRaw}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-base text-on-surface font-bold group-hover:text-primary transition-colors">
                        {CONTACT_INFO.cell}
                      </span>
                      <span className="font-sans text-xs text-on-surface-variant">
                        cell
                      </span>
                    </div>
                  </a>

                  <a
                    className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-card hover:shadow-md transition-all border border-outline-variant/40 card-hover group"
                    href={`mailto:${CONTACT_INFO.email}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-base text-on-surface font-bold group-hover:text-primary transition-colors">
                        {CONTACT_INFO.email}
                      </span>
                      <span className="font-sans text-xs text-on-surface-variant">
                        Direct Email
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSubmit(onConsultationSubmit)}
                  className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-card flex flex-col gap-5 border border-outline-variant/40 card-hover text-left"
                >
                  {/* Form Header / Trust Accent */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-outline-variant/20 gap-2">
                    <div className="flex items-center gap-2 text-primary font-sans text-xs uppercase tracking-wider font-semibold">
                      <Lock className="w-4 h-4 text-primary" />
                      <span>Confidential Consultation Inquiry</span>
                    </div>
                    <span className="font-sans text-[11px] text-on-surface-variant bg-surface-container px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                      Direct to Dr. Hess
                    </span>
                  </div>

                  {formSubmitted ? (
                    <div className="bg-secondary-container/30 border border-secondary-container rounded-xl p-8 text-center flex flex-col items-center gap-3 animate-scale-in">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-serif font-bold text-xl text-on-surface">
                        Thank You for Reaching Out
                      </h3>
                      <p className="font-sans text-sm text-on-surface-variant max-w-md leading-relaxed">
                        Your consultation request has been received. Dr. Judye Hess will review your note and contact you promptly via phone or email.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs text-primary font-semibold hover:underline mt-2"
                      >
                        Send another note
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="flex flex-col">
                          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="contact-name">
                            Your Name <span className="text-primary font-bold">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            placeholder="e.g. Jane Doe"
                            {...register('name')}
                            className="w-full bg-white text-on-surface placeholder:text-outline/70 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 shadow-xs focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                          />
                          {errors.name && (
                            <span className="text-xs text-error mt-1">{errors.name.message}</span>
                          )}
                        </div>

                        <div className="flex flex-col">
                          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="contact-email">
                            Your Email <span className="text-primary font-bold">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            placeholder="e.g. jane@example.com"
                            {...register('email')}
                            className="w-full bg-white text-on-surface placeholder:text-outline/70 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 shadow-xs focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                          />
                          {errors.email && (
                            <span className="text-xs text-error mt-1">{errors.email.message}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="contact-phone">
                          Phone Number <span className="font-normal text-on-surface-variant/60 lowercase tracking-normal">(optional)</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="e.g. (510) 843-5683"
                          {...register('phone')}
                          className="w-full bg-white text-on-surface placeholder:text-outline/70 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 shadow-xs focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="contact-message">
                          Your Message <span className="font-normal text-on-surface-variant/60 lowercase tracking-normal">(optional)</span>
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          placeholder="Share what brings you to therapy or any initial questions regarding session format, scheduling, or fees..."
                          {...register('message')}
                          className="w-full bg-white text-on-surface placeholder:text-outline/70 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 shadow-xs focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all resize-y"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container font-sans text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-sm cursor-pointer disabled:opacity-60 btn-hover"
                        >
                          <span>{isSubmitting ? 'Sending Request...' : 'Send Consultation Request'}</span>
                        </button>

                        <p className="font-sans text-xs text-on-surface-variant/80 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                          <span>Your information is confidential and protected.</span>
                        </p>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
