import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, AlertCircle, Phone, Mail, Lock } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number (at least 7 digits)'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title = "Contact Me For A Free Consultation",
  subtitle = "I welcome your inquiry and look forward to speaking with you. Please fill out the form below or reach out directly by phone.",
  className = ""
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log('Consultation Request Submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-card border border-outline-variant/40 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest mx-auto w-fit mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>Confidential Inquiry</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-on-surface">
            {title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
            <h3 className="font-serif text-xl font-bold text-on-surface">
              Thank You for Reaching Out
            </h3>
            <p className="font-sans text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
              Your inquiry has been received directly by Dr. Judye Hess. You will receive a response or scheduling confirmation within 24 to 48 business hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="font-sans text-xs font-semibold text-primary hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block font-sans text-xs font-semibold text-on-surface">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="First and last name"
                {...register('name')}
                className={`w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                  errors.name ? 'border-red-500' : 'border-outline-variant/40'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="email" className="block font-sans text-xs font-semibold text-on-surface">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register('email')}
                  className={`w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                    errors.email ? 'border-red-500' : 'border-outline-variant/40'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="block font-sans text-xs font-semibold text-on-surface">
                  Your Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(510) 000-0000"
                  {...register('phone')}
                  className={`w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                    errors.phone ? 'border-red-500' : 'border-outline-variant/40'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone.message}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block font-sans text-xs font-semibold text-on-surface">
                Your Message (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Briefly describe what you or your family/relationship are experiencing..."
                {...register('message')}
                className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 px-4 py-3 rounded-xl font-sans text-sm border border-outline-variant/40 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-full shadow-sm hover:bg-primary/90 btn-hover cursor-pointer disabled:opacity-70 transition-all"
              >
                <span>{isSubmitting ? 'Sending Request...' : 'Send Consultation Request'}</span>
              </button>
            </div>

            {/* Direct Contact Alternative Note */}
            <div className="text-center pt-4 border-t border-outline-variant/30 text-xs text-on-surface-variant flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-primary" />
                Call direct: <a href={`tel:${CONTACT_INFO.cellRaw}`} className="text-primary font-semibold hover:underline">{CONTACT_INFO.cell}</a>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" />
                Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary font-semibold hover:underline">{CONTACT_INFO.email}</a>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
