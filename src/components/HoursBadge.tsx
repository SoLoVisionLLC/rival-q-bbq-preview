import React, { useState, useEffect } from 'react';
import { getHoursStatus, HoursStatus } from '../utils/hours';
import { Clock } from 'lucide-react';

interface HoursBadgeProps {
  variant?: 'compact' | 'detailed' | 'pill';
  className?: string;
}

export const HoursBadge: React.FC<HoursBadgeProps> = ({ variant = 'compact', className = '' }) => {
  const [status, setStatus] = useState<HoursStatus>(getHoursStatus());

  useEffect(() => {
    // Update every minute
    const timer = setInterval(() => {
      setStatus(getHoursStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const colorClasses = {
    green: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    amber: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    neutral: 'bg-neutral-800 text-neutral-300 border-neutral-700',
    red: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  }[status.statusColor];

  const dotClasses = {
    green: 'bg-emerald-400 animate-pulse',
    amber: 'bg-amber-400 animate-ping',
    neutral: 'bg-neutral-500',
    red: 'bg-rose-500',
  }[status.statusColor];

  if (variant === 'pill') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${colorClasses} ${className}`}>
        <span className={`w-2 h-2 rounded-full ${dotClasses}`} />
        <span>{status.badgeLabel}</span>
        <span className="text-neutral-400">• {status.currentTimeEastern}</span>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`p-4 rounded-xl border bg-rival-charcoal/90 ${colorClasses} ${className}`}>
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 font-semibold text-sm tracking-wide uppercase">
            <span className={`w-2.5 h-2.5 rounded-full ${dotClasses}`} />
            <span>{status.statusText}</span>
          </div>
          <span className="text-xs text-neutral-400 flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5" />
            {status.currentTimeEastern}
          </span>
        </div>
        <p className="text-xs text-neutral-300">
          {status.nextStopDetails}
        </p>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium ${colorClasses} ${className}`}>
      <span className={`w-2 h-2 rounded-full ${dotClasses}`} />
      <span className="font-semibold">{status.badgeLabel}</span>
      <span className="hidden sm:inline text-neutral-400">({status.currentTimeEastern})</span>
    </div>
  );
};
