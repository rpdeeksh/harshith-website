import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  Trophy, 
  PlusCircle, 
  Award, 
  Users, 
  Flame, 
  Check, 
  Sparkles, 
  X,
  Search,
  CheckCircle2
} from "lucide-react";
import confetti from "canvas-confetti";

export const AdminScoreConsole = ({ isOpen, onClose }) => {
  const { 
    players, 
    gameRounds, 
    awardPlayerPoints, 
    awardTeamPoints, 
    totalTeamBrideScore, 
    totalTeamGroomScore 
  } = useWedding();

  const [selectedPlayerId, setSelectedPlayerId] = useState(players[0]?.id || "B1");
  const [pointsToAdd, setPointsToAdd] = useState(25);
  const [selectedRound, setSelectedRound] = useState(gameRounds[0]?.title || "Round 1: Antakshari");
  const [searchFilter, setSearchFilter] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  if (!isOpen) return null;

  const handleAwardIndividual = (e) => {
    e.preventDefault();
    const pts = Number(pointsToAdd);
    if (!pts || !selectedPlayerId) return;

    awardPlayerPoints(selectedPlayerId, pts, selectedRound);
    
    const targetPlayer = players.find(p => p.id === selectedPlayerId);
    setSuccessMsg(`Awarded +${pts} pts to ${targetPlayer?.name} (${selectedPlayerId})!`);
    
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });

    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleAwardTeam = (side, points) => {
    awardTeamPoints(side, points, selectedRound);
    const teamName = side === "bride" ? "Team Karavali" : "Team Dandeli";
    setSuccessMsg(`Awarded +${points} team points to ${teamName}!`);

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: side === "bride" ? ["#f59e0b", "#d97706"] : ["#10b981", "#059669"]
    });

    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const filteredPlayers = players.filter(
    (p) =>
      p.id.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-amber-500/50 rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="font-cinzel text-lg font-bold text-white">
              Game Host & Scoring Console
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Quick Score Notification */}
          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 text-xs font-bold flex items-center space-x-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Section 1: Team Bonus Quick Award */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              🏆 Award Team Victory Bonus (Tug of War / Group Game)
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleAwardTeam("bride", 50)}
                className="py-3 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-slate-950 font-bold text-xs flex flex-col items-center justify-center transition-all shadow-md active:scale-95"
              >
                <span>+50 to Team Karavali</span>
                <span className="text-[10px] opacity-80 mt-0.5">(Bride Side)</span>
              </button>

              <button
                type="button"
                onClick={() => handleAwardTeam("groom", 50)}
                className="py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-bold text-xs flex flex-col items-center justify-center transition-all shadow-md active:scale-95"
              >
                <span>+50 to Team Dandeli</span>
                <span className="text-[10px] opacity-80 mt-0.5">(Groom Side)</span>
              </button>
            </div>
          </div>

          {/* Section 2: Individual Player Score Form */}
          <form onSubmit={handleAwardIndividual} className="space-y-4">
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-200">
                  Select Player by ID or Name
                </label>
                <div className="relative w-36">
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Filter ID..."
                    className="w-full px-2 py-0.5 rounded-lg bg-slate-950 border border-slate-700 text-[11px] text-white outline-none"
                  />
                </div>
              </div>

              <select
                value={selectedPlayerId}
                onChange={(e) => setSelectedPlayerId(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm font-bold text-white outline-none focus:border-amber-400 font-mono"
              >
                {filteredPlayers.map((p) => (
                  <option key={p.id} value={p.id}>
                    [{p.id}] {p.name} - {p.team} ({p.score} pts)
                  </option>
                ))}
              </select>
            </div>

            {/* Quick point chips */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Points to Award:
              </label>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {[10, 25, 50, 100].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setPointsToAdd(val)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                      pointsToAdd === val
                        ? "bg-amber-500 text-slate-950 shadow-md scale-105"
                        : "bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-700"
                    }`}
                  >
                    +{val} Pts
                  </button>
                ))}
              </div>
              <input
                type="number"
                min="1"
                value={pointsToAdd}
                onChange={(e) => setPointsToAdd(Number(e.target.value))}
                placeholder="Or custom points..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-mono outline-none focus:border-amber-400"
              />
            </div>

            {/* Game Round selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Event / Game Round:
              </label>
              <select
                value={selectedRound}
                onChange={(e) => setSelectedRound(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white outline-none focus:border-amber-400"
              >
                {gameRounds.map((r) => (
                  <option key={r.id} value={r.title}>
                    {r.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-sm shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              Add Points to Player Score
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};
