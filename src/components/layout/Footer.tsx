import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/data/navigation';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-low py-16 border-t border-outline-variant/30 font-sans">
      <div className="mx-auto max-w-none w-full px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg pb-space-lg border-b border-outline-variant/30">
          
          {/* Column 1: Identity & Credentials */}
          <div className="md:col-span-4 flex flex-col gap-space-sm text-left">
            <div className="flex items-center gap-3">
              <img
                src="/images/general/logo.png"
                alt="Judye Hess, Ph.D."
                className="w-10 h-10 object-contain rounded-full bg-surface-container-lowest p-1 border border-outline-variant/40"
              />
              <span className="font-headline-sm text-headline-sm text-on-surface font-serif font-bold">
                Judye Hess, Ph.D.
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Relationship Therapy for individuals, couples, and families. Over 40 years of dedicated clinical practice and academic leadership in California.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <img
                src="/images/general/theravive-seal.jpg"
                alt="Theravive Verified Therapist"
                className="h-10 rounded shadow-sm bg-white p-0.5 border border-outline-variant/30"
              />
              <div className="flex items-center gap-2">
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
                  aria-label="Facebook"
                >
                  <img src="/images/general/facebook.png" alt="Facebook" className="w-4 h-4 object-contain" />
                </a>
                <a
                  href={CONTACT_INFO.theraviveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body-sm text-xs text-primary hover:underline"
                >
                  Theravive Profile
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: 2-Column Navigation Grid */}
          <div className="md:col-span-5 flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant text-left">
            <span className="font-label-lg text-label-lg text-on-surface mb-space-xs font-semibold">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-x-space-md gap-y-2">
              <Link className="hover:text-on-surface transition-colors" to="/">Home</Link>
              <Link className="hover:text-on-surface transition-colors" to="/my-practice">My Practice</Link>
              <Link className="hover:text-on-surface transition-colors" to="/about-me">About Me</Link>
              <Link className="hover:text-on-surface transition-colors" to="/my-qualifications">My Qualifications</Link>
              <Link className="hover:text-on-surface transition-colors" to="/publications">Publications</Link>
              <Link className="hover:text-on-surface transition-colors" to="/family-therapy">Family Therapy</Link>
              <Link className="hover:text-on-surface transition-colors" to="/couples-therapy">Couples Therapy</Link>
              <Link className="hover:text-on-surface transition-colors" to="/group-therapy">Group Therapy</Link>
              <Link className="hover:text-on-surface transition-colors" to="/blog">Blog</Link>
              <Link className="hover:text-on-surface transition-colors" to="/contact-location">Contact Me</Link>
            </div>
          </div>

          {/* Column 3: Contact & Direct Channels */}
          <div className="md:col-span-3 flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant text-left">
            <span className="font-label-lg text-label-lg text-on-surface mb-space-xs font-semibold">
              Contact & Location
            </span>
            <span className="text-on-surface font-medium">(510) 843-5683</span>
            <span className="text-xs text-on-surface-variant">(land line, messages only)</span>
            <span className="text-on-surface font-medium pt-1">(510) 333-7686 (cell)</span>
            <a className="hover:text-on-surface text-primary transition-colors pt-1" href={`mailto:${CONTACT_INFO.email}`}>
              {CONTACT_INFO.email}
            </a>
            <p className="text-xs text-on-surface-variant pt-2 leading-relaxed">
              {CONTACT_INFO.address.street}<br />
              {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <span>© 2026, Relationship Therapy Judye Hess Ph. D. All Rights Reserved. • CA License PSY 7468</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-xs text-primary hover:text-on-surface hover:underline font-semibold transition-colors cursor-pointer"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
