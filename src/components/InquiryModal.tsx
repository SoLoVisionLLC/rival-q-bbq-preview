import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, Flame, Users, Calendar } from 'lucide-react';
import { BUSINESS_INFO, CATERING_PACKAGES } from '../data/siteData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, defaultPackage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    guestCount: '40',
    selectedPackage: defaultPackage || 'The Smokehouse Buffet',
    serviceStyle: 'Full Service Food Truck',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-rival-charcoal border border-neutral-700 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-display uppercase tracking-wide">
              Catering Inquiry Received!
            </h3>
            <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>! Jeremy and the Rival Q BBQ crew will review your event date ({formData.eventDate || 'Upcoming'}) and reach out directly at <span className="text-rival-orange font-semibold">{formData.phone || formData.email}</span>.
            </p>
            <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 text-xs text-neutral-400 max-w-md mx-auto mb-6 text-left space-y-1">
              <p><strong className="text-neutral-200">Package:</strong> {formData.selectedPackage}</p>
              <p><strong className="text-neutral-200">Guests:</strong> ~{formData.guestCount} people</p>
              <p><strong className="text-neutral-200">Direct Contact:</strong> {BUSINESS_INFO.phone}</p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-semibold text-sm transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-rival-orange text-xs font-bold uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4" />
              <span>Direct Smoker Catering Booking</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display uppercase tracking-tight">
              Book Rival Q For Your Event
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mb-6">
              Feed your crowd real wood-smoked BBQ! We handle private parties, company picnics, weddings, and festivals throughout Seneca County & Northwest Ohio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jeremy Weidner"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(419) 306-4401"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Target Event Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Estimated Guests
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="15"
                      max="1000"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                    />
                    <Users className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Service Format
                  </label>
                  <select
                    value={formData.serviceStyle}
                    onChange={(e) => setFormData({ ...formData, serviceStyle: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                  >
                    <option value="Full Service Food Truck">Food Truck On-Site Service</option>
                    <option value="Hot Buffet Drop-Off">Hot Buffet Drop-Off & Set</option>
                    <option value="Bulk Pick-Up Pans">Bulk Pans Self-Service Pick Up</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Interested Package
                </label>
                <select
                  value={formData.selectedPackage}
                  onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                >
                  {CATERING_PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.name}>
                      {pkg.name} ({pkg.pricePerPerson})
                    </option>
                  ))}
                  <option value="Custom Pitmaster Menu">Custom Smoker Menu / Special Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Event Location & Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about the venue, timing, or any specific meat preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-400 text-center sm:text-left">
                  Need faster response? Call Jeremy directly: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-rival-orange hover:underline font-semibold">{BUSINESS_INFO.phone}</a>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Flame className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
