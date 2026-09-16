import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { 
  KeyRound, 
  Lock, 
  User, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Waves, 
  Trees, 
  ArrowRight,
  Info
} from "lucide-react";
import confetti from "canvas-confetti";

export const LoginScreen = () => {
  const { login, weddingDetails, users } = useWedding();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const result = login(username, password);
      setIsLoading(false);
      if (result.success) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0F4C81", "#D4AF37", "#2E6F40", "#F8F5EF"]
        });
      } else {
        setError(result.message);
      }
    }, 300);
  };

  const handleQuickFill = (u) => {
    setUsername(u.username);
    setPassword(u.password);
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#050e18] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Visual Ambient Glows: Ocean Blue on left, Forest Green on right */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0F4C81]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2E6F40]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Traditional Border Pattern */}
      <div className="w-full max-w-xl relative z-10">
        
        {/* Emblem & Shloka Header */}
        <div className="text-center mb-6">
          <div className="text-amber-400 font-garamond text-xs md:text-sm tracking-widest uppercase mb-2">
            {weddingDetails.shloka}
          </div>

          {/* Wedding Logo */}
          <div className="mb-3 flex justify-center">
            <img
              src="/wedding-logo.png"
              alt="Nidhi & Harshith Wedding Celebration"
              className="w-24 h-24 rounded-full object-cover border-2 border-[#D4AF37] shadow-xl hover:scale-105 transition-transform"
            />
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            {weddingDetails.couple}
          </h1>

          <p className="text-xs sm:text-sm text-amber-200/90 font-serif italic mt-1 max-w-md mx-auto">
            "{weddingDetails.tagline}"
          </p>

          <div className="flex items-center justify-center space-x-2 text-[11px] text-blue-200/70 mt-2">
            <span>🌊 Coastal Karnataka</span>
            <span>•</span>
            <span>🌿 Dandeli Western Ghats</span>
          </div>
        </div>

        {/* Login Card Container */}
        <div className="bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-[#0b1726]/95 backdrop-blur-xl rounded-3xl border border-amber-500/30 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
          
          {/* Top Gold & Blue Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F4C81] via-[#D4AF37] to-[#2E6F40]" />

          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-playfair text-xl font-bold text-white flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-amber-400" />
                Wedding Portal Access
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Each guest and admin is allocated a unique login & password
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Dual Access System
            </span>
          </div>

          {/* Quick Access Credentials Bar */}
          <div className="mb-6 p-3.5 rounded-2xl bg-slate-950/60 border border-blue-900/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-medium text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Select a demo role or type credentials:
              </span>
              <span className="text-[10px] text-slate-400">Click to autofill</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {users.map((u) => (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => handleQuickFill(u)}
                  className={`text-left p-2 rounded-xl transition-all border text-xs flex items-center gap-2 ${
                    username === u.username
                      ? "bg-blue-900/60 border-amber-400/80 shadow-md ring-1 ring-amber-400/50"
                      : "bg-slate-900/80 hover:bg-slate-800/80 border-slate-700/60 text-slate-200"
                  }`}
                >
                  <span className="text-base">{u.avatar}</span>
                  <div className="truncate">
                    <div className="font-semibold text-white truncate text-[11px]">{u.name}</div>
                    <div className="text-[10px] text-amber-300/80 font-mono">{u.username}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <Info className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Username / Invitation ID
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. admin or guest_harshith"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Secret Access Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secret password"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0F4C81] via-[#D4AF37] to-[#2E6F40] hover:opacity-95 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-900/30 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Enter Wedding Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <p className="text-[11px] text-slate-400">
              Admin can generate & manage invitee accounts via the <span className="text-amber-300 font-semibold">User Master</span> in the Admin Suite.
            </p>
          </div>
        </div>

        {/* Small theme credit */}
        <div className="text-center mt-4 text-[11px] text-slate-400">
          "Where the Sea Meets the Forest" • Coastal Karnataka to Western Ghats
        </div>
      </div>
    </div>
  );
};
