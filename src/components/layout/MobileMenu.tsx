import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { MAIN_NAVIGATION, CONTACT_INFO } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-cream shadow-2xl flex flex-col z-10 border-l border-subtleBorder">
        {/* Drawer Header */}
        <div className="p-5 flex items-center justify-between border-b border-subtleBorder bg-cream-50">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/general/logo.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-serif font-semibold text-lg text-charcoal">
              Judye Hess, Ph.D.
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-charcoal/70 hover:text-charcoal hover:bg-cream-200 transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
          {MAIN_NAVIGATION.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-forest text-cream font-semibold'
                    : 'text-charcoal hover:bg-cream-200'
                }`}
              >
                <span>{item.title}</span>
                <ArrowRight className={`w-4 h-4 ${isActive ? 'text-cream' : 'text-mutedText'}`} />
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer / Contact Details */}
        <div className="p-5 bg-cream-200/60 border-t border-subtleBorder space-y-3 text-sm">
          <a
            href={`tel:${CONTACT_INFO.cellRaw}`}
            className="flex items-center gap-2.5 text-charcoal hover:text-forest"
          >
            <Phone className="w-4 h-4 text-forest" />
            <span>Cell: {CONTACT_INFO.cell}</span>
          </a>
          <a
            href={`tel:${CONTACT_INFO.landlineRaw}`}
            className="flex items-center gap-2.5 text-charcoal hover:text-forest"
          >
            <Phone className="w-4 h-4 text-forest" />
            <span>Landline: {CONTACT_INFO.landline} (messages)</span>
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2.5 text-charcoal hover:text-forest"
          >
            <Mail className="w-4 h-4 text-forest" />
            <span>{CONTACT_INFO.email}</span>
          </a>
          <div className="flex items-start gap-2.5 text-mutedText pt-1">
            <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <span>{CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}</span>
          </div>

          <div className="pt-2">
            <Link
              to="/contact-location"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-lg bg-forest text-cream text-center font-medium block shadow-sm"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
