import React, { useState } from "react";
import { useWedding } from "../context/WeddingContext";
import { Image as ImageIcon, Plus, X, Sparkles, Trash2, Maximize2 } from "lucide-react";
import confetti from "canvas-confetti";

export const PhotoGallery = () => {
  const { photos, addPhoto, deletePhoto, currentUser } = useWedding();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activePhoto, setActivePhoto] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    category: "Pre-wedding",
    url: "",
    caption: ""
  });

  const categories = ["all", "Pre-wedding", "Family moments", "Childhood memories", "Engagement ceremony"];

  const filteredPhotos = selectedCategory === "all"
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newPhoto.url.trim()) return;

    addPhoto(newPhoto);
    setIsAddModalOpen(false);
    setNewPhoto({ title: "", category: "Pre-wedding", url: "", caption: "" });

    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="gallery" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Visual memories
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2 opacity-70"></div>
      </div>

      {currentUser?.role === "admin" && (
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:opacity-95 text-slate-950 font-bold text-xs shadow flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Category Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-4 custom-scrollbar mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-[#0F4C81] to-[#2E6F40] text-white shadow-md border border-[#D4AF37]"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            {cat === "all" ? "All Memories" : cat}
          </button>
        ))}
      </div>

      {/* Photos Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/50 shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/3 overflow-hidden cursor-pointer" onClick={() => setActivePhoto(photo)}>
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-amber-500/30">
                {photo.category}
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-xl bg-slate-950/80 text-white">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            <div className="p-4 bg-slate-900/95 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-playfair text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h4>
                {photo.caption && (
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                )}
              </div>

              {currentUser?.role === "admin" && (
                <div className="mt-3 pt-2 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => deletePhoto(photo.id)}
                    className="text-slate-500 hover:text-red-400 text-xs flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img src={activePhoto.url} alt={activePhoto.title} className="max-h-[75vh] w-auto object-contain" />
            </div>

            <div className="p-6 bg-slate-900 text-center">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                {activePhoto.category}
              </span>
              <h3 className="font-playfair text-2xl font-bold text-white mt-1">{activePhoto.title}</h3>
              <p className="text-xs text-slate-300 mt-1 max-w-lg mx-auto">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Add Photo Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-[#D4AF37]/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="font-playfair text-xl font-bold text-white">Add Photo to Gallery</h3>

            <form onSubmit={handleAddSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Photo Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maravanthe Golden Sunset"
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Category</label>
                <select
                  value={newPhoto.category}
                  onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="Pre-wedding">Pre-wedding</option>
                  <option value="Family moments">Family moments</option>
                  <option value="Childhood memories">Childhood memories</option>
                  <option value="Engagement ceremony">Engagement ceremony</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Image URL *</label>
                <input
                  type="url"
                  required
                  placeholder="https://images.unsplash.com/..."
                  value={newPhoto.url}
                  onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Caption</label>
                <textarea
                  rows="2"
                  placeholder="A short memory or description..."
                  value={newPhoto.caption}
                  onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="py-2 px-4 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-slate-950 font-bold"
                >
                  Add Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
