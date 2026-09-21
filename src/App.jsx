import React, { useState } from "react";
import { WeddingProvider, useWedding } from "./context/WeddingContext";
import { LoginScreen } from "./components/LoginScreen";
import { Navbar } from "./components/Navbar";
import { HomeHero } from "./components/HomeHero";
import { HeritageAndOrigins } from "./components/sections/HeritageAndOrigins";
import { OurLoveStory } from "./components/sections/OurLoveStory";
import { SideScrollEvents } from "./components/SideScrollEvents";
import { WeddingVenueAndTravel } from "./components/sections/WeddingVenueAndTravel";
import { PhotoGallery } from "./components/PhotoGallery";
import { RoyalPangath } from "./components/sections/RoyalPangath";
import { SacredRituals } from "./components/sections/SacredRituals";
import { SpecialGuestAndCulture } from "./components/sections/SpecialGuestAndCulture";
import { LineageAndBlessings } from "./components/sections/LineageAndBlessings";
import { GuestAssistance } from "./components/sections/GuestAssistance";
import { LiveStreamAndGames } from "./components/LiveStreamAndGames";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { InvitationCardGenerator } from "./components/InvitationCardGenerator";
import { AudioPlayer } from "./components/AudioPlayer";
import { Phone } from "lucide-react";

function WeddingPortalContent() {
  const { 
    currentUser, 
    viewMode, 
    weddingDetails 
  } = useWedding();

  const [isInviteCardOpen, setIsInviteCardOpen] = useState(false);

  // Gated unique login access
  if (!currentUser) {
    return <LoginScreen />;
  }

  return (
    <div className="min-h-screen bg-[#050e18] text-slate-100 flex flex-col transition-colors duration-500 selection:bg-[#D4AF37] selection:text-slate-950">
      
      {/* Top Header Navbar with Equal Spacing for the 8 Selection Icons */}
      <Navbar onOpenInviteCard={() => setIsInviteCardOpen(true)} />

      {/* Main Content Body */}
      <main className="flex-1 w-full">
        {viewMode === "admin" && currentUser.role === "admin" ? (
          /* Admin View Mode */
          <div className="pt-2">
            <AdminDashboard onOpenInviteCard={() => setIsInviteCardOpen(true)} />
          </div>
        ) : (
          /* Guest Experience Mode in Exact Requested Sequence */
          <div className="space-y-4">
            
            {/* Split Visual Hero with Countdown & Couple Intro */}
            <HomeHero 
              onOpenInviteCard={() => setIsInviteCardOpen(true)}
              onOpenGames={() => {
                const el = document.getElementById("fun-and-joy");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onOpenStream={() => {
                const el = document.getElementById("fun-and-joy");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onExploreCoastal={() => {
                const el = document.getElementById("area-gems") || document.getElementById("explore");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onExploreForest={() => {
                const el = document.getElementById("area-gems") || document.getElementById("explore");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            />

            {/* 1. Heritage and Origins */}
            <HeritageAndOrigins />

            {/* 2. Our love story */}
            <OurLoveStory />

            {/* Interactive side scroll feature (Ceremonies) */}
            <SideScrollEvents />

            {/* 3. Wedding Venue and travel */}
            <WeddingVenueAndTravel />

            {/* 4. Visual memories */}
            <PhotoGallery />

            {/* 5. Royal Pangath */}
            <RoyalPangath />

            {/* 6. Sacred rituals */}
            <SacredRituals />

            {/* 8. Special guest appearance & cultural showcase section */}
            <SpecialGuestAndCulture />

            {/* 9. Lineage and blessings */}
            <LineageAndBlessings />

            {/* 10. Guest assistance */}
            <GuestAssistance />

            {/* 11. Games and live streaming */}
            <LiveStreamAndGames />

          </div>
        )}
      </main>

      {/* Floating Traditional Shehnai & Bells Audio Player */}
      <AudioPlayer />

      {/* Digital PNG Invitation Card Generator Modal */}
      <InvitationCardGenerator
        isOpen={isInviteCardOpen}
        onClose={() => setIsInviteCardOpen(false)}
      />

      {/* Footer */}
      <footer className="mt-16 border-t border-[#D4AF37]/30 bg-slate-950/95 py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <img src="/wedding-logo.png" alt="Logo" className="w-8 h-8 rounded-full border border-amber-400/50 object-cover shadow" />
              <span className="font-playfair text-base font-bold text-white tracking-wider">
                {weddingDetails.couple}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              "{weddingDetails.themeName}" • {weddingDetails.displayDates} • {weddingDetails.primaryVenue}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-300 font-mono text-xs">
            <span className="text-[#D4AF37] font-semibold">{weddingDetails.hashtag}</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{weddingDetails.contactPhone}</span>
            </span>
          </div>

          <div className="text-[11px] text-slate-500 text-center md:text-right">
            Coastal Karnataka (GSB Konkani) & Dandeli (Western Ghats) Dual Celebration Portal • 2026
          </div>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <WeddingProvider>
      <WeddingPortalContent />
    </WeddingProvider>
  );
}
