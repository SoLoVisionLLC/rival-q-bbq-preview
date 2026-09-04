import React, { useState } from 'react';
import { Users, Flame, Utensils, DollarSign, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface CateringCalculatorProps {
  onOpenModal: (pkgName?: string) => void;
  accentColor?: string;
}

export const CateringCalculator: React.FC<CateringCalculatorProps> = ({ onOpenModal }) => {
  const [guestCount, setGuestCount] = useState<number>(50);
  const [tier, setTier] = useState<'standard' | 'premium'>('standard');
  const [includeSides, setIncludeSides] = useState<boolean>(true);

  // Math: standard BBQ is ~0.4 - 0.5 lbs cooked meat per person
  const meatPounds = Math.round(guestCount * (tier === 'standard' ? 0.45 : 0.6));
  const estimatedCostMin = guestCount * (tier === 'standard' ? (includeSides ? 17 : 12) : (includeSides ? 23 : 18));
  const estimatedCostMax = guestCount * (tier === 'standard' ? (includeSides ? 21 : 15) : (includeSides ? 28 : 22));

  return (
    <div className="bg-rival-charcoal border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-rival-orange text-xs font-bold uppercase tracking-wider mb-1">
            <Flame className="w-4 h-4" />
            <span>Interactive Pitmaster Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide">
            Calculate Your Smokehouse Crowd
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Based on Rival Q's 480-lb pit capability formula.
          </p>
        </div>
        <div className="bg-neutral-900 px-4 py-2 rounded-xl border border-neutral-800 text-right">
          <span className="text-[10px] text-neutral-400 block uppercase font-mono">Max Single Smoke Run</span>
          <span className="text-sm font-bold text-rival-orange font-mono">480 LBS ON PIT</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-neutral-200 flex items-center gap-2">
                <Users className="w-4 h-4 text-rival-orange" />
                <span>Guest Count</span>
              </label>
              <span className="text-lg font-bold text-rival-orange font-mono">
                {guestCount} People
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="350"
              step="5"
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-rival-orange"
            />
            <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
              <span>15 guests (Family)</span>
              <span>150 (Company)</span>
              <span>350+ (Festival)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTier('standard')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                tier === 'standard'
                  ? 'border-rival-orange bg-rival-orange/10 text-white'
                  : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              <span className="block text-xs font-bold uppercase tracking-wider">Smokehouse Buffet</span>
              <span className="text-xs text-neutral-300 mt-1 block">Pulled Pork & Smoked Chicken</span>
            </button>
            <button
              type="button"
              onClick={() => setTier('premium')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                tier === 'premium'
                  ? 'border-rival-orange bg-rival-orange/10 text-white'
                  : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              <span className="block text-xs font-bold uppercase tracking-wider">Pitmaster Prime</span>
              <span className="text-xs text-neutral-300 mt-1 block">Smoked Brisket, Sausage & Pork</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-800">
            <div className="flex items-center gap-3">
              <Utensils className="w-4 h-4 text-rival-orange" />
              <div>
                <span className="text-xs font-semibold text-neutral-200 block">Include Signature Hot Sides</span>
                <span className="text-[11px] text-neutral-400 block">Cheesy potatoes, pit beans, fresh slaw & cornbread</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={includeSides}
              onChange={(e) => setIncludeSides(e.target.checked)}
              className="w-4 h-4 rounded bg-neutral-800 border-neutral-700 text-rival-orange focus:ring-rival-orange cursor-pointer"
            />
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-neutral-900 rounded-xl border border-neutral-800">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
              Estimated Meat Requirements
            </span>
            <div className="text-3xl font-extrabold text-white font-mono flex items-baseline gap-2">
              <span>{meatPounds}</span>
              <span className="text-sm font-sans font-normal text-rival-orange">LBS SLOW-SMOKED MEAT</span>
            </div>
            <p className="text-xs text-neutral-400 mt-2">
              Calculated to guarantee generous, satisfying portions with no risk of hungry guests running short.
            </p>

            <div className="mt-6 pt-4 border-t border-neutral-800 space-y-2 text-xs">
              <div className="flex justify-between text-neutral-300">
                <span>Per-Person Range:</span>
                <span className="font-semibold text-white">
                  ${Math.round(estimatedCostMin / guestCount)} - ${Math.round(estimatedCostMax / guestCount)} / person
                </span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Total Ballpark Estimate:</span>
                <span className="font-bold text-rival-orange text-sm font-mono">
                  ${estimatedCostMin.toLocaleString()} - ${estimatedCostMax.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => onOpenModal(tier === 'standard' ? 'The Smokehouse Buffet' : 'Pitmaster Prime Feast')}
              className="w-full py-3 px-4 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-rival-orange/20"
            >
              <span>Lock In Event Date</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-center text-neutral-500 mt-2">
              Exact quote confirmed after menu selection & venue requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
