import React from 'react';
import { Flame, Award, ShieldCheck, Heart, MapPin, Newspaper } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rival-orange/15 text-rival-orange text-xs font-bold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5" />
            <span>The Pitmaster Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-black uppercase text-white tracking-tight">
            Real Wood. Real Fire. <br />
            <span className="text-rival-orange">Zero Shortcuts.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Founded by Jeremy Weidner in Fostoria, Ohio, Rival Q BBQ was born out of one simple conviction: genuine barbecue demands real hardwood fire, patient pit management, and honest ingredients.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl bg-neutral-900">
          <img
            src={BUSINESS_INFO.assets.truckBrisket}
            alt="Rival Q Barbecue Trailer and Pit Crew"
            className="w-full h-[460px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-rival-orange">
                The Rival Q Barbecue Mark
              </span>
              <p className="text-sm font-bold text-white">
                "We strive to give you the best bite every time."
              </p>
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Fostoria, OH 44830 • Seneca County
            </div>
          </div>
        </div>

        {/* The 3 Pillars of Rival Q */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rival-orange/20 text-rival-orange flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-display font-bold text-xl uppercase text-white">
              Hardwood Only
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We never use gas pellets, electric elements, or artificial smoke concentrates. Every cut is flavored entirely by seasoned Ohio oak and hickory split logs.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rival-orange/20 text-rival-orange flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-display font-bold text-xl uppercase text-white">
              Scratch Rubs & Sides
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              From our famous hash brown cheesy potatoes to slow-cooked pit beans simmering under the smoker drip, every side dish is made from scratch with real ingredients.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rival-orange/20 text-rival-orange flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-display font-bold text-xl uppercase text-white">
              Fostoria Rooted
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We live and work right here in Seneca County. When you hire Rival Q or grab a lunch platter at our pop-up, you’re supporting an independent Ohio family business.
            </p>
          </div>
        </div>

        {/* Press & Proof */}
        <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
          <div className="flex items-center gap-2 text-rival-orange text-xs font-bold font-mono uppercase">
            <Newspaper className="w-4 h-4" />
            <span>Community Recognition</span>
          </div>
          <h3 className="text-2xl font-bold font-display uppercase text-white">
            Featured In The Toledo Blade & Local Festivals
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            In June 2026, The Blade featured Rival Q and owner Jeremy Weidner during the historic Fostoria rail festival, celebrating our signature Big Boy smoked specials and deep community following.
          </p>
        </div>
      </div>
    </div>
  );
};
