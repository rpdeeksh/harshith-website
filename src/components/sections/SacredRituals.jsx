import React from "react";
import { KONKANI_TRADITIONS } from "../../data/mockData";
import { Sparkles } from "lucide-react";

export const SacredRituals = () => {
  return (
    <section id="traditions" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Sacred rituals
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
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
              Auspicious Rites
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
