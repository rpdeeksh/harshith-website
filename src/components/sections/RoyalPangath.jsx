import React from "react";
import { WEDDING_FEAST_MENU } from "../../data/mockData";
import { Utensils } from "lucide-react";

export const RoyalPangath = () => {
  return (
    <section id="feast" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Royal Pangath
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
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
  );
};
