import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { CheckCircle2, Send } from "lucide-react";
import confetti from "canvas-confetti";

export const RsvpFormSection = () => {
  const { submitRsvp } = useWedding();
  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    phone: "",
    side: "Groom Side",
    guestsCount: 2,
    events: ["evt-muhurtham", "evt-reception"],
    dietary: "Traditional GSB Vegetarian Feast",
    accommodation: "Not Required",
    notes: ""
  });
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!rsvpForm.name.trim() || !rsvpForm.phone.trim()) return;

    submitRsvp(rsvpForm);
    setRsvpSuccess(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleEventCheckbox = (eventId) => {
    setRsvpForm((prev) => {
      const exists = prev.events.includes(eventId);
      return {
        ...prev,
        events: exists ? prev.events.filter((id) => id !== eventId) : [...prev.events, eventId]
      };
    });
  };

  return (
    <section id="rsvp" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <div className="max-w-2xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900/95 to-slate-950 border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8">
        {rsvpSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-3xl text-emerald-400">
              ✓
            </div>
            <h3 className="font-playfair text-2xl font-bold text-white">RSVP Received!</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Thank you so much! We are delighted to welcome you to celebrate Harshith & Nidhi's sacred union.
            </p>
            <button
              onClick={() => setRsvpSuccess(false)}
              className="py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-white"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleRsvpSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={rsvpForm.name}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                  placeholder="e.g. Suresh Nayak"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={rsvpForm.phone}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Side Representing</label>
                <select
                  value={rsvpForm.side}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, side: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="Groom Side">Groom's Side (Harshith)</option>
                  <option value="Bride Side">Bride's Side (Nidhi)</option>
                  <option value="Both Sides">Both Families / Mutual Friends</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Number of Attendees</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={rsvpForm.guestsCount}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, guestsCount: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Events Attending</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: "evt-haldi", label: "🌼 Haldi & Mehendi" },
                  { id: "evt-phool-muddi", label: "🪔 Phool Muddi (Sangeet)" },
                  { id: "evt-muhurtham", label: "💐 Sacred Muhurtham" },
                  { id: "evt-reception", label: "✨ Grand Reception" }
                ].map((evt) => (
                  <label key={evt.id} className="flex items-center gap-2 p-2 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rsvpForm.events.includes(evt.id)}
                      onChange={() => handleEventCheckbox(evt.id)}
                      className="rounded text-amber-500 focus:ring-0"
                    />
                    <span className="text-[11px] text-slate-200">{evt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Accommodation Needed?</label>
                <select
                  value={rsvpForm.accommodation}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, accommodation: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="Not Required">Not Required (Local Guest)</option>
                  <option value="Required - 1 Room">Required (1 Room)</option>
                  <option value="Required - 2 Rooms">Required (2 Rooms)</option>
                  <option value="Self Arranged">Self Arranged at Resort</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Meal Preference</label>
                <input
                  type="text"
                  value={rsvpForm.dietary}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, dietary: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0F4C81] via-[#D4AF37] to-[#2E6F40] text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-3"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Wedding RSVP</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
