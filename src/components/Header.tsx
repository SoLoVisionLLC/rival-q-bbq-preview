import React, { useState } from 'react';
import { Phone, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { HoursBadge } from './HoursBadge';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
  variantStyle?: 'classic' | 'modern' | 'editorial';
  currentVariant?: 'a' | 'b' | 'c';
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenInquiry,
  variantStyle = 'classic',
  currentVariant = 'a',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Catering', path: '/catering' },
    { label: 'Our Craft', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  // Variant-specific styling flourishes
  const headerBgClass = currentVariant === 'b'
    ? 'bg-[#0a0a0a]/95 border-b border-rival-orange/30 shadow-lg shadow-black/60'
    : currentVariant === 'c'
    ? 'bg-[#080808]/98 border-b border-neutral-800'
    : 'bg-[#121212]/98 border-b border-neutral-800'; // Variant A: Trust-first / Classic

  const brandAccentClass = currentVariant === 'b'
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-rival-orange'
    : 'text-white';

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo + Identity (Guaranteed flex-shrink-0 & no wrapping) */}
          <div
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-rival-orange shadow-md group-hover:scale-105 transition-transform bg-black flex-shrink-0">
              <img
                src={BUSINESS_INFO.assets.logo}
                alt="Rival Q Barbecue Official Mark"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className={`font-display text-xl sm:text-2xl font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${brandAccentClass} group-hover:text-rival-orange`}>
                  Rival Q BBQ
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-rival-orange/15 text-rival-orange border border-rival-orange/30 whitespace-nowrap">
                  Fostoria, OH
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans tracking-tight whitespace-nowrap leading-tight mt-0.5">
                Real Wood Smoked BBQ • Never Underestimate The Smoke
              </p>
            </div>
          </div>

          {/* Desktop Nav (Clean spacing) */}
          <nav className="hidden lg:flex items-center gap-1 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-rival-orange bg-neutral-900 border border-neutral-800'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Status (Responsive to prevent crowding) */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <HoursBadge variant="compact" className="flex-shrink-0" />

            {/* Phone button: Full text on xl, icon on lg */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-3 py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-750 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors flex-shrink-0"
              title={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-rival-orange flex-shrink-0" />
              <span className="hidden xl:inline whitespace-nowrap">{BUSINESS_INFO.phone}</span>
              <span className="inline xl:hidden whitespace-nowrap">Call</span>
            </a>

            {/* Book Catering CTA */}
            <button
              onClick={onOpenInquiry}
              className="px-3.5 sm:px-4 py-2 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-rival-orange/20 whitespace-nowrap flex-shrink-0"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Book Catering</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2 flex-shrink-0">
            <HoursBadge variant="compact" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg bg-neutral-900 border border-neutral-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-rival-dark/98 px-4 pt-4 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-rival-orange/15 text-rival-orange border border-rival-orange/30'
                    : 'text-neutral-200 hover:bg-neutral-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-center font-bold text-xs uppercase tracking-wider border border-neutral-700 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-rival-orange" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl text-center font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rival-orange/20"
            >
              <Flame className="w-4 h-4" />
              <span>Request Catering Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
