import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  Trophy, 
  Flame, 
  Medal, 
  Users, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Shield, 
  ChevronRight,
  Award
} from "lucide-react";

export const LiveScoreboard = ({ onOpenScoreConsole }) => {
  const { 
    players, 
    gameRounds, 
    totalTeamBrideScore, 
    totalTeamGroomScore, 
    registeredUser,
    currentUser,
    activeTheme
  } = useWedding();

  const [activeTab, setActiveTab] = useState("teams"); // "teams" or "players" or "rounds"

  // Sort players by score descending
  const sortedPlayers = [...players].sort((a, b) => (b.score || 0) - (a.score || 0));

  // Compute team percentages
  const grandTotal = totalTeamBrideScore + totalTeamGroomScore;
  const bridePercent = grandTotal > 0 ? Math.round((totalTeamBrideScore / grandTotal) * 100) : 50;
  const groomPercent = 100 - bridePercent;

  const isBrideLeading = totalTeamBrideScore >= totalTeamGroomScore;

  return (
    <div className="space-y-6">
      
      {/* Team Clash Battle Meter (Grand Previous-Day Clash) */}
      <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-700/80 shadow-2xl relative overflow-hidden">
        
        {/* Glows */}
        <div className="absolute -top-12 left-10 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-12 right-10 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-inner">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
            <span>Previous-Day Games Battle</span>
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
            Karavali vs Dandeli
          </h2>
          <p className="text-xs sm:text-sm text-slate-300/80 mt-1 max-w-lg mx-auto">
            Live points battle between Bride Side (Team Karavali) and Groom Side (Team Dandeli)!
          </p>
        </div>

        {/* Live Score Counter Boxes */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 relative z-10">
          
          {/* Team Karavali (Bride) */}
          <div className={`p-4 sm:p-6 rounded-2xl border-2 transition-all relative overflow-hidden text-center ${
            isBrideLeading 
              ? "bg-gradient-to-br from-amber-950/80 to-slate-950 border-amber-400 shadow-xl shadow-amber-950/60" 
              : "bg-slate-900/80 border-slate-800"
          }`}>
            <div className="text-2xl sm:text-3xl mb-1">🎭</div>
            <div className="font-cinzel text-xs sm:text-sm font-extrabold uppercase text-amber-300 tracking-wider">
              Team Karavali
            </div>
            <div className="text-[11px] text-amber-200/70">Bridal Side (Nidhi)</div>
            
            <div className="text-3xl sm:text-5xl font-black font-mono text-white mt-3">
              {totalTeamBrideScore}
              <span className="text-xs text-amber-400 font-normal ml-1">pts</span>
            </div>

            {isBrideLeading && (
              <div className="mt-2 inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-[10px] font-bold text-amber-300">
                <span>🔥 Currently Leading</span>
              </div>
            )}
          </div>

          {/* Team Dandeli (Groom) */}
          <div className={`p-4 sm:p-6 rounded-2xl border-2 transition-all relative overflow-hidden text-center ${
            !isBrideLeading 
              ? "bg-gradient-to-br from-emerald-950/80 to-slate-950 border-emerald-400 shadow-xl shadow-emerald-950/60" 
              : "bg-slate-900/80 border-slate-800"
          }`}>
            <div className="text-2xl sm:text-3xl mb-1">🦜</div>
            <div className="font-cinzel text-xs sm:text-sm font-extrabold uppercase text-emerald-300 tracking-wider">
              Team Dandeli
            </div>
            <div className="text-[11px] text-emerald-200/70">Groom Side (Harshith)</div>
            
            <div className="text-3xl sm:text-5xl font-black font-mono text-white mt-3">
              {totalTeamGroomScore}
              <span className="text-xs text-emerald-400 font-normal ml-1">pts</span>
            </div>

            {!isBrideLeading && (
              <div className="mt-2 inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-[10px] font-bold text-emerald-300">
                <span>🔥 Currently Leading</span>
              </div>
            )}
          </div>

        </div>

        {/* Tug of War Dynamic Progress Bar */}
        <div className="relative z-10 mb-2">
          <div className="flex justify-between text-xs font-bold font-mono mb-1.5">
            <span className="text-amber-400">Team Karavali {bridePercent}%</span>
            <span className="text-emerald-400">{groomPercent}% Team Dandeli</span>
          </div>
          <div className="w-full bg-slate-900 h-4 rounded-full overflow-hidden p-0.5 border border-slate-700 flex shadow-inner">
            <div
              className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 h-full rounded-l-full transition-all duration-700"
              style={{ width: `${bridePercent}%` }}
            />
            <div
              className="bg-gradient-to-r from-teal-400 via-emerald-500 to-emerald-700 h-full rounded-r-full transition-all duration-700"
              style={{ width: `${groomPercent}%` }}
            />
          </div>
        </div>

        {/* Admin Quick Launcher if logged in as admin */}
        {currentUser?.role === "admin" && (
          <div className="mt-5 pt-4 border-t border-slate-800 text-center">
            <button
              onClick={onOpenScoreConsole}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-950/80 transition-all hover:scale-105"
            >
              👑 Open Admin Scoring Console (+Add Points)
            </button>
          </div>
        )}

      </div>

      {/* Tabs: Individual Leaderboard vs Game Rounds */}
      <div className="flex space-x-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab("teams")}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
            activeTab === "teams"
              ? "bg-slate-800 text-white border border-slate-600"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>Top Players Leaderboard ({players.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("rounds")}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
            activeTab === "rounds"
              ? "bg-slate-800 text-white border border-slate-600"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span>Game Rounds ({gameRounds.length})</span>
        </button>
      </div>

      {/* View 1: Top Players Leaderboard */}
      {activeTab === "teams" && (
        <div className="space-y-4">
          
          {/* Top 3 Podium Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 text-center">
            
            {/* Rank 2 (Silver) */}
            {sortedPlayers[1] && (
              <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-700/60 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="text-xl sm:text-2xl">🥈</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase mt-1">2nd Place</div>
                  <div className="font-bold text-xs sm:text-sm text-white truncate mt-1">
                    {sortedPlayers[1].name}
                  </div>
                  <div className="text-[10px] font-mono text-amber-400">
                    ID: {sortedPlayers[1].id}
                  </div>
                </div>
                <div className="mt-2 text-sm sm:text-lg font-black font-mono text-slate-200">
                  {sortedPlayers[1].score} pts
                </div>
              </div>
            )}

            {/* Rank 1 (Gold) */}
            {sortedPlayers[0] && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-amber-950/80 to-slate-900 border-2 border-amber-400 shadow-xl shadow-amber-950/60 flex flex-col justify-between -translate-y-2">
                <div>
                  <div className="text-2xl sm:text-3xl">🥇</div>
                  <div className="text-[10px] font-black text-amber-400 uppercase tracking-wider mt-1">Champion</div>
                  <div className="font-bold text-sm sm:text-base text-white truncate mt-1">
                    {sortedPlayers[0].name}
                  </div>
                  <div className="text-[11px] font-mono text-amber-300 font-bold">
                    ID: {sortedPlayers[0].id}
                  </div>
                </div>
                <div className="mt-2 text-base sm:text-2xl font-black font-mono text-amber-300">
                  {sortedPlayers[0].score} pts
                </div>
              </div>
            )}

            {/* Rank 3 (Bronze) */}
            {sortedPlayers[2] && (
              <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-700/60 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="text-xl sm:text-2xl">🥉</div>
                  <div className="text-[10px] font-bold text-amber-600 uppercase mt-1">3rd Place</div>
                  <div className="font-bold text-xs sm:text-sm text-white truncate mt-1">
                    {sortedPlayers[2].name}
                  </div>
                  <div className="text-[10px] font-mono text-amber-400">
                    ID: {sortedPlayers[2].id}
                  </div>
                </div>
                <div className="mt-2 text-sm sm:text-lg font-black font-mono text-slate-200">
                  {sortedPlayers[2].score} pts
                </div>
              </div>
            )}

          </div>

          {/* Full Players Table */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl">
            <div className="p-3.5 bg-slate-950/80 border-b border-slate-800 text-xs font-bold text-slate-300 flex justify-between">
              <span>All Registered Players</span>
              <span>Total: {players.length} Competitors</span>
            </div>

            <div className="divide-y divide-slate-800/60 max-h-[420px] overflow-y-auto custom-scrollbar">
              {sortedPlayers.map((player, idx) => {
                const isMe = registeredUser && registeredUser.id === player.id;
                return (
                  <div
                    key={player.id}
                    className={`p-3.5 flex items-center justify-between transition-colors ${
                      isMe 
                        ? "bg-amber-950/40 border-l-4 border-l-amber-400" 
                        : "hover:bg-slate-800/40"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-6 text-center font-mono text-xs font-bold text-slate-400">
                        #{idx + 1}
                      </span>

                      {/* ID Badge */}
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                        player.side === "bride"
                          ? "bg-amber-950 border border-amber-500/50 text-amber-300"
                          : "bg-emerald-950 border border-emerald-500/50 text-emerald-300"
                      }`}>
                        {player.id}
                      </span>

                      <div>
                        <div className="font-bold text-xs sm:text-sm text-white flex items-center space-x-1.5">
                          <span>{player.name}</span>
                          {isMe && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 font-bold uppercase">
                              YOU
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {player.team} • {player.city}
                        </div>
                      </div>
                    </div>

                    <div className="font-mono text-sm sm:text-base font-black text-white">
                      {player.score} <span className="text-[10px] font-normal text-slate-400">pts</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* View 2: Game Rounds Details */}
      {activeTab === "rounds" && (
        <div className="space-y-3">
          {gameRounds.map((round, index) => (
            <div
              key={round.id}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    round.status === "Completed"
                      ? "bg-emerald-950 border border-emerald-500/50 text-emerald-300"
                      : round.status === "Active"
                      ? "bg-orange-950 border border-orange-500/50 text-orange-300 animate-pulse"
                      : "bg-slate-800 text-slate-400"
                  }`}>
                    {round.status}
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    +{round.pointsPerWin} Pts Per Win
                  </span>
                </div>
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-white">
                  {round.title}
                </h4>
                <p className="text-xs text-slate-300/80 mt-0.5">
                  {round.desc}
                </p>
                {round.notes && (
                  <p className="text-[11px] text-amber-200/70 italic mt-1">
                    ✦ {round.notes}
                  </p>
                )}
              </div>

              {round.winnerSide && (
                <div className="flex-shrink-0 self-start sm:self-center px-3 py-1.5 rounded-xl bg-slate-950 border border-amber-500/40 text-xs font-bold text-amber-300">
                  Winner: {round.winnerSide === "bride" ? "🎭 Team Karavali" : "🦜 Team Dandeli"}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
