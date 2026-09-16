import React from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  MapPin, 
  Car, 
  Plane, 
  Train, 
  Hotel, 
  ExternalLink 
} from "lucide-react";

export const WeddingVenueAndTravel = () => {
  const { weddingDetails } = useWedding();

  return (
    <section id="venue" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Wedding Venue and travel
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map Preview & Directions Card */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div className="w-full h-72 sm:h-80 relative bg-slate-900">
            <iframe
              title="Wedding Venue Map"
              src="https://maps.google.com/maps?q=Shri+Gopal+Krishna+Kalamandir+Nagoor&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-400/40 text-xs text-amber-300 font-semibold shadow-lg">
              📍 Kalamandir, Nagoor (Exact Location)
            </div>
          </div>

          <div className="p-6 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-playfair text-base font-bold text-white">{weddingDetails.primaryVenue}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{weddingDetails.venueAddress}</p>
            </div>

            <a
              href="https://share.google/DyDrvV1ta8c0rMIScP"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-xs flex items-center gap-2 shadow-md flex-shrink-0"
            >
              <span>Open Exact Location</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Travel & Transit Details */}
        <div className="lg:col-span-5 space-y-4">
          {/* Parking (Action 11) */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs mb-1.5">
              <Car className="w-4 h-4 text-amber-400" />
              <span>Parking</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dedicated on-site parking available for up to 50 vehicles at Kalamandir premises.
            </p>
          </div>

          {/* Railway guidance (Action 12) */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs mb-2">
              <Train className="w-4 h-4 text-emerald-400" />
              <span>Railway Stations (Konkan Railway)</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-1.5">
                <span className="font-medium text-white text-[11px]">Kundapura Railway Station</span>
                <span className="text-[11px] text-amber-300 font-mono font-semibold text-right">22 kms</span>
              </div>
              <div className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-1.5">
                <span className="font-medium text-white text-[11px]">Byndoor Mookambika Road</span>
                <span className="text-[11px] text-amber-300 font-mono font-semibold text-right">10 kms</span>
              </div>
              <div className="flex items-start justify-between gap-2 pb-0.5">
                <span className="font-medium text-white text-[11px]">Udupi Railway Station</span>
                <span className="text-[11px] text-amber-300 font-mono font-semibold text-right">42 kms</span>
              </div>
            </div>
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

          {/* Hotels (Action 14) */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs mb-2">
              <Hotel className="w-4 h-4 text-[#D4AF37]" />
              <span>Nearby Accommodation</span>
            </div>
            <div className="space-y-2.5 text-xs">
              {weddingDetails.travelGuidance.hotels.map((h, i) => (
                <div key={i} className="flex items-center justify-between gap-2 text-[11px] border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                  <div>
                    <span className="font-medium text-white block">{h.name}</span>
                    <span className="text-[10px] text-slate-400">{h.area}</span>
                  </div>
                  {h.mapUrl && (
                    <a
                      href={h.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[#D4AF37] text-[10px] font-semibold flex items-center gap-1 shrink-0"
                    >
                      <span>Map</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
