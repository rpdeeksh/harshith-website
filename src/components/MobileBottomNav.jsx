import React from "react";
import { useWedding } from "../context/WeddingContext";
import { Home, Trophy, Calendar, Ticket, ShieldCheck } from "lucide-react";

export const MobileBottomNav = ({ onOpenAdminLogin }) => {
  const { 
    activeMobileTab, 
    setActiveMobileTab, 
    registeredUser, 
    currentUser, 
    viewMode, 
    setViewMode,
    activeTheme 
  } = useWedding();

  const handleTabClick = (tabId) => {
    if (tabId === "admin") {
      if (currentUser && currentUser.role === "admin") {
        setViewMode(viewMode === "admin" ? "guest" : "admin");
      } else {
        onOpenAdminLogin();
      }
    } else {
      setViewMode("guest");
      setActiveMobileTab(tabId);
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "games", label: "Clash & Scores", icon: Trophy },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { 
      id: "pass", 
      label: registeredUser ? registeredUser.id : "My Pass", 
      icon: Ticket,
      badge: registeredUser ? registeredUser.id : null
    },
    { 
      id: "admin", 
      label: viewMode === "admin" ? "Admin Hub" : "Admin", 
      icon: ShieldCheck,
      highlight: currentUser?.role === "admin"
    }
  ];

  const activeColorClass = activeTheme === "karavali" 
    ? "text-amber-400 font-bold" 
    : "text-emerald-400 font-bold";

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1.5 shadow-2xl safe-bottom">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = (item.id === "admin" && viewMode === "admin") || 
                           (viewMode === "guest" && activeMobileTab === item.id);

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all relative ${
                isActive 
                  ? `${activeColorClass} scale-105` 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.badge && (
                  <span className={`absolute -top-1.5 -right-3 text-[9px] px-1 py-0.2 rounded-full font-mono font-bold leading-tight ${
                    registeredUser?.side === "bride" 
                      ? "bg-amber-500 text-slate-950" 
                      : "bg-emerald-500 text-slate-950"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 font-medium truncate max-w-[65px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
