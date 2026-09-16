import React from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  Ticket, 
  Sparkles, 
  Award, 
  QrCode, 
  User, 
  Share2, 
  RotateCcw,
  Shield
} from "lucide-react";

export const DigitalPassCard = ({ onOpenRegister }) => {
  const { registeredUser, players, weddingDetails } = useWedding();

  if (!registeredUser) {
    return (
      <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 text-center max-w-md mx-auto">
        <Ticket className="w-12 h-12 text-amber-400 mx-auto mb-3 opacity-80" />
        <h3 className="font-cinzel text-xl font-bold text-white mb-2">
          No Player Pass Found
        </h3>
        <p className="text-xs text-slate-300 mb-6">
          Choose your side (Team Karavali or Team Dandeli) to get your unique Player ID (B1 / G1) and participate in the Previous-Day Games!
        </p>
        <button
          onClick={onOpenRegister}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm shadow-xl transition-all hover:scale-105"
        >
          Select Side & Get Pass
        </button>
      </div>
    );
  }

  // Find player current score and rank
  const currentPlayer = players.find((p) => p.id === registeredUser.id) || registeredUser;
  const sorted = [...players].sort((a, b) => (b.score || 0) - (a.score || 0));
  const rank = sorted.findIndex((p) => p.id === registeredUser.id) + 1;

  const isBride = currentPlayer.side === "bride";

  return (
    <div className="max-w-md mx-auto space-y-4 animate-fadeIn">
      
      {/* The Pass Card */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border-2 text-center relative overflow-hidden shadow-2xl ${
          isBride
            ? "bg-gradient-to-b from-amber-950 via-slate-950 to-orange-950 border-amber-400"
            : "bg-gradient-to-b from-emerald-950 via-slate-950 to-teal-950 border-emerald-400"
        }`}
      >
        {/* Decorative inner borders */}
        <div className="absolute inset-3 border border-white/10 rounded-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 mb-3">
          <span className="font-serif italic">{weddingDetails.shloka}</span>
          <span className="font-mono uppercase font-bold text-[10px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700">
            OFFICIAL PASS
          </span>
        </div>

        {/* Couple & Wedding info */}
        <div className="relative z-10 font-cinzel text-lg font-bold text-white mb-1">
          {weddingDetails.couple}
        </div>
        <div className="relative z-10 text-[11px] text-amber-200/80 mb-4">
          Previous-Day Games & Vivah • {weddingDetails.displayDates}
        </div>

        {/* Team Mascot & Big ID */}
        <div className="relative z-10 my-4 py-4 bg-slate-950/70 rounded-2xl border border-white/10">
          <div className="text-3xl mb-1">{isBride ? "🎭" : "🦜"}</div>
          <div className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">
            {currentPlayer.team}
          </div>
          <div className={`font-cinzel text-6xl font-black tracking-widest my-1 ${
            isBride ? "text-amber-400" : "text-emerald-400"
          }`}>
            {currentPlayer.id}
          </div>
          <div className="text-sm font-bold text-white">
            {currentPlayer.name}
          </div>
          <div className="text-xs text-slate-400 font-mono">
            {currentPlayer.city}
          </div>
        </div>

        {/* Live Score & Rank */}
        <div className="relative z-10 grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] uppercase font-bold text-slate-400">Current Score</div>
            <div className="text-2xl font-black font-mono text-white mt-0.5">
              {currentPlayer.score || 0} <span className="text-xs text-amber-400">pts</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] uppercase font-bold text-slate-400">Leaderboard Rank</div>
            <div className="text-2xl font-black font-mono text-amber-300 mt-0.5">
              #{rank > 0 ? rank : 1}
            </div>
          </div>
        </div>

        {/* Simulated QR barcode */}
        <div className="relative z-10 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center space-x-3 text-left">
          <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-sm grid grid-cols-3 gap-0.5 p-0.5">
              <div className="bg-white rounded-xs"></div>
              <div className="bg-slate-950"></div>
              <div className="bg-white rounded-xs"></div>
              <div className="bg-slate-950"></div>
              <div className="bg-white rounded-xs"></div>
              <div className="bg-slate-950"></div>
              <div className="bg-white rounded-xs"></div>
              <div className="bg-white rounded-xs"></div>
              <div className="bg-slate-950"></div>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-white">
              Scan / Quote ID to Game Coordinator
            </div>
            <div className="text-[10px] text-slate-400">
              Admin will add game points using ID: <strong className="text-amber-300">{currentPlayer.id}</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Switch / Change Pass action */}
      <div className="text-center pt-2">
        <button
          onClick={onOpenRegister}
          className="text-xs text-slate-400 hover:text-amber-300 flex items-center justify-center space-x-1.5 mx-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Switch Side or Register New Player</span>
        </button>
      </div>

    </div>
  );
};
