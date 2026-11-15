import React, { useState } from "react";
import { WEDDING_FEAST_MENU } from "../../data/mockData";
import { Utensils, Maximize2, X, Sparkles } from "lucide-react";

export const RoyalPangath = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <section id="feast" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
          <Utensils className="w-3.5 h-3.5 text-amber-400" />
          <span>GSB Culinary Heritage • Traditional Feast</span>
        </div>
        <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
          Royal Pangath
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 font-serif italic">
          "Served with love on sacred plantain leaves in long ceremonial rows, accompanied by steaming hot red rice and pure cow's ghee."
        </p>
      </div>

      {/* Grand Royal Pangath Watercolor Feature Banner */}
      <div 
        onClick={() => setSelectedDish({
          name: "Royal Pangath",
          kannada: "ಪಾರಮ್ಪರಿಕ ಪಙ್ಕ್ತಿ ಭೋಜನ",
          category: "Sacred Banana Leaf Feast (9 Dishes)",
          desc: "The time-honored GSB Konkani wedding banquet spread on a continuous green plantain leaf: hot red boiled rice, golden Dalitoy tempered with hing and ghee, crispy Jeevkadgi Phodi, fiery Batate Song, Tendle Bibbe Upkari, sweet-savory Pineapple Sasam, crunchy Happolu & Vodi, authentic Patrode, fragrant Patholi, and celebration Gajbaje.",
          tag: "The Complete Banquet",
          image: "/gsb-royal-pangath-watercolor.jpg"
        })}
        className="relative rounded-3xl overflow-hidden border border-amber-500/40 bg-slate-900/90 shadow-2xl group cursor-pointer hover:border-amber-400 transition-all duration-300"
      >
        <div className="h-56 sm:h-72 md:h-88 lg:h-96 w-full overflow-hidden relative">
          <img
            src="/gsb-royal-pangath-watercolor.jpg"
            alt="Royal Pangath Traditional GSB Wedding Banquet"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-xs font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click to View Artwork</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/50 text-[11px] font-bold text-amber-300">
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
                <span>Sacred Banana Leaf Banquet (पारम्परिक पङ्क्ति भोजनम्)</span>
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-md">
                The Authentic GSB Konkani Pangath Spread
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed line-clamp-2 sm:line-clamp-none">
                Served in long ceremonial rows on fresh green plantain banana leaves with steaming hot red rice, dollops of pure cow's ghee, and our authentic nine-course coastal delicacies.
              </p>
            </div>
            
            <div className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 backdrop-blur-md border border-amber-400/50 text-amber-300 text-xs font-semibold whitespace-nowrap flex items-center gap-1.5">
              <span>🍃</span>
              <span>All 9 Sacred Courses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Sub-heading */}
      <div className="flex items-center justify-between border-b border-amber-500/20 pb-3 pt-2">
        <h3 className="font-playfair text-lg sm:text-xl font-bold text-amber-300 flex items-center gap-2">
          <span>🍽️</span>
          <span>Individual 9-Course Delicacies</span>
        </h3>
        <span className="text-xs text-slate-400 font-mono">Original Watercolor Artworks</span>
      </div>

      {/* Feast Dishes Grid with Watercolor Artworks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WEDDING_FEAST_MENU.map((dish, i) => (
          <div
            key={i}
            onClick={() => setSelectedDish(dish)}
            className="rounded-2xl overflow-hidden bg-slate-900/90 border border-amber-500/30 hover:border-amber-400 shadow-xl flex flex-col group transition-all cursor-pointer hover:shadow-amber-500/10"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-[10px] font-bold text-amber-300">
                {dish.tag}
              </div>
              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-300 group-hover:text-amber-300 transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-sm border border-slate-700/50 text-[11px] font-medium text-white">
                {dish.kannada}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider mb-1">
                  {dish.category}
                </div>
                <h4 className="font-playfair text-lg font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                  {dish.name}
                </h4>
                <p className="text-xs text-slate-300/85 leading-relaxed">{dish.desc}</p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-medium flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span>🍃</span>
                  <span>Pure GSB Traditional Recipe</span>
                </div>
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(`${dish.name} recipe`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="text-[10px] text-amber-400/80 font-serif italic hover:text-amber-300 underline underline-offset-2"
                >
                  Find recipe ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Full Watercolor Artwork View */}
      {selectedDish && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedDish(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-amber-400/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Artwork Image Container */}
            <div className="relative w-full bg-black/50 overflow-hidden flex items-center justify-center max-h-[58vh]">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-xs font-bold text-amber-300">
                {selectedDish.tag}
              </div>
            </div>

            {/* Dish Details */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-3 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                    {selectedDish.category}
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-white flex items-center gap-3">
                    <span>{selectedDish.name}</span>
                    <span className="text-sm font-sans font-normal px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {selectedDish.kannada}
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                  <span>🍃</span>
                  <span>Pure Coastal Konkani Vegetarian</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedDish.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
