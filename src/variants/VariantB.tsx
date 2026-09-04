import React, { useState } from 'react';
import { Flame, Calendar, Clock, MapPin, ArrowRight, Zap, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { BUSINESS_INFO, MENU_ITEMS, SCHEDULE_STOPS } from '../data/siteData';
import { HoursBadge } from '../components/HoursBadge';
import { CateringCalculator } from '../components/CateringCalculator';

interface VariantProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (pkg?: string) => void;
}

export const VariantB: React.FC<VariantProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Fire Picks' },
    { id: 'platters', label: 'Smoke Platters' },
    { id: 'sandwiches', label: 'Sandwiches & Buns' },
    { id: 'specialties', label: 'Bowls & Nachos' },
    { id: 'sides', label: 'Sides & Extras' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  const activeStop = SCHEDULE_STOPS.find(s => s.isToday) || SCHEDULE_STOPS[0];

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      {/* High-Impact Full-Bleed Hero */}
      <section className="relative pt-12 pb-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={BUSINESS_INFO.assets.truckBrisket}
            alt="Rival Q BBQ Smoker Truck"
            className="w-full h-full object-cover object-center opacity-35 scale-105 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/80 to-[#0b0b0b]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rival-orange/20 border border-rival-orange/40 text-rival-orange text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>Next Stop Broadcast</span>
              </div>

              <h1 className="text-4xl sm:text-7xl font-display font-extrabold uppercase tracking-tight leading-none text-white">
                The Smoke Drop. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rival-orange to-amber-500">
                  Real Hardwood BBQ.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed">
                Fostoria’s hardest-working mobile smokehouse. Real oak & hickory, scratch rubs, and handcrafted comfort dishes rolling hot until sold out.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onNavigate('/schedule')}
                  className="px-6 py-3.5 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-rival-orange/25"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Where We Are Today</span>
                </button>
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-6 py-3.5 bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Flame className="w-4 h-4 text-rival-orange" />
                  <span>Instant Catering Quote</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>98% Facebook Recommendation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Gas Pellets / Real Wood</span>
                </div>
              </div>
            </div>

            {/* Floating Live Action Module */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 bg-neutral-900/95 backdrop-blur-xl border-2 border-rival-orange/50 rounded-2xl shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                      Live Truck Dispatch
                    </span>
                    <h3 className="text-xl font-display uppercase font-bold text-white">
                      Current Smoke Station
                    </h3>
                  </div>
                  <HoursBadge variant="compact" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-rival-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">
                        {activeStop.locationName}
                      </div>
                      <div className="text-xs text-neutral-300">
                        {activeStop.address}, {activeStop.city}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <Clock className="w-5 h-5 text-rival-orange flex-shrink-0" />
                    <span>{activeStop.time}</span>
                  </div>

                  <p className="text-xs text-neutral-400 bg-neutral-950 p-3 rounded-xl border border-neutral-800">
                    {activeStop.notes}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`https://maps.google.com/?q=${activeStop.mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-neutral-800 hover:bg-neutral-750 text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center border border-neutral-700 transition-colors block"
                  >
                    Directions
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="py-2.5 px-3 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Ahead</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Decision Matrix */}
      <section className="py-12 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <span className="text-rival-orange font-mono text-xs font-bold">01 • WHEN</span>
              <h4 className="font-bold text-white text-sm">Regular Weekly Stops</h4>
              <p className="text-xs text-neutral-400">
                Rotating weekly pop-ups in Fostoria, Findlay rallies, and industrial lunch slots.
              </p>
            </div>
            <div className="p-5 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <span className="text-rival-orange font-mono text-xs font-bold">02 • WHERE</span>
              <h4 className="font-bold text-white text-sm">Live Location Tracking</h4>
              <p className="text-xs text-neutral-400">
                Check our schedule page or StreetFoodFinder profile before you head out.
              </p>
            </div>
            <div className="p-5 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <span className="text-rival-orange font-mono text-xs font-bold">03 • SPEED</span>
              <h4 className="font-bold text-white text-sm">Fast Window Service</h4>
              <p className="text-xs text-neutral-400">
                Designed for quick lunch breaks and hungry festival lines with zero quality compromise.
              </p>
            </div>
            <div className="p-5 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <span className="text-rival-orange font-mono text-xs font-bold">04 • CROWDS</span>
              <h4 className="font-bold text-white text-sm">Large Batch Catering</h4>
              <p className="text-xs text-neutral-400">
                480-lb single smoke capability ready for your company, graduation, or wedding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Filter Menu Section */}
      <section className="py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-rival-orange font-bold block mb-1">
                Fast Menu Matrix
              </span>
              <h2 className="text-3xl sm:text-4xl font-display uppercase font-extrabold tracking-tight text-white">
                What's Smokin' Today
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === c.id
                      ? 'bg-rival-orange text-white'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-900 rounded-2xl border border-neutral-800 p-5 hover:border-neutral-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-bold text-lg text-white group-hover:text-rival-orange transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-mono text-base font-bold text-rival-orange">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                {item.notes && (
                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span>{item.notes}</span>
                    <span className="text-rival-orange font-bold">READY TO ORDER</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('/menu')}
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl border border-neutral-700 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Complete Smokehouse Menu</span>
              <ArrowRight className="w-4 h-4 text-rival-orange" />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Catering Estimator */}
      <section className="py-16 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-rival-orange font-bold block mb-1">
              Event Planning Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-display uppercase font-extrabold text-white">
              Build Your Event Smoke Order
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Drag the guest slider below to calculate exact meat weights and ballpark budgets for your party.
            </p>
          </div>

          <CateringCalculator onOpenModal={onOpenInquiry} />
        </div>
      </section>
    </div>
  );
};
