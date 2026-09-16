import React from "react";
import { THEMES_DATA } from "../data/mockData";
import { Sparkles } from "lucide-react";

export const KaravaliVisuals = () => {
  const data = THEMES_DATA.karavali;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-950/80 via-slate-900 to-orange-950/80 border border-amber-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-900/60 border border-amber-500/50 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{data.kannadaTitle}</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
            Coastal Karavali Heritage
          </h2>
          <p className="font-serif text-sm sm:text-base text-amber-200/90 italic mt-1">
            "{data.subTitle}"
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
            {data.heroDescription}
          </p>
        </div>
      </div>

      {/* Visual Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.elements.map((el, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-amber-950/30 border border-amber-500/30 hover:border-amber-400/70 transition-all shadow-lg hover:shadow-amber-950/50 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl group-hover:scale-110 transition-transform">{el.emoji}</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 font-bold uppercase tracking-wider">
                  {el.tag}
                </span>
              </div>
              <h3 className="font-cinzel text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                {el.title}
              </h3>
              <p className="text-xs text-slate-300/80 mt-1.5 leading-relaxed">
                {el.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
