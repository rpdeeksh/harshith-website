import React from "react";
import { Waves, Trees, Sparkles, ArrowRight } from "lucide-react";

export const HeritageAndOrigins = () => {
  return (
    <section id="heritage" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Heritage and Origins
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Groom's Roots Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0F4C81]/30 via-slate-900/90 to-slate-950 border border-[#0F4C81]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-4 right-4 text-4xl opacity-20 select-none">🌊</div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2 rounded-xl bg-[#0F4C81]/50 text-cyan-300 text-lg">🌊</span>
              <div>
                <div className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider">The Groom's Roots</div>
                <h3 className="font-playfair text-2xl font-bold text-white">Harshith</h3>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200/90 leading-relaxed mb-4">
              The Prabhu family heritage is shaped by the GSB Konkani communities of the Kundapura and Udupi coast, where temple service, learning, and welcoming every guest are cherished across generations.
            </div>

            <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed space-y-2">
              Family memories are carried through evening prayers, conversations around the family meal, and the annual rhythm of coastal festivals. Harshith brings that quiet legacy of responsibility, music, and generous coastal hospitality into this new chapter.
            </p>
          </div>

          {/* Icon 1: Yakshagana Coastal Heritage */}
          <div className="mt-6 pt-4 border-t border-blue-900/40 flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-lg bg-slate-950/80 p-1 mb-2 hover:scale-105 transition-transform flex items-center justify-center">
              <img
                src="/groom_yakshagana_icon.png"
                alt="Yakshagana Coastal Heritage"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="text-[11px] font-semibold text-amber-300">
              Coastal Yakshagana & Cultural Roots
            </div>
            <div className="text-[10px] text-slate-400 mb-3">
              Temple Chariots • Ancient Rites • Arabian Sea
            </div>
            <button
              onClick={() => {
                const el = document.getElementById("area-gems") || document.getElementById("explore");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-[#0F4C81]/60 hover:bg-[#0F4C81] text-cyan-200 border border-cyan-400/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Explore Coastal Heritage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bride's Roots Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#2E6F40]/30 via-slate-900/90 to-slate-950 border border-[#2E6F40]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-4 right-4 text-4xl opacity-20 select-none">🌿</div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2 rounded-xl bg-[#2E6F40]/50 text-emerald-300 text-lg">🌿</span>
              <div>
                <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">The Bride's Roots</div>
                <h3 className="font-playfair text-2xl font-bold text-white">Nidhi</h3>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-200/90 leading-relaxed mb-4">
              The Khambadkone family roots reach into Dandeli and the Western Ghats, a landscape where forest stewardship, community bonds, and respect for the living world are part of everyday life.
            </div>

            <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed space-y-2">
              The region's monsoon trails, river crossings, and bird-filled teak canopies form a living archive of family stories. Nidhi carries forward its sense of curiosity, care for nature, and unhurried warmth as both families come together.
            </p>
          </div>

          {/* Icon 2: Dandeli Rainforest & River Kali */}
          <div className="mt-6 pt-4 border-t border-emerald-900/40 flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-emerald-400/40 shadow-lg bg-slate-950/80 p-1 mb-2 hover:scale-105 transition-transform flex items-center justify-center">
              <img
                src="/bride_dandeli_icon.jpg"
                alt="Dandeli Western Ghats & Kali River"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="text-[11px] font-semibold text-emerald-300">
              Dandeli Rainforest & Kali River Heritage
            </div>
            <div className="text-[10px] text-slate-400 mb-3">
              Hornbill Canopy • Western Ghats • River Rapids
            </div>
            <button
              onClick={() => {
                const el = document.getElementById("area-gems") || document.getElementById("explore");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-[#2E6F40]/60 hover:bg-[#2E6F40] text-emerald-200 border border-emerald-400/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Explore Forest Heritage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
