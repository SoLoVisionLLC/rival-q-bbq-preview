import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VariantSwitcher } from './components/VariantSwitcher';
import { InquiryModal } from './components/InquiryModal';

import { VariantA } from './variants/VariantA';
import { VariantB } from './variants/VariantB';
import { VariantC } from './variants/VariantC';

import { MenuPage } from './pages/MenuPage';
import { SchedulePage } from './pages/SchedulePage';
import { CateringPage } from './pages/CateringPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PoliciesPage } from './pages/PoliciesPage';

export function App() {
  // Determine variant from hostname or search params or localStorage
  const getInitialVariant = (): 'a' | 'b' | 'c' => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const paramVariant = urlParams.get('variant')?.toLowerCase();
      if (paramVariant === 'a' || paramVariant === 'b' || paramVariant === 'c') {
        return paramVariant;
      }

      const host = window.location.hostname.toLowerCase();
      if (host.includes('-b.') || host.includes('antigravity-b')) return 'b';
      if (host.includes('-c.') || host.includes('antigravity-c')) return 'c';
      if (host.includes('-a.') || host.includes('antigravity-a')) return 'a';

      const saved = localStorage.getItem('rival_q_variant');
      if (saved === 'a' || saved === 'b' || saved === 'c') return saved;
    }
    return 'a';
  };

  const [currentVariant, setCurrentVariant] = useState<'a' | 'b' | 'c'>(getInitialVariant());
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  // Normalize path helper
  const normalizePath = (p: string) => {
    let clean = p.replace(/\.html$/, '');
    if (!clean || clean === '/index') clean = '/';
    return clean;
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    setCurrentPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    const clean = normalizePath(path);
    setCurrentPath(clean);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectVariant = (v: 'a' | 'b' | 'c') => {
    setCurrentVariant(v);
    localStorage.setItem('rival_q_variant', v);
    // Optional query param update
    const url = new URL(window.location.href);
    url.searchParams.set('variant', v);
    window.history.replaceState({}, '', url.toString());
  };

  const handleOpenInquiry = (pkgName?: string) => {
    setSelectedPackage(pkgName || '');
    setInquiryModalOpen(true);
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/menu':
        return <MenuPage onOpenInquiry={() => handleOpenInquiry()} onNavigate={navigate} />;
      case '/schedule':
        return <SchedulePage />;
      case '/catering':
        return <CateringPage onOpenInquiry={handleOpenInquiry} />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/policies':
        return <PoliciesPage />;
      case '/':
      default:
        if (currentVariant === 'b') {
          return <VariantB onNavigate={navigate} onOpenInquiry={handleOpenInquiry} />;
        }
        if (currentVariant === 'c') {
          return <VariantC onNavigate={navigate} onOpenInquiry={handleOpenInquiry} />;
        }
        return <VariantA onNavigate={navigate} onOpenInquiry={handleOpenInquiry} />;
    }
  };

  return (
    <div className="min-h-screen bg-rival-dark text-white flex flex-col font-sans">
      <VariantSwitcher
        currentVariant={currentVariant}
        onSelectVariant={handleSelectVariant}
      />

      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenInquiry={() => handleOpenInquiry()}
        variantStyle={currentVariant === 'c' ? 'editorial' : currentVariant === 'b' ? 'modern' : 'classic'}
      />

      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer
        onNavigate={navigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <MobileBottomNav
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultPackage={selectedPackage}
      />
    </div>
  );
}

export default App;
