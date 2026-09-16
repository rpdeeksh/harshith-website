import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { Calendar, Clock, MapPin, Edit2, Check, Sparkles, Shirt } from "lucide-react";
import confetti from "canvas-confetti";

export const EventDetailsEditor = () => {
  const { events, updateEvent } = useWedding();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleStartEdit = (event) => {
    setEditingId(event.id);
    setEditForm({ ...event });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!editingId) return;
    updateEvent(editingId, editForm);
    setEditingId(null);

    confetti({
      particleCount: 25,
      spread: 35,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-orange-950/40 border border-amber-500/40 shadow-xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Admin Feature 7 • Event Details Update Feature</span>
        </div>
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">
          Ceremony & Event Schedule Editor
        </h2>
        <p className="text-xs text-slate-300 mt-1 max-w-xl">
          Update ceremony timings, auspicious Muhurtham hours, mandap venues, dress codes, and Google Maps links in real-time across the wedding portal.
        </p>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((evt) => {
          const isEditing = editingId === evt.id;

          return (
            <div
              key={evt.id}
              className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4"
            >
              {isEditing ? (
                <form onSubmit={handleSave} className="space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                    <span className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                      <span>{evt.icon}</span>
                      <span>Editing {evt.name}</span>
                    </span>
                  </div>

                  <div>
                    <label className="block text-slate-400 font-medium mb-1">Ceremony Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-slate-400 font-medium mb-1">Date</label>
                      <input
                        type="text"
                        value={editForm.date}
                        onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 font-medium mb-1">Timing</label>
                      <input
                        type="text"
                        value={editForm.time}
                        onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 font-medium mb-1">Venue Location</label>
                    <input
                      type="text"
                      value={editForm.venue}
                      onChange={(e) => setEditForm({ ...editForm, venue: e.target.value })}
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-medium mb-1">Dress Code</label>
                    <input
                      type="text"
                      value={editForm.dressCode}
                      onChange={(e) => setEditForm({ ...editForm, dressCode: e.target.value })}
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-medium mb-1">Description</label>
                    <textarea
                      rows="2"
                      value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="py-1.5 px-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="py-1.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-slate-950 font-bold flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save Updates</span>
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{evt.icon}</span>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-amber-400">{evt.day}</span>
                          <h4 className="font-playfair text-xl font-bold text-white">{evt.name}</h4>
                        </div>
                      </div>

                      <button
                        onClick={() => handleStartEdit(evt)}
                        className="py-1 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs text-amber-200 flex items-center gap-1 cursor-pointer"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-white">
                        <Calendar className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{evt.date}</span>
                      </div>

                      <div className="flex items-center gap-2 text-cyan-300 font-mono">
                        <Clock className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{evt.time}</span>
                      </div>

                      <div className="flex items-center gap-2 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{evt.venue}</span>
                      </div>

                      <div className="flex items-center gap-2 text-amber-200">
                        <Shirt className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{evt.dressCode}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-500">
                    <span>ID: {evt.id}</span>
                    <span className="text-emerald-400">Live on Guest Portal</span>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
