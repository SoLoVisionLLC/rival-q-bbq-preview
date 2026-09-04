import React from 'react';
import { ShieldCheck, Clock, CreditCard, Flame, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const PoliciesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rival-orange/15 text-rival-orange text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Fulfillment & Service Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight">
            Operational Policies
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400">
            Clear, transparent operational terms for our pop-up truck stops and catering services.
          </p>
        </div>

        <div className="space-y-6 text-neutral-300 text-xs sm:text-sm">
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-2">
            <h3 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2">
              <Clock className="w-4 h-4 text-rival-orange" />
              <span>1. "Until Sold Out" Policy</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Because authentic hardwood wood-smoking takes up to 14 hours of continuous fire management, we prepare designated batches for each scheduled stop. Meats cannot simply be re-stocked on the fly without sacrificing quality. Once that day’s cuts are sold, the window closes. Arriving during the first half of a posted window is strongly recommended.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-2">
            <h3 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-rival-orange" />
              <span>2. Payment Methods</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              At our mobile food truck window, we accept major credit/debit cards (Visa, MasterCard, American Express, Discover), contactless mobile tap (Apple Pay, Google Pay), and cash. For catering contracts, electronic invoices can be settled via card or check prior to service.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-2">
            <h3 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2">
              <Flame className="w-4 h-4 text-rival-orange" />
              <span>3. Catering Terms & Deposits</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Private and corporate catering engagements require a confirmed deposit to hold the date on our pitmaster schedule. Final guest count and menu selections are locked in 7 days before the event so wood, meats, and fresh scratch side provisions can be procured and prepped.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-2">
            <h3 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rival-orange" />
              <span>4. Weather & Location Changes</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Food trucks operate outdoors. In extreme, severe weather (lightning, high winds, blizzards), stops may be paused or relocated for crew and customer safety. Follow our official Facebook page for immediate live updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
