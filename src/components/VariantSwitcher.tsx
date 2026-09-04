import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Shield, Zap } from 'lucide-react';

interface VariantSwitcherProps {
  currentVariant: 'a' | 'b' | 'c';
  onSelectVariant: (v: 'a' | 'b' | 'c') => void;
}

export const VariantSwitcher: React.FC<VariantSwitcherProps> = ({ currentVariant, onSelectVariant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = [
    {
      id: 'a' as const,
      label: 'Variant A: Smokehouse Ledger',
      tag: 'Trust-First / Heritage',
      icon: Shield,
      desc: 'Traditional slab-serif typography, split hero, weekly stop ledger & grounded community proof.'
    },
    {
      id: 'b' as const,
      label: 'Variant B: The Smoke Drop',
      tag: 'Conversion-First / Fast Rail',
      icon: Zap,
      desc: 'Action-oriented full-bleed hero, interactive party meat calculator, quick-filter tiles & sticky booking rail.'
    },
    {
      id: 'c' as const,
      label: 'Variant C: Rival Smoke Poster',
      tag: 'Editorial / Artisan Series',
      icon: Sparkles,
      desc: 'Typographic poster framing the iconic orange "Q", immersive smoke atmosphere & artisanal craft narrative.'
    },
  ];

  const active = variants.find(v => v.id === currentVariant) || variants[0];
  const ActiveIcon = active.icon;

  return (
    <div className="fixed bottom-6 right-6 z-50 print:hidden font-sans">
      <div className="bg-neutral-900/95 backdrop-blur-md border border-neutral-700/80 rounded-2xl shadow-2xl p-1.5 transition-all text-xs">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-3.5 py-2 bg-neutral-800 hover:bg-neutral-750 text-white rounded-xl font-medium transition-colors shadow-lg"
          title="Switch Design Variant"
        >
          <ActiveIcon className="w-4 h-4 text-rival-orange" />
          <span className="font-bold text-neutral-200">
            {active.id.toUpperCase()}: <span className="font-normal text-neutral-400">{active.tag}</span>
          </span>
          {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />}
        </button>

        {isOpen && (
          <div className="mb-2 p-2 w-80 max-w-[90vw] bg-neutral-950 border border-neutral-800 rounded-xl space-y-1.5 shadow-2xl absolute bottom-full right-0">
            <div className="px-2 py-1 text-[10px] uppercase font-mono tracking-widest text-neutral-400 flex items-center justify-between">
              <span>Select Experience Variant</span>
              <span className="text-rival-orange font-bold">Antigravity</span>
            </div>
            {variants.map((v) => {
              const Icon = v.icon;
              const isSelected = currentVariant === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    onSelectVariant(v.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                    isSelected
                      ? 'border-rival-orange bg-rival-orange/15 text-white'
                      : 'border-transparent bg-neutral-900/50 hover:bg-neutral-800 text-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-xs flex items-center gap-1.5">
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-rival-orange' : 'text-neutral-400'}`} />
                      {v.label}
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono uppercase ${
                      isSelected ? 'bg-rival-orange text-white' : 'bg-neutral-800 text-neutral-400'
                    }`}>
                      {v.id.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    {v.desc}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
