import React from "react";
import { useWedding } from "../context/WeddingContext";
import { Sparkles } from "lucide-react";

export const ThemeToggle = () => {
  const { activeTheme, switchTheme } = useWedding();

  return (
    <div className="inline-flex p-1 rounded-2xl bg-slate-900/90 border border-slate-700/60 shadow-lg backdrop-blur-md">
      {/* Karavali Coastal Button */}
      <button
        onClick={() => switchTheme("karavali")}
        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all ${
          activeTheme === "karavali"
            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-950/60 scale-105"
            : "text-amber-200/80 hover:text-amber-200 hover:bg-slate-800/60"
        }`}
        title="Switch to Coastal Karavali theme (Bride Side)"
      >
        <span className="text-sm">🎭</span>
        <span>Karavali (Bride)</span>
      </button>

      {/* Dandeli Forest Button */}
      <button
        onClick={() => switchTheme("dandeli")}
        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all ${
          activeTheme === "dandeli"
            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-950/60 scale-105"
            : "text-emerald-200/80 hover:text-emerald-200 hover:bg-slate-800/60"
        }`}
        title="Switch to Dandeli Dense Forest theme (Groom Side)"
      >
        <span className="text-sm">🦜</span>
        <span>Dandeli (Groom)</span>
      </button>
    </div>
  );
};
