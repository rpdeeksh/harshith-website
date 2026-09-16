import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { 
  Sparkles, 
  Crown, 
  UserCheck, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  User,
  MapPin,
  Flame,
  Heart
} from "lucide-react";
import confetti from "canvas-confetti";

export const OnboardingModal = ({ isOpen, onClose }) => {
  const { registerGuest, registeredUser, weddingDetails } = useWedding();
  const [selectedSide, setSelectedSide] = useState("bride"); // bride or groom
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [generatedPass, setGeneratedPass] = useState(null);

  if (!isOpen && registeredUser) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newPlayer = registerGuest(name, selectedSide, city);
    setGeneratedPass(newPlayer);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: selectedSide === "bride" 
        ? ["#f59e0b", "#d97706", "#dc2626", "#ea580c"] 
        : ["#10b981", "#059669", "#0284c7", "#0d9488"]
    });
  };

  const handleFinish = () => {
    setGeneratedPass(null);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Top Auspicious Banner */}
        <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500" />
        
        <div className="p-5 sm:p-7 text-center">
          
          {/* Wedding Header */}
          <div className="mb-4">
            <div className="text-amber-400 font-serif text-sm tracking-widest mb-1">
              {weddingDetails.shloka}
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              {weddingDetails.couple}
            </h2>
            <p className="text-xs text-amber-200/80 font-serif italic mt-0.5">
              Previous-Day Games & Wedding Celebration Portal
            </p>
          </div>

          {!generatedPass ? (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
              {/* Step 1: Choose Side */}
              <div>
                <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 text-center">
                  Step 1: Choose Your Allegiance
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {/* Bride Side Card */}
                  <button
                    type="button"
                    onClick={() => setSelectedSide("bride")}
                    className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                      selectedSide === "bride"
                        ? "bg-gradient-to-br from-amber-950/80 via-slate-900 to-orange-950/70 border-amber-400 shadow-lg shadow-amber-950/80 scale-[1.02]"
                        : "bg-slate-900/60 border-slate-800 hover:border-amber-700/50 opacity-80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">🎭</span>
                      {selectedSide === "bride" && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                    <div>
                      <div className="font-cinzel text-xs uppercase font-bold text-amber-300">
                        Bridal Side
                      </div>
                      <div className="text-sm font-bold text-white leading-tight">
                        Team Karavali
                      </div>
                      <div className="text-[10px] text-amber-200/70 mt-1 line-clamp-2">
                        Yakshagana, Kambala, Ratha & Coastal Sea Breeze
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-amber-400 font-bold">
                        Assigns ID: B1, B2...
                      </div>
                    </div>
                  </button>

                  {/* Groom Side Card */}
                  <button
                    type="button"
                    onClick={() => setSelectedSide("groom")}
                    className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                      selectedSide === "groom"
                        ? "bg-gradient-to-br from-emerald-950/80 via-slate-900 to-teal-950/70 border-emerald-400 shadow-lg shadow-emerald-950/80 scale-[1.02]"
                        : "bg-slate-900/60 border-slate-800 hover:border-emerald-700/50 opacity-80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">🦜</span>
                      {selectedSide === "groom" && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <div className="font-cinzel text-xs uppercase font-bold text-emerald-300">
                        Groom Side
                      </div>
                      <div className="text-sm font-bold text-white leading-tight">
                        Team Dandeli
                      </div>
                      <div className="text-[10px] text-emerald-200/70 mt-1 line-clamp-2">
                        River Kali, Hornbill, Waterfalls & Wild Forest
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-emerald-400 font-bold">
                        Assigns ID: G1, G2...
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 2: Enter Name & City */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Hegde, Priya Rao"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Your Native Town / City (Optional)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Kundapura, Dandeli, Udupi, Hubli"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-3.5 rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  selectedSide === "bride"
                    ? "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 shadow-amber-950/60"
                    : "bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 shadow-emerald-950/60"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Join & Get Player ID Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Your unique ID (<strong className="text-amber-300">B#</strong> or <strong className="text-emerald-300">G#</strong>) will be used by the Admin to record your game scores during the Previous-Day Clash!
              </p>
            </form>
          ) : (
            /* Digital Pass Generated Confirmation */
            <div className="space-y-5 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-amber-400" />
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Official Game Pass Created!
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mt-1">
                  Welcome to {generatedPass.team}, {generatedPass.name}!
                </h3>
              </div>

              {/* Digital Pass Card */}
              <div
                className={`p-6 rounded-2xl border-2 text-center relative overflow-hidden shadow-2xl ${
                  generatedPass.side === "bride"
                    ? "bg-gradient-to-br from-amber-950 via-slate-950 to-orange-950 border-amber-400"
                    : "bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 border-emerald-400"
                }`}
              >
                <div className="text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-1">
                  PLAYER ID
                </div>
                <div className="font-cinzel text-5xl font-extrabold text-white tracking-wider my-2">
                  <span className={generatedPass.side === "bride" ? "text-amber-400" : "text-emerald-400"}>
                    {generatedPass.id}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {generatedPass.name}
                </div>
                <div className="text-xs text-slate-400">
                  {generatedPass.city} • Initial Score: 0 pts
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-200/90">
                  Show this ID <strong className="text-white">"{generatedPass.id}"</strong> to the Admin / Game Coordinator during the games to earn points!
                </div>
              </div>

              <button
                type="button"
                onClick={handleFinish}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-sm shadow-xl transition-all hover:scale-[1.01]"
              >
                Enter Celebration Hub
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
