import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <ScrollToTop />
      <Header />
      <main className="w-full flex-1 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};
