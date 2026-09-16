import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { PhotoGallery } from "./PhotoGallery";
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  Shirt, 
  CheckCircle2, 
  Sparkles, 
  Share2, 
  Download,
  Image as ImageIcon
} from "lucide-react";
import confetti from "canvas-confetti";


export const GuestView = ({ onOpenInviteCard }) => {
  const { weddingDetails, events, currentUser } = useWedding();
  const [rsvpAnswer, setRsvpAnswer] = useState(null);

  const handleRsvp = (status) => {
    setRsvpAnswer(status);
    if (status === "Attending with Joy") {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#f59e0b", "#ec4899"]
      });
    }
  };

  return (
    <div className="py-8 px-4 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      {/* Welcome Banner */}
      <div className="p-8 rounded-3xl royal-glass border border-blue-600/40 text-center relative overflow-hidden bg-gradient-to-b from-blue-950/80 via-slate-900 to-slate-950">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-blue-900/40 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Guest Welcome Portal</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-5xl font-bold royal-gradient-text mb-3">
          Welcome, {currentUser ? currentUser.name : "Respected Guest"}
        </h1>
        <p className="font-royal text-xl text-blue-200/90 italic max-w-2xl mx-auto mb-6">
          We eagerly look forward to your gracious presence as we celebrate the holy union of {weddingDetails.couple}.
        </p>

        {/* RSVP Card */}
        <div className="max-w-md mx-auto p-4 rounded-2xl bg-blue-950/50 border border-blue-700/50">
          <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
            Will You Be Joining Us?
          </div>
          {rsvpAnswer ? (
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-semibold flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>RSVP Confirmed: {rsvpAnswer}! Thank you.</span>
            </div>
          ) : (
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => handleRsvp("Attending with Joy")}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all hover:scale-105"
              >
                🎉 Joyfully Attending
              </button>
              <button
                onClick={() => handleRsvp("Regretfully Unable")}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
              >
                Regretfully Unable
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onOpenInviteCard}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all hover:scale-105 shadow-md shadow-amber-950/50"
          >
            <Download className="w-4 h-4" />
            <span>Download Digital Invitation Card</span>
          </button>
        </div>
      </div>

      {/* Events Schedule for Guest */}
      <div>
        <div className="mb-6 text-center">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Ceremony Schedule
          </div>
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mt-1">
            Days of Sacred Celebrations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className="rounded-2xl royal-glass-card border border-blue-700/40 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img src={event.coverImage} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-950/80 backdrop-blur-md border border-amber-400/50 text-amber-300 text-xs font-semibold">
                    {event.badge}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs text-amber-300 font-semibold mb-1 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-xs text-blue-200/80 mb-4">{event.subTitle}</p>

                  <div className="space-y-2 text-xs text-blue-200">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Shirt className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Dress Code:</strong> {event.dressCode}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={`https://maps.google.com/?q=${event.mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-blue-900/50 hover:bg-blue-800 border border-blue-600/40 text-blue-200 hover:text-white text-xs font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>View Location on Map</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wedding Photo Gallery */}
      <PhotoGallery />
    </div>
  );
};
