import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CONTACT_INFO } from '@/data/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Users, HelpCircle, Shield, CheckCircle2, Phone, 
  Smartphone, Mail, Lock, CheckCircle, ShieldCheck, 
  Sparkles
} from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const GroupTherapy: React.FC = () => {
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
    console.log('Group Therapy Consultation Request:', data);
    setIsSubmitting(false);
    setFormSubmitted(true);
    reset();
  };

  const guidingQuestions = [
    "What do I do that creates distance?",
    "How could I bring others closer?",
    "How can I have more satisfying relationships with friends, family, and intimate partners?"
  ];

  return (
    <PageLayout>
      {/* Editorial Hero Header */}
      <section className="relative overflow-hidden bg-surface py-14 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 relative z-10">
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest animate-fade-in w-fit">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span>Interpersonal Growth Laboratory</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
              Group Therapy
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed animate-fade-in-up delay-100">
              Safe, supportive Interpersonal Therapy Groups facilitated in Berkeley and via statewide California telehealth for over 30 years. Discover how you show up in relationships in real time.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 animate-fade-in-up delay-200">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                6 to 8 Participants
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                Here-and-Now Feedback
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                NCGPS Past Board Member
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Guiding Questions */}
      <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Guiding Questions Box */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest w-fit">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Core Relational Inquiries</span>
                </div>
                <div className="space-y-3 pt-1">
                  {guidingQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <Sparkles className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <p className="font-serif text-lg sm:text-xl italic text-on-surface font-normal">
                        “{q}”
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Narrative Content */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover space-y-5">
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-on-surface">
                  Overcoming the Habit of Hiding Ourselves
                </h2>
                <div className="space-y-4 font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    Many of us learn to <strong className="text-on-surface font-semibold">keep certain parts of ourselves hidden</strong>: our anger, our love, our jealousy, our fears, or our longings. When we hide these parts, we end up feeling lonely, misunderstood, and distant from others.
                  </p>
                  <p>
                    Being in a group and getting feedback about how we come across to others, gives us an opportunity to discover what we are doing that gets in the way of having the kind of relationships we want.
                  </p>
                  <p>
                    In the safe and supportive <strong className="text-on-surface font-semibold">Interpersonal Therapy Groups</strong>, which I have facilitated for the last 30 years in Berkeley, we work in the “here-and-now” to help you express yourself more authentically, listen deeply to others, and experience the transformative power of being accepted just as you are.
                  </p>
                </div>
              </div>

              {/* Deep Green Holding Environment Block */}
              <div className="bg-primary text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-sans text-xs font-semibold uppercase tracking-widest w-fit">
                  <Shield className="w-3.5 h-3.5" />
                  <span>The Here-And-Now Laboratory</span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  Compassionate Direct Feedback
                </h3>
                <p className="font-sans text-base text-white/90 leading-relaxed">
                  Unlike conventional social interactions, an interpersonal therapy group allows members to share honest impressions in real time without judgment. You learn how your communication patterns affect others, and you get to practice new ways of showing up with safety and confidence.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-card border border-outline-variant/40 flex flex-col gap-4">
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md border border-outline-variant/30 bg-surface-container-low">
                  <img
                    src="/images/therapist/judye-hess-hero.jpg"
                    alt="Judye Hess, Ph.D. - Group Facilitator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                    Facilitator Background
                  </span>
                  <h3 className="font-serif font-bold text-xl text-on-surface">Judye Hess, Ph.D.</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    30+ years facilitating weekly interpersonal process groups. Past Board Member of the Northern California Group Psychotherapy Society (NCGPS).
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-card border border-outline-variant/40 space-y-3 text-left">
                <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block">
                  Group Format & Logistics
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Group Size:</strong> 6 to 8 participants.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Meeting Time:</strong> Weekly 90-minute evening sessions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Commitment:</strong> Minimum 6-month initial participation encouraged.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Intake:</strong> Individual pre-group interview required to ensure fit.</span>
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
                  Interested in joining an interpersonal therapy group? Reach out to schedule an initial consultation and discuss current openings.
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
                      placeholder="Share what interests you about joining an interpersonal process group..."
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
                        <span>Thank you! Your inquiry has been sent directly to Dr. Hess.</span>
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
