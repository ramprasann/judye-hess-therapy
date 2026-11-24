import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CONTACT_INFO } from '@/data/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  GraduationCap,
  Award,
  BookOpen,
  Check,
  Lock,
  MessageCircle,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Video,
  Quote,
  Phone,
  Smartphone,
  Mail
} from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const AboutMe: React.FC = () => {
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
    console.log('About Me Consultation Request:', data);
    setIsSubmitting(false);
    setFormSubmitted(true);
    reset();
  };

  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        {/* 1. Editorial Hero Section */}
        <section className="relative w-full bg-surface-container-low overflow-hidden py-16 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 relative z-10">
            <div className="max-w-4xl flex flex-col gap-4 sm:gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start animate-fade-in">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Background &amp; Life's Work</span>
              </div>
              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
                About Me
              </h1>
              <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-on-surface-variant/90 leading-relaxed animate-fade-in-up delay-100 max-w-3xl">
                A lifelong journey in clinical psychology, family dynamics, and transformational therapy.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 animate-fade-in-up delay-200">
                <a
                  href="#consultation"
                  className="btn-hover inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 font-sans text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-sm"
                >
                  Request Consultation
                </a>
                <a
                  href="#milestones"
                  className="btn-hover inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-sans text-sm font-semibold px-6 py-3.5 rounded-full transition-all border border-outline-variant/30"
                >
                  Career Milestones
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Main Narrative & Sticky Sidebar */}
        <section className="w-full bg-surface-container-lowest/60 py-16 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
              
              {/* Left Column: Narrative Cards */}
              <article className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8 sm:gap-10">
                
                {/* Early Life & Family Legacy */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Origins • New York City</span>
                  </div>
                  <div className="flex flex-col gap-4 text-on-surface font-sans text-base sm:text-lg leading-relaxed">
                    <p>
                      <strong className="font-serif font-bold text-xl sm:text-2xl text-on-surface block mb-2 leading-snug">
                        I have been interested in psychology since I was about 10 years old.
                      </strong>
                      My dad was a psychoanalyst in New York City and his office was in our house. I saw his patients every day and was curious about what he did with them once they went into the office. It seemed like a mystery that people were being helped just by lying on a couch and talking.
                    </p>
                    <p>
                      <strong className="font-serif font-bold text-xl sm:text-2xl text-on-surface block mb-2 leading-snug">
                        As we grew up, my sister and I both took a strong interest in psychology
                      </strong>
                      and have both become clinical psychologists. So you might say, it was “all in the family”. However, the idea of talking to someone one-on-one about their relationships with people who weren't in the room, struck me as kind of strange.
                    </p>
                  </div>
                </div>

                {/* Graduate School & Family Therapy Discovery */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Graduate Training • University of Rhode Island</span>
                  </div>
                  <div className="flex flex-col gap-4 text-on-surface font-sans text-base sm:text-lg leading-relaxed">
                    <p>
                      Once in graduate school at the University of Rhode Island back in the early '70s, I learned about someone named Virginia Satir, who was a pioneer in Family Therapy. She wrote a book called <em className="font-serif font-semibold">Peoplemaking</em>, in which she talked about how our families shape who we are and that when there is a “problem” in a family, it is a problem in the whole family system, not just in one person.
                    </p>
                    <p>
                      This made a lot of sense to me, and I began to learn more about Family Therapy. I became passionate about working with the whole family, or at least two or more members of a family, rather than just one person.
                    </p>
                  </div>
                </div>

                {/* Teaching Career & Academic Leadership */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Academic Faculty • CIIS (1984 – Present)</span>
                  </div>
                  <div className="flex flex-col gap-4 text-on-surface font-sans text-base sm:text-lg leading-relaxed">
                    <p>
                      In 1984, I began teaching Family Dynamics, Couples Therapy, and Group Dynamics at the California Institute of Integral Studies (CIIS) in San Francisco. I taught there for over 30 years and have trained hundreds of students who are now therapists working all over the world.
                    </p>
                    <p>
                      I loved teaching and found that it helped me to continually refine my own ideas about therapy and to stay current with the latest developments in the field. I also wrote a book called <em className="font-serif font-semibold">Core Focused Family Therapy: Moving from Chaos to Clarity</em>, which was published in 2008 and is used in graduate training programs across the country.
                    </p>
                  </div>
                </div>

                {/* Philosophy Quote Box */}
                <div className="bg-primary text-white rounded-3xl p-7 sm:p-10 shadow-card relative overflow-hidden card-hover text-left">
                  <div className="absolute top-4 right-4 text-white/10 pointer-events-none">
                    <Quote className="w-20 h-20 rotate-180" />
                  </div>
                  <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
                    <blockquote className="font-serif text-xl sm:text-2xl leading-relaxed text-white italic">
                      “Healing in relationship is the most powerful kind of healing there is. When we can be seen, heard, and held in our full humanity, transformation happens naturally.”
                    </blockquote>
                    <div className="flex items-center gap-2 pt-2 border-t border-white/20 font-sans text-xs sm:text-sm text-white/80">
                      <span className="w-6 h-px bg-white/40" />
                      <span>Judye Hess, Ph.D. • Professor Emerita</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Right Column: Sticky Sidebar Cards */}
              <aside className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
                
                {/* Portrait & Profile Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-4 text-left">
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container shadow-sm border border-outline-variant/30">
                    <img
                      src="/images/therapist/judye-hess-about.jpg"
                      alt="Dr. Judye Hess - Clinical Psychologist"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <h3 className="font-serif text-xl font-bold text-on-surface">Judye Hess, Ph.D.</h3>
                    <span className="font-sans text-xs text-primary uppercase tracking-wider font-bold">
                      Clinical Psychologist • Lic. PSY 7468
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant pt-1 leading-relaxed">
                      California Licensed Psychologist since 1982. Professor Emerita at the California Institute of Integral Studies (CIIS).
                    </p>
                  </div>
                </div>

                {/* Featured Book Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-4 text-left">
                  <span className="font-sans text-xs uppercase tracking-wider text-primary font-bold">
                    Authored Book
                  </span>
                  <div className="flex gap-4 items-center">
                    <div className="w-20 shrink-0 rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 bg-surface-container">
                      <img
                        src="/images/books/core-focused-family-therapy.jpg"
                        alt="Core Focused Family Therapy book cover"
                        className="w-full aspect-[3/4] object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <h4 className="font-serif text-base font-bold text-on-surface leading-snug">
                        Core Focused Family Therapy
                      </h4>
                      <span className="font-sans text-xs text-on-surface-variant">
                        Moving From Chaos to Clarity
                      </span>
                      <a
                        href="https://www.amazon.com/Core-Focused-Family-Therapy-Clarity/dp/1882883705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mt-1"
                      >
                        <span>Amazon Page</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Credentials Summary Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-3.5 text-left">
                  <span className="font-sans text-xs uppercase tracking-wider text-primary font-bold">
                    Credentials &amp; Education
                  </span>
                  <div className="space-y-3 font-sans text-xs sm:text-sm text-on-surface-variant">
                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Ph.D. in Clinical Psychology, University of Rhode Island (1970s)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>California Clinical Psychologist License PSY 7468 (1982)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Faculty Emerita, California Institute of Integral Studies (CIIS)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Video className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Telehealth across California &amp; In-Person Consultation</span>
                    </div>
                  </div>
                </div>

              </aside>

            </div>
          </div>
        </section>

        {/* 3. Career Milestones Section */}
        <section className="w-full bg-surface py-16 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30 scroll-mt-24" id="milestones">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-8">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest self-start">
                <Award className="w-3.5 h-3.5" />
                <span>Chronology &amp; Leadership</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-snug">
                Career Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-white shadow-card border border-outline-variant/40 card-hover flex flex-col gap-2.5 text-left">
                <span className="font-serif text-2xl text-primary font-bold">Early 1970s</span>
                <h3 className="font-serif text-lg text-on-surface font-bold">Doctoral Training</h3>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Graduate clinical psychology training at the University of Rhode Island; early engagement with Virginia Satir and family systems.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white shadow-card border border-outline-variant/40 card-hover flex flex-col gap-2.5 text-left">
                <span className="font-serif text-2xl text-primary font-bold">1982</span>
                <h3 className="font-serif text-lg text-on-surface font-bold">California Licensure</h3>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Granted California Clinical Psychologist License PSY 7468; established private relationship therapy practice in Berkeley.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white shadow-card border border-outline-variant/40 card-hover flex flex-col gap-2.5 text-left">
                <span className="font-serif text-2xl text-primary font-bold">1984</span>
                <h3 className="font-serif text-lg text-on-surface font-bold">CIIS Appointment</h3>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Appointed core faculty at CIIS in San Francisco, teaching Family Dynamics, Couples Therapy, and Group Dynamics for 30+ years.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white shadow-card border border-outline-variant/40 card-hover flex flex-col gap-2.5 text-left">
                <span className="font-serif text-2xl text-primary font-bold">2008 – Present</span>
                <h3 className="font-serif text-lg text-on-surface font-bold">Author &amp; Consultant</h3>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Published <em className="font-serif">Core Focused Family Therapy</em>; active consultant for licensed therapists and nationwide couples telehealth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Consultation Form Section (Harmonized) */}
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
                  I would love to speak with you regarding your situation and discuss how relationship therapy can support you.
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
                        Your message has been received. Dr. Judye Hess will review your note and contact you promptly via phone or email.
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
                          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="about-name">
                            Your Name <span className="text-primary font-bold">*</span>
                          </label>
                          <input
                            id="about-name"
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
                          <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="about-email">
                            Your Email <span className="text-primary font-bold">*</span>
                          </label>
                          <input
                            id="about-email"
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
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="about-phone">
                          Phone Number <span className="font-normal text-on-surface-variant/60 lowercase tracking-normal">(optional)</span>
                        </label>
                        <input
                          id="about-phone"
                          type="tel"
                          placeholder="e.g. (510) 843-5683"
                          {...register('phone')}
                          className="w-full bg-white text-on-surface placeholder:text-outline/70 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 shadow-xs focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-on-surface-variant/90 mb-1.5" htmlFor="about-message">
                          Your Message <span className="font-normal text-on-surface-variant/60 lowercase tracking-normal">(optional)</span>
                        </label>
                        <textarea
                          id="about-message"
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
