import React, { useState, useRef } from "react";
import { useWedding } from "../context/WeddingContext";
import { toPng } from "html-to-image";
import { Download, X, Sparkles, Copy, Check, Share2, Image as ImageIcon, MapPin, Calendar } from "lucide-react";

export const InvitationCardGenerator = ({ isOpen, onClose }) => {
  const { weddingDetails, invitees } = useWedding();
  const cardRef = useRef(null);
  const [selectedGuestName, setSelectedGuestName] = useState(
    invitees.length > 0 ? invitees[0].name : "Respected Guest & Family"
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      setIsGenerating(true);
      const dataUrl = await toPng(cardRef.current, {
        quality: 0.98,
        pixelRatio: 2,
        cacheBust: true
      });
      const link = document.createElement("a");
      link.download = `Wedding_Invitation_Harshith_Nidhi_${selectedGuestName.replace(/[^a-zA-Z0-9]/g, "_")}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export invitation card PNG", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const inviteText = `✨ *Shubh Vivah Invitation* ✨\n\nNamaste ${selectedGuestName},\n\nWith the divine blessings of Lord Ganesha and our elders, we cordially invite you and your family to celebrate the wedding union of:\n\n👑 *${weddingDetails.couple}*\n(${weddingDetails.groomName} weds ${weddingDetails.brideName})\n\n📅 *Celebration Dates:* ${weddingDetails.displayDates}\n📍 *Royal Venue:* ${weddingDetails.primaryVenue}\n🗺️ *Google Maps:* ${weddingDetails.mapUrl}\n\nPlease find the official invitation card attached!\n\nWarm Regards,\nNayak & Prabhu Families\n${weddingDetails.hashtag}`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(inviteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-[#D4AF37]/40 rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/30 bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <ImageIcon className="w-5 h-5 text-amber-400" />
            <h3 className="font-playfair text-lg font-bold text-white">
              Official Digital PNG Wedding Invitation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Customization controls */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Personalize for Invitee:
              </label>
              <select
                value={selectedGuestName}
                onChange={(e) => setSelectedGuestName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white outline-none focus:border-amber-400"
              >
                <option value="Respected Guest & Family">Generic: Respected Guest & Family</option>
                {invitees.map((inv) => (
                  <option key={inv.id} value={inv.name}>
                    {inv.name} ({inv.city})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                WhatsApp Accompanying Text:
              </label>
              <button
                type="button"
                onClick={handleCopyText}
                className="w-full py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-amber-200 hover:text-white flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copy Broadcast Caption</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Actual Invitation Card DOM Node that will be exported to PNG */}
          <div className="flex justify-center mb-6">
            <div
              ref={cardRef}
              className="w-full max-w-lg bg-gradient-to-b from-[#091526] via-[#050c18] to-[#041a10] border-4 border-[#D4AF37] rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden"
              style={{ minHeight: "520px" }}
            >
              {/* Traditional Gold Corner Accents */}
              <div className="absolute top-2 left-2 text-[#D4AF37] text-xs">🪔</div>
              <div className="absolute top-2 right-2 text-[#D4AF37] text-xs">🪔</div>
              <div className="absolute bottom-2 left-2 text-emerald-400 text-xs">🌿</div>
              <div className="absolute bottom-2 right-2 text-cyan-400 text-xs">🌊</div>

              {/* Shloka */}
              <div className="text-amber-300 font-garamond text-xs sm:text-sm tracking-widest uppercase mb-3">
                {weddingDetails.shloka}
              </div>

              {/* Theme Emblem */}
              <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full bg-slate-950/80 border border-[#D4AF37]/60 text-xs mb-3">
                <span>🌊</span>
                <span className="text-[#D4AF37]">+</span>
                <span>🌳</span>
                <span className="text-[#D4AF37]">+</span>
                <span className="text-rose-500">❤️</span>
                <span className="text-amber-200 font-serif ml-1">"Where the Sea Meets the Forest"</span>
              </div>

              {/* Personalized Guest Welcome */}
              <div className="text-xs text-blue-200/90 font-serif mb-1">
                Cordially inviting
              </div>
              <div className="text-base font-bold text-amber-300 font-playfair mb-3 underline decoration-[#D4AF37]/50 underline-offset-4">
                {selectedGuestName}
              </div>

              <div className="text-[11px] text-slate-300 mb-2">
                Together with their families
              </div>

              {/* Couple Header */}
              <h2 className="font-playfair text-3xl sm:text-4xl font-extrabold text-white tracking-wide mb-1">
                Harshith & Nidhi
              </h2>

              <p className="text-xs text-amber-200/80 font-serif italic mb-4">
                "{weddingDetails.tagline}"
              </p>

              {/* Parents details */}
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 mb-4">
                <div>
                  <span className="text-cyan-300 font-bold block">Groom's Parents</span>
                  <span>{weddingDetails.groomParents}</span>
                </div>
                <div>
                  <span className="text-emerald-300 font-bold block">Bride's Parents</span>
                  <span>{weddingDetails.brideParents}</span>
                </div>
              </div>

              {/* Date & Time */}
              <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-emerald-950/40 border border-[#D4AF37]/40 mb-3">
                <div className="text-xs font-bold text-white flex items-center justify-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sunday, 13 December 2026 • Muhurtham: 10:15 AM</span>
                </div>
                <div className="text-[11px] text-slate-300 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{weddingDetails.primaryVenue}, Nagoor</span>
                </div>
              </div>

              {/* QR Code & Hashtag */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-left">
                <div className="text-[10px] text-slate-400">
                  <span className="text-amber-300 font-mono font-bold block">{weddingDetails.hashtag}</span>
                  <span>harshithwedsnidhi.com</span>
                </div>

                <div className="w-12 h-12 bg-white rounded-lg p-0.5 shadow">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://harshithwedsnidhi.com"
                    alt="Wedding QR"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Download & Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:opacity-95 text-slate-950 font-bold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Generating High-Res PNG...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Invitation PNG</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
