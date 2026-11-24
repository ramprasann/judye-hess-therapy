import React from 'react';
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react';
import { PublicationItem } from '@/data/publications';

interface PublicationCardProps {
  item: PublicationItem;
  type?: 'book' | 'pdf' | 'external' | 'interview';
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ item, type = 'pdf' }) => {
  return (
    <div className="bg-white border border-subtleBorder rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-card transition-all">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-sage-dark font-medium uppercase tracking-wider">
          {item.pdfUrl ? (
            <span className="flex items-center gap-1.5 bg-sage-50 px-2.5 py-1 rounded-md">
              <FileText className="w-3.5 h-3.5 text-sage" />
              <span>Academic Paper & Monograph</span>
            </span>
          ) : item.linkUrl?.includes('amazon') ? (
            <span className="flex items-center gap-1.5 bg-amber-50 text-amber-800 px-2.5 py-1 rounded-md">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Published Book</span>
            </span>
          ) : (
            <span className="flex items-center gap-1.5 bg-cream-200 text-charcoal px-2.5 py-1 rounded-md">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Press / Citation</span>
            </span>
          )}
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal leading-snug">
          {item.title}
        </h3>

        <p className="text-sm font-medium text-forest">
          {item.author}
        </p>

        <p className="text-sm text-mutedText leading-relaxed">
          {item.details}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-subtleBorder/60 flex items-center gap-4">
        {item.pdfUrl && (
          <a
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-forest text-cream text-xs font-medium hover:bg-forest-light transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Original PDF</span>
          </a>
        )}

        {item.linkUrl && (
          <a
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-forest hover:text-forest-light transition-colors"
          >
            <span>{item.linkText || 'View Publication'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
