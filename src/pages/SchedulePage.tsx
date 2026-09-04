import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, ArrowRight, AlertCircle, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO, SCHEDULE_STOPS } from '../data/siteData';
import { HoursBadge } from '../components/HoursBadge';

export const SchedulePage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rival-orange/15 text-rival-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Operational Stops & Rallies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
            Track The Rival Q Smoker
          </h1>
          <p className="text-sm text-neutral-400 mt-3 max-w-xl mx-auto">
            Find where our mobile trailer is parked this week. We smoke fresh for each stop and serve until sold out.
          </p>
          <div className="mt-6 flex justify-center">
            <HoursBadge variant="detailed" className="max-w-md text-left" />
          </div>
        </div>

        {/* Stops List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SCHEDULE_STOPS.map((stop) => (
            <div
              key={stop.id}
              className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                stop.isToday
                  ? 'bg-neutral-900 border-rival-orange shadow-xl shadow-rival-orange/15 ring-1 ring-rival-orange'
                  : 'bg-neutral-900/70 border-neutral-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-rival-orange px-2.5 py-1 bg-rival-orange/15 rounded-lg border border-rival-orange/30">
                    {stop.date} • {stop.dayOfWeek}
                  </span>
                  {stop.isToday && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse">
                      TODAY'S POP-UP
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold font-display uppercase text-white mb-3">
                  {stop.locationName}
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-neutral-300 mb-6">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-rival-orange flex-shrink-0" />
                    <span>{stop.time}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-rival-orange flex-shrink-0 mt-0.5" />
                    <span>{stop.address}, {stop.city}</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 bg-neutral-950 p-4 rounded-xl border border-neutral-850 leading-relaxed mb-6">
                  {stop.notes}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-800">
                <a
                  href={`https://maps.google.com/?q=${stop.mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-750 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-rival-orange" />
                  <span>Google Maps Directions</span>
                </a>
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 rounded-xl text-xs font-bold uppercase tracking-wider border border-neutral-700 transition-colors flex items-center gap-1.5"
                >
                  <span>Facebook Real-Time Updates</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Stop Guide */}
        <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl max-w-4xl mx-auto space-y-6">
          <h3 className="text-xl font-bold font-display uppercase text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rival-orange" />
            <span>Important Customer Information For Food Truck Stops</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-300">
            <div className="space-y-1">
              <span className="font-bold text-white block">1. Arrive Early</span>
              <p className="text-neutral-400">
                Because we smoke authentic hardwood batches rather than holding pre-cooked meats indefinitely, popular cuts like ribs or chicken quarters can sell out before close.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-white block">2. Weather Checks</span>
              <p className="text-neutral-400">
                Our heavy trailer rolls rain or shine. In cases of severe storms, immediate reschedule updates are posted directly to our Facebook page.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-white block">3. StreetFoodFinder</span>
              <p className="text-neutral-400">
                You can also follow our profile on StreetFoodFinder to receive calendar alerts for our next Seneca and Hancock County stops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
