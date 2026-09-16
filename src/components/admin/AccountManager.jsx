import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { KeyRound, UserPlus, Copy, Check, ShieldCheck, User, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const AccountManager = () => {
  const { users } = useWedding();
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyCredentials = (u) => {
    const text = `👑 *Wedding Portal Access* 👑\n\nNamaste ${u.name},\n\nHere are your private credentials to access our official wedding app & schedule:\n🔗 Website: ${window.location.origin}\n👤 Username: ${u.username}\n🔑 Password: ${u.password}\n\nWe look forward to celebrating with you!`;
    navigator.clipboard.writeText(text);
    setCopiedId(u.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl royal-glass border border-blue-700/40 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <KeyRound className="w-3.5 h-3.5 text-amber-400" />
              <span>Security & Access Credentials</span>
            </div>
            <h2 className="font-cinzel text-xl md:text-2xl font-bold text-white">
              User Logins & Confidential Passwords
            </h2>
            <p className="text-xs md:text-sm text-blue-200/80 mt-1 max-w-2xl">
              Manage unique logins and passwords for admin controllers and invited guests. You can copy the credentials with 1 click to send via WhatsApp or SMS.
            </p>
          </div>
        </div>

        {/* User Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {users.map((u) => (
            <div
              key={u.id}
              className="p-5 rounded-2xl bg-slate-950/80 border border-blue-700/40 hover:border-amber-400/50 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-600/40 flex items-center justify-center text-lg">
                    {u.avatar || "👤"}
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      u.role === "admin"
                        ? "bg-amber-950/80 border border-amber-500/50 text-amber-300"
                        : "bg-blue-950/80 border border-blue-500/50 text-blue-300"
                    }`}
                  >
                    {u.role === "admin" ? "Admin Access" : "Guest Pass"}
                  </span>
                </div>

                <div className="font-semibold text-white text-base mb-2">{u.name}</div>

                <div className="space-y-1.5 p-3 rounded-xl bg-blue-950/40 border border-blue-900/60 font-mono text-xs text-blue-200">
                  <div className="flex justify-between">
                    <span className="text-blue-400">Username:</span>
                    <strong className="text-white">{u.username}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-400">Password:</span>
                    <strong className="text-amber-300">{u.password}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopyCredentials(u)}
                className="mt-4 w-full py-2 px-3 rounded-xl bg-blue-900/50 hover:bg-blue-800 border border-blue-700/50 text-xs font-semibold text-blue-200 hover:text-white flex items-center justify-center space-x-2 transition-colors"
              >
                {copiedId === u.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copy Login Message</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
