import React from 'react';
import { Flame, Users, CheckCircle2, Phone, Calendar, ArrowRight, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO, CATERING_PACKAGES, FAQS } from '../data/siteData';
import { CateringCalculator } from '../components/CateringCalculator';

interface CateringPageProps {
  onOpenInquiry: (pkg?: string) => void;
}

export const CateringPage: React.FC<CateringPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rival-orange/15 text-rival-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Private & Corporate Smoker Service</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
            Rival Q BBQ Catering
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Treat your guests to authentic wood-smoked barbecue. From backyard graduations to 400-guest company picnics and weddings, we bring real firecraft to your event.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rival-orange px-2 py-0.5 bg-neutral-950 rounded border border-neutral-800">
                    Min {pkg.minGuests} Guests
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display uppercase text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="text-xl font-bold font-mono text-rival-orange mb-4">
                  {pkg.pricePerPerson}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  {pkg.description}
                </p>
                <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-850 text-xs text-neutral-400 mb-6">
                  <strong className="text-neutral-200 block text-[11px] uppercase font-mono mb-0.5">Best For:</strong>
                  {pkg.bestFor}
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry(pkg.name)}
                className="w-full py-3 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-rival-orange/20"
              >
                <span>Select & Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Estimator Engine */}
        <div className="mb-20">
          <CateringCalculator onOpenModal={onOpenInquiry} />
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-neutral-800">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display uppercase font-bold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-rival-orange" />
              <span>Catering Questions & Answers</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl">
                <h4 className="font-bold text-white text-base mb-2 font-display uppercase tracking-wide">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
