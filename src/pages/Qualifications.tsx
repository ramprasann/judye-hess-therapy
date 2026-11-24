import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CONTACT_INFO } from '@/data/navigation';
import { TESTIMONIALS } from '@/data/testimonials';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Award,
  ShieldCheck,
  Check,
  BookOpen,
  Users,
  Sparkles,
  GraduationCap,
  Compass,
  Heart,
  Quote,
  Star,
  Phone,
  Smartphone,
  Mail,
  Lock,
  MessageCircle
} from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const Qualifications: React.FC = () => {
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
    console.log('Qualifications Consultation Request:', data);
    setIsSubmitting(false);
    setFormSubmitted(true);
    reset();
  };

  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        {/* 1. Page Header / Hero */}
        <section className="relative w-full bg-surface-container-low overflow-hidden py-16 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 relative z-10">
            <div className="max-w-4xl flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start animate-fade-in">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Credentials &amp; Professional Background</span>
              </div>
              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
                My Qualifications
              </h1>
              <p className="font-sans text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed animate-fade-in-up delay-100 max-w-3xl">
                Over 40 years of clinical practice, university professorship, and specialized training in interpersonal communication.
              </p>
            </div>

            {/* Core Narrative Banner & Certification */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Interpersonal Communication Specialty</span>
                  </div>
                  <p className="font-serif text-xl sm:text-2xl text-on-surface italic font-normal leading-snug">
                    “My specialty is interpersonal communication, helping folks to talk to each other in a more direct and honest way.”
                  </p>
                  <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
                    I have worked with couples, families, and groups for the last 40 years. I taught experiential classes in Family Dynamics, Couple Counseling, and Group Dynamics at the California Institute of Integral Studies in San Francisco since 1984, where I became a Professor Emerita in 2017.
                  </p>
                </div>

                {/* State License Certification Card */}
                <div className="lg:col-span-4 bg-primary text-white rounded-2xl p-6 sm:p-7 shadow-card flex flex-col gap-3 text-left card-hover">
                  <span className="text-xs uppercase tracking-widest text-white/80 font-bold">
                    State Certification
                  </span>
                  <span className="font-serif text-3xl font-bold text-white tracking-wide">
                    PSY 7468
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed">
                    Licensed Clinical Psychologist by the California Board of Psychology (Licensed 1982).
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Active &amp; In Good Standing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Clinical Modalities & Scholarly Work Grid */}
        <section className="w-full bg-surface-container-lowest/60 py-16 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-8 sm:space-y-10">
            <div className="flex flex-col gap-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                <Compass className="w-3.5 h-3.5" />
                <span>Areas of Competency</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-snug">
                Clinical Modalities &amp; Scholarly Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {/* Card 1: Therapeutic Style */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-5 text-left">
                <div className="flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-on-surface">Therapeutic Style &amp; Modalities</h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    My therapy style is informed by Gestalt therapy, Systems theory, Psychodynamic therapy, my own personal meditation practice, and over four decades of deep clinical work with clients.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20">
                  <span className="font-sans text-xs text-primary font-bold">Experiential &amp; Depth-Oriented</span>
                </div>
              </div>

              {/* Card 2: Group Therapy & CGP */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-5 text-left">
                <div className="flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-on-surface">Group Therapy &amp; CGP Recognition</h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Active member and past board member of the Northern California Group Psychotherapy Society (NCGPS). Over 30 years leading continuous interpersonal therapy groups in Berkeley.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20">
                  <span className="font-sans text-xs text-primary font-bold">NCGPS Leadership</span>
                </div>
              </div>

              {/* Card 3: Family Therapy & Leadership */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-5 text-left">
                <div className="flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-on-surface">Family Therapy &amp; Leadership</h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Active member and former steering committee member of the Association for Family Therapy of Northern California (AFTNC). Author of <em className="font-serif">Core Focused Family Therapy</em>.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20">
                  <span className="font-sans text-xs text-primary font-bold">AFTNC Steering Committee</span>
                </div>
              </div>

              {/* Card 4: Couples Therapy */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-5 text-left">
                <div className="flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-on-surface">Couples Therapy &amp; Acclaim</h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Pioneer of research on Dual Dwelling Duos (LAT), featured across <em className="font-serif">The New York Times</em>, <em className="font-serif">Elle Magazine</em>, <em className="font-serif">San Francisco Chronicle</em>, and KGO-AM Radio.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20">
                  <span className="font-sans text-xs text-primary font-bold">Media &amp; Scholarly Impact</span>
                </div>
              </div>

              {/* Card 5: Education & Licensing */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-5 text-left">
                <div className="flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-on-surface">Education &amp; State Licensing</h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Ph.D. in Clinical Psychology from the University of Rhode Island. Continuous licensure by the California Board of Psychology (PSY 7468) since 1982.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20">
                  <span className="font-sans text-xs text-primary font-bold">URI Doctoral Graduate</span>
                </div>
              </div>

              {/* Card 6: CIIS Faculty Emerita */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-5 text-left">
                <div className="flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-on-surface">Professor Emerita</h3>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Over three decades training Masters and Doctoral clinicians at the California Institute of Integral Studies (CIIS). Honored with Emerita status in 2017.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20">
                  <span className="font-sans text-xs text-primary font-bold">CIIS 1984 – 2017</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Peer Endorsement Highlights */}
        <section className="w-full bg-surface py-16 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-8">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                <Award className="w-3.5 h-3.5" />
                <span>Peer Endorsement</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-snug">
                Client &amp; Colleague Endorsements
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {TESTIMONIALS.slice(1, 3).map((t) => (
                <div
                  key={t.id}
                  className="relative p-7 sm:p-8 rounded-3xl bg-white shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-5 text-left"
                >
                  <div className="absolute top-6 right-6 text-primary/10 pointer-events-none">
                    <Quote className="w-8 h-8 rotate-180" />
                  </div>
                  <div className="flex flex-col gap-3 relative">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="font-sans text-sm sm:text-base text-on-surface-variant italic leading-relaxed whitespace-pre-line">
                      "{t.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/20">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-outline-variant/40" />
                    <div>
                      <span className="font-serif text-sm font-bold text-on-surface block">{t.name}</span>
                      <span className="font-sans text-xs text-on-surface-variant">{t.role ? `${t.role} • Consultation Partner` : 'Verified Google Review'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Harmonized Free Consultation Form Section */}
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
                  Reach out to schedule a complimentary phone consultation to discuss your situation.
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
                          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="qual-name">
                            Your Name <span className="text-primary font-bold">*</span>
                          </label>
                          <input
                            id="qual-name"
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
                          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="qual-email">
                            Your Email <span className="text-primary font-bold">*</span>
                          </label>
                          <input
                            id="qual-email"
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
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="qual-phone">
                          Phone Number <span className="font-normal text-on-surface-variant/60 lowercase tracking-normal">(optional)</span>
                        </label>
                        <input
                          id="qual-phone"
                          type="tel"
                          placeholder="e.g. (510) 843-5683"
                          {...register('phone')}
                          className="w-full bg-white text-on-surface placeholder:text-outline/70 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 shadow-xs focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="qual-message">
                          Your Message <span className="font-normal text-on-surface-variant/60 lowercase tracking-normal">(optional)</span>
                        </label>
                        <textarea
                          id="qual-message"
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
