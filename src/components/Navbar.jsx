import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { 
  Calendar, 
  Utensils, 
  CheckCircle2, 
  Flame, 
  Compass, 
  Phone, 
  Gamepad2, 
  Download, 
  LogOut, 
  ShieldCheck, 
  Eye, 
  BookOpen,
  Edit3
} from "lucide-react";
import { SectionContentEditorModal } from "./admin/SectionContentEditorModal";

export const Navbar = ({ onOpenInviteCard }) => {
  const { currentUser, logout, viewMode, setViewMode, weddingDetails } = useWedding();
  const [activeItem, setActiveItem] = useState("our-definition");
  const [editorSection, setEditorSection] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Top Selection Icons: 8 in Admin mode (including RSVP), 7 in Guest mode (RSVP removed per Action 17)
  const allNavItems = [
    {
      id: "our-definition",
      label: "Our definition",
      icon: BookOpen,
      href: "#heritage",
      scope: "Heritage & Love Story"
    },
    {
      id: "ceremonies",
      label: "Ceremonies",
      icon: Calendar,
      href: "#ceremonies",
      scope: "Rituals, Venue & Memories"
    },
    {
      id: "feast",
      label: "Wedding feast",
      icon: Utensils,
      href: "#feast",
      scope: "Royal Pangath"
    },
    ...(currentUser?.role === "admin" ? [{
      id: "rsvp",
      label: "RSVP",
      icon: CheckCircle2,
      href: "#rsvp",
      scope: "RSVP Configuration (Admin)",
      adminOnly: true
    }] : []),
    {
      id: "traditions",
      label: "Traditions",
      icon: Flame,
      href: "#traditions",
      scope: "Sacred Konkani Rites"
    },
    {
      id: "explore",
      label: "Explore",
      icon: Compass,
      href: "#explore",
      scope: "Area Gems & Cultural Guide"
    },
    {
      id: "contact",
      label: "Contact",
      icon: Phone,
      href: "#lineage",
      scope: "Lineage & Assistance"
    },
    {
      id: "fun-and-joy",
      label: "Fun & Joy",
      icon: Gamepad2,
      href: "#fun-and-joy",
      scope: "Games & Live Stream"
    }
  ];

  const handleNavClick = (item) => {
    setActiveItem(item.id);
    
    // In Admin Suite mode, open Section Editor directly (Action 21 / 20b)
    if (viewMode === "admin" || item.adminOnly) {
      setEditorSection(item.id);
      setIsEditorOpen(true);
      return;
    }

    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#050e18]/95 backdrop-blur-xl border-b border-[#D4AF37]/30 shadow-xl">
      
      {/* Top Header Bar: Logo & Credentials Control */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Emblem & Couple Title (Actions 1 & 2) */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img 
              src="/wedding-logo.png" 
              alt="Nidhi & Harshith Wedding Celebration" 
              className="w-10 h-10 rounded-full object-cover border-2 border-[#D4AF37]/70 shadow-md group-hover:scale-105 transition-transform" 
            />
            <div>
              <div className="font-playfair text-base sm:text-lg font-bold text-white flex items-center gap-1.5 tracking-wide">
                <span>Harshith</span>
                <span className="text-amber-300 font-serif font-light text-base">&</span>
                <span>Nidhi</span>
              </div>
              <div className="text-[10px] text-amber-300/90 font-serif tracking-wider">
                "Where the Sea Meets the Forest"
              </div>
            </div>
          </a>

          {/* Controls Right */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenInviteCard}
              className="py-1.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-[#D4AF37]/40 text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Invitation PNG</span>
            </button>

            {currentUser?.role === "admin" && (
              <button
                onClick={() => setViewMode(viewMode === "admin" ? "guest" : "admin")}
                className="py-1.5 px-3 rounded-xl bg-gradient-to-r from-blue-900/70 to-indigo-900/70 hover:opacity-90 border border-blue-500/50 text-cyan-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                {viewMode === "admin" ? (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>Guest View</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Admin Suite</span>
                  </>
                )}
              </button>
            )}

            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <span className="text-[11px] text-slate-300 hidden md:inline font-medium">
                {currentUser?.name}
              </span>
              <button
                onClick={logout}
                className="p-1.5 rounded-xl bg-slate-900 hover:bg-red-950/60 text-slate-400 hover:text-red-300 border border-slate-800 transition-colors cursor-pointer"
                title="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Taskbar: Top Selection Icons with EQUAL SPACING and EQUAL CENTERING (Action 3, 4 & 21) */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <nav className="flex items-center justify-between w-full overflow-x-auto custom-scrollbar py-1.5 gap-1 sm:gap-2">
          {allNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <div
                key={item.id}
                className="flex-1 min-w-[76px] sm:min-w-[90px] relative group"
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`w-full py-1.5 px-1 sm:px-2 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-slate-900 border border-[#D4AF37] text-white shadow-sm"
                      : "hover:bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-transparent"
                  }`}
                  title={item.scope}
                >
                  <Icon
                    className={`w-4 h-4 mb-0.5 transition-transform group-hover:scale-110 ${
                      isActive ? "text-[#D4AF37]" : "text-slate-400 group-hover:text-amber-300"
                    }`}
                  />
                  <span
                    className={`text-[10px] sm:text-[11px] font-semibold tracking-tight whitespace-nowrap ${
                      isActive ? "text-amber-300 font-bold" : "text-slate-300"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>

                {/* Admin Quick Edit Button on Hover (Action 21) */}
                {currentUser?.role === "admin" && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditorSection(item.id);
                      setIsEditorOpen(true);
                    }}
                    className="absolute -top-1 -right-1 p-1 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10 cursor-pointer"
                    title={`Edit ${item.label}`}
                  >
                    <Edit3 className="w-2.5 h-2.5" />
                  </button>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Section Content Editor Modal for Admin (Action 21 / 20b) */}
      <SectionContentEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        initialSection={editorSection || "our-definition"}
      />

    </header>
  );
};
