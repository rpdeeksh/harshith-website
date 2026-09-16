import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { STORY_TIMELINE, THEMES_DATA } from "../data/mockData";
import { 
  Waves, 
  Trees, 
  Heart, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

export const WebsiteStoryline = () => {
  const { activeTheme, switchTheme } = useWedding();
  const [activeStoryTab, setActiveStoryTab] = useState("all");

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Section 1: Our Roots (Groom & Bride) */}
      <div id="roots" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Section 1 • Heritage & Origins</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Our Roots
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-serif italic">
            "Born of two lands blessed by nature: the sacred coastal tides of Karnataka and the emerald depths of Dandeli."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Groom's Story Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0F4C81]/30 via-slate-900/90 to-slate-950 border border-[#0F4C81]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-4xl opacity-20 select-none">🌊</div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="p-2 rounded-xl bg-[#0F4C81]/50 text-cyan-300 text-lg">🌊</span>
                <div>
                  <div className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider">The Groom's Story</div>
                  <h3 className="font-playfair text-2xl font-bold text-white">Harshith Nayak</h3>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200/90 leading-relaxed mb-4">
                Born into the rich GSB Konkani traditions of Coastal Karnataka, surrounded by the Arabian Sea, temple culture, and close family values.
              </div>

              <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed space-y-2">
                Growing up amidst the holy chimes of Udupi Krishna Temple, fragrant jasmine strings, festive Pangath feasts, and the roaring golden shores of Maravanthe, Harshith carries a deep reverence for family traditions, humility, and the warmth of coastal hospitality.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-900/40 grid grid-cols-3 gap-2 text-center text-[11px]">
              <div className="p-2 rounded-xl bg-slate-950/60 border border-blue-900/40">
                <span className="block text-base mb-0.5">🪔</span>
                <span className="text-blue-200 font-medium">Temple Lamps</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-blue-900/40">
                <span className="block text-base mb-0.5">🌴</span>
                <span className="text-blue-200 font-medium">Coconut Palms</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-blue-900/40">
                <span className="block text-base mb-0.5">🌊</span>
                <span className="text-blue-200 font-medium">Arabian Sea</span>
              </div>
            </div>
          </div>

          {/* Bride's Story Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#2E6F40]/30 via-slate-900/90 to-slate-950 border border-[#2E6F40]/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-4xl opacity-20 select-none">🌿</div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="p-2 rounded-xl bg-[#2E6F40]/50 text-emerald-300 text-lg">🌿</span>
                <div>
                  <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">The Bride's Story</div>
                  <h3 className="font-playfair text-2xl font-bold text-white">Nidhi Prabhu</h3>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-200/90 leading-relaxed mb-4">
                Raised amidst the breathtaking forests and rivers of Dandeli, where nature, adventure, and simplicity shaped her journey.
              </div>

              <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed space-y-2">
                Nidhi grew up listening to the rhythm of white-water rapids on River Kali, bird songs from high teak tree canopies, and the peaceful mountain mist of the Western Ghats. Her heart thrives on love for wildlife, genuine warmth, and graceful simplicity.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-900/40 grid grid-cols-3 gap-2 text-center text-[11px]">
              <div className="p-2 rounded-xl bg-slate-950/60 border border-emerald-900/40">
                <span className="block text-base mb-0.5">🌲</span>
                <span className="text-emerald-200 font-medium">Forest Trails</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-emerald-900/40">
                <span className="block text-base mb-0.5">🏞️</span>
                <span className="text-emerald-200 font-medium">Kali River</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/60 border border-emerald-900/40">
                <span className="block text-base mb-0.5">⛰️</span>
                <span className="text-emerald-200 font-medium">Western Ghats</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Section 2: Two Journeys, One Destination (Interactive Timeline) */}
      <div id="timeline" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-semibold mb-2">
            <Heart className="w-3 h-3 text-rose-400" />
            <span>Section 2 • Our Love Story</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Two Journeys, One Destination
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-serif italic">
            "From the Coast to the Ghats, One Beautiful Journey."
          </p>
        </div>

        {/* Timeline Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {STORY_TIMELINE.map((item, index) => (
            <div 
              key={item.step}
              className="rounded-2xl p-5 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-lg group relative flex flex-col justify-between"
            >
              {/* Step indicator top */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl p-2 rounded-xl bg-slate-800/80 group-hover:scale-110 transition-transform">
                  {item.emoji}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                  STEP {item.step}
                </span>
              </div>

              <div>
                <div className="text-[10px] font-semibold text-blue-300 uppercase tracking-wide">
                  {item.phase}
                </div>
                <h4 className="font-playfair text-base font-bold text-white mt-1 mb-1.5 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 font-medium">
                {item.side}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Showcase Section: Coastal Karnataka & Dandeli */}
      <div id="culture" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Cultural Showcase Section</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Where Coastal Heritage Meets Forest Wonder
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Dive into the authentic flavors, spiritual temples, and wildlife wonders that define our heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Coastal Karnataka Showcase */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0F4C81]/20 via-slate-900 to-slate-950 border border-[#0F4C81]/40 shadow-xl space-y-4">
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
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#2E6F40]/20 via-slate-900 to-slate-950 border border-[#2E6F40]/40 shadow-xl space-y-4">
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
      </div>

      {/* Wedding Logo Concept Section: 🌊 + 🌳 + ❤️ */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0F4C81]/30 via-slate-950 to-[#2E6F40]/30 border border-[#D4AF37]/40 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
            Wedding Logo Concept & Emblem Design
          </div>
          <div className="text-3xl sm:text-4xl">
            🌊 &nbsp;+&nbsp; 🌳 &nbsp;+&nbsp; ❤️
          </div>
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
            Sea + Forest + Eternal Love
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Rather than generic initials, this emblem fuses the Arabian coastal palm blending into the towering forest tree, tied with the knot of lifelong devotion. It serves as our website emblem, invitation seal, and official wedding hashtag branding: <span className="text-amber-300 font-mono font-semibold">#FromCoastToGhats</span>.
          </p>
        </div>
      </div>

    </section>
  );
};
