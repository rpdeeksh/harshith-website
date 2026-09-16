import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { 
  Radio, 
  Sparkles, 
  QrCode, 
  Trophy, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  Users, 
  Play, 
  Flame,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import confetti from "canvas-confetti";

export const LiveStreamAndGames = () => {
  const { 
    gameRounds, 
    totalTeamBrideScore, 
    totalTeamGroomScore, 
    awardPlayerPoints, 
    registeredUser,
    weddingDetails
  } = useWedding();

  const [activeTab, setActiveTab] = useState("games"); // "games" | "stream"
  const [selectedGame, setSelectedGame] = useState(gameRounds[0] || null);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  // Live Wishes state
  const [wishes, setWishes] = useState([
    { name: "Dr. K. S. Shenoy", message: "May Lord Krishna bless Harshith & Nidhi with eternal joy and harmony! Beautiful wedding arrangements.", time: "Just now" },
    { name: "Priya Prabhu", message: "Congratulations Nidhi and Harshith! Team Forest is ready to win Tug of War! 🌿", time: "5 mins ago" },
    { name: "Vikram Nayak", message: "Welcome to the coastal family, Nidhi! Awesome portal.", time: "12 mins ago" }
  ]);
  const [newWishName, setNewWishName] = useState("");
  const [newWishMessage, setNewWishMessage] = useState("");

  const handlePostWish = (e) => {
    e.preventDefault();
    if (!newWishName.trim() || !newWishMessage.trim()) return;

    setWishes([
      { name: newWishName.trim(), message: newWishMessage.trim(), time: "Just now" },
      ...wishes
    ]);
    setNewWishName("");
    setNewWishMessage("");

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 }
    });
  };

  const handleSelectOption = (questionIdx, optionIdx) => {
    setSelectedAnswer({ ...selectedAnswer, [questionIdx]: optionIdx });
  };

  const handleSubmitQuiz = () => {
    if (!selectedGame || !selectedGame.questions) return;
    let scoreEarned = 0;
    selectedGame.questions.forEach((q, idx) => {
      if (selectedAnswer[idx] === q.correct) {
        scoreEarned += 10;
      }
    });

    if (registeredUser) {
      awardPlayerPoints(registeredUser.id, scoreEarned);
    }
    setQuizFinished(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="fun-and-joy" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Games and live streaming
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
      </div>

      {/* Tab Switcher: Interactive Games & QR Codes vs Live Wedding Stream */}
      <div className="flex items-center justify-center">
        <div className="p-1.5 rounded-2xl bg-slate-900 border border-[#D4AF37]/40 flex gap-2">
          <button
            onClick={() => setActiveTab("games")}
            className={`py-2 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "games"
                ? "bg-gradient-to-r from-[#0F4C81] to-[#2E6F40] text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Wedding Games & QR Challenges</span>
          </button>

          <button
            onClick={() => setActiveTab("stream")}
            className={`py-2 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "stream"
                ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Radio className="w-4 h-4 text-white animate-pulse" />
            <span>Live Wedding Stream</span>
          </button>
        </div>
      </div>

      {activeTab === "games" ? (
        /* Interactive Game Arena */
        <div className="space-y-8">
          
          {/* Team Score Tally Banner */}
          <div className="rounded-3xl p-6 bg-gradient-to-r from-[#0F4C81]/30 via-slate-900 to-[#2E6F40]/30 border border-[#D4AF37]/40 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                  Live Battle Points
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mt-0.5">
                  Team Coastal Karnataka vs Team Dandeli Forest
                </h3>
              </div>

              <div className="flex items-center gap-4 sm:gap-8">
                {/* Team Groom */}
                <div className="p-3 sm:p-4 rounded-2xl bg-[#0F4C81]/40 border border-blue-500/50 text-center min-w-[120px]">
                  <span className="text-xs text-cyan-300 font-semibold block">Team Coastal (Groom)</span>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white">{totalTeamGroomScore}</span>
                  <span className="text-[10px] text-blue-200 block">Pts</span>
                </div>

                <div className="text-xl font-bold text-amber-400">VS</div>

                {/* Team Bride */}
                <div className="p-3 sm:p-4 rounded-2xl bg-[#2E6F40]/40 border border-emerald-500/50 text-center min-w-[120px]">
                  <span className="text-xs text-emerald-300 font-semibold block">Team Forest (Bride)</span>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white">{totalTeamBrideScore}</span>
                  <span className="text-[10px] text-emerald-200 block">Pts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Games Grid & QR Scanner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Games Selector */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                Select a Game or Challenge
              </h4>

              {gameRounds.map((g) => (
                <div
                  key={g.id}
                  onClick={() => {
                    setSelectedGame(g);
                    setSelectedAnswer({});
                    setQuizFinished(false);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    selectedGame?.id === g.id
                      ? "bg-slate-900 border-[#D4AF37] ring-1 ring-[#D4AF37]/50 shadow-lg"
                      : "bg-slate-950/70 hover:bg-slate-900/60 border-slate-800 text-slate-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        {g.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">+{g.pointsPerWin} Pts</span>
                    </div>
                    <h5 className="font-playfair text-base font-bold text-white mt-1">{g.title}</h5>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{g.desc}</p>
                  </div>

                  <span className="text-xl flex-shrink-0">
                    {g.id.includes("trivia") ? "💡" : g.id.includes("dialect") ? "🗣️" : g.id.includes("tug") ? "🪢" : "🎵"}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Game Play & Venue QR Code Card */}
            <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
              {selectedGame ? (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        {selectedGame.category}
                      </span>
                      <h4 className="font-playfair text-2xl font-bold text-white">{selectedGame.title}</h4>
                      <p className="text-xs text-slate-300 mt-1">{selectedGame.desc}</p>
                    </div>

                    {/* QR Code generator box */}
                    <div className="flex flex-col items-center p-2.5 rounded-2xl bg-slate-950 border border-[#D4AF37]/40 flex-shrink-0">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
                          selectedGame.qrCodeData || `https://harshithwedsnidhi.com/games/${selectedGame.id}`
                        )}`}
                        alt="Game QR Code"
                        className="w-16 h-16 rounded-lg bg-white p-1"
                      />
                      <span className="text-[9px] text-amber-300 font-mono mt-1">Scan to Play on Mobile</span>
                    </div>
                  </div>

                  {/* Interactive Questions if available */}
                  {selectedGame.questions && selectedGame.questions.length > 0 ? (
                    <div className="space-y-4">
                      {quizFinished ? (
                        <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-2">
                          <div className="text-3xl text-emerald-400">🎉</div>
                          <h5 className="font-playfair text-xl font-bold text-white">Challenge Completed!</h5>
                          <p className="text-xs text-slate-300">
                            Your points have been recorded in the live scoreboard!
                          </p>
                          <button
                            onClick={() => {
                              setSelectedAnswer({});
                              setQuizFinished(false);
                            }}
                            className="mt-3 py-1.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-white"
                          >
                            Play Again
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {selectedGame.questions.map((q, qIdx) => (
                            <div key={qIdx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2.5">
                              <span className="text-xs font-bold text-amber-200">
                                Q{qIdx + 1}: {q.q}
                              </span>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                {q.options.map((opt, optIdx) => (
                                  <button
                                    key={optIdx}
                                    type="button"
                                    onClick={() => handleSelectOption(qIdx, optIdx)}
                                    className={`text-left p-2.5 rounded-xl text-xs transition-all border ${
                                      selectedAnswer[qIdx] === optIdx
                                        ? "bg-amber-500/20 border-amber-400 text-amber-200 font-semibold"
                                        : "bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-300"
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}

                          <button
                            onClick={handleSubmitQuiz}
                            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-slate-950 font-bold text-xs shadow-md cursor-pointer hover:opacity-95"
                          >
                            Submit Answers & Claim Points
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 text-center space-y-3">
                      <div className="text-3xl">🪢</div>
                      <h5 className="font-playfair text-lg font-bold text-white">Grand Stage Challenge</h5>
                      <p className="text-xs text-slate-300 max-w-md mx-auto">
                        This challenge takes place live at Shri Gopal Krishna Kalamandir. Scan the QR code or cheer for your team! Points are awarded by the stage coordinators.
                      </p>
                    </div>
                  )}
                </div>
              ) : null}
            </div>

          </div>
        </div>
      ) : (
        /* Live Wedding Stream Page */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Stream Video Player Mockup */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col">
            <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80"
                alt="Muhurtham Stage"
                className="w-full h-full object-cover opacity-40 blur-xs"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-red-300 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>OFFICIAL LIVE STREAM BROADCAST</span>
              </div>

              <div className="relative z-10 text-center p-6 max-w-md">
                <div className="w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center mx-auto mb-3 shadow-xl shadow-red-950/80 cursor-pointer">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <h4 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                  The Auspicious Muhurtham Live
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Sunday, 13 December 2026 • 10:15 AM IST
                </p>
                <div className="mt-3 text-[11px] text-amber-300/80 font-mono">
                  Streaming in 4K from Shri Gopal Krishna Kalamandir, Nagoor
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900/95 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="font-playfair text-base font-bold text-white">{weddingDetails.couple} Wedding Broadcast</h5>
                <p className="text-xs text-slate-400 mt-0.5">High definition multi-camera coverage with English & Konkani commentary</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => alert("Stream link copied!")}
                  className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200"
                >
                  Share Link
                </button>
              </div>
            </div>
          </div>

          {/* Live Wishes & Blessings Guestbook */}
          <div className="lg:col-span-4 rounded-3xl p-6 bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h4 className="font-playfair text-lg font-bold text-white flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-amber-400" />
                  <span>Wishes & Blessings</span>
                </h4>
                <span className="text-[10px] text-emerald-400 font-mono">Live Wall</span>
              </div>

              {/* Wishes List */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1 custom-scrollbar">
                {wishes.map((w, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-amber-300">{w.name}</span>
                      <span className="text-[10px] text-slate-500">{w.time}</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{w.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Post a Wish Form */}
            <form onSubmit={handlePostWish} className="mt-4 pt-4 border-t border-slate-800 space-y-2 text-xs">
              <input
                type="text"
                required
                value={newWishName}
                onChange={(e) => setNewWishName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:border-amber-400 focus:outline-none"
              />
              <textarea
                required
                rows="2"
                value={newWishMessage}
                onChange={(e) => setNewWishMessage(e.target.value)}
                placeholder="Write your blessings for Harshith & Nidhi..."
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:border-amber-400 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post Blessing</span>
              </button>
            </form>
          </div>

        </div>
      )}

    </section>
  );
};
