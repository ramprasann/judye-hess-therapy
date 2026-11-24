import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/data/navigation';

export const ConsultationBanner: React.FC = () => {
  return (
    <section className="bg-cream-200 border-y border-subtleBorder py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-sage-dark font-semibold">
          Begin Your Journey
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
          Contact Me For A Free Consultation
        </h2>
        <p className="text-base sm:text-lg text-mutedText max-w-2xl mx-auto leading-relaxed">
          I would love to speak with you about what you are experiencing and how relationship therapy can support you, your partner, or your family.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/contact-location"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-forest text-cream font-medium text-sm flex items-center justify-center gap-2 hover:bg-forest-light transition-colors shadow-sm"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${CONTACT_INFO.cellRaw}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-subtleBorder text-charcoal font-medium text-sm flex items-center justify-center gap-2 hover:bg-cream-100 transition-colors"
          >
            <Phone className="w-4 h-4 text-forest" />
            <span>Call Cell: {CONTACT_INFO.cell}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
