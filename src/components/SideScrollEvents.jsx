import React, { useRef } from "react";
import { useWedding } from "../context/WeddingContext";
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Shirt, 
  ExternalLink 
} from "lucide-react";

export const SideScrollEvents = () => {
  const { events, weddingDetails } = useWedding();
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="ceremonies" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Scroll Left / Right Controls */}
      <div className="flex items-center justify-end mb-3 space-x-2">
          <button
            onClick={() => scroll("left")}
            className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-[#D4AF37]/40 text-amber-200 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-[#D4AF37]/40 text-amber-200 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      {/* Horizontal Scrolling Track */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-5 overflow-x-auto pb-6 pt-2 custom-scrollbar snap-x snap-mandatory"
        style={{ scrollbarGutter: "stable" }}
      >
        {events.map((event, index) => (
          <div
            key={event.id}
            className="flex-shrink-0 w-[320px] sm:w-[360px] snap-start rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-xl overflow-hidden flex flex-col group transition-all duration-300 relative"
          >
            {/* Top decorative Konkani pattern ribbon */}
            <div className="h-1.5 bg-gradient-to-r from-[#0F4C81] via-[#D4AF37] to-[#2E6F40]" />

            {/* Image Header with Cultural Icon & Overlay */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={event.coverImage}
                alt={event.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Event Cultural Icon Badge */}
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-[#D4AF37]/60 text-amber-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                <span className="text-base">{event.icon}</span>
                <span>{event.badge}</span>
              </div>

              {/* Ceremony Number */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/90 backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-center text-xs font-bold text-amber-300">
                0{index + 1}
              </div>

              {/* Day & Date pill */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-200 bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-800">
                <span className="font-semibold text-amber-300">{event.day}</span>
                <span>{event.date}</span>
              </div>
            </div>

            {/* Event Details Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-playfair text-xl font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>{event.icon}</span>
                  <span>{event.name}</span>
                </h3>

                {/* Timing */}
                <div className="flex items-center gap-2 text-xs text-amber-300/90 font-mono mt-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{event.time}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300/85 leading-relaxed mt-2.5">
                  {event.description}
                </p>

                {/* Highlights with forest leaf accent */}
                {event.highlights && (
                  <div className="mt-3 space-y-1.5">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <span className="text-emerald-400 text-xs">🌿</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Dress Code & Venue Footer */}
              <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                {/* Dress code */}
                <div className="flex items-start gap-2 text-[11px] text-slate-300 bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
                  <Shirt className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span><strong>Dress Code:</strong> {event.dressCode}</span>
                </div>

                {/* Venue & Navigation */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="truncate text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>

                  <a
                    href={event.mapUrl || weddingDetails.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-cyan-300 border border-blue-700/50 transition-colors flex items-center gap-1 text-[10px] font-semibold flex-shrink-0"
                    title="Open in Google Maps"
                  >
                    <span>Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
