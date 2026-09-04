import React from 'react';
import { Flame, Calendar, Clock, MapPin, ArrowRight, ShieldCheck, Award, Star, Phone, Utensils } from 'lucide-react';
import { BUSINESS_INFO, MENU_ITEMS, SCHEDULE_STOPS, TESTIMONIALS } from '../data/siteData';
import { HoursBadge } from '../components/HoursBadge';

interface VariantProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (pkg?: string) => void;
}

export const VariantA: React.FC<VariantProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="bg-[#101010] text-neutral-100 min-h-screen">
      {/* Top Heritage Ledger Banner */}
      <div className="bg-[#181818] border-b border-neutral-800 py-2.5 px-4 text-center text-xs font-serif text-neutral-300">
        <span className="text-rival-orange font-sans font-bold uppercase tracking-wider text-[11px] mr-2">
          ★ The Fostoria Smokehouse Record
        </span>
        Real wood fire • Low & slow hardwood splits • Serving Seneca County & Northwest Ohio
      </div>

      {/* Hero: Traditional Split Layout */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <HoursBadge variant="pill" />
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                  Est. Fostoria, OH
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight">
                Never Underestimate <br />
                <span className="text-rival-orange italic underline decoration-neutral-700 underline-offset-8">
                  The Smoke.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 font-serif leading-relaxed max-w-2xl">
                Authentic wood-smoked barbecue seasoned with time, patience, and 100% seasoned oak & hickory. When the pit is ready, we serve until the last bone is gone.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('/schedule')}
                  className="px-7 py-3.5 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-sans font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-rival-orange/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>See This Week's Stops</span>
                </button>
                <button
                  onClick={() => onNavigate('/menu')}
                  className="px-7 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-sans font-bold text-sm uppercase tracking-wider border border-neutral-700 transition-all flex items-center justify-center gap-2"
                >
                  <Utensils className="w-4 h-4 text-rival-orange" />
                  <span>View Smoker Menu</span>
                </button>
              </div>

              {/* Quick Trust Bar */}
              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold font-serif text-white">{BUSINESS_INFO.rating}</div>
                  <div className="text-[11px] text-neutral-400 font-sans">Facebook Recommend (69 Reviews)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-serif text-rival-orange">480 LBS</div>
                  <div className="text-[11px] text-neutral-400 font-sans">Demonstrated Single-Day Smoke</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-serif text-white">100%</div>
                  <div className="text-[11px] text-neutral-400 font-sans">Real Hardwood Fire Logged</div>
                </div>
              </div>
            </div>

            {/* Right Media: Authentic Brisket & Truck Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-700 shadow-2xl bg-neutral-900">
                <img
                  src={BUSINESS_INFO.assets.truckBrisket}
                  alt="Rival Q Barbecue Trailer and Fresh Smoked Brisket"
                  className="w-full h-[440px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700">
                  <div className="flex items-center justify-between text-xs text-rival-orange font-bold uppercase tracking-wider mb-1">
                    <span>Authentic Smokehouse Mark</span>
                    <span className="text-neutral-400 font-mono">Pitmaster Jeremy Weidner</span>
                  </div>
                  <p className="text-xs text-neutral-200 font-serif">
                    "We strive to give you the best bite every time."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ledger Section: This Week's Stops */}
      <section className="py-16 bg-[#141414] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-rival-orange block mb-2 font-bold">
              ★ Official Operational Ledger
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white uppercase tracking-tight">
              Where to Find the Smoker
            </h2>
            <p className="text-sm text-neutral-400 mt-2 font-serif">
              Our weekly scheduled food truck appearances. Arrive early for top cut availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHEDULE_STOPS.map((stop) => (
              <div
                key={stop.id}
                className={`p-6 rounded-2xl border transition-all ${
                  stop.isToday
                    ? 'bg-neutral-900 border-rival-orange shadow-lg shadow-rival-orange/10 ring-1 ring-rival-orange'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-rival-orange">
                    {stop.dayOfWeek}
                  </span>
                  {stop.isToday && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse">
                      TODAY
                    </span>
                  )}
                </div>
                <h3 className="font-serif font-bold text-lg text-white mb-2">
                  {stop.locationName}
                </h3>
                <div className="space-y-1.5 text-xs text-neutral-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                    <span>{stop.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0 mt-0.5" />
                    <span>{stop.address}, {stop.city}</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 font-serif border-t border-neutral-800 pt-3">
                  {stop.notes}
                </p>
                <a
                  href={`https://maps.google.com/?q=${stop.mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-rival-orange hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Smoke Ledger: Verified Menu Highlights */}
      <section className="py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-rival-orange block mb-2 font-bold">
                ★ House Specialties
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Direct From the Hardwood Pit
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/menu')}
              className="text-xs font-bold uppercase tracking-wider text-rival-orange hover:text-white transition-colors flex items-center gap-1.5 font-sans"
            >
              <span>View Full Menu & Sides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MENU_ITEMS.filter(m => m.popular && m.image).slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all flex flex-col"
              >
                <div className="h-52 w-full overflow-hidden bg-neutral-950 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-neutral-700 font-mono">
                    {item.price}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-serif leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-sans">
                    <span className="text-rival-orange font-semibold">{item.notes}</span>
                    <button
                      onClick={() => onNavigate('/menu')}
                      className="hover:text-white underline font-medium"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Trust Feature */}
      <section className="py-16 bg-[#161616] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-rival-orange block font-bold">
                ★ Crowd & Event Smoking
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                Feeding a Crowd With True Pit Craft
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-serif leading-relaxed">
                Whether you’re throwing an outdoor wedding, celebrating a graduation, or hosting a factory appreciation lunch, Rival Q provides full-service food truck windows or hot buffet drop-offs.
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 space-y-2 font-serif">
                <p>
                  <strong className="text-white">Documented High-Volume Proof:</strong> On August 23, Rival Q completed a single smoke run of <span className="text-rival-orange font-bold">480 lbs</span> (200 lb brisket, 150 lb pork, 80 lb chicken, 50 lb wings).
                </p>
                <p className="text-neutral-400 text-[11px]">
                  No event is too large for our pit. We smoke ahead and arrive ready to feed your team hot and fast.
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-6 py-3.5 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4" />
                  <span>Request A Catering Quote</span>
                </button>
                <button
                  onClick={() => onNavigate('/catering')}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider border border-neutral-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Catering Packages & Pricing</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 space-y-6">
                <h3 className="font-serif font-bold text-2xl text-white">
                  Local Word of Mouth
                </h3>
                <div className="space-y-4">
                  {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                      <div className="flex items-center gap-1 text-amber-400 mb-2">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs text-neutral-300 font-serif italic mb-2">
                        "{t.quote}"
                      </p>
                      <div className="flex justify-between text-[11px] text-neutral-500 font-sans">
                        <span className="font-bold text-neutral-300">{t.author}</span>
                        <span>{t.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
