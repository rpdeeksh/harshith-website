import React, { useState, useEffect } from "react";
import { useWedding } from "../context/WeddingContext";
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  Heart, 
  Waves, 
  Trees, 
  Download, 
  Play, 
  ArrowRight,
  Compass,
  Radio,
  Music
} from "lucide-react";

export const HomeHero = ({ 
  onOpenInviteCard, 
  onOpenGames, 
  onOpenStream,
  onExploreCoastal,
  onExploreForest
}) => {
  const { weddingDetails, activeTheme, switchTheme, currentUser, isMusicPlaying, setIsMusicPlaying } = useWedding();

  const handleExploreCoastal = () => {
    switchTheme("coastal");
    if (onExploreCoastal) {
      onExploreCoastal();
    } else {
      const el = document.getElementById("area-gems") || document.getElementById("explore");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreForest = () => {
    switchTheme("forest");
    if (onExploreForest) {
      onExploreForest();
    } else {
      const el = document.getElementById("area-gems") || document.getElementById("explore");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(weddingDetails.weddingDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 88, hours: 14, minutes: 42, seconds: 15 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [weddingDetails.weddingDate]);

  return (
    <section className="relative overflow-hidden pt-4 pb-10 px-3 sm:px-6">
      {/* Background Ambience: Split coastal ocean vs forest greens */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#0F4C81]/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2E6F40]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Split Visual Card Hero Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-slate-950/80 backdrop-blur-xl">
          
          {/* Top Gold Traditional Border Motif */}
          <div className="h-2 bg-gradient-to-r from-[#0F4C81] via-[#D4AF37] to-[#2E6F40]" />

          {/* Grid Layout: Left Coastal | Center Couple & Countdown | Right Dandeli Forest */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Visual: Coastal Karnataka (Groom's Roots) */}
            <div className="order-2 lg:order-none lg:col-span-3 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-blue-900/40 bg-gradient-to-br from-[#0F4C81]/25 via-slate-950/60 to-transparent flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 text-8xl opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform">
                🌊
              </div>
              
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F4C81]/40 border border-[#0F4C81]/60 text-blue-200 text-xs font-semibold mb-3">
                  <Waves className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Coastal Karnataka</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-2">
                  Groom's Roots
                </h3>
                <p className="text-xs text-blue-100/70 leading-relaxed">
                  The holy sands of Kundapura & Udupi, timeless GSB Konkani traditions, temple rathas, and the majestic Arabian Sea breeze.
                </p>
              </div>

              {/* Groom's Roots Coastal GSB Heritage Emblem - Borderless & Seamlessly Embedded */}
              <div className="my-4 flex flex-col items-center justify-center text-center group/emblem cursor-pointer">
                <div className="relative flex items-center justify-center transition-transform duration-300 group-hover/emblem:scale-105">
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl scale-90 pointer-events-none" />
                  <img
                    src="/coastal-heritage-emblem.jpg"
                    alt="GSB Konkani Coastal Heritage Seal"
                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-[0_12px_24px_rgba(212,175,55,0.25)] select-none pointer-events-none"
                    style={{ clipPath: "circle(49.2% at 50% 50%)" }}
                  />
                </div>
                <div className="text-[11px] font-semibold text-amber-300 mt-2 tracking-wide font-serif">
                  GSB Konkani Coastal Heritage Seal
                </div>
              </div>

              <button
                onClick={handleExploreCoastal}
                className="mt-5 w-full py-2 px-3 rounded-xl text-xs font-semibold bg-[#0F4C81]/60 hover:bg-[#0F4C81] text-cyan-200 border border-cyan-400/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>Explore Coastal Heritage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Center Visual: The Couple, Shloka & Interactive Countdown */}
            <div className="order-1 lg:order-none lg:col-span-6 p-6 sm:p-10 text-center flex flex-col items-center justify-center relative">
              
              {/* Auspicious Shloka */}
              <div className="text-amber-400 font-garamond text-xs sm:text-sm tracking-widest uppercase mb-2">
                {weddingDetails.shloka}
              </div>

              {/* Family Invitation Intro */}
              <div className="text-xs text-slate-300 font-serif mb-2">
                Together with their families
              </div>

              {/* Circular Wedding Logo */}
              <div className="mb-4">
                <img
                  src="/wedding-logo.png"
                  alt="Nidhi & Harshith Wedding Celebration"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-[#D4AF37] shadow-2xl mx-auto hover:scale-105 transition-transform"
                />
              </div>

              {/* Couple Header */}
              <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
                <span className="bg-gradient-to-r from-blue-200 via-amber-200 to-emerald-200 bg-clip-text text-transparent">
                  Harshith
                </span>
                <span className="mx-3 text-amber-300 font-serif font-light text-2xl sm:text-4xl lg:text-5xl inline-block">&</span>
                <span className="bg-gradient-to-r from-emerald-200 via-amber-200 to-blue-200 bg-clip-text text-transparent">
                  Nidhi
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 font-serif italic mb-6 max-w-lg">
                "Rooted in tradition, blessed by the sea, united in love."
              </p>

              {/* Countdown Timer */}
              <div className="w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/40 shadow-xl mb-6">
                <div className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-3 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>The Auspicious Muhurtham Begins In</span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  <div className="bg-slate-950/80 p-2 sm:p-3 rounded-xl border border-slate-800 text-center">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-white">
                      {String(timeLeft.days).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] uppercase text-slate-400 font-medium">Days</div>
                  </div>
                  <div className="bg-slate-950/80 p-2 sm:p-3 rounded-xl border border-slate-800 text-center">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-amber-300">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] uppercase text-slate-400 font-medium">Hours</div>
                  </div>
                  <div className="bg-slate-950/80 p-2 sm:p-3 rounded-xl border border-slate-800 text-center">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-300">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] uppercase text-slate-400 font-medium">Mins</div>
                  </div>
                  <div className="bg-slate-950/80 p-2 sm:p-3 rounded-xl border border-slate-800 text-center">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-cyan-300">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] uppercase text-slate-400 font-medium">Secs</div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onOpenInviteCard}
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:opacity-95 text-slate-950 font-bold text-xs tracking-wide shadow-md flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Digital PNG Invite</span>
                </button>

                <button
                  onClick={onOpenStream}
                  className="py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/50 text-emerald-300 font-semibold text-xs flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
                >
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Live Stream & Wishes</span>
                </button>

                <button
                  onClick={onOpenGames}
                  className="py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-blue-500/50 text-blue-300 font-semibold text-xs flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Play Wedding Games & QR</span>
                </button>
              </div>
            </div>

            {/* Right Visual: Dandeli Rainforest (Bride's Roots) */}
            <div className="order-3 lg:order-none lg:col-span-3 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-emerald-900/40 bg-gradient-to-bl from-[#2E6F40]/25 via-slate-950/60 to-transparent flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 text-8xl opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform">
                🌿
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E6F40]/40 border border-[#2E6F40]/60 text-emerald-200 text-xs font-semibold mb-3">
                  <Trees className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Dandeli Rainforest</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-2">
                  Bride's Roots
                </h3>
                <p className="text-xs text-emerald-100/70 leading-relaxed">
                  Raised amidst the breathtaking forests, roaring rapids of River Kali, misty Western Ghats, and the free-spirited Malabar Pied Hornbill.
                </p>
              </div>

              {/* Bride's Roots Dandeli Rainforest Emblem - Borderless & Seamlessly Embedded */}
              <div className="my-4 flex flex-col items-center justify-center text-center group/emblem cursor-pointer">
                <div className="relative flex items-center justify-center transition-transform duration-300 group-hover/emblem:scale-105">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl scale-90 pointer-events-none" />
                  <img
                    src="/dandeli-heritage-emblem.jpg"
                    alt="Dandeli Rainforest & Kali River Seal"
                    className="w-48 h-48 sm:w-56 sm:h-56 object-cover drop-shadow-[0_12px_24px_rgba(16,185,129,0.25)] select-none pointer-events-none"
                    style={{ clipPath: "circle(46.4% at 50% 50%)" }}
                  />
                </div>
                <div className="text-[11px] font-semibold text-emerald-300 mt-2 tracking-wide font-serif">
                  Dandeli Rainforest & Kali River Seal
                </div>
              </div>

              <button
                onClick={handleExploreForest}
                className="mt-5 w-full py-2 px-3 rounded-xl text-xs font-semibold bg-[#2E6F40]/60 hover:bg-[#2E6F40] text-emerald-200 border border-emerald-400/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>Explore Forest Heritage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Bottom venue and date status bar */}
          <div className="border-t border-slate-800/80 bg-slate-950/90 py-3 px-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span className="font-medium text-white">{weddingDetails.displayDates}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{weddingDetails.primaryVenue}, {weddingDetails.city}</span>
            </div>

            <div className="text-amber-400 font-mono text-[11px]">
              {weddingDetails.hashtag}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
