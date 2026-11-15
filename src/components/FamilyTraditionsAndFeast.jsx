import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { 
  KONKANI_TRADITIONS, 
  WEDDING_FEAST_MENU, 
  KARNATAKA_DESTINATIONS 
} from "../data/mockData";
import { 
  
  MapPin, 
  Car, 
  Plane, 
  Train, 
  Hotel, 
  Utensils, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Heart, 
  Sparkles, 
  ExternalLink,
  Send,
  Compass
} from "lucide-react";
import confetti from "canvas-confetti";

export const FamilyTraditionsAndFeast = () => {
  const { weddingDetails, submitRsvp } = useWedding();

  // RSVP Form State
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
    <div className="space-y-20 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section 3: Family (With Blessings From) */}
      <section id="family" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Section 3 • Lineage & Blessings</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            With Blessings From
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-serif italic">
            "We are forever grateful to our beloved parents and ancestors whose prayers guide our union."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Groom's Family Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0F4C81]/25 via-slate-900 to-slate-950 border border-[#0F4C81]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-blue-900/40 pb-4">
              <span className="text-3xl">🌊</span>
              <div>
                <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider">Groom's Family</span>
                <h3 className="font-playfair text-2xl font-bold text-white">Nayak Family</h3>
                <span className="text-xs text-blue-200/80">Coastal Karnataka (GSB Konkani Lineage)</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-950/70 p-3 rounded-2xl border border-blue-900/40">
                <span className="text-[10px] uppercase text-amber-300/80 font-bold block mb-1">Parents</span>
                <p className="text-sm font-semibold text-white">{weddingDetails.groomParents}</p>
              </div>

              <div className="bg-slate-950/70 p-3 rounded-2xl border border-blue-900/40">
                <span className="text-[10px] uppercase text-cyan-300/80 font-bold block mb-1">Grandparents</span>
                <p className="text-sm font-semibold text-white">{weddingDetails.groomGrandparents}</p>
              </div>

              <div className="bg-slate-950/70 p-3 rounded-2xl border border-blue-900/40">
                <span className="text-[10px] uppercase text-slate-400 font-bold block mb-1">Family Coordinator</span>
                <p className="text-xs text-blue-200">{weddingDetails.groomSideContact.name} • {weddingDetails.groomSideContact.phone}</p>
              </div>
            </div>
          </div>

          {/* Bride's Family Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#2E6F40]/25 via-slate-900 to-slate-950 border border-[#2E6F40]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-emerald-900/40 pb-4">
              <span className="text-3xl">🌿</span>
              <div>
                <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">Bride's Family</span>
                <h3 className="font-playfair text-2xl font-bold text-white">Prabhu Family</h3>
                <span className="text-xs text-emerald-200/80">Dandeli & Western Ghats Heritage</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-950/70 p-3 rounded-2xl border border-emerald-900/40">
                <span className="text-[10px] uppercase text-amber-300/80 font-bold block mb-1">Parents</span>
                <p className="text-sm font-semibold text-white">{weddingDetails.brideParents}</p>
              </div>

              <div className="bg-slate-950/70 p-3 rounded-2xl border border-emerald-900/40">
                <span className="text-[10px] uppercase text-emerald-300/80 font-bold block mb-1">Grandparents</span>
                <p className="text-sm font-semibold text-white">{weddingDetails.brideGrandparents}</p>
              </div>

              <div className="bg-slate-950/70 p-3 rounded-2xl border border-emerald-900/40">
                <span className="text-[10px] uppercase text-slate-400 font-bold block mb-1">Family Coordinator</span>
                <p className="text-xs text-emerald-200">{weddingDetails.brideSideContact.name} • {weddingDetails.brideSideContact.phone}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Venue & Navigation */}
      <section id="venue" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Section 4 • Wedding Venue & Travel</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Wedding Venue & Travel Guide
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {weddingDetails.primaryVenue}, {weddingDetails.venueAddress}
          </p>
        </div>

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Map Preview & Directions Card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between">
            {/* Embedded Interactive Google Maps Iframe */}
            <div className="w-full h-72 sm:h-80 relative bg-slate-900">
              <iframe
                title="Wedding Venue Map"
                src="https://maps.app.goo.gl/TQZC6zXtqZFNLXbZ9?g_st=aw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-400/40 text-xs text-amber-300 font-semibold shadow-lg">
                📍 Kalamandir, Nagoor
              </div>
            </div>

            <div className="p-6 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-playfair text-base font-bold text-white">Shri Gopal Krishna Kalamandir</h4>
                <p className="text-xs text-slate-400 mt-0.5">{weddingDetails.venueAddress}</p>
              </div>

              <a
                href={weddingDetails.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-xs flex items-center gap-2 shadow-md flex-shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Travel & Transit Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Parking */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs mb-1.5">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Parking & Valet Facilities</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {weddingDetails.travelGuidance.parking}
              </p>
            </div>

            {/* Airport guidance */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs mb-2">
                <Plane className="w-4 h-4 text-cyan-400" />
                <span>Nearby Airports</span>
              </div>
              <div className="space-y-2 text-xs">
                {weddingDetails.travelGuidance.airports.map((ap, i) => (
                  <div key={i} className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-1.5 last:border-0 last:pb-0">
                    <span className="font-medium text-white text-[11px]">{ap.name}</span>
                    <span className="text-[10px] text-slate-400 text-right">{ap.dist}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Railway guidance */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs mb-2">
                <Train className="w-4 h-4 text-emerald-400" />
                <span>Railway Stations (Konkan Railway)</span>
              </div>
              <div className="space-y-2 text-xs">
                {weddingDetails.travelGuidance.railway.map((rw, i) => (
                  <div key={i} className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-1.5 last:border-0 last:pb-0">
                    <span className="font-medium text-white text-[11px]">{rw.name}</span>
                    <span className="text-[10px] text-slate-400 text-right">{rw.dist}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotels */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs mb-2">
                <Hotel className="w-4 h-4 text-[#D4AF37]" />
                <span>Nearby Accommodation & Resorts</span>
              </div>
              <div className="space-y-1.5 text-xs">
                {weddingDetails.travelGuidance.hotels.map((h, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="font-medium text-white">{h.name}</span>
                    <span className="text-[10px] text-slate-400">{h.area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 5: Coastal Karnataka & Dandeli Outstation Guide */}
      <section id="guide" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Section 5 • Special Guest Experience</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Explore Karnataka: Coast & Rainforest
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Curated sightseeing highlights for outstation guests traveling to celebrate with us.
          </p>
        </div>

        {/* 2 Tabs: Coastal vs Dandeli Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Coastal Highlights */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#0F4C81]/50">
              <span className="text-2xl">🌊</span>
              <h3 className="font-playfair text-xl font-bold text-cyan-200">Coastal Karnataka Highlights</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {KARNATAKA_DESTINATIONS.coastal.map((dest, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-slate-900/90 border border-blue-900/40 flex flex-col group">
                  <div className="h-32 overflow-hidden relative">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-cyan-300 font-mono">
                      {dest.distance}
                    </div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-white mb-1">{dest.name}</h4>
                      <p className="text-[11px] text-slate-400 leading-snug">{dest.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dandeli Highlights */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#2E6F40]/50">
              <span className="text-2xl">🌿</span>
              <h3 className="font-playfair text-xl font-bold text-emerald-200">Dandeli Forest Highlights</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {KARNATAKA_DESTINATIONS.dandeli.map((dest, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-slate-900/90 border border-emerald-900/40 flex flex-col group">
                  <div className="h-32 overflow-hidden relative">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-emerald-300 font-mono">
                      {dest.distance}
                    </div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-white mb-1">{dest.name}</h4>
                      <p className="text-[11px] text-slate-400 leading-snug">{dest.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Konkani Traditions (The Beauty of GSB Traditions) */}
      <section id="traditions" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Section 6 • Sacred Rituals</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            The Beauty of GSB Konkani Traditions
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-serif italic">
            Ancient Vedic rites infused with coastal grace, cherished by elders and illuminating for all guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {KONKANI_TRADITIONS.map((trad, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950 border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-lg flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{trad.icon}</div>
                <div className="text-[10px] font-mono text-[#D4AF37] mb-1">{trad.sanskrit}</div>
                <h4 className="font-playfair text-base font-bold text-white mb-2">{trad.title}</h4>
                <p className="text-[11px] text-slate-300/80 leading-relaxed">{trad.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-amber-300/80 font-medium">
                Ritual 0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Wedding Feast (Traditional GSB Wedding Menu) */}
      <section id="feast" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            <span>Section 7 • Royal Pangath</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            A Traditional GSB Wedding Feast
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-serif italic">
            Served on fragrant banana leaves with steaming hot rice and pure cow's ghee.
          </p>
        </div>

        {/* Feast Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEDDING_FEAST_MENU.map((dish, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-slate-900/90 border border-amber-500/30 hover:border-amber-400 shadow-xl flex flex-col group transition-all"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-[10px] font-bold text-amber-300">
                  {dish.tag}
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[11px] font-medium text-white">
                  {dish.kannada}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider mb-1">
                    {dish.category}
                  </div>
                  <h4 className="font-playfair text-lg font-bold text-white mb-1.5">{dish.name}</h4>
                  <p className="text-xs text-slate-300/85 leading-relaxed">{dish.desc}</p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>🍃</span>
                  <span>Pure GSB Traditional Recipe</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: RSVP Interactive Form */}
      <section id="rsvp" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Section 9 • RSVP Form</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Kindly Confirm Your Presence
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Please help us prepare seamless hospitality, seating, and festive feast arrangements.
          </p>
        </div>

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

      {/* Section 10: Assistance & Emergency Contacts */}
      <section id="contact" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Section 10 • Guest Assistance</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Need Assistance? We're Here For You
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Reach out directly for transport pick-ups, room keys, timings, or any queries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Groom Contact */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-blue-900/40 shadow-xl space-y-3">
            <span className="text-2xl">🌊</span>
            <div className="text-xs font-bold text-cyan-300 uppercase">Groom Side Contact</div>
            <h4 className="font-playfair text-lg font-bold text-white">{weddingDetails.groomSideContact.name}</h4>
            <p className="text-xs text-slate-400">Kundapura / Mangalore logistics & rituals</p>
            <div className="pt-2 flex gap-2">
              <a
                href={`tel:${weddingDetails.groomSideContact.phone.replace(/[^0-9]/g, "")}`}
                className="flex-1 py-2 px-3 rounded-xl bg-blue-950 hover:bg-blue-900 border border-blue-800 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
              <a
                href={`https://wa.me/${weddingDetails.groomSideContact.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Bride Contact */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-900/40 shadow-xl space-y-3">
            <span className="text-2xl">🌿</span>
            <div className="text-xs font-bold text-emerald-300 uppercase">Bride Side Contact</div>
            <h4 className="font-playfair text-lg font-bold text-white">{weddingDetails.brideSideContact.name}</h4>
            <p className="text-xs text-slate-400">Dandeli outstation guest guidance</p>
            <div className="pt-2 flex gap-2">
              <a
                href={`tel:${weddingDetails.brideSideContact.phone.replace(/[^0-9]/g, "")}`}
                className="flex-1 py-2 px-3 rounded-xl bg-blue-950 hover:bg-blue-900 border border-blue-800 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
              <a
                href={`https://wa.me/${weddingDetails.brideSideContact.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Accommodation Coordinator */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-amber-900/40 shadow-xl space-y-3">
            <span className="text-2xl">🏨</span>
            <div className="text-xs font-bold text-amber-300 uppercase">Accommodation Coordinator</div>
            <h4 className="font-playfair text-lg font-bold text-white">{weddingDetails.accommodationCoordinator.name}</h4>
            <p className="text-xs text-slate-400">Room allocations, resort check-in & check-out</p>
            <div className="pt-2 flex gap-2">
              <a
                href={`tel:${weddingDetails.accommodationCoordinator.phone.replace(/[^0-9]/g, "")}`}
                className="flex-1 py-2 px-3 rounded-xl bg-blue-950 hover:bg-blue-900 border border-blue-800 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
              <a
                href={`https://wa.me/${weddingDetails.accommodationCoordinator.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
