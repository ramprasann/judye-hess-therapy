import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeadingProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  subtitle,
  breadcrumb,
}) => {
  return (
    <div className="bg-cream-200/50 border-b border-subtleBorder py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-mutedText mb-4">
          <Link to="/" className="hover:text-forest transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-mutedText/60" />
          <span className="text-charcoal font-medium">
            {breadcrumb || title}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal">
          {title}
        </h1>

        {/* Decorative separator */}
        <div className="w-16 h-0.5 bg-sage mx-auto my-4 rounded-full" />

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-mutedText font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
