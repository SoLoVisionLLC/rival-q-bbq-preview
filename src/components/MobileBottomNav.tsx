import React from 'react';
import { Phone, Calendar, Utensils, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface MobileBottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPath,
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800 px-3 py-2">
      <div className="grid grid-cols-4 gap-1">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
        >
          <Phone className="w-5 h-5 text-rival-orange mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-tight">Call Pit</span>
        </a>

        <button
          onClick={() => onNavigate('/schedule')}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-colors ${
            currentPath === '/schedule'
              ? 'text-rival-orange bg-neutral-900 font-bold'
              : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Calendar className="w-5 h-5 mb-1 text-rival-orange" />
          <span className="text-[10px] font-bold uppercase tracking-tight">Stops</span>
        </button>

        <button
          onClick={() => onNavigate('/menu')}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-colors ${
            currentPath === '/menu'
              ? 'text-rival-orange bg-neutral-900 font-bold'
              : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Utensils className="w-5 h-5 mb-1 text-rival-orange" />
          <span className="text-[10px] font-bold uppercase tracking-tight">Menu</span>
        </button>

        <button
          onClick={onOpenInquiry}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-rival-orange text-white shadow-md shadow-rival-orange/20"
        >
          <Flame className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-tight">Catering</span>
        </button>
      </div>
    </div>
  );
};
