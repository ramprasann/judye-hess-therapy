import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CONTACT_INFO } from '@/data/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  BookOpen, Download, ExternalLink, Newspaper, 
  Radio, Mic, Sparkles, CheckCircle2, Phone, Smartphone, 
  Mail, Lock, Award, CheckCircle
} from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export const Publications: React.FC = () => {
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
    console.log('Publications Consultation Request:', data);
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
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest animate-fade-in w-fit">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span>Scholarship & Media Contributions</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
              Publications & Media Contributions
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed animate-fade-in-up delay-100">
              Dr. Judye Hess has contributed over four decades of clinical research, published books, and thought leadership in family systems, experiential couples therapy, and transpersonal group processes. Her pioneering inquiry into “Dual Dwelling Duos” (living apart together) has captured national attention across print, radio, and broadcast journalism.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 animate-fade-in-up delay-200">
              <span className="font-sans text-xs text-on-surface-variant font-medium">Core Contributions:</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                Core Focused Family Therapy
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                Dual Dwelling Duos (LAT)
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                Intimacy & Autonomy
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                Transpersonal Group Dynamics
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs">
                Broadcast Psychology
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book Showcase */}
      <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-card border border-outline-variant/40 card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* 3D Elevated Book Cover */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
                  <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-300 pointer-events-none" />
                  
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-outline-variant/40 bg-surface-container-low">
                    <img
                      src="/images/books/core-focused-family-therapy.jpg"
                      alt="Core Focused Family Therapy Book Cover"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />
                  </div>

                  <div className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-outline-variant/40 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="font-sans text-xs font-semibold text-on-surface">Idyll Arbor Press</span>
                  </div>
                </div>
              </div>

              {/* Book Details */}
              <div className="lg:col-span-7 flex flex-col gap-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest w-fit">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Authored Clinical Work • 2008</span>
                </div>

                <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface leading-tight">
                  Core Focused Family Therapy: Moving from Chaos to Clarity
                </h2>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-on-surface-variant font-medium">
                  <span className="text-primary font-semibold">Judye Hess, Ph.D. & Ross Cohen, LPC</span>
                  <span>•</span>
                  <span>Foreword by Virginia Satir Institute Colleagues</span>
                </div>

                <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                  Core Focused Family Therapy is a unique approach designed for students and practitioners who favor a humanistic, experiential approach to working with families but lack practical step-by-step guidance. The book provides clear clinical roadmaps to make the paradigm shift from individual symptoms to systemic family healing.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-on-surface-variant">Step-by-step systemic intervention framework</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-on-surface-variant">Untangling multi-generational communication knots</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-on-surface-variant">Practical case vignettes and session transcripts</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-on-surface-variant">Adopted by graduate clinical psychology programs</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.amazon.com/Core-Focused-Family-Therapy-Clarity/dp/1882883705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white font-sans text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:bg-primary/90 btn-hover cursor-pointer"
                  >
                    <span>Order on Amazon</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="#papers"
                    className="inline-flex items-center gap-2 bg-white text-on-surface font-sans text-sm font-semibold px-6 py-3 rounded-full border border-outline-variant/60 shadow-xs hover:bg-surface-container-low btn-hover"
                  >
                    <span>Explore Scholarly Papers</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarly Papers & PDF Downloads */}
      <section className="w-full bg-surface py-14 sm:py-20 text-left border-b border-outline-variant/30" id="papers">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-8">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest w-fit">
              <Download className="w-3.5 h-3.5" />
              <span>Authored Research</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
              Scholarly Papers & Clinical Monographs
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              Dr. Hess's published papers examining alternative relationship configurations, therapist sensitivity training, and interpersonal dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Paper 1: Dual Dwelling Duos */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  Alternative Family Styles • 2004
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface leading-snug">
                  Dual Dwelling Duos: An Alternative for Long-Term Relationship
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Judye Hess, Ph.D. & Padma Catell, Ph.D. Investigating the psychological viability, relational dynamics, and intimacy patterns of committed couples who choose separate households.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30">
                <a
                  href="/publications/Duos-Hess.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full PDF (284 KB)</span>
                </a>
              </div>
            </div>

            {/* Paper 2: Speaking from the Heart */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  Systemic Therapies • 2008
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface leading-snug">
                  Speaking from the Heart: “T” Groups as a Tool for Training Therapists
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Judye Hess, Ph.D. Clinical monograph examining experiential sensitivity training and transpersonal group processes in developing authentic relational presence in psychotherapists.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30">
                <a
                  href="/publications/SpeakingfromtheHeart.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full PDF (117 KB)</span>
                </a>
              </div>
            </div>

            {/* Paper 3: Closeness and Distance */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  The California Psychologist • 2004
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface leading-snug">
                  Closeness and Distance in Intimate Relationships
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Judye Hess, Ph.D. In-depth clinical exploration of healthy autonomy, attachment cycles, and navigating personal boundaries within couple systems.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30">
                <span className="text-xs text-on-surface-variant font-medium italic">
                  Archived Monograph & Clinical Reference
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cited Publications & Press Features */}
      <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-8">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest w-fit">
              <Newspaper className="w-3.5 h-3.5" />
              <span>National Press Coverage</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
              Cited Publications & Media Features
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              Dr. Hess's research and clinical expertise on "Living Apart Together" (LAT) highlighted in leading national publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Elle */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Newspaper className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  Elle Magazine • March 2012
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface leading-snug">
                  Divide and Conquer: Married but Separate
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Feature story profiling couples who maintain separate residences, citing Dr. Judye Hess's research and clinical insights on marital autonomy.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30">
                <a
                  href="http://www.elle.com/life-love/sex-relationships/divide-conquer-married-but-separate-644331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Read on Elle.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* NYT */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Newspaper className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  The New York Times • May 2006
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface leading-snug">
                  Home Alone Together
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  House & Home Section feature citing Dr. Judye Hess's clinical research on couples who remain deeply committed while residing in separate domestic spaces.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30">
                <a
                  href="http://www.nytimes.com/2006/05/04/garden/04lat.html?pagewanted=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Read in The New York Times</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* SF Chronicle */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Newspaper className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  San Francisco Chronicle
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-on-surface leading-snug">
                  Achieving Domestic Harmony
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Bay Area lifestyle feature examining domestic harmony, relationship longevity, and LAT configurations with commentary by Dr. Hess.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30">
                <a
                  href="http://www.sfgate.com/default/article/Achieving-domestic-harmony-in-separate-living-2517232.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Read on SFGate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radio & Broadcast Interviews */}
      <section className="w-full bg-surface py-14 sm:py-20 text-left border-b border-outline-variant/30">
        <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-8">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest w-fit">
              <Radio className="w-3.5 h-3.5" />
              <span>Broadcast Media</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
              Broadcast Interviews & Academic Roles
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              Dr. Hess sharing clinical wisdom on radio broadcasts, podcasts, and through decades of graduate faculty leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-on-surface">Mind-Body Radio (2020)</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Featured broadcast interview with Dr. Judye Hess covering relationship dynamics, family therapy, and transformational connection.
                </p>
              </div>
              <span className="text-xs text-primary font-semibold">Featured Interview Guest</span>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Mic className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-on-surface">KGO-AM & KGGV Radio</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Guest therapist on "Ask the Shrinks" discussing Dual Dwelling Duos and modern committed relationships.
                </p>
              </div>
              <a
                href="https://youtu.be/--lx9id8BZ4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <span>Listen to Broadcast</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-on-surface">CIIS Graduate Faculty</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Over 30 years instructing graduate clinical psychology cohorts in couples and family dynamics at CIIS in San Francisco.
                </p>
              </div>
              <a
                href="https://www.ciis.edu/academics/faculty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <span>Faculty Directory</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
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
                      placeholder="Share a brief note about what brings you to therapy or any questions regarding publications..."
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
