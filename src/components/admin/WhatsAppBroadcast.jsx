import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  Send, 
  MessageSquare, 
  Image as ImageIcon, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  Download,
  AlertCircle,
  Play,
  RotateCcw,
  Check,
  Users
} from "lucide-react";
import confetti from "canvas-confetti";

const PRESET_TEMPLATES = {
  formal: `✨ *Shubh Vivah Invitation* ✨\n\nNamaste {name},\n\nWith the divine blessings of Lord Ganesha and our elders, we cordially invite you and your family to celebrate the wedding union of:\n\n👑 *{couple}* 👑\n({groomName} weds {brideName})\n\n📅 *Celebration Dates:* {dates}\n📍 *Royal Venue:* {venue}\n🗺️ *Google Maps:* {mapUrl}\n\nKindly find the official wedding invitation card attached above. Your presence & blessings mean the world to us!\n\nWarm Regards,\nNayak & Prabhu Families\n{hashtag}`,
  
  friendly: `🎉 *Wedding Celebration Alert!* 🎉\n\nHey {name},\n\nThe big day is finally here! *{couple}* are getting married and we cannot celebrate without you!\n\n📅 *Dates:* {dates}\n📍 *Venue:* {venue}\n🗺️ *Maps Link:* {mapUrl}\n\nPlease check our official invitation card attached. Can't wait to see you at the celebrations!\n\nCheers & Warmth,\n{groomName} & {brideName}\n{hashtag}`,

  update: `🔔 *Wedding Update & Schedule* 🔔\n\nDear {name},\n\nImportant update regarding *{couple}*'s wedding celebrations:\n\n📅 *Muhurtham:* Sunday, 13 Dec 2026, 10:15 AM\n📍 *Venue:* {venue}\n🗺️ *Directions:* {mapUrl}\n\nValet parking and hospitality desks are live at the venue. Looking forward to having you with us!\n\nWarm Regards,\nWedding Logistics Desk`
};

export const WhatsAppBroadcast = ({ onOpenInviteCard }) => {
  const { invitees, weddingDetails, toggleInvited } = useWedding();
  const [template, setTemplate] = useState(PRESET_TEMPLATES.formal);
  const [activeTemplateType, setActiveTemplateType] = useState("formal");
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [copiedNumbers, setCopiedNumbers] = useState(false);

  // Queue of uninvited contacts
  const pendingInvitees = invitees.filter((inv) => !inv.isInvited);
  const totalCount = invitees.length;
  const invitedCount = invitees.filter((inv) => inv.isInvited).length;
  const percentageInvited = totalCount > 0 ? Math.round((invitedCount / totalCount) * 100) : 0;

  // Format message with tags
  const formatMessageForGuest = (inv) => {
    return template
      .replace(/{name}/g, inv.name)
      .replace(/{couple}/g, weddingDetails.couple)
      .replace(/{groomName}/g, weddingDetails.groomName)
      .replace(/{brideName}/g, weddingDetails.brideName)
      .replace(/{dates}/g, weddingDetails.displayDates)
      .replace(/{venue}/g, weddingDetails.primaryVenue)
      .replace(/{mapUrl}/g, weddingDetails.mapUrl)
      .replace(/{hashtag}/g, weddingDetails.hashtag);
  };

  // Dispatch single message
  const handleDispatch = (inv) => {
    const message = formatMessageForGuest(inv);
    const cleanPhone = inv.phone.replace(/[^0-9]/g, "");
    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodedText}`;

    // Tick as invited
    if (!inv.isInvited) {
      toggleInvited(inv.id);
    }

    // Open WhatsApp
    window.open(waUrl, "_blank");

    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.7 }
    });
  };

  // Bulk queue step through
  const handleDispatchNextInQueue = () => {
    if (pendingInvitees.length === 0) return;
    const nextInvitee = pendingInvitees[0];
    handleDispatch(nextInvitee);
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(template);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  const handleCopyNumbers = () => {
    const numbers = invitees.map((i) => `+${i.phone}`).join(", ");
    navigator.clipboard.writeText(numbers);
    setCopiedNumbers(true);
    setTimeout(() => setCopiedNumbers(false), 2500);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-[#0F4C81]/40 border border-emerald-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Admin Feature 3 • Bulk WhatsApp Broadcast Suite</span>
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              WhatsApp Broadcast & Digital PNG Dispatch
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Broadcast personalized invitation messages directly from your WhatsApp to guests, along with the official PNG photo of the invitation.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onOpenInviteCard}
              className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:opacity-95 text-slate-950 font-bold text-xs shadow flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>1-Click Download Invitation PNG</span>
            </button>

            <button
              onClick={handleCopyNumbers}
              className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 flex items-center gap-1.5"
            >
              {copiedNumbers ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>Copy Phone Numbers</span>
            </button>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Broadcast Dispatch Progress: {invitedCount} / {totalCount} Invited</span>
            </span>
            <span className="font-mono text-emerald-300 font-bold">{percentageInvited}% Complete</span>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${percentageInvited}%` }}
            />
          </div>
        </div>
      </div>

      {/* Message Customizer & Bulk Queue Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Template Editor */}
        <div className="lg:col-span-6 rounded-3xl p-6 bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-playfair text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Pre-configured Message Template</span>
            </h3>

            {/* Template presets */}
            <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setActiveTemplateType("formal");
                  setTemplate(PRESET_TEMPLATES.formal);
                }}
                className={`px-2.5 py-1 text-[11px] rounded-lg ${
                  activeTemplateType === "formal" ? "bg-emerald-950 text-emerald-300 font-bold" : "text-slate-400"
                }`}
              >
                Formal
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTemplateType("friendly");
                  setTemplate(PRESET_TEMPLATES.friendly);
                }}
                className={`px-2.5 py-1 text-[11px] rounded-lg ${
                  activeTemplateType === "friendly" ? "bg-emerald-950 text-emerald-300 font-bold" : "text-slate-400"
                }`}
              >
                Friendly
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTemplateType("update");
                  setTemplate(PRESET_TEMPLATES.update);
                }}
                className={`px-2.5 py-1 text-[11px] rounded-lg ${
                  activeTemplateType === "update" ? "bg-emerald-950 text-emerald-300 font-bold" : "text-slate-400"
                }`}
              >
                Event Update
              </button>
            </div>
          </div>

          <p className="text-[11px] text-slate-400">
            Personalized dynamic tags: <code>{'{name}'}</code>, <code>{'{couple}'}</code>, <code>{'{dates}'}</code>, <code>{'{venue}'}</code>, <code>{'{mapUrl}'}</code>
          </p>

          <textarea
            rows="10"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white font-mono leading-relaxed focus:border-emerald-400 focus:outline-none"
          />

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleCopyTemplate}
              className="py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1.5"
            >
              {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>Copy Template</span>
            </button>

            <button
              onClick={onOpenInviteCard}
              className="py-1.5 px-3 rounded-xl bg-blue-950 hover:bg-blue-900 border border-blue-700 text-xs text-cyan-300 flex items-center gap-1.5 cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Preview Attached PNG Card</span>
            </button>
          </div>
        </div>

        {/* Right Column: Broadcast Queue & Step-Through Dispatcher */}
        <div className="lg:col-span-6 rounded-3xl p-6 bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div>
                <h3 className="font-playfair text-lg font-bold text-white flex items-center gap-2">
                  <Play className="w-4 h-4 text-emerald-400" />
                  <span>Bulk Broadcast Queue</span>
                </h3>
                <p className="text-[11px] text-slate-400">
                  {pendingInvitees.length} guests pending invitation in queue
                </p>
              </div>

              {pendingInvitees.length > 0 && (
                <button
                  onClick={handleDispatchNextInQueue}
                  className="py-2 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:opacity-95 text-white font-bold text-xs shadow-lg flex items-center gap-2 cursor-pointer animate-pulse"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send to Next Guest ({pendingInvitees[0]?.name})</span>
                </button>
              )}
            </div>

            {/* List of pending or all invitees */}
            <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1 custom-scrollbar">
              {invitees.map((inv) => (
                <div
                  key={inv.id}
                  className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 text-xs ${
                    inv.isInvited
                      ? "bg-slate-950/40 border-slate-800/80 text-slate-400"
                      : "bg-slate-950 border-emerald-900/60 text-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{inv.name}</span>
                      <span className="text-[10px] text-slate-400">({inv.side})</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">+{inv.phone}</div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {inv.isInvited ? (
                      <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/40">
                        <Check className="w-3 h-3" />
                        <span>Invited</span>
                      </span>
                    ) : (
                      <span className="text-[10px] text-amber-300 font-semibold bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/40">
                        Pending
                      </span>
                    )}

                    <button
                      onClick={() => handleDispatch(inv)}
                      className="py-1 px-3 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-200 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Send className="w-3 h-3" />
                      <span>{inv.isInvited ? "Resend" : "Send WhatsApp"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-[11px] text-blue-200 leading-relaxed">
            💡 <strong>How WhatsApp Broadcast Works:</strong> Clicking <strong>Send WhatsApp</strong> generates the encoded personalized text and launches WhatsApp Web or the WhatsApp desktop/mobile app directly. You can drag and drop the downloaded invitation PNG card into the chat to deliver the complete visual experience!
          </div>
        </div>

      </div>

    </div>
  );
};
