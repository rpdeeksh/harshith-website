import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { FinanceTracker } from "./FinanceTracker";
import { InviteeManager } from "./InviteeManager";
import { WhatsAppBroadcast } from "./WhatsAppBroadcast";
import { UserMasterManager } from "./UserMasterManager";
import { GameChallengeCreator } from "./GameChallengeCreator";
import { EventDetailsEditor } from "./EventDetailsEditor";
import { 
  IndianRupee, 
  Users, 
  MessageSquare, 
  KeyRound, 
  QrCode, 
  Trophy, 
  Calendar, 
  Eye, 
  LogOut, 
  Crown, 
  Sparkles,
  ExternalLink,
  BookOpen,
  Utensils,
  CheckCircle2,
  Flame,
  Compass,
  Phone,
  Gamepad2,
  Edit3
} from "lucide-react";
import { SectionContentEditorModal } from "./SectionContentEditorModal";

export const AdminDashboard = ({ onOpenInviteCard }) => {
  const { adminTab, setAdminTab, setViewMode, logout, weddingDetails, currentUser } = useWedding();

  const [selectedSection, setSelectedSection] = useState("our-definition");
  const [isSectionEditorOpen, setIsSectionEditorOpen] = useState(false);

  const TABS = [
    { id: "finances", label: "1. Finance Tracker", icon: IndianRupee, badge: "Quotations vs Paid" },
    { id: "guests", label: "2. Guest List", icon: Users, badge: "Tick Invited" },
    { id: "broadcast", label: "3. WhatsApp Broadcast", icon: MessageSquare, badge: "Bulk + PNG" },
    { id: "users", label: "4. User Master", icon: KeyRound, badge: "Logins & Passwords" },
    { id: "games", label: "5 & 6. Games, QR & Points", icon: QrCode, badge: "Interactive Arena" },
    { id: "events", label: "7. Event Details", icon: Calendar, badge: "Live Timings" },
    { id: "sections", label: "8. Edit Portal Sections", icon: Sparkles, badge: "All 8 Sections" }
  ];

  const PORTAL_SECTIONS = [
    { id: "our-definition", label: "1. Our definition", icon: BookOpen, desc: "Groom & Bride lineage, roots, tagline, shloka" },
    { id: "ceremonies", label: "2. Ceremonies", icon: Calendar, desc: "Mehendi, Haldi, Phool Muddi, Muhurtham & Reception timings" },
    { id: "feast", label: "3. Wedding feast", icon: Utensils, desc: "Royal Pangath GSB menu dishes, recipes & visuals" },
    { id: "rsvp", label: "4. RSVP", icon: CheckCircle2, desc: "Presence status, deadlines, and guest list sync" },
    { id: "traditions", label: "5. Traditions", icon: Flame, desc: "Sacred Konkani Vedic rituals & Sanskrit chants" },
    { id: "explore", label: "6. Explore / Area Gems", icon: Compass, desc: "Coastal Karnataka and Dandeli outstation attractions" },
    { id: "contact", label: "7. Contact", icon: Phone, desc: "Groom, Bride and Accommodation coordinator hotlines" },
    { id: "fun-and-joy", label: "8. Fun & Joy", icon: Gamepad2, desc: "Live YouTube 4K stream link, trivia questions & points" }
  ];

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6">
      
      {/* Top Admin Navigation & Welcome Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-3xl bg-slate-900/90 border border-[#D4AF37]/40 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0F4C81] to-[#2E6F40] border border-[#D4AF37]/50 flex items-center justify-center text-2xl shadow-lg">
            👑
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-playfair text-xl md:text-2xl font-bold text-white">
                Admin Command Suite
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Administrator
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {weddingDetails.couple} • Shri Gopal Krishna Kalamandir, Nagoor
            </p>
          </div>
        </div>

        {/* View mode toggle & Logout */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setViewMode("guest")}
            className="py-2 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Preview how guests experience the website"
          >
            <Eye className="w-4 h-4" />
            <span>Switch to Guest View</span>
          </button>

          <button
            onClick={logout}
            className="py-2 px-3.5 rounded-xl bg-red-950/60 hover:bg-red-900/80 border border-red-800/60 text-xs font-semibold text-red-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Admin Feature Navigation Pills - Cleanly Aligned & Equally Distributed */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = (adminTab === tab.id) || (adminTab === "overview" && tab.id === "finances");

          return (
            <button
              key={tab.id}
              onClick={() => setAdminTab(tab.id)}
              className={`py-3 px-2.5 rounded-2xl border transition-all text-xs flex flex-col justify-center items-center text-center gap-1.5 cursor-pointer shadow-sm ${
                isActive
                  ? "bg-gradient-to-r from-[#0F4C81] to-[#2E6F40] text-white border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/50"
                  : "bg-slate-900/80 hover:bg-slate-800/80 text-slate-300 border-slate-800 hover:border-slate-700"
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-amber-300" : "text-slate-400"}`} />
              <div className="w-full overflow-hidden">
                <div className="font-bold text-[11px] leading-tight truncate">{tab.label}</div>
                <div className="text-[9.5px] opacity-75 mt-0.5 truncate">{tab.badge}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Tab Content View */}
      <div className="pt-2">
        {(adminTab === "finances" || adminTab === "overview") && <FinanceTracker />}
        {adminTab === "guests" && <InviteeManager onOpenInviteCard={onOpenInviteCard} />}
        {adminTab === "broadcast" && <WhatsAppBroadcast onOpenInviteCard={onOpenInviteCard} />}
        {adminTab === "users" && <UserMasterManager />}
        {adminTab === "games" && <GameChallengeCreator />}
        {adminTab === "events" && <EventDetailsEditor />}
        
        {/* Tab 8: Edit Portal Sections (Action 21 / 20b) */}
        {adminTab === "sections" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-playfair text-xl font-bold text-white">
                  Portal Sections Master Editor
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Click any section below or use the top taskbar to customize content, dates, images, contacts, and configuration.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PORTAL_SECTIONS.map((sec) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={sec.id}
                    onClick={() => {
                      setSelectedSection(sec.id);
                      setIsSectionEditorOpen(true);
                    }}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#D4AF37] transition-all cursor-pointer group flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-slate-800 group-hover:bg-[#0F4C81] text-amber-300 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="p-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                          <Edit3 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <h4 className="font-playfair text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {sec.label}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-amber-300 font-semibold">
                      <span>Edit Content</span>
                      <span>→</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Section Content Editor Modal */}
      <SectionContentEditorModal
        isOpen={isSectionEditorOpen}
        onClose={() => setIsSectionEditorOpen(false)}
        initialSection={selectedSection}
      />

    </div>
  );
};
