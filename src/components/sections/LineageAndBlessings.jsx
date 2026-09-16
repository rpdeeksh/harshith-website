import React from "react";
import { useWedding } from "../../context/WeddingContext";
import { Heart } from "lucide-react";

export const LineageAndBlessings = () => {
  const { weddingDetails } = useWedding();

  return (
    <section id="lineage" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Lineage and blessings
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Groom's Family Card (Action 19) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0F4C81]/25 via-slate-900 to-slate-950 border border-[#0F4C81]/40 shadow-xl space-y-4">
          <div className="flex items-center gap-3 border-b border-blue-900/40 pb-4">
            <span className="text-3xl">🌊</span>
            <div>
              <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider">Groom's Family</span>
              <h3 className="font-playfair text-2xl font-bold text-white">Prabhu Family</h3>
              <span className="text-xs text-blue-200/80">Coastal Karnataka (GSB Konkani Lineage)</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-blue-900/40">
              <span className="text-[10px] uppercase text-amber-300/80 font-bold block mb-1">Parents</span>
              <p className="text-sm font-semibold text-white">Sri Ramachandra Prabhu & Smt. Sumangala Prabhu</p>
            </div>

            <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-blue-900/40 space-y-1.5">
              <span className="text-[10px] uppercase text-cyan-300/80 font-bold block mb-0.5">Grandparents</span>
              <p className="text-xs font-semibold text-white">Late Sri Vittal and Late Krishna bai Shanbhag</p>
              <p className="text-xs font-semibold text-white">Late Vasudev Prabhu & Sarojini Prabhu</p>
            </div>

            <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-blue-900/40">
              <span className="text-[10px] uppercase text-slate-400 font-bold block mb-1">Family Coordinator</span>
              <p className="text-xs font-semibold text-blue-200">Deekshith Prabhu (Groom's Coordinator) • +91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Bride's Family Card (Action 19) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#2E6F40]/25 via-slate-900 to-slate-950 border border-[#2E6F40]/40 shadow-xl space-y-4">
          <div className="flex items-center gap-3 border-b border-emerald-900/40 pb-4">
            <span className="text-3xl">🌿</span>
            <div>
              <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">Bride's Family</span>
              <h3 className="font-playfair text-2xl font-bold text-white">Khambadkone Family</h3>
              <span className="text-xs text-emerald-200/80">Dandeli & Western Ghats Heritage</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-emerald-900/40">
              <span className="text-[10px] uppercase text-amber-300/80 font-bold block mb-1">Parents</span>
              <p className="text-sm font-semibold text-white">Sri Ravi K & Smt. Rashmi K</p>
            </div>

            <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-emerald-900/40 space-y-1">
              <span className="text-[10px] uppercase text-emerald-300/80 font-bold block mb-0.5">Grandparents</span>
              <p className="text-xs font-semibold text-white">Late Sri Dayanand K & Smt. Saraswathi K</p>
            </div>

            <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-emerald-900/40">
              <span className="text-[10px] uppercase text-slate-400 font-bold block mb-1">Family Coordinator</span>
              <p className="text-xs font-semibold text-emerald-200">Vikram Prabhu (Bride's Coordinator) • +91 98765 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
