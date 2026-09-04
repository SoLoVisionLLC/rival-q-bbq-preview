import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs pt-16 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-850">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.assets.logo}
                alt="Rival Q Barbecue"
                className="w-10 h-10 rounded-full border border-rival-orange object-cover"
              />
              <span className="font-display text-xl text-white font-bold tracking-wider uppercase">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Real wood-smoked barbecue proudly crafted in Fostoria, Ohio. Low & slow hardwood cooking with authentic pitmaster craft. We strive to give you the best bite every time.
            </p>
            <div className="flex items-center gap-2 text-rival-orange font-bold text-xs uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>{BUSINESS_INFO.tagline}</span>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="text-white font-display text-sm font-bold uppercase tracking-wider mb-4">
              Explore The Smokehouse
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-rival-orange transition-colors">
                  Home & Today's Pit Stop
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/menu')} className="hover:text-rival-orange transition-colors">
                  Current Menu & Smoke Platter Prices
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/schedule')} className="hover:text-rival-orange transition-colors">
                  Upcoming Pop-Up Stops & Rallies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/catering')} className="hover:text-rival-orange transition-colors">
                  Event Catering & Bulk Smoker Pans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-rival-orange transition-colors">
                  The Hardwood Process & Founder Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-rival-orange transition-colors">
                  Direct Contact & Location Info
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div>
            <h4 className="text-white font-display text-sm font-bold uppercase tracking-wider mb-4">
              Direct Pit Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rival-orange flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-neutral-200 hover:text-rival-orange font-semibold">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rival-orange flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-neutral-200 hover:text-rival-orange">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rival-orange flex-shrink-0 mt-0.5" />
                <span>
                  Fostoria, OH 44830 & Seneca County Pop-Up Locations
                </span>
              </li>
              <li>
                <button
                  onClick={onOpenInquiry}
                  className="mt-2 w-full py-2 bg-neutral-900 hover:bg-neutral-850 text-rival-orange border border-rival-orange/40 rounded-lg font-semibold text-xs transition-colors text-center"
                >
                  Send Catering Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Social Proof & Profiles Col */}
          <div>
            <h4 className="text-white font-display text-sm font-bold uppercase tracking-wider mb-4">
              Community & Followings
            </h4>
            <p className="mb-3 text-neutral-400">
              Check real-time stop updates, daily sellout alerts, and pit photos on our verified channels:
            </p>
            <div className="space-y-2">
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 bg-neutral-900 hover:bg-neutral-850 rounded-lg border border-neutral-800 text-neutral-200 hover:text-white transition-colors"
              >
                <span>Facebook (2.2K Followers • 98% Rating)</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <a
                href={BUSINESS_INFO.streetFoodFinder}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 bg-neutral-900 hover:bg-neutral-850 rounded-lg border border-neutral-800 text-neutral-200 hover:text-white transition-colors"
              >
                <span>StreetFoodFinder Profile & Booking</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <a
                href={BUSINESS_INFO.tikTok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 bg-neutral-900 hover:bg-neutral-850 rounded-lg border border-neutral-800 text-neutral-200 hover:text-white transition-colors"
              >
                <span>TikTok BBQ Channel (@rival.q.barbecue)</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name} ({BUSINESS_INFO.owner}). All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => onNavigate('/policies')} className="hover:underline">
              Fulfillment & Service Terms
            </button>
            <span>•</span>
            <span className="text-neutral-400">Preview Build — Confidential Client Proof</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
