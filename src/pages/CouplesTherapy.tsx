import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CONTACT_INFO } from '@/data/navigation';
import { TESTIMONIALS } from '@/data/testimonials';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Heart, CheckCircle2, Video, Star, ShieldCheck, 
  Compass, Phone, Smartphone, Mail, Lock, CheckCircle
} from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const CouplesTherapy: React.FC = () => {
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
    console.log('Couples Therapy Consultation Request:', data);
    setIsSubmitting(false);
    setFormSubmitted(true);
    reset();
  };

  const challenges = [
    "Communication breakdowns • Repeating destructive loops and misunderstandings",
    "Intimacy and emotional distance struggles • Pursuer-distancer patterns",
    "Infidelity, betrayal, and rebuilding broken trust",
    "Parenting friction, blended family stresses, and life transitions",
    "Negotiating differing needs for autonomy versus closeness",
    "Managing conflict constructively without contempt, defensiveness, or stonewalling",
    "Rekindling affection, playfulness, and shared purpose in long-term relationships"
  ];

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
                <Heart className="w-3.5 h-3.5 text-primary" />
                <span>Relationship Therapy</span>
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
                Couples Therapy
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-primary font-normal animate-fade-in-up delay-100">
                How do I know if I am with the right person?
              </p>

              <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed animate-fade-in-up delay-150">
                Couples Therapy in my South Berkeley office, or via confidential telehealth all over the state of California.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 animate-fade-in-up delay-200">
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                  Berkeley Office
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                  California Statewide Telehealth
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                  Systems-Based Approach
                </span>
              </div>
            </div>

            {/* Right Column: Office Photo & Badge */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="relative h-80 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-outline-variant/40 bg-surface-container-low">
                  <img
                    src="/images/therapist/judye-hess-about.jpg"
                    alt="Dr. Judye Hess - Couples Therapy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-2 sm:left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md border border-outline-variant/40 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-sans text-[11px] uppercase font-bold text-primary tracking-wider">In-Person & Virtual</p>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-on-surface">East Bay & Statewide California</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Narrative & Modality Breakdown */}
      <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-10">
          
          {/* Section: Systems-Based Approach */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest w-fit">
              <Compass className="w-3.5 h-3.5" />
              <span>Clinical Approach</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
              A Systems-Based Approach to Couples Therapy
            </h2>
            <div className="space-y-4 font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
              <p>
                Difficult times in intimate relationships can often be gifts in that they open the door to a deeper connection with ourselves and with our partners. While our wounds and vulnerabilities are shaped by our earliest relationships with our caretakers, our current relationships offer the primary arena where these wounds can be brought to light, worked through, and transformed.
              </p>
              <p>
                When you come to see me I try to create a safe atmosphere, in which each of you can discover what you are really feeling and wanting from your partner, and learn to communicate this in a direct, clear, and compassionate way.
              </p>
            </div>
          </div>

          {/* Section: 7 Common Relationship Challenges */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover space-y-6">
            <div className="space-y-1">
              <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider block">
                Clinical Experience
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-on-surface">
                Relationship Challenges Couples Often Bring to Therapy
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              {challenges.map((c, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-on-surface font-medium leading-relaxed">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborative & Interactive Experience */}
          <div className="bg-primary text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-sans text-xs font-semibold uppercase tracking-widest w-fit">
              <Compass className="w-3.5 h-3.5" />
              <span>In-Session Dynamic</span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              A Collaborative and Interactive Experience
            </h3>
            <p className="font-sans text-base text-white/90 leading-relaxed">
              Couples therapy with me is not a passive process. I am an active, engaged participant in the room or on screen, helping you catch negative interaction cycles as they occur in real time, unpack the vulnerable emotions beneath anger or withdrawal, and practice speaking from your heart.
            </p>
          </div>

          {/* Teletherapy & Getting Started 2-Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover space-y-3">
              <h3 className="font-serif font-bold text-xl text-on-surface">Teletherapy Options for California Couples</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Whether you live in Berkeley, Oakland, San Francisco, Los Angeles, San Diego, or rural Northern California, secure video teletherapy allows partners to engage in deep relational work from the comfort of their home.
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover space-y-3">
              <h3 className="font-serif font-bold text-xl text-on-surface">Getting Started</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                The first step is a complimentary phone consultation where we can discuss what you and your partner are experiencing, answer logistical questions, and confirm scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Google Reviews Section */}
      <section className="w-full bg-surface py-14 sm:py-20 text-left border-b border-outline-variant/30">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest w-fit mb-2">
                <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                <span>Client & Colleague Reflections</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
                Trusted by Couples & Families
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-outline-variant/40 shadow-xs text-xs font-medium text-on-surface-variant w-fit">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Verified Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="font-sans text-sm text-on-surface-variant italic leading-relaxed whitespace-pre-line">
                    "{t.content}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/30">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-outline-variant/40" />
                  <div>
                    <span className="font-sans text-sm font-bold text-on-surface block">{t.name}</span>
                    <span className="text-xs text-on-surface-variant">{t.role || 'Verified Google Review'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harmonized Trustworthy Consultation Section */}
      <section className="w-full bg-surface-container py-14 sm:py-20 text-left" id="consultation">
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
                  Reach out to schedule a complimentary phone consultation for you and your partner.
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
                      placeholder="Share what brings you and your partner to therapy..."
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
