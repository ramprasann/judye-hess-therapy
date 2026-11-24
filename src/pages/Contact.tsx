import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CONTACT_INFO } from '@/data/navigation';
import { TESTIMONIALS } from '@/data/testimonials';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Phone, Smartphone, Mail, MapPin, Video, Lock, 
  Clock, ShieldCheck, ChevronDown, CheckCircle, 
  CheckCircle2, Star, ExternalLink, AlertCircle, 
  Building2, Train, Car, Share2
} from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  emailAddr: z.string().email('Please enter a valid email address'),
  phoneNum: z.string().min(7, 'Please enter a valid phone number'),
  modality: z.string().default('couples'),
  setting: z.string().default('in-person'),
  time: z.string().default('morning'),
  clientMessage: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, 'You must acknowledge the privacy statement'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      emailAddr: '',
      phoneNum: '',
      modality: 'couples',
      setting: 'in-person',
      time: 'morning',
      clientMessage: '',
      privacyConsent: false,
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Consultation Request Submitted:', data);
    setFormSubmitted(true);
    reset();
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        {/* Editorial Hero Header */}
        <section className="relative overflow-hidden bg-surface py-14 sm:py-20 lg:py-24 text-left border-b border-outline-variant/30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 relative z-10">
            <div className="flex flex-col gap-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest animate-fade-in w-fit">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Practice Locations & Direct Inquiries</span>
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight animate-fade-in-up">
                Contact & Location
              </h1>

              <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed animate-fade-in-up delay-100">
                Whether you are seeking couples counseling, family therapy, an interpersonal growth group, or individual psychotherapy, I invite you to reach out. I offer in-person consultations at my South Berkeley office as well as confidential statewide teletherapy across California via Zoom.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 animate-fade-in-up delay-200">
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span>CA Licensed Psychologist #PSY 7468</span>
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>South Berkeley (Ashby BART)</span>
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-on-surface border border-outline-variant/50 shadow-xs flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-primary" />
                  <span>Statewide California Telehealth</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Offices & Direct Channels */}
        <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Office & Telehealth */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                {/* Berkeley Consulting Office */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                        In-Person Consultations
                      </span>
                      <h2 className="font-serif font-bold text-2xl sm:text-3xl text-on-surface">
                        Berkeley Consulting Office
                      </h2>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-sans text-base font-bold text-on-surface block">
                          2927A Shattuck Avenue
                        </span>
                        <span className="font-sans text-sm text-on-surface-variant">
                          Berkeley, CA 94705
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-medium text-on-surface border border-outline-variant/40 shadow-xs">
                        <Train className="w-3.5 h-3.5 text-primary" />
                        <span>BART Ashby Station (2 min walk)</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-medium text-on-surface border border-outline-variant/40 shadow-xs">
                        <Car className="w-3.5 h-3.5 text-primary" />
                        <span>Ample Street Parking</span>
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    Conveniently located in South Berkeley, just steps from the Ashby BART station (approx. 2 level blocks). Readily accessible from Oakland, Albany, El Cerrito, Emeryville, Kensington, San Francisco, and the wider East Bay corridor.
                  </p>

                  {/* Office Photo & Directions */}
                  <div className="space-y-3">
                    <div
                      className="w-full h-56 rounded-2xl overflow-hidden relative shadow-inner bg-cover bg-center"
                      style={{ backgroundImage: `url('/images/therapist/judye-hess-about.jpg')` }}
                    >
                      <div className="absolute inset-0 bg-primary/30 backdrop-blur-[1px]" />
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-outline-variant/40 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-sans text-sm font-bold text-on-surface block">2927A Shattuck Ave</span>
                          <span className="font-sans text-xs text-on-surface-variant">South Berkeley Office Suite</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://goo.gl/maps/fAfmtPC6ffGDuVJ36"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-primary font-sans text-xs sm:text-sm font-semibold border border-outline-variant/30"
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Open Google Maps for Directions & Transit Planning</span>
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Telehealth Statewide */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-outline-variant/40 card-hover space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                        California Statewide Telepractice
                      </span>
                      <h2 className="font-serif font-bold text-2xl sm:text-3xl text-on-surface">
                        Secure Telehealth via Zoom
                      </h2>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Video className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                    I conduct telehealth sessions securely on Zoom. Video therapy provides identical clinical depth, systems observation, and privacy from the comfort of your home or office anywhere in California.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <Lock className="w-4 h-4" />
                        <span>HIPAA Compliant</span>
                      </div>
                      <p className="font-sans text-xs text-on-surface-variant">
                        Encrypted high-definition video connections ensuring absolute confidentiality.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Statewide Reach</span>
                      </div>
                      <p className="font-sans text-xs text-on-surface-variant">
                        Authorized clinical practice across all 58 California counties.
                      </p>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-on-surface-variant bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/30">
                    <strong className="text-on-surface font-semibold">Licensure:</strong> Dr. Judye Hess is a Licensed Clinical Psychologist (#PSY 7468) under the California Board of Psychology.
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Channels, Hours & Crisis */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Direct Channels */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                      Direct Communications
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-on-surface">
                      Telephone & Email
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {/* Landline */}
                    <a
                      href={`tel:${CONTACT_INFO.landlineRaw}`}
                      className="group p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-3.5 border border-outline-variant/30"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-xs">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-sans text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                          {CONTACT_INFO.landline}
                        </span>
                        <span className="font-sans text-xs text-on-surface-variant">
                          Landline (Messages checked daily M–F)
                        </span>
                      </div>
                    </a>

                    {/* Cell */}
                    <a
                      href={`tel:${CONTACT_INFO.cellRaw}`}
                      className="group p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-3.5 border border-outline-variant/30"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-xs">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-sans text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                          {CONTACT_INFO.cell}
                        </span>
                        <span className="font-sans text-xs text-on-surface-variant">
                          Cellular (Direct calls & urgent scheduling)
                        </span>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="group p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-3.5 border border-outline-variant/30"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-xs">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-sans text-base font-bold text-on-surface group-hover:text-primary transition-colors block truncate">
                          {CONTACT_INFO.email}
                        </span>
                        <span className="font-sans text-xs text-on-surface-variant">
                          Client intake & general inquiries
                        </span>
                      </div>
                    </a>

                    {/* Alt Email */}
                    <a
                      href={`mailto:${CONTACT_INFO.altEmail}`}
                      className="group p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-3.5 border border-outline-variant/30"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-xs">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-sans text-base font-bold text-on-surface group-hover:text-primary transition-colors block truncate">
                          {CONTACT_INFO.altEmail}
                        </span>
                        <span className="font-sans text-xs text-on-surface-variant">
                          Direct clinical correspondence
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-serif font-bold text-xl text-on-surface">Weekly Office Hours</h3>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-surface-container-low">
                      <span className="font-semibold text-on-surface">Monday – Friday</span>
                      <span className="font-bold text-primary">9:00 AM – 6:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-surface-container-low">
                      <span className="font-semibold text-on-surface">Saturday</span>
                      <span className="text-on-surface-variant">By Appointment (Intensives)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-surface-container-low">
                      <span className="font-semibold text-on-surface">Sunday</span>
                      <span className="text-on-surface-variant/70">Closed</span>
                    </div>
                  </div>

                  {/* Facebook Link */}
                  <div className="pt-2 flex items-center justify-between border-t border-outline-variant/30">
                    <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                      <Share2 className="w-4 h-4 text-primary" />
                      <span>Join on Facebook</span>
                    </div>
                    <a
                      href="https://www.facebook.com/judyehess/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      facebook.com/judyehess
                    </a>
                  </div>

                  {/* Crisis Notice */}
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200/60 flex items-start gap-2.5 text-xs text-on-surface-variant">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong className="text-on-surface">Urgent Crisis:</strong> If you or someone you care about is experiencing an acute psychiatric emergency, please call <strong>988</strong> (Lifeline) or 911, or go to the nearest emergency room.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Interactive Consultation Intake Form */}
        <section className="w-full bg-surface py-14 sm:py-20 text-left border-b border-outline-variant/30" id="consultation-form">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="max-w-3xl mx-auto flex flex-col gap-2 text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest mx-auto w-fit">
                <Lock className="w-3.5 h-3.5" />
                <span>Confidential Practice Intake</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
                Schedule a Complimentary 15-Minute Consultation
              </h2>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                Please share a brief note about what brings you to therapy or any questions regarding session formats, fees, or availability. I personally review all submissions and respond promptly.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-card border border-outline-variant/40">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-on-surface">
                    Thank You for Reaching Out
                  </h3>
                  <p className="font-sans text-base text-on-surface-variant max-w-lg leading-relaxed">
                    Your note has been transmitted confidentially directly to Dr. Hess. You will receive a response or scheduling confirmation via phone or email within 24 to 48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-surface-container text-primary font-sans text-xs font-semibold hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="font-sans text-xs font-semibold text-on-surface" htmlFor="fullName">
                        Your Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        {...register('fullName')}
                        className={`w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                          errors.fullName ? 'border-red-500' : 'border-outline-variant/40'
                        }`}
                      />
                      {errors.fullName && <span className="text-xs text-red-500">{errors.fullName.message}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="font-sans text-xs font-semibold text-on-surface" htmlFor="emailAddr">
                        Email Address *
                      </label>
                      <input
                        id="emailAddr"
                        type="email"
                        placeholder="eleanor@example.com"
                        {...register('emailAddr')}
                        className={`w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                          errors.emailAddr ? 'border-red-500' : 'border-outline-variant/40'
                        }`}
                      />
                      {errors.emailAddr && <span className="text-xs text-red-500">{errors.emailAddr.message}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="font-sans text-xs font-semibold text-on-surface" htmlFor="phoneNum">
                        Phone Number *
                      </label>
                      <input
                        id="phoneNum"
                        type="tel"
                        placeholder="(510) 000-0000"
                        {...register('phoneNum')}
                        className={`w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                          errors.phoneNum ? 'border-red-500' : 'border-outline-variant/40'
                        }`}
                      />
                      {errors.phoneNum && <span className="text-xs text-red-500">{errors.phoneNum.message}</span>}
                    </div>

                    {/* Focus Modality */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="font-sans text-xs font-semibold text-on-surface" htmlFor="modality">
                        Area of Primary Focus
                      </label>
                      <select
                        id="modality"
                        {...register('modality')}
                        className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="couples">Couples Therapy & Premarital Counseling</option>
                        <option value="family">Family Therapy (Adult Children & Parents)</option>
                        <option value="group">Interpersonal Growth Group Therapy</option>
                        <option value="individual">Individual Relationship Psychotherapy</option>
                        <option value="telehealth">Telehealth / Remote Zoom Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Setting */}
                  <div className="flex flex-col gap-2 text-left pt-1">
                    <span className="font-sans text-xs font-semibold text-on-surface">Preferred Meeting Setting</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-outline-variant/30">
                        <input
                          type="radio"
                          value="in-person"
                          {...register('setting')}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="font-sans text-xs sm:text-sm text-on-surface font-medium">In-Person (Berkeley)</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-outline-variant/30">
                        <input
                          type="radio"
                          value="zoom"
                          {...register('setting')}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="font-sans text-xs sm:text-sm text-on-surface font-medium">Zoom (Statewide CA)</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-outline-variant/30">
                        <input
                          type="radio"
                          value="either"
                          {...register('setting')}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="font-sans text-xs sm:text-sm text-on-surface font-medium">Flexible / Either</span>
                      </label>
                    </div>
                  </div>

                  {/* Best Time to Reach You */}
                  <div className="flex flex-col gap-2 text-left pt-1">
                    <span className="font-sans text-xs font-semibold text-on-surface">Best Time to Contact You</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-outline-variant/30">
                        <input
                          type="radio"
                          value="morning"
                          {...register('time')}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="font-sans text-xs sm:text-sm text-on-surface font-medium">Mornings (9am – 12pm)</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-outline-variant/30">
                        <input
                          type="radio"
                          value="afternoon"
                          {...register('time')}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="font-sans text-xs sm:text-sm text-on-surface font-medium">Afternoons (12pm – 4pm)</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors border border-outline-variant/30">
                        <input
                          type="radio"
                          value="evening"
                          {...register('time')}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="font-sans text-xs sm:text-sm text-on-surface font-medium">Evenings (4pm – 6:30pm)</span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 text-left pt-1">
                    <label className="font-sans text-xs font-semibold text-on-surface" htmlFor="clientMessage">
                      Your Message (Optional)
                    </label>
                    <textarea
                      id="clientMessage"
                      rows={3}
                      placeholder="Briefly describe what challenges or goals you are hoping to explore together..."
                      {...register('clientMessage')}
                      className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
                    />
                  </div>

                  {/* Privacy Consent */}
                  <div className="flex items-start gap-2.5 text-left pt-1">
                    <input
                      id="privacyConsent"
                      type="checkbox"
                      {...register('privacyConsent')}
                      className="w-4 h-4 mt-0.5 accent-primary shrink-0 rounded"
                    />
                    <label className="font-sans text-xs text-on-surface-variant cursor-pointer leading-relaxed" htmlFor="privacyConsent">
                      I understand that this consultation inquiry is treated with strict clinical privacy standards. No therapist-client relationship is formally established until an initial agreement is executed.
                    </label>
                  </div>
                  {errors.privacyConsent && (
                    <span className="text-xs text-red-500 text-left">{errors.privacyConsent.message}</span>
                  )}

                  {/* Submit Button */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-sans text-xs text-on-surface-variant flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-primary" />
                      <span>Encrypted, confidential clinical transmission</span>
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-full shadow-sm hover:bg-primary/90 btn-hover cursor-pointer disabled:opacity-70 transition-all"
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'Send Consultation Request'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* What to Expect During Your Consultation */}
        <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="flex flex-col gap-2 mb-10 text-center max-w-2xl mx-auto">
              <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest block">
                The Intake Journey
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
                What to Expect During Your Consultation
              </h2>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                Reaching out for therapeutic guidance is a meaningful first step. Here is what you can anticipate from our initial conversation onward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-3 relative">
                <span className="font-serif text-5xl font-bold text-primary/15 leading-none absolute top-6 right-6">01</span>
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="font-serif font-bold text-xl text-on-surface pt-1">
                  Initial 15-Minute Conversation
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  A relaxed, zero-pressure phone dialogue to explore what you are currently facing, answer questions regarding my Core Focused Family Systems model, and confirm mutual fit.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-3 relative">
                <span className="font-serif text-5xl font-bold text-primary/15 leading-none absolute top-6 right-6">02</span>
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="font-serif font-bold text-xl text-on-surface pt-1">
                  Structuring Your Care
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Selecting between in-person appointments at my South Berkeley consulting office or Zoom telehealth sessions across California, and establishing a consistent meeting schedule.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card border border-outline-variant/40 card-hover flex flex-col gap-3 relative">
                <span className="font-serif text-5xl font-bold text-primary/15 leading-none absolute top-6 right-6">03</span>
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="font-serif font-bold text-xl text-on-surface pt-1">
                  Collaborative Beginning
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Establishing a safe, non-judgmental container from the very first session where underlying dynamics are gently illuminated and every participant feels witnessed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client & Colleague Testimonials */}
        <section className="w-full bg-surface py-14 sm:py-20 text-left border-b border-outline-variant/30">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                  Community Reflections
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
                  Client & Colleague Endorsements
                </h2>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-outline-variant/40 shadow-xs text-xs font-medium text-on-surface-variant w-fit">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Verified Google & Trustindex Reviews</span>
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

        {/* Interactive FAQ Accordion */}
        <section className="w-full bg-surface-container-low py-14 sm:py-20 text-left">
          <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
            <div className="max-w-3xl mx-auto flex flex-col gap-6">
              <div className="text-center space-y-2 mb-2">
                <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest block">
                  Common Inquiries
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface">
                  Frequently Asked Questions
                </h2>
                <p className="font-sans text-sm sm:text-base text-on-surface-variant">
                  Answers regarding session formats, geographic range, health insurance superbills, and practice policies.
                </p>
              </div>

              <div className="space-y-3">
                {/* FAQ 1 */}
                <div className="bg-white rounded-2xl shadow-card border border-outline-variant/40 overflow-hidden">
                  <button
                    type="button"
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-surface-container-low/50 transition-colors cursor-pointer"
                    onClick={() => toggleFaq('faq-1')}
                  >
                    <span className="font-serif font-bold text-lg text-on-surface">
                      How do Zoom telehealth sessions work?
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-200 shrink-0 ${
                        activeFaq === 'faq-1' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === 'faq-1' && (
                    <div className="px-5 sm:px-6 pb-6 font-sans text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4 animate-fade-in">
                      Sessions take place over an encrypted, HIPAA-compliant Zoom link provided prior to our scheduled time. You only need a private space, a reliable internet connection, and a computer or tablet. Telehealth enables identical interactive family and couples observations without travel time.
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-2xl shadow-card border border-outline-variant/40 overflow-hidden">
                  <button
                    type="button"
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-surface-container-low/50 transition-colors cursor-pointer"
                    onClick={() => toggleFaq('faq-2')}
                  >
                    <span className="font-serif font-bold text-lg text-on-surface">
                      What areas do you serve?
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-200 shrink-0 ${
                        activeFaq === 'faq-2' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === 'faq-2' && (
                    <div className="px-5 sm:px-6 pb-6 font-sans text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4 animate-fade-in">
                      For in-person sessions, my office is situated in South Berkeley at 2927A Shattuck Avenue, easily serving clients from Berkeley, Oakland, Albany, El Cerrito, Emeryville, Kensington, Piedmont, and San Francisco. For teletherapy, my license (#PSY 7468) permits care across the entirety of California.
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-2xl shadow-card border border-outline-variant/40 overflow-hidden">
                  <button
                    type="button"
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-surface-container-low/50 transition-colors cursor-pointer"
                    onClick={() => toggleFaq('faq-3')}
                  >
                    <span className="font-serif font-bold text-lg text-on-surface">
                      Do you take insurance?
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-200 shrink-0 ${
                        activeFaq === 'faq-3' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === 'faq-3' && (
                    <div className="px-5 sm:px-6 pb-6 font-sans text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4 animate-fade-in">
                      I am an out-of-network provider. I provide monthly itemized statements (“superbills”) containing standard clinical diagnostic and billing codes, which many clients submit to their PPO or flexible spending accounts (FSA/HSA) for partial or full reimbursement.
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-2xl shadow-card border border-outline-variant/40 overflow-hidden">
                  <button
                    type="button"
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-surface-container-low/50 transition-colors cursor-pointer"
                    onClick={() => toggleFaq('faq-4')}
                  >
                    <span className="font-serif font-bold text-lg text-on-surface">
                      What is your appointment cancellation policy?
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-200 shrink-0 ${
                        activeFaq === 'faq-4' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === 'faq-4' && (
                    <div className="px-5 sm:px-6 pb-6 font-sans text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4 animate-fade-in">
                      I request a minimum of 48 hours’ notice for any appointment cancellations or rescheduling requests to avoid being charged for the reserved consultation hour.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
