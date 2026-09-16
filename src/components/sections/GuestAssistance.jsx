import React from "react";
import { useWedding } from "../../context/WeddingContext";
import { Phone, MessageSquare } from "lucide-react";

export const GuestAssistance = () => {
  const { weddingDetails } = useWedding();

  return (
    <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Guest assistance
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Groom Contact */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-blue-900/40 shadow-xl space-y-3">
          <span className="text-2xl">🌊</span>
          <div className="text-xs font-bold text-cyan-300 uppercase">Groom Side Coordinator</div>
          <h4 className="font-playfair text-lg font-bold text-white">{weddingDetails.groomSideContact.name}</h4>
          <p className="text-xs text-slate-400">Kundapura / Mangalore logistics & rituals</p>
          <div className="pt-2 flex gap-2">
            <a
              href={`tel:${weddingDetails.groomSideContact.phone.replace(/[^0-9]/g, "")}`}
              className="flex-1 py-2 px-3 rounded-xl bg-blue-950 hover:bg-blue-900 border border-blue-800 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <a
              href={`https://wa.me/${weddingDetails.groomSideContact.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bride Contact */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-900/40 shadow-xl space-y-3">
          <span className="text-2xl">🌿</span>
          <div className="text-xs font-bold text-emerald-300 uppercase">Bride Side Coordinator</div>
          <h4 className="font-playfair text-lg font-bold text-white">{weddingDetails.brideSideContact.name}</h4>
          <p className="text-xs text-slate-400">Dandeli outstation guest guidance</p>
          <div className="pt-2 flex gap-2">
            <a
              href={`tel:${weddingDetails.brideSideContact.phone.replace(/[^0-9]/g, "")}`}
              className="flex-1 py-2 px-3 rounded-xl bg-blue-950 hover:bg-blue-900 border border-blue-800 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <a
              href={`https://wa.me/${weddingDetails.brideSideContact.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Accommodation Coordinator */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-amber-900/40 shadow-xl space-y-3">
          <span className="text-2xl">🏨</span>
          <div className="text-xs font-bold text-amber-300 uppercase">Accommodation Coordinator</div>
          <h4 className="font-playfair text-lg font-bold text-white">{weddingDetails.accommodationCoordinator.name}</h4>
          <p className="text-xs text-slate-400">Room allocations, resort check-in & check-out</p>
          <div className="pt-2 flex gap-2">
            <a
              href={`tel:${weddingDetails.accommodationCoordinator.phone.replace(/[^0-9]/g, "")}`}
              className="flex-1 py-2 px-3 rounded-xl bg-blue-950 hover:bg-blue-900 border border-blue-800 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <a
              href={`https://wa.me/${weddingDetails.accommodationCoordinator.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
