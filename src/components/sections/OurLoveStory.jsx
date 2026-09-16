import React from "react";
import { STORY_TIMELINE } from "../../data/mockData";
import { Heart, Sparkles } from "lucide-react";

export const OurLoveStory = () => {
  return (
    <section id="love-story" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Our love story
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
      </div>

      {/* Timeline Steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {STORY_TIMELINE.map((item) => (
          <div 
            key={item.step}
            className="rounded-2xl p-5 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-lg group relative flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl p-2 rounded-xl bg-slate-800/80 group-hover:scale-110 transition-transform">
                {item.emoji}
              </span>
              <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                {item.phase}
              </span>
            </div>

            <div>
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

      {/* Wedding Emblem Card */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0F4C81]/30 via-slate-950 to-[#2E6F40]/30 border border-[#D4AF37]/40 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="text-3xl sm:text-4xl">
            🌊 &nbsp;+&nbsp; 🌳 &nbsp;+&nbsp; ❤️
          </div>
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
            Sea + Forest + Eternal Love
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The Arabian coastal palm blending into the towering forest tree, tied with the sacred knot of devotion. Official hashtag: <span className="text-amber-300 font-mono font-semibold">#FromCoastToGhats</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
