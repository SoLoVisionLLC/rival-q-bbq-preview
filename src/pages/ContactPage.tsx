import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Flame, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rival-orange/15 text-rival-orange text-xs font-bold uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Pit Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight">
            Connect With Rival Q
          </h1>
          <p className="text-sm text-neutral-400 mt-3">
            Have questions about today’s meat batch, scheduling a private food truck stop, or requesting catering? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold font-display uppercase text-white">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-rival-orange transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-rival-orange/20 text-rival-orange flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 block uppercase font-mono">Phone (Call / Text)</span>
                    <span className="font-bold text-white text-base">{BUSINESS_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-rival-orange transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-rival-orange/20 text-rival-orange flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 block uppercase font-mono">Official Email</span>
                    <span className="font-bold text-white">{BUSINESS_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="w-10 h-10 rounded-lg bg-rival-orange/20 text-rival-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 block uppercase font-mono">Service Territory</span>
                    <span className="font-bold text-white block">Fostoria, Ohio 44830</span>
                    <span className="text-xs text-neutral-400">Mobile food truck & catering. No fixed walk-in storefront.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">
                Verified Social Channels
              </h4>
              <div className="space-y-2">
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 hover:text-white hover:border-neutral-700 transition-colors"
                >
                  <span>Facebook Page (2.2K Followers)</span>
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                </a>
                <a
                  href={BUSINESS_INFO.streetFoodFinder}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 hover:text-white hover:border-neutral-700 transition-colors"
                >
                  <span>StreetFoodFinder Profile</span>
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold uppercase font-display text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mb-6">
                    Thanks for reaching out, {formData.name}. Jeremy will review your inquiry and follow up promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-rival-orange hover:bg-rival-orangeHover text-white text-xs font-bold uppercase rounded-xl"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold font-display uppercase text-white mb-2">
                    Send A Note Directly To Jeremy
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-750 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-750 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-750 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-750 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Pop-Up Truck Stop Request">Host Food Truck at Our Location</option>
                      <option value="Private Event Catering">Private Event Catering</option>
                      <option value="Bulk Meat Pan Order">Bulk Meat Pan Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you need..."
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-750 rounded-xl text-sm text-white focus:outline-none focus:border-rival-orange resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-rival-orange hover:bg-rival-orangeHover text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-rival-orange/20"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
