import React from 'react';
import { Flame, Calendar, Clock, MapPin, ArrowRight, ShieldCheck, Sparkles, Utensils, Award } from 'lucide-react';
import { BUSINESS_INFO, MENU_ITEMS, SCHEDULE_STOPS } from '../data/siteData';
import { HoursBadge } from '../components/HoursBadge';

interface VariantProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (pkg?: string) => void;
}

export const VariantC: React.FC<VariantProps> = ({ onNavigate, onOpenInquiry }) => {
  const marqueeItems = [
    'REAL HARDWOOD SMOKE',
    'OAK & HICKORY SPLITS',
    'SLOW-SMOKED PULLED PORK',
    'PITMASTER CHICKEN QUARTERS',
    'THE SIGNATURE Q-BOWL',
    'PULLED PORK NACHOS',
    'JALAPEÑO CHEDDAR SAUSAGE',
    'CHEESY POTATOES',
    'FOSTORIA, OHIO',
  ];

  return (
    <div className="bg-[#080808] text-neutral-100 min-h-screen selection:bg-rival-orange selection:text-black">
      {/* Editorial Marquee Ticker */}
      <div className="bg-rival-orange text-black py-2 overflow-hidden whitespace-nowrap border-b border-rival-orangeHover font-mono font-black text-xs uppercase tracking-widest">
        <div className="inline-flex gap-8 animate-marquee">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span>★</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero: Poster Typographic Statement */}
      <section className="relative pt-16 pb-24 border-b border-neutral-850 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rival-orange/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-750 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-rival-orange animate-ping" />
              <span className="text-neutral-300">Fostoria Firecraft • Seasoned Hardwood</span>
              <span className="text-rival-orange font-bold font-sans">#1 In Smoke</span>
            </div>

            <h1 className="text-5xl sm:text-8xl font-display uppercase font-black tracking-tight text-white leading-none">
              NEVER UNDERESTIMATE <br />
              <span className="relative inline-block text-rival-orange text-6xl sm:text-9xl tracking-tighter">
                THE SMOKE.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 font-sans max-w-2xl mx-auto leading-relaxed">
              We burn seasoned oak and hickory splits around the clock. Hand-rubbed meats, unhurried patience, and generous portions built for Ohio appetite.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate('/schedule')}
                className="px-8 py-4 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-rival-orange/30 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Track The Smoker</span>
              </button>
              <button
                onClick={() => onOpenInquiry()}
                className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-rival-orange" />
                <span>Book Food Truck For Event</span>
              </button>
            </div>
          </div>

          {/* Editorial Photo Collage Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 aspect-[4/5] group">
              <img
                src={BUSINESS_INFO.assets.smokedChicken}
                alt="Smoked Chicken Quarters on Pit"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-rival-orange text-[10px] font-mono font-bold uppercase tracking-widest">
                  Hardwood Seared
                </span>
                <h4 className="text-lg font-bold text-white font-display uppercase">
                  Smoked Chicken Quarters
                </h4>
                <p className="text-xs text-neutral-300 mt-0.5 font-sans">
                  Crispy skin, mahogany smoke ring, served tender.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-rival-orange aspect-[4/5] shadow-2xl group md:-translate-y-4">
              <img
                src={BUSINESS_INFO.assets.truckBrisket}
                alt="Rival Q Smoker Trailer & Brisket"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-rival-orange text-xs font-mono font-black uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-rival-orange/40">
                  Capacity Record
                </span>
                <h3 className="text-2xl font-display font-extrabold uppercase text-white">
                  480 Lbs In One Day
                </h3>
                <p className="text-xs text-neutral-200">
                  200 lb brisket • 150 lb pork • 80 lb chicken • 50 lb wings
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 aspect-[4/5] group">
              <img
                src={BUSINESS_INFO.assets.pulledPorkSandwich}
                alt="Pulled Pork Sandwich with Slaw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-rival-orange text-[10px] font-mono font-bold uppercase tracking-widest">
                  Fostoria Favorite
                </span>
                <h4 className="text-lg font-bold text-white font-display uppercase">
                  Pulled Pork Sandwich
                </h4>
                <p className="text-xs text-neutral-300 mt-0.5 font-sans">
                  Slow-pulled pork butt on toasted bun with house slaw.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Narrative: The Firebox Philosophy */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-850">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 text-center md:text-left">
              <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-rival-orange/15 border-2 border-rival-orange flex items-center justify-center text-rival-orange mb-6">
                <Flame className="w-12 h-12" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block mb-1">
                The Hardwood Standard
              </span>
              <h3 className="text-3xl font-display uppercase font-bold text-white leading-tight">
                No Gas. <br />
                No Pellets. <br />
                <span className="text-rival-orange">Just Fire.</span>
              </h3>
            </div>

            <div className="md:col-span-8 space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                True barbecue cannot be rushed with thermostats or electric augers. At Rival Q BBQ, we build our fire from seasoned Ohio hardwoods—primarily dense white oak and fragrant hickory.
              </p>
              <p>
                The meat rests in clean, thin blue smoke for up to 14 hours. Fats render into collagen, black pepper and brown sugar caramelize into a crisp bark, and that unmistakable pink smoke ring forms naturally.
              </p>
              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>PIT CRAFT: JEREMY WEIDNER</span>
                <span className="text-rival-orange">FOSTORIA, OH 44830</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Schedule Strip */}
      <section className="py-16 border-b border-neutral-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-rival-orange font-bold block mb-1">
                The Tour Schedule
              </span>
              <h2 className="text-3xl sm:text-4xl font-display uppercase font-extrabold text-white">
                Catch Rival Q On The Road
              </h2>
            </div>
            <HoursBadge variant="detailed" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHEDULE_STOPS.map((stop) => (
              <div
                key={stop.id}
                className={`p-6 rounded-2xl border transition-all ${
                  stop.isToday
                    ? 'bg-rival-orange/10 border-rival-orange'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="text-xs font-mono font-bold uppercase text-rival-orange mb-2">
                  {stop.date} • {stop.dayOfWeek}
                </div>
                <h4 className="font-display uppercase text-lg text-white font-bold mb-2">
                  {stop.locationName}
                </h4>
                <p className="text-xs text-neutral-400 mb-4">
                  {stop.address}, {stop.city}
                </p>
                <a
                  href={`https://maps.google.com/?q=${stop.mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-white hover:text-rival-orange flex items-center gap-1 font-mono uppercase tracking-wider"
                >
                  <span>Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
