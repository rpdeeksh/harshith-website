import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  Sparkles, 
  QrCode, 
  Trophy, 
  PlusCircle, 
  Trash2, 
  Download, 
  ExternalLink,
  Award,
  Users,
  CheckCircle2,
  Share2
} from "lucide-react";
import confetti from "canvas-confetti";

export const GameChallengeCreator = () => {
  const { 
    gameRounds, 
    addGameRound, 
    deleteGameRound, 
    awardTeamPoints, 
    awardPlayerPoints, 
    players,
    totalTeamBrideScore,
    totalTeamGroomScore,
    teamBonuses
  } = useWedding();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedQrGame, setSelectedQrGame] = useState(null);
  const [teamPointSide, setTeamPointSide] = useState("groom");
  const [teamPointAmount, setTeamPointAmount] = useState(20);
  const [selectedPlayerId, setSelectedPlayerId] = useState(players[0]?.id || "");
  const [playerPointAmount, setPlayerPointAmount] = useState(15);

  const [form, setForm] = useState({
    title: "",
    category: "Trivia",
    desc: "",
    pointsPerWin: 25,
    status: "Active"
  });

  const handleCreateGame = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    addGameRound(form);
    setIsAddModalOpen(false);
    setForm({
      title: "",
      category: "Trivia",
      desc: "",
      pointsPerWin: 25,
      status: "Active"
    });

    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.6 }
    });
  };

  const handleAwardTeam = (e) => {
    e.preventDefault();
    awardTeamPoints(teamPointSide, Number(teamPointAmount));
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  const handleAwardPlayer = (e) => {
    e.preventDefault();
    if (!selectedPlayerId) return;
    awardPlayerPoints(selectedPlayerId, Number(playerPointAmount));
    confetti({
      particleCount: 35,
      spread: 45,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-[#0F4C81]/40 border border-purple-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <QrCode className="w-3.5 h-3.5 text-purple-400" />
              <span>Admin Features 5 & 6 • Game Creator & Points System</span>
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              Game Creation, QR Code Generator & Points Console
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Create interactive wedding challenges and generate scannable venue QR codes. Award live points to guests and entire families in real-time.
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:opacity-95 text-slate-950 font-bold text-xs shadow flex items-center gap-1.5 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Create New Game & QR</span>
          </button>
        </div>

        {/* Live Scoreboard Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-[#0F4C81]/30 border border-blue-500/50 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-cyan-300">Team Coastal (Groom)</span>
              <div className="font-mono text-3xl font-bold text-white mt-0.5">{totalTeamGroomScore} Pts</div>
              <span className="text-[10px] text-blue-200">Includes {teamBonuses.groom || 0} team bonus points</span>
            </div>
            <span className="text-3xl">🌊</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#2E6F40]/30 border border-emerald-500/50 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-emerald-300">Team Forest (Bride)</span>
              <div className="font-mono text-3xl font-bold text-white mt-0.5">{totalTeamBrideScore} Pts</div>
              <span className="text-[10px] text-emerald-200">Includes {teamBonuses.bride || 0} team bonus points</span>
            </div>
            <span className="text-3xl">🌿</span>
          </div>
        </div>
      </div>

      {/* Point Management Console & Games List Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Live Games List with QR Code display */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-playfair text-lg font-bold text-white flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Configured Games & Challenges ({gameRounds.length})</span>
            </h3>
          </div>

          <div className="space-y-3">
            {gameRounds.map((g) => {
              const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                g.qrCodeData || `https://harshithwedsnidhi.com/games/${g.id}`
              )}`;

              return (
                <div
                  key={g.id}
                  className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
                >
                  <div className="space-y-1 max-w-md">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                        {g.category}
                      </span>
                      <span className="text-[10px] font-mono text-amber-300 font-bold">
                        +{g.pointsPerWin} Pts per win
                      </span>
                    </div>
                    <h4 className="font-playfair text-base font-bold text-white">{g.title}</h4>
                    <p className="text-xs text-slate-400">{g.desc}</p>
                  </div>

                  {/* QR Code and Actions */}
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <div
                      onClick={() => setSelectedQrGame(g)}
                      className="p-1.5 rounded-xl bg-white cursor-pointer hover:scale-105 transition-transform shadow"
                      title="Click to expand QR Code"
                    >
                      <img src={qrUrl} alt="Game QR" className="w-14 h-14 object-contain" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => setSelectedQrGame(g)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1"
                        title="View Full QR Code"
                      >
                        <QrCode className="w-3.5 h-3.5 text-purple-400" />
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm(`Delete challenge ${g.title}?`)) {
                            deleteGameRound(g.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-950/60 text-xs text-slate-400 hover:text-red-400"
                        title="Delete Game"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Point Management Console */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Award Points to Team */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <h3 className="font-playfair text-base font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Award Team Bonus Points</span>
            </h3>

            <form onSubmit={handleAwardTeam} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Target Team</label>
                <select
                  value={teamPointSide}
                  onChange={(e) => setTeamPointSide(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="groom">Team Coastal (Groom)</option>
                  <option value="bride">Team Forest (Bride)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Points to Award</label>
                <div className="flex gap-2">
                  {[10, 20, 30, 50].map((pts) => (
                    <button
                      key={pts}
                      type="button"
                      onClick={() => setTeamPointAmount(pts)}
                      className={`flex-1 py-1.5 rounded-xl border font-mono font-bold text-xs ${
                        teamPointAmount === pts
                          ? "bg-amber-500 text-slate-950 border-amber-400"
                          : "bg-slate-950 border-slate-700 text-slate-300"
                      }`}
                    >
                      +{pts}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs shadow cursor-pointer mt-1"
              >
                Award Team Bonus
              </button>
            </form>
          </div>

          {/* Award Points to Individual Guest */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <h3 className="font-playfair text-base font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Award Individual Guest Points</span>
            </h3>

            <form onSubmit={handleAwardPlayer} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Select Guest Player</label>
                <select
                  value={selectedPlayerId}
                  onChange={(e) => setSelectedPlayerId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
                >
                  {players.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.side === "bride" ? "Forest" : "Coastal"}) • Current: {p.score} Pts
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Points to Award</label>
                <input
                  type="number"
                  min="5"
                  max="100"
                  value={playerPointAmount}
                  onChange={(e) => setPlayerPointAmount(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs shadow cursor-pointer mt-1"
              >
                Award Player Points
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Add Game Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-purple-500/50 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="font-playfair text-xl font-bold text-white">Create New Wedding Challenge</h3>

            <form onSubmit={handleCreateGame} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Challenge Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Scavenger Hunt: Find the Hornbill"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Trivia">Couple Trivia</option>
                    <option value="Sangeet">Sangeet / Antakshari</option>
                    <option value="Physical Challenge">Tug of War / Sports</option>
                    <option value="Photo Challenge">Photo Scavenger Hunt</option>
                    <option value="Linguistic Fun">Konkani / Kannada Dialect</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Points per Win</label>
                  <input
                    type="number"
                    min="5"
                    max="100"
                    value={form.pointsPerWin}
                    onChange={(e) => setForm({ ...form, pointsPerWin: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Challenge Rules & Description</label>
                <textarea
                  rows="3"
                  placeholder="Instructions for the guests to participate..."
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="py-2 px-4 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold"
                >
                  Generate Challenge & QR
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Expanded QR Modal */}
      {selectedQrGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="w-full max-w-sm bg-slate-900 border border-[#D4AF37]/50 rounded-3xl p-6 shadow-2xl text-center space-y-4">
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
              {selectedQrGame.category}
            </span>
            <h3 className="font-playfair text-xl font-bold text-white">{selectedQrGame.title}</h3>

            <div className="p-4 bg-white rounded-2xl inline-block shadow-lg mx-auto">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
                  selectedQrGame.qrCodeData || `https://harshithwedsnidhi.com/games/${selectedQrGame.id}`
                )}`}
                alt="Venue QR"
                className="w-48 h-48 object-contain"
              />
            </div>

            <p className="text-xs text-slate-300">
              Display or print this QR code on dining tables and stage boards so guests can scan with their phone cameras to participate.
            </p>

            <button
              onClick={() => setSelectedQrGame(null)}
              className="w-full py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white cursor-pointer"
            >
              Close QR Preview
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
