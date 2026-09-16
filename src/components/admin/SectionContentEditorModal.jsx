import React, { useState, useEffect } from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  X, 
  Save, 
  BookOpen, 
  Calendar, 
  Utensils, 
  CheckCircle2, 
  Flame, 
  Compass, 
  Phone, 
  Gamepad2
} from "lucide-react";
import confetti from "canvas-confetti";

export const SectionContentEditorModal = ({ isOpen, onClose, initialSection = "our-definition" }) => {
  const { weddingDetails, updateWeddingDetails, events, setEvents } = useWedding();
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection]);

  // Local draft state
  const [formData, setFormData] = useState({ ...weddingDetails });
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setFormData({ ...weddingDetails });
  }, [weddingDetails]);

  if (!isOpen) return null;

  const SECTIONS = [
    { id: "our-definition", label: "1. Our definition", icon: BookOpen },
    { id: "ceremonies", label: "2. Ceremonies", icon: Calendar },
    { id: "feast", label: "3. Wedding feast", icon: Utensils },
    { id: "rsvp", label: "4. RSVP Settings", icon: CheckCircle2 },
    { id: "traditions", label: "5. Traditions", icon: Flame },
    { id: "explore", label: "6. Explore / Area Gems", icon: Compass },
    { id: "contact", label: "7. Contact & Lineage", icon: Phone },
    { id: "fun-and-joy", label: "8. Fun & Joy", icon: Gamepad2 }
  ];

  const handleSave = (e) => {
    e.preventDefault();
    updateWeddingDetails(formData);
    setSaveSuccess(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-[#D4AF37]/50 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-xl">
              ✏️
            </div>
            <div>
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-white">
                Edit Portal Section (Admin Suite)
              </h3>
              <p className="text-xs text-slate-400">
                Modify content, images, contacts, and configuration with instant live preview.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex border-b border-slate-800 overflow-x-auto bg-slate-950/60 p-2 gap-1.5 custom-scrollbar">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveSection(sec.id)}
                className={`py-2 px-3 sm:px-4 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-[#0F4C81] to-[#2E6F40] text-white shadow-md border border-[#D4AF37]/60"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-amber-300" />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* Editor Body Form */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 custom-scrollbar text-xs">
          
          {/* SECTION 1: OUR DEFINITION */}
          {activeSection === "our-definition" && (
            <div className="space-y-4">
              <h4 className="font-playfair text-base font-bold text-amber-300 border-b border-slate-800 pb-2">
                1. Our Definition & Heritage Settings
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 font-semibold mb-1 block">Couple Display Title</label>
                  <input
                    type="text"
                    value={formData.couple || ""}
                    onChange={(e) => setFormData({ ...formData, couple: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-semibold mb-1 block">Wedding Theme</label>
                  <input
                    type="text"
                    value={formData.themeName || ""}
                    onChange={(e) => setFormData({ ...formData, themeName: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-semibold mb-1 block">Groom Name</label>
                  <input
                    type="text"
                    value={formData.groomName || ""}
                    onChange={(e) => setFormData({ ...formData, groomName: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-semibold mb-1 block">Bride Name</label>
                  <input
                    type="text"
                    value={formData.brideName || ""}
                    onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-slate-300 font-semibold mb-1 block">Tagline</label>
                  <input
                    type="text"
                    value={formData.tagline || ""}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-slate-300 font-semibold mb-1 block">Auspicious Sanskrit Shloka</label>
                  <input
                    type="text"
                    value={formData.shloka || ""}
                    onChange={(e) => setFormData({ ...formData, shloka: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-amber-200 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: CEREMONIES */}
          {activeSection === "ceremonies" && (
            <div className="space-y-4">
              <h4 className="font-playfair text-base font-bold text-amber-300 border-b border-slate-800 pb-2">
                2. Ceremonies & Side-Scroll Timeline
              </h4>
              <p className="text-slate-400 text-[11px]">
                Manage ritual cards (Mehendi, Haldi, Phool Muddi, Muhurtham, Reception) timings, dates, and venues.
              </p>

              <div className="space-y-3">
                {events.map((evt, index) => (
                  <div key={evt.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-white text-sm">
                        <span>{evt.icon}</span>
                        <span>{evt.name}</span>
                      </div>
                      <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        {evt.badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div>
                        <label className="text-slate-400 block mb-0.5">Date</label>
                        <input
                          type="text"
                          value={evt.date}
                          onChange={(e) => {
                            const updated = [...events];
                            updated[index].date = e.target.value;
                            setEvents(updated);
                          }}
                          className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-0.5">Time</label>
                        <input
                          type="text"
                          value={evt.time}
                          onChange={(e) => {
                            const updated = [...events];
                            updated[index].time = e.target.value;
                            setEvents(updated);
                          }}
                          className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-0.5">Dress Code</label>
                        <input
                          type="text"
                          value={evt.dressCode}
                          onChange={(e) => {
                            const updated = [...events];
                            updated[index].dressCode = e.target.value;
                            setEvents(updated);
                          }}
                          className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: WEDDING FEAST */}
          {activeSection === "feast" && (
            <div className="space-y-4">
              <h4 className="font-playfair text-base font-bold text-amber-300 border-b border-slate-800 pb-2">
                3. Royal Pangath Feast Menu Settings
              </h4>
              <p className="text-slate-400 text-[11px]">
                Manage authentic traditional GSB delicacies (Dalitoy, Batata Song, Tendle Bibbe, Pineapple Sasam, etc.)
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span>🍃</span>
                  <span>Authentic GSB Konkani Feast Active</span>
                </div>
                <p className="text-slate-300 text-xs">
                  All 9 traditional course items are configured with authentic recipe tags, pure desi ghee preparations, and high-resolution visuals.
                </p>
              </div>
            </div>
          )}

          {/* SECTION 4: RSVP */}
          {activeSection === "rsvp" && (
            <div className="space-y-4">
              <h4 className="font-playfair text-base font-bold text-amber-300 border-b border-slate-800 pb-2">
                4. RSVP Status & Configuration
              </h4>
              
              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white text-sm">Guest RSVP Section Visibility</h5>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Currently removed from guest view as requested in Action 17. You can manage invitees directly via Guest List Manager.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                    Hidden from Guests
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 5: TRADITIONS */}
          {activeSection === "traditions" && (
            <div className="space-y-4">
              <h4 className="font-playfair text-base font-bold text-amber-300 border-b border-slate-800 pb-2">
                5. Sacred Rituals & Konkani Traditions
              </h4>
              <p className="text-slate-400 text-[11px]">
                Configured: Kanyadaan, Mangalasutra Dharane, Saptapadi, Tulsi & Family Blessings, and Traditional Wedding Feast.
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300">
                All 5 sacred rites are set with authentic Sanskrit titles and detailed descriptions.
              </div>
            </div>
          )}

          {/* SECTION 6: EXPLORE */}
          {activeSection === "explore" && (
            <div className="space-y-4">
              <h4 className="font-playfair text-base font-bold text-amber-300 border-b border-slate-800 pb-2">
                6. Area Gems & Cultural Showcase
              </h4>
              <p className="text-slate-400 text-[11px]">
                Guide for outstation guests to explore Coastal Karnataka and Dandeli Rainforest destinations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-900/50">
                  <span className="text-cyan-300 font-bold block mb-1">🌊 Coastal Highlights</span>
                  <p className="text-slate-300 text-[11px]">
                    Udupi Sri Krishna Matha, Maravanthe Beach Highway, Kollur Mookambika, and Kodi Beach Promenade.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-900/50">
                  <span className="text-emerald-300 font-bold block mb-1">🌿 Dandeli Wilderness</span>
                  <p className="text-slate-300 text-[11px]">
                    River Kali Rapids, Syntheri Rocks Monolith, and Hornbill Reserve Canopy.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 7: CONTACT */}
          {activeSection === "contact" && (
            <div className="space-y-4">
              <h4 className="font-playfair text-base font-bold text-amber-300 border-b border-slate-800 pb-2">
                7. Contact & Lineage Coordinators (Action 19 & 20)
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Groom Coordinator */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-blue-900/40 space-y-2">
                  <span className="font-bold text-cyan-300 block">Groom Coordinator</span>
                  <div>
                    <label className="text-slate-400 block text-[10px]">Name</label>
                    <input
                      type="text"
                      value={formData.groomSideContact?.name || ""}
                      onChange={(e) => setFormData({
                        ...formData,
                        groomSideContact: { ...formData.groomSideContact, name: e.target.value }
                      })}
                      className="w-full p-2 rounded bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[10px]">Phone</label>
                    <input
                      type="text"
                      value={formData.groomSideContact?.phone || ""}
                      onChange={(e) => setFormData({
                        ...formData,
                        groomSideContact: { ...formData.groomSideContact, phone: e.target.value }
                      })}
                      className="w-full p-2 rounded bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                </div>

                {/* Bride Coordinator */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-900/40 space-y-2">
                  <span className="font-bold text-emerald-300 block">Bride Coordinator</span>
                  <div>
                    <label className="text-slate-400 block text-[10px]">Name</label>
                    <input
                      type="text"
                      value={formData.brideSideContact?.name || ""}
                      onChange={(e) => setFormData({
                        ...formData,
                        brideSideContact: { ...formData.brideSideContact, name: e.target.value }
                      })}
                      className="w-full p-2 rounded bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[10px]">Phone</label>
                    <input
                      type="text"
                      value={formData.brideSideContact?.phone || ""}
                      onChange={(e) => setFormData({
                        ...formData,
                        brideSideContact: { ...formData.brideSideContact, phone: e.target.value }
                      })}
                      className="w-full p-2 rounded bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                </div>

                {/* Accommodation Coordinator */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-900/40 space-y-2">
                  <span className="font-bold text-amber-300 block">Accommodation Coordinator</span>
                  <div>
                    <label className="text-slate-400 block text-[10px]">Name</label>
                    <input
                      type="text"
                      value={formData.accommodationCoordinator?.name || ""}
                      onChange={(e) => setFormData({
                        ...formData,
                        accommodationCoordinator: { ...formData.accommodationCoordinator, name: e.target.value }
                      })}
                      className="w-full p-2 rounded bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[10px]">Phone</label>
                    <input
                      type="text"
                      value={formData.accommodationCoordinator?.phone || ""}
                      onChange={(e) => setFormData({
                        ...formData,
                        accommodationCoordinator: { ...formData.accommodationCoordinator, phone: e.target.value }
                      })}
                      className="w-full p-2 rounded bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 8: FUN & JOY */}
          {activeSection === "fun-and-joy" && (
            <div className="space-y-4">
              <h4 className="font-playfair text-base font-bold text-amber-300 border-b border-slate-800 pb-2">
                8. Games, Live Streaming & Points
              </h4>
              
              <div>
                <label className="text-slate-300 font-semibold mb-1 block">Live Stream Embed URL</label>
                <input
                  type="text"
                  value={formData.liveStreamUrl || ""}
                  onChange={(e) => setFormData({ ...formData, liveStreamUrl: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="https://www.youtube.com/embed/..."
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold mb-1 block">Wedding Hashtag</label>
                <input
                  type="text"
                  value={formData.hashtag || ""}
                  onChange={(e) => setFormData({ ...formData, hashtag: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-amber-300 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Footer Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:opacity-95 text-slate-950 font-bold flex items-center gap-2 shadow-xl cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>{saveSuccess ? "Changes Saved!" : "Save & Apply Changes"}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
