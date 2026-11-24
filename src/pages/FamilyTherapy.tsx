import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CONTACT_INFO } from '@/data/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Users2, HeartHandshake, ShieldCheck, CheckCircle2, 
  BookOpen, ExternalLink, Sparkles, Phone, Smartphone, 
  Mail, Lock, CheckCircle
} from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const FamilyTherapy: React.FC = () => {
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
    console.log('Family Therapy Consultation Request:', data);
    setIsSubmitting(false);
    setFormSubmitted(true);
    reset();
  };

  return (
    <PageLayout>
      {/* Editorial Hero Header */}
      <section className="relative overflow-hidden bg-surface py-14 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest animate-fade-in w-fit">
                <Users2 className="w-3.5 h-3.5 text-primary" />
                <span>Intergenerational Family Systems</span>
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
                Intergenerational Family Therapy
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-primary font-normal animate-fade-in-up delay-100">
                “Adult Children” and their Families
              </p>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card border-l-4 border-l-primary border border-outline-variant/40 animate-fade-in-up delay-200">
                <p className="font-serif text-lg sm:text-xl italic text-on-surface leading-relaxed">
                  “I’m an adult now. Why would I need to go to family therapy with my parents?”
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 animate-fade-in-up delay-300">
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                  Adult Children & Parents
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                  Berkeley Office & Zoom Statewide
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                  30+ Years CIIS Faculty
                </span>
              </div>
            </div>

            {/* Right Column: Practitioner Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="relative h-80 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-outline-variant/40 bg-surface-container-low">
                  <img
                    src="/images/therapist/judye-hess-hero.jpg"
                    alt="Dr. Judye Hess - Intergenerational Family Therapy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-2 sm:left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-outline-variant/40 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-sans text-xs sm:text-sm font-semibold text-on-surface">
                    30+ Years Teaching & Clinical Practice
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Narrative & Insights */}
      <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover space-y-5">
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-on-surface">
                  Untangling Wounds Across Generations
                </h2>
                <div className="font-sans text-base text-on-surface-variant leading-relaxed space-y-4">
                  <p>
                    Despite all the <strong className="text-on-surface font-semibold">good intentions</strong> that most parents have in raising us children, many of us still feel deeply wounded and unsupported in our families of origin.
                  </p>
                  <p>
                    We carry our pain in the form of shame, low self-esteem, depression, anxiety, resentment, or just a feeling of being unloved. These feelings often stay with us well into adulthood, affecting our relationships with partners, our children, our friends, and our work life.
                  </p>
                  <p>
                    In my 30+ years of teaching Family Dynamics and Therapy at the California Institute of Integral Studies (CIIS), I have seen time and again that when adult children and their parents are willing to come together in a safe and supportive environment, profound healing can occur.
                  </p>
                </div>
              </div>

              {/* Deep Green Safe Container Card */}
              <div className="bg-primary text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-sans text-xs font-semibold uppercase tracking-widest w-fit">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Healing Systemic Cleavages</span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  Creating a Safe Container for Adult Families
                </h3>
                <p className="font-sans text-base text-white/90 leading-relaxed">
                  Family therapy with adult children is not about placing blame. It is about understanding the intergenerational patterns that were passed down, giving voice to what could not be said in childhood, and creating a new adult-to-adult relationship based on mutual respect, empathy, and healthy boundaries.
                </p>
              </div>

              {/* Transforming Roles */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover space-y-4">
                <h3 className="font-serif font-bold text-2xl text-on-surface">
                  Transforming Roles & Navigating Transitions
                </h3>
                <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                  As parents age and adult children build their own independent lives, old family scripts can resurface in painful ways. Family therapy provides an objective, compassionate setting to renegotiate these roles, address unresolved childhood grievances, and build deeper, more authentic family solidarity.
                </p>
              </div>
            </div>

            {/* Right Sidebar: Authored Text & Session Details */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-card border border-outline-variant/40 flex flex-col gap-4">
                <div className="w-full aspect-[3/4] max-w-[200px] mx-auto rounded-xl overflow-hidden shadow-md border border-outline-variant/30">
                  <img
                    src="/images/books/core-focused-family-therapy.jpg"
                    alt="Core Focused Family Therapy book cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left space-y-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                    Authored Clinical Monograph
                  </span>
                  <h4 className="font-serif font-bold text-lg text-on-surface">
                    Core Focused Family Therapy
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    By Judye Hess, Ph.D. & Ross Cohen, LPC (Idyll Arbor - 2008). Practical guide for moving families from chaos to clarity.
                  </p>
                  <a
                    href="https://www.amazon.com/Core-Focused-Family-Therapy-Clarity/dp/1882883705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors pt-2"
                  >
                    <span>View on Amazon</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-card border border-outline-variant/40 space-y-3 text-left">
                <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block">
                  Session Details
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Who participates:</strong> Adult children, parents, siblings, or blended family members.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Location:</strong> Telehealth throughout California or Berkeley Office.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Duration:</strong> Typically 75- to 90-minute sessions structured around family availability.</span>
                  </li>
                </ul>
              </div>
            </aside>
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
                  Reach out to discuss your family dynamic and explore how intergenerational therapy can help heal long-standing fractures.
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
                      placeholder="Share what brings your family to therapy..."
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
