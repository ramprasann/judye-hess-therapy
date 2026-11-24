import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '@/data/navigation';
import { Menu, X, Phone, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'My Practice', href: '/my-practice' },
    { title: 'About Me', href: '/about-me' },
    { title: 'My Qualifications', href: '/my-qualifications' },
    { title: 'Publications', href: '/publications' },
    { title: 'Family Therapy', href: '/family-therapy' },
    { title: 'Couples Therapy', href: '/couples-therapy' },
    { title: 'Group Therapy', href: '/group-therapy' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact & Location', href: '/contact-location' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-[100] w-full border-b border-outline-variant/30 bg-surface/95 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 sm:h-24 max-w-none w-full items-center justify-between px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32">
          
          {/* Left Side: Logo & Brand */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-85">
              <img
                src="/images/general/logo.png"
                alt="Judye Hess, Ph.D."
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full bg-surface-container-low p-1 border border-outline-variant/40 shadow-xs shrink-0"
              />
              <span className="font-serif font-bold text-lg sm:text-xl text-on-surface tracking-tight">
                Judye Hess, Ph.D.
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 2xl:gap-2">
            {navLinks.slice(0, 9).map((item) => {
              const isActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 transition-all rounded-full text-[14px] font-medium font-sans ${
                    isActive
                      ? 'bg-primary text-white font-semibold shadow-xs'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Right Side: Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link
              to="/contact-location"
              className="hidden sm:inline-flex bg-primary text-white hover:bg-primary/90 font-sans text-xs sm:text-sm font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-full transition-all shadow-xs btn-hover items-center justify-center cursor-pointer"
            >
              <span>Contact Me</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden p-2 rounded-xl text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6 text-on-surface" />
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Fully Responsive Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] xl:hidden flex justify-end" role="dialog" aria-modal="true">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-over Drawer Panel */}
          <div className="relative w-full sm:max-w-md h-full bg-white shadow-2xl flex flex-col z-[210] overflow-hidden animate-drawer-in">
            
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low/40 shrink-0">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/general/logo.png"
                  alt="Judye Hess, Ph.D."
                  className="w-8 h-8 object-contain rounded-full bg-surface-container-low p-1 border border-outline-variant/40 shadow-xs"
                />
                <div>
                  <span className="font-serif font-bold text-base text-on-surface block leading-tight">
                    Judye Hess, Ph.D.
                  </span>
                  <span className="font-sans text-[11px] font-semibold text-primary uppercase tracking-wider block">
                    PSY 7468 • Clinical Psychologist
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Links */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-1">
              <span className="font-sans text-[11px] font-bold text-on-surface-variant uppercase tracking-wider px-3 mb-2 block">
                Navigation
              </span>

              {navLinks.map((item) => {
                const isActive =
                  item.href === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl font-sans text-sm sm:text-base transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-primary text-white font-semibold shadow-xs'
                        : 'text-on-surface hover:bg-surface-container-low font-medium'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-outline/60'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Drawer Footer with Practice Info & Action */}
            <div className="p-4 sm:p-5 border-t border-outline-variant/30 bg-surface-container-low/60 space-y-3 shrink-0">
              {/* Direct Phone Call Card */}
              <a
                href={`tel:${CONTACT_INFO.cellRaw}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-outline-variant/40 shadow-xs hover:border-primary/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider block">
                    Call Direct
                  </span>
                  <span className="text-sm font-bold text-on-surface">
                    {CONTACT_INFO.cell}
                  </span>
                </div>
              </a>

              {/* Location Snippet */}
              <div className="flex items-start gap-2 text-xs text-on-surface-variant px-1">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>South Berkeley Office (Ashby BART) & Statewide Zoom Telehealth</span>
              </div>

              {/* Primary Consultation Action Button */}
              <Link
                to="/contact-location"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center bg-primary text-white font-sans text-sm font-semibold py-3 px-6 rounded-full shadow-sm hover:bg-primary/90 btn-hover transition-all cursor-pointer"
              >
                <span>Request Free Consultation</span>
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
