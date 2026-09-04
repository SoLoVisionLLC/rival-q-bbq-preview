import React, { useState } from 'react';
import { Flame, Utensils, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, MENU_ITEMS } from '../data/siteData';

interface MenuPageProps {
  onOpenInquiry: () => void;
  onNavigate: (path: string) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenInquiry, onNavigate }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'platters', label: 'Smoke Platters' },
    { id: 'sandwiches', label: 'Sandwiches & Buns' },
    { id: 'specialties', label: 'Bowls & Nachos' },
    { id: 'sides', label: 'Scratch Sides' },
  ];

  const displayedItems = filter === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(i => i.category === filter);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rival-orange/15 text-rival-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Fostoria Pitmaster Menu</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
            Hardwood Smoked Barbecue
          </h1>
          <p className="text-sm text-neutral-400 mt-3 max-w-xl mx-auto">
            All meats are rubbed in house and smoked low & slow over seasoned oak and hickory splits. Served fresh at every food truck stop until sold out.
          </p>

          <div className="mt-4 p-3 bg-neutral-900 border border-neutral-800 rounded-xl inline-flex items-center gap-2 text-xs text-amber-400">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>Menu items and cut availability rotate by pop-up location and sellout pace.</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === cat.id
                  ? 'bg-rival-orange text-white shadow-md shadow-rival-orange/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              {item.image && (
                <div className="h-48 w-full overflow-hidden bg-neutral-950 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold font-mono text-rival-orange border border-neutral-700">
                    {item.price}
                  </div>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-bold text-lg text-white font-display uppercase tracking-wide">
                      {item.name}
                    </h3>
                    {!item.image && (
                      <span className="font-mono text-base font-bold text-rival-orange whitespace-nowrap">
                        {item.price}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                {item.notes && (
                  <div className="pt-3 border-t border-neutral-800 text-[11px] text-rival-orange font-mono font-medium">
                    ★ {item.notes}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Big Batch Note */}
        <div className="mt-16 p-8 bg-neutral-900 border border-neutral-800 rounded-2xl text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold font-display uppercase text-white">
            Need Bulk Meat Pans For A Party?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            Order pulled pork by the pound, half-pans of house cheesy potatoes, or racks of ribs for family gatherings and office lunches.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Flame className="w-4 h-4" />
              <span>Inquire About Bulk Pans</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3 bg-neutral-800 hover:bg-neutral-750 text-white rounded-xl font-bold text-xs uppercase tracking-wider border border-neutral-700 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-rival-orange" />
              <span>Call Jeremy: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
