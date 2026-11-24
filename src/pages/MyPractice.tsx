import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { CONTACT_INFO } from '@/data/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Heart,
  Users,
  Video,
  ShieldCheck,
  Sparkles,
  Phone,
  Smartphone,
  Mail,
  Award,
  Eye,
  Compass,
  Lock,
  Check,
  MessageCircle,
  Quote
} from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const MyPractice: React.FC = () => {
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
    console.log('Practice Consultation Request:', data);
    setIsSubmitting(false);
    setFormSubmitted(true);
    reset();
  };

  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        {/* 1. Editorial Page Header / Hero */}
        <section className="relative w-full bg-surface-container-low overflow-hidden py-16 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 relative z-10">
            <div className="max-w-4xl flex flex-col gap-4 sm:gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start animate-fade-in">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Approach &amp; Clinical Philosophy</span>
              </div>
              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
                My Practice
              </h1>
              <p className="font-sans text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed animate-fade-in-up delay-100 max-w-3xl">
                A relational, depth-oriented space cultivating authentic dialogue, mutual understanding, and durable emotional connection across individuals, couples, and family systems.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 animate-fade-in-up delay-200">
                <a
                  href="#consultation"
                  className="btn-hover inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 font-sans text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-sm"
                >
                  Request Consultation
                </a>
                <a
                  href="#modalities"
                  className="btn-hover inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-sans text-sm font-semibold px-6 py-3.5 rounded-full transition-all border border-outline-variant/30"
                >
                  Explore Modalities
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Main Editorial Content Block & Sticky Practitioner Sidebar */}
        <section className="w-full bg-surface-container-lowest/60 py-16 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
              
              {/* Left Column: Core Editorial Content */}
              <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
                
                {/* Relational Focus Editorial Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                    <Heart className="w-3.5 h-3.5" />
                    <span>Relational Focus</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-bold leading-snug">
                    Almost 30 years ago, I decided to focus my practice on working with more than one person, be it a partner, parents, or the whole family.
                  </h2>
                  <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
                    I was also touched by folks who wanted to be in an intimate relationship but were instead feeling lonely and isolated. The intimate connection that is engendered in individual therapy can be a very healing experience. Also, Group therapy often seems like the right choice, as we can join with others in a family-type setting and create our own meaningful relationships in that context.
                  </p>
                </div>

                {/* Safe Container / The Holding Environment Quote Banner */}
                <div className="bg-primary text-white rounded-3xl p-7 sm:p-10 shadow-card relative overflow-hidden card-hover text-left">
                  <div className="absolute top-4 right-4 text-white/10 pointer-events-none">
                    <Quote className="w-20 h-20 rotate-180" />
                  </div>
                  <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
                    <div className="inline-flex items-center gap-2 text-white/80 font-sans text-xs uppercase tracking-widest font-semibold">
                      <ShieldCheck className="w-4 h-4 text-white/80" />
                      <span>The Holding Environment</span>
                    </div>
                    <blockquote className="font-serif text-xl sm:text-2xl leading-relaxed text-white italic">
                      “In all my therapeutic work, I try to create a safe container in which deep, honest, authentic communication among participants is encouraged. I focus on guiding you to relate honestly and directly in the here and now, often helping to see “problems” as opportunities for personal/spiritual growth rather than as something to be fixed.”
                    </blockquote>
                    <div className="flex items-center gap-2 pt-2 border-t border-white/20 font-sans text-xs sm:text-sm text-white/80">
                      <span className="w-6 h-px bg-white/40" />
                      <span>Judye Hess, Ph.D. — Clinical Psychologist</span>
                    </div>
                  </div>
                </div>

                {/* Untangling Relational Complexity Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-6 text-left">
                  <div className="flex flex-col gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Depth &amp; Perspective</span>
                    </div>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-snug">
                      Untangling Relational Complexity
                    </h2>
                  </div>
                  <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
                    Relationships are so complex that it's often hard to see our way to a different place without the help of an empathic outsider who can hear all sides of a situation. My hope is for each of us to explore our own deepest truths and express them in individual sessions, to our partners, our family or other group members, in a situation of being witnessed and supported.
                  </p>
                  
                  {/* Two Clinical Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="p-5 sm:p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 card-hover flex flex-col gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Eye className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-on-surface">Witnessed &amp; Heard</h3>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        An impartial, empathic mirror where every partner's felt reality is validated without judgment.
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 card-hover flex flex-col gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Compass className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-on-surface">Here &amp; Now Presence</h3>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Working directly with live relational dynamics, breaking old systemic loops in real time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How We Work Together / Modalities Section */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-6 text-left scroll-mt-24" id="modalities">
                  <div className="flex flex-col gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                      <Users className="w-3.5 h-3.5" />
                      <span>Practice Modalities</span>
                    </div>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-snug">
                      How We Work Together
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                    <Link
                      to="/couples-therapy"
                      className="p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all border border-outline-variant/30 card-hover flex flex-col gap-3 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Heart className="w-5 h-5" />
                        </div>
                        <span className="font-sans text-xs font-semibold text-primary group-hover:underline">Learn more</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                        Couples Therapy
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        De-escalating conflict loops, fostering emotional intimacy, and navigating togetherness vs. autonomy.
                      </p>
                    </Link>

                    <Link
                      to="/family-therapy"
                      className="p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all border border-outline-variant/30 card-hover flex flex-col gap-3 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Users className="w-5 h-5" />
                        </div>
                        <span className="font-sans text-xs font-semibold text-primary group-hover:underline">Learn more</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                        Family Therapy
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Intergenerational reconciliation, adult children with aging parents, and clearing unresolved tensions.
                      </p>
                    </Link>

                    <Link
                      to="/group-therapy"
                      className="p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all border border-outline-variant/30 card-hover flex flex-col gap-3 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <span className="font-sans text-xs font-semibold text-primary group-hover:underline">Learn more</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                        Group Therapy
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        Interpersonal growth laboratory to receive honest, compassionate peer feedback in a safe setting.
                      </p>
                    </Link>

                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col gap-3 card-hover">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Video className="w-5 h-5" />
                        </div>
                        <span className="font-sans text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">California</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-on-surface">
                        Telehealth (Zoom)
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        High-fidelity, confidential telehealth sessions available to clients throughout California.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Practitioner Sidebar */}
              <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
                
                {/* Portrait & Profile Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-4 text-left">
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container shadow-sm border border-outline-variant/30">
                    <img
                      src="/images/therapist/judye-hess-about.jpg"
                      alt="Judye Hess, Ph.D."
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <h3 className="font-serif text-xl font-bold text-on-surface">Judye Hess, Ph.D.</h3>
                    <span className="font-sans text-xs text-primary uppercase tracking-wider font-bold">
                      Clinical Psychologist · Lic. PSY 7468
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant pt-1 leading-relaxed">
                      With decades of clinical experience dating back to 1980, Dr. Hess integrates psychodynamic insight, family systems theory, and mindful presence.
                    </p>
                  </div>
                </div>

                {/* Quick Practice Facts Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-3.5 text-left">
                  <span className="font-sans text-xs uppercase tracking-wider text-primary font-bold">
                    Practice Snapshot
                  </span>
                  <div className="space-y-2.5 font-sans text-xs sm:text-sm text-on-surface-variant">
                    <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span>Clinical Experience</span>
                      <strong className="text-on-surface font-semibold">40+ Years</strong>
                    </div>
                    <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span>California License</span>
                      <strong className="text-on-surface font-semibold">PSY 7468</strong>
                    </div>
                    <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span>Session Format</span>
                      <strong className="text-primary font-semibold">Zoom Telehealth</strong>
                    </div>
                    <div className="flex justify-between items-center pt-0.5">
                      <span>Academic Role</span>
                      <strong className="text-on-surface font-semibold">Prof. Emerita (CIIS)</strong>
                    </div>
                  </div>
                </div>

                {/* Consultation Invitation Banner Card */}
                <div className="bg-primary text-white p-6 sm:p-7 rounded-3xl shadow-card text-left flex flex-col gap-3.5 card-hover">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      Begin the Dialogue
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-white/80 leading-relaxed">
                    I offer a free phone consultation to discuss your needs and answer any questions about the practice.
                  </p>
                  <a
                    href="#consultation"
                    className="btn-hover w-full inline-block text-center py-3 px-4 rounded-full bg-white text-on-surface font-sans text-xs font-bold transition-all shadow-sm hover:bg-surface-container"
                  >
                    Request Consultation
                  </a>
                </div>

              </aside>

            </div>
          </div>
        </section>

        {/* 3. Free Consultation Section (Aligned with Home) */}
        <section className="w-full bg-surface-container py-16 sm:py-20 lg:py-24 text-left border-t border-outline-variant/30 scroll-mt-24" id="consultation">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
              
              {/* Left Column: Direct Contact Info */}
              <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Get In Touch</span>
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
                          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="practice-name">
                            Your Name <span className="text-primary font-bold">*</span>
                          </label>
                          <input
                            id="practice-name"
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
                          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="practice-email">
                            Your Email <span className="text-primary font-bold">*</span>
                          </label>
                          <input
                            id="practice-email"
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
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="practice-phone">
                          Phone Number <span className="font-normal text-on-surface-variant/60 lowercase tracking-normal">(optional)</span>
                        </label>
                        <input
                          id="practice-phone"
                          type="tel"
                          placeholder="e.g. (510) 843-5683"
                          {...register('phone')}
                          className="w-full bg-white text-on-surface placeholder:text-outline/70 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 shadow-xs focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="practice-message">
                          Your Message <span className="font-normal text-on-surface-variant/60 lowercase tracking-normal">(optional)</span>
                        </label>
                        <textarea
                          id="practice-message"
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
