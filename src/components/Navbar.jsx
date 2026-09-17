import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { 
  Calendar, 
  Utensils, 
  Flame, 
  Compass, 
  Phone, 
  Gamepad2, 
  Download, 
  LogOut, 
  ShieldCheck, 
  Eye, 
  BookOpen
} from "lucide-react";

export const Navbar = ({ onOpenInviteCard }) => {
  const { currentUser, logout, viewMode, setViewMode, weddingDetails } = useWedding();
  const [activeItem, setActiveItem] = useState("our-definition");

  // Top Selection Icons: 7 essential sections in Guest / Portal mode (RSVP removed)
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
    
    // If currently in Admin Suite mode, switch to portal view so section is mounted
    if (viewMode === "admin") {
      setViewMode("guest");
      setTimeout(() => {
        const target = document.querySelector(item.href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
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
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${viewMode !== "admin" ? "border-b border-slate-800/80" : ""}`}>
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Emblem, Couple Title & Admin Badge */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <img 
                src="/wedding-logo.png" 
                alt="Nidhi & Harshith Wedding Celebration" 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#D4AF37]/70 shadow-md group-hover:scale-105 transition-transform" 
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

            {/* In Admin Suite Mode: Show Sleek Status Badge */}
            {viewMode === "admin" && (
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide ml-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Admin Command Suite
              </span>
            )}
          </div>

          {/* Controls Right - Cleanly Centered & Aligned */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenInviteCard}
              className="py-2 px-3 sm:px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-[#D4AF37]/40 text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm hover:border-[#D4AF37]"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Invitation PNG</span>
            </button>

            {currentUser?.role === "admin" && (
              <button
                onClick={() => setViewMode(viewMode === "admin" ? "guest" : "admin")}
                className={`py-2 px-3 sm:px-3.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all ${
                  viewMode === "admin"
                    ? "bg-gradient-to-r from-[#0F4C81] to-[#2E6F40] hover:brightness-110 text-white border-amber-400/60 shadow-md"
                    : "bg-gradient-to-r from-blue-900/70 to-indigo-900/70 hover:opacity-90 border-blue-500/50 text-cyan-200"
                }`}
              >
                {viewMode === "admin" ? (
                  <>
                    <Eye className="w-3.5 h-3.5 text-amber-300" />
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

            <div className="flex items-center gap-2 sm:gap-2.5 pl-2 sm:pl-3 border-l border-slate-800">
              <div className="hidden md:flex flex-col text-right">
                <span className="text-[11px] text-white font-medium leading-tight">
                  {currentUser?.name}
                </span>
                <span className="text-[9px] text-amber-400/80 uppercase tracking-wider font-semibold">
                  {currentUser?.role === "admin" ? "All Access" : "Guest"}
                </span>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-xl bg-slate-900 hover:bg-red-950/60 text-slate-400 hover:text-red-300 border border-slate-800 hover:border-red-800/60 transition-colors cursor-pointer"
                title="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Taskbar: Top Selection Icons ONLY visible in Guest / Portal View (Removed in Admin Suite) */}
      {viewMode !== "admin" && (
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <nav className="flex items-center justify-between w-full overflow-x-auto custom-scrollbar py-2 gap-1.5 sm:gap-2.5">
            {allNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <div
                  key={item.id}
                  className="flex-1 min-w-[85px] sm:min-w-[100px] text-center"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className={`w-full py-2 px-1.5 sm:px-2.5 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-slate-900 border border-[#D4AF37] text-white shadow-md ring-1 ring-[#D4AF37]/30"
                        : "hover:bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-transparent"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 mb-1 transition-transform group-hover:scale-110 ${
                        isActive ? "text-[#D4AF37]" : "text-slate-400 group-hover:text-amber-300"
                      }`}
                    />
                    <span
                      className={`text-[10.5px] sm:text-[11.5px] font-semibold tracking-tight whitespace-nowrap ${
                        isActive ? "text-amber-300 font-bold" : "text-slate-300"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </div>
              );
            })}
          </nav>
        </div>
      )}

    </header>
  );
};
