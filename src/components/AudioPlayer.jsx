import React, { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX, Sparkles } from "lucide-react";

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Play synthetic Indian wedding Shehnai / Tanpura drone & temple bells using Web Audio API
  const startAudio = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Tanpura Root drone (Sa - 138.59 Hz, Pa - 207.65 Hz)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.08, ctx.currentTime);

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(138.59, ctx.currentTime); // C#3
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(207.65, ctx.currentTime); // G#3

      osc1.connect(droneGain);
      osc2.connect(droneGain);
      droneGain.connect(masterGain);

      osc1.start();
      osc2.start();

      // Gentle temple bells chime interval (every 4 seconds)
      const playTempleBell = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const bellCtx = audioCtxRef.current;
        const bellOsc = bellCtx.createOscillator();
        const bellGain = bellCtx.createGain();

        bellOsc.type = "sine";
        // Pentatonic wedding melody notes
        const notes = [554.37, 622.25, 698.46, 830.61, 932.33, 1108.73];
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        bellOsc.frequency.setValueAtTime(randomNote, bellCtx.currentTime);

        bellGain.gain.setValueAtTime(0.15, bellCtx.currentTime);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, bellCtx.currentTime + 3.0);

        bellOsc.connect(bellGain);
        bellGain.connect(masterGain);

        bellOsc.start();
        bellOsc.stop(bellCtx.currentTime + 3.0);
      };

      playTempleBell();
      intervalRef.current = setInterval(playTempleBell, 3800);
      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  };

  const stopAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer ${
        isPlaying
          ? "bg-[#D4AF37] text-slate-950 border-amber-300 shadow-amber-500/20 animate-pulse"
          : "bg-slate-950/80 text-amber-200 border-slate-700/80 hover:border-amber-400/60"
      }`}
      title={isPlaying ? "Mute Traditional Konkani Wedding Shehnai & Bells" : "Play Traditional Konkani Wedding Shehnai & Bells"}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-slate-950" />
          <span className="text-xs font-bold text-slate-950 hidden sm:inline">Konkani Shehnai Playing</span>
        </>
      ) : (
        <>
          <Music className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold hidden sm:inline">Play Wedding Music</span>
        </>
      )}
    </button>
  );
};
