import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white border border-subtleBorder rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-card transition-shadow">
      <div>
        {/* Rating & Verified Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-sage-dark bg-sage-50 px-2.5 py-1 rounded-full font-medium">
            <CheckCircle className="w-3.5 h-3.5 text-sage" />
            <span>Google Review</span>
          </div>
        </div>

        {/* Content with exact original quote */}
        <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed italic whitespace-pre-line">
          "{testimonial.content}"
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="flex items-center gap-3 pt-6 mt-6 border-t border-subtleBorder/60">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover border border-subtleBorder"
        />
        <div>
          <h4 className="font-serif font-semibold text-charcoal text-base">
            {testimonial.name}
            {testimonial.role && (
              <span className="text-xs font-sans text-mutedText font-normal ml-1.5">
                ({testimonial.role})
              </span>
            )}
          </h4>
          <span className="text-xs text-mutedText">
            Verified Client / Peer Consultation
          </span>
        </div>
      </div>
    </div>
  );
};
