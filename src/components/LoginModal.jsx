import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { ShieldCheck, Lock, User, X, Sparkles, KeyRound, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export const LoginModal = ({ isOpen, onClose }) => {
  const { login, users } = useWedding();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const result = login(username, password);
    setIsSubmitting(false);

    if (result.success) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#f59e0b", "#93c5fd"]
      });
      onClose();
    } else {
      setError(result.message);
    }
  };

  const handleQuickFill = (userItem) => {
    setUsername(userItem.username);
    setPassword(userItem.password);
    setError("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 rounded-2xl border border-blue-600/40 shadow-2xl shadow-blue-950/80 overflow-hidden">
        
        {/* Top decorative banner */}
        <div className="h-2 bg-gradient-to-r from-blue-700 via-amber-400 to-blue-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-blue-800 to-blue-600 border border-amber-400/40 flex items-center justify-center shadow-lg shadow-blue-900/60">
              <KeyRound className="w-7 h-7 text-amber-300" />
            </div>
            <h3 className="font-cinzel text-xl md:text-2xl font-bold royal-gradient-text">
              Wedding Portal Login
            </h3>
            <p className="text-xs text-blue-200/70 mt-1">
              Enter your unique wedding username & password to access confidential event details & admin controls.
            </p>
          </div>

          {/* Quick Access Preset Chips */}
          <div className="mb-6 p-3 rounded-xl bg-blue-950/50 border border-blue-800/50">
            <div className="text-[11px] font-semibold text-blue-300 flex items-center justify-between mb-2">
              <span className="flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Quick Access Logins:</span>
              </span>
              <span className="text-[10px] text-blue-400/80">Click to autofill</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleQuickFill(users[0])}
                className="text-left px-2.5 py-1.5 rounded-lg bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700/50 transition-all text-xs flex items-center space-x-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <div className="truncate">
                  <div className="font-semibold text-white truncate">Admin Portal</div>
                  <div className="text-[10px] text-blue-300">admin / wedding2026</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleQuickFill(users[1])}
                className="text-left px-2.5 py-1.5 rounded-lg bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700/50 transition-all text-xs flex items-center space-x-1.5"
              >
                <User className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <div className="truncate">
                  <div className="font-semibold text-white truncate">Guest Portal</div>
                  <div className="text-[10px] text-blue-300">guest / vivah2026</div>
                </div>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-blue-200 mb-1">
                Unique Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. admin or guest"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-blue-700/60 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-blue-200 mb-1">
                Secret Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-blue-700/60 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-950/70 border border-red-500/50 text-red-200 text-xs text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-blue-900/60 border border-blue-400/40 flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>{isSubmitting ? "Authenticating..." : "Sign In to Portal"}</span>
            </button>
          </form>

          <p className="text-[11px] text-center text-slate-400 mt-4">
            Security note: Each guest & vendor has unique encrypted access credentials managed by the Admin.
          </p>
        </div>
      </div>
    </div>
  );
};
