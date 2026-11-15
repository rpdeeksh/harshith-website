import React from "react";
import { KARNATAKA_DESTINATIONS } from "../../data/mockData";
import { Compass, Waves, Trees } from "lucide-react";

export const SpecialGuestAndCulture = () => {
  return (
    <section id="explore" data-section="area-gems" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 scroll-mt-24 relative">
      {/* Anchor for direct area-gems navigation */}
      <div id="area-gems" className="absolute -top-24" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>Outstation Guide & Cultural Heritage</span>
        </div>
        <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
          Area Gems
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 font-serif italic">
          "From the serene coastal shores of Kundapura and Udupi to the misty rainforests and roaring Kali River of Dandeli."
        </p>
      </div>

      {/* Cultural Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coastal Karnataka Showcase */}
        <div id="coastal-area-gems" className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0F4C81]/20 via-slate-900 to-slate-950 border border-[#0F4C81]/40 shadow-xl space-y-4 scroll-mt-28">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌊</span>
              <div>
                <h3 className="font-playfair text-xl font-bold text-white">Coastal Karnataka</h3>
                <span className="text-[11px] text-cyan-300">Udupi Cuisine • GSB Traditions • Temple Heritage</span>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-900/60 text-blue-200 border border-blue-700/50">
              Groom Side
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Coastal Karnataka is a treasure trove of spiritual depth and gastronomic legacy. From ancient wooden temple chariots to world-famous Udupi cuisine and sacred Vedic rituals.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-900/40">
              <div className="text-xs font-bold text-cyan-200 flex items-center gap-1.5 mb-1">
                <span>🏖️</span>
                <span>Kodi Beach & Maravanthe</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Pristine golden sands where sea and river flow in parallel harmony.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-900/40">
              <div className="text-xs font-bold text-cyan-200 flex items-center gap-1.5 mb-1">
                <span>🛕</span>
                <span>Udupi Krishna Temple</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Divine darshan through Kanakana Kindi and grand festival Rathas.
              </p>
            </div>
          </div>
        </div>

        {/* Dandeli Showcase */}
        <div id="forest-area-gems" className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#2E6F40]/20 via-slate-900 to-slate-950 border border-[#2E6F40]/40 shadow-xl space-y-4 scroll-mt-28">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <div>
                <h3 className="font-playfair text-xl font-bold text-white">Dandeli Rainforest</h3>
                <span className="text-[11px] text-emerald-300">Kali River • Syntheri Rocks • Western Ghats</span>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-900/60 text-emerald-200 border border-emerald-700/50">
              Bride Side
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Dandeli is the untamed heart of Karnataka's rainforests. Home to roaring white-water rapids, centuries-old teak forests, hornbill sanctuaries, and emerald hill trails.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-900/40">
              <div className="text-xs font-bold text-emerald-200 flex items-center gap-1.5 mb-1">
                <span>🌊</span>
                <span>River Kali Waterways</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Thrilling rapids, natural jacuzzis, and coracle boating in misty waters.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-900/40">
              <div className="text-xs font-bold text-emerald-200 flex items-center gap-1.5 mb-1">
                <span>🦜</span>
                <span>Syntheri Rocks & Hornbills</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Towering 300-ft granite monolith cliff and rare aviary species.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Outstation Guest Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* Coastal Destinations */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#0F4C81]/50">
            <span className="text-2xl">🌊</span>
            <h3 className="font-playfair text-xl font-bold text-cyan-200">Explore Coastal Karnataka</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {KARNATAKA_DESTINATIONS.coastal.map((dest, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-slate-900/90 border border-blue-900/40 flex flex-col group">
                <div className="h-32 overflow-hidden relative">
                  <img src={dest.image} alt={dest.name} className="watercolor-memory w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-cyan-300 font-mono">
                    {dest.distance}
                  </div>
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-xs text-white mb-1">{dest.name}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{dest.desc}</p>
                  <a href={dest.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-3 text-[10px] text-cyan-300 underline underline-offset-2">Open location ↗</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dandeli Destinations */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#2E6F40]/50">
            <span className="text-2xl">🌿</span>
            <h3 className="font-playfair text-xl font-bold text-emerald-200">Explore Western Ghats</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {KARNATAKA_DESTINATIONS.dandeli.map((dest, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-slate-900/90 border border-emerald-900/40 flex flex-col group">
                <div className="h-32 overflow-hidden relative">
                  <img src={dest.image} alt={dest.name} className="watercolor-memory w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-emerald-300 font-mono">
                    {dest.distance}
                  </div>
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-xs text-white mb-1">{dest.name}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{dest.desc}</p>
                  <a href={dest.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-3 text-[10px] text-emerald-300 underline underline-offset-2">Open location ↗</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
