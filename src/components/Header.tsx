import React, { useState } from 'react';
import { Phone, Menu as MenuIcon, X, Flame, Calendar, Utensils, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { HoursBadge } from './HoursBadge';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
  variantStyle?: 'classic' | 'modern' | 'editorial';
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenInquiry,
  variantStyle = 'classic',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Catering', path: '/catering' },
    { label: 'Our Smoke Craft', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-rival-dark/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Identity */}
          <div
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-rival-orange/80 shadow-md group-hover:scale-105 transition-transform bg-black flex-shrink-0">
              <img
                src={BUSINESS_INFO.assets.logo}
                alt="Rival Q Barbecue Official Mark"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-rival-orange transition-colors">
                  Rival Q BBQ
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-rival-orange/15 text-rival-orange border border-rival-orange/30">
                  Fostoria, OH
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-sans tracking-tight">
                Real Wood Smoked BBQ • Never Underestimate The Smoke
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
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

          {/* Action CTAs & Status */}
          <div className="hidden sm:flex items-center gap-3">
            <HoursBadge variant="compact" />
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rival-orange" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenInquiry}
              className="px-4 py-2 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-rival-orange/20"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Book Catering</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
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
        <div className="lg:hidden border-t border-neutral-800 bg-rival-dark/98 px-4 pt-4 pb-6 space-y-2 shadow-2xl">
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
