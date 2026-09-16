import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  Users, 
  CheckSquare, 
  Square, 
  PlusCircle, 
  Trash2, 
  Search, 
  Phone, 
  MessageSquare, 
  Send, 
  Upload, 
  Download,
  Filter,
  CheckCircle2,
  Clock,
  ExternalLink
} from "lucide-react";
import confetti from "canvas-confetti";

export const InviteeManager = ({ onOpenInviteCard }) => {
  const { invitees, toggleInvited, addInvitee, bulkAddInvitees, deleteInvitee, weddingDetails } = useWedding();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterInvited, setFilterInvited] = useState("all"); // "all" | "invited" | "pending"
  const [filterSide, setFilterSide] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [bulkText, setBulkText] = useState("");

  // Single Invitee Form State
  const [form, setForm] = useState({
    name: "",
    phone: "",
    side: "Groom Side",
    category: "Friends",
    guestsCount: 2,
    city: "Kundapura",
    accommodation: "Not Required",
    isInvited: false
  });

  // Calculate Metrics
  const totalInvitees = invitees.length;
  const invitedCount = invitees.filter((i) => i.isInvited).length;
  const pendingCount = totalInvitees - invitedCount;
  const totalGuestsCount = invitees.reduce((acc, curr) => acc + (Number(curr.guestsCount) || 1), 0);

  // Filtered invitees
  const filteredInvitees = invitees.filter((inv) => {
    const matchesSearch = inv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          inv.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          inv.phone.includes(searchTerm);
    const matchesInvited = filterInvited === "all" || 
                           (filterInvited === "invited" && inv.isInvited) || 
                           (filterInvited === "pending" && !inv.isInvited);
    const matchesSide = filterSide === "all" || inv.side === filterSide;
    return matchesSearch && matchesInvited && matchesSide;
  });

  const handleToggleTick = (id) => {
    toggleInvited(id);
    confetti({
      particleCount: 20,
      spread: 30,
      origin: { y: 0.7 }
    });
  };

  const handleAddSingle = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;

    addInvitee(form);
    setIsAddModalOpen(false);
    setForm({
      name: "",
      phone: "",
      side: "Groom Side",
      category: "Friends",
      guestsCount: 2,
      city: "Kundapura",
      accommodation: "Not Required",
      isInvited: false
    });

    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.6 }
    });
  };

  const handleBulkSubmit = (e) => {
    e.preventDefault();
    if (!bulkText.trim()) return;

    const lines = bulkText.split("\n").filter((l) => l.trim().length > 0);
    const parsed = lines.map((line) => {
      // Expecting: Name, Phone, Side, GuestsCount, City
      const parts = line.split(",").map((p) => p.trim());
      return {
        name: parts[0] || "Guest",
        phone: parts[1] || "919876543210",
        side: parts[2] || "Both Sides",
        guestsCount: Number(parts[3]) || 2,
        city: parts[4] || "Karnataka",
        isInvited: false
      };
    });

    bulkAddInvitees(parsed);
    setBulkText("");
    setIsBulkModalOpen(false);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleOpenWhatsApp = (inv) => {
    const cleanPhone = inv.phone.replace(/[^0-9]/g, "");
    const msg = `✨ *Wedding Invitation* ✨\n\nNamaste ${inv.name},\n\nWe cordially invite you to celebrate the wedding union of *${weddingDetails.couple}*.\n\n📅 Date: ${weddingDetails.displayDates}\n📍 Venue: ${weddingDetails.primaryVenue}\n🗺️ Maps: ${weddingDetails.mapUrl}\n\nKindly find our digital invitation card on our wedding website: https://harshithwedsnidhi.com\n\nWarm Regards,\nNayak & Prabhu Families`;
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
    if (!inv.isInvited) {
      toggleInvited(inv.id);
    }
    window.open(waUrl, "_blank");
  };

  const handleExportCsv = () => {
    const headers = ["Invitee Name", "Phone", "Side", "Category", "Guests Count", "Invited Status", "RSVP Status", "City"];
    const rows = invitees.map((i) => [
      `"${i.name.replace(/"/g, '""')}"`,
      `"${i.phone}"`,
      `"${i.side}"`,
      `"${i.category}"`,
      i.guestsCount,
      i.isInvited ? "Invited (Ticked)" : "Pending",
      `"${i.rsvpStatus || "Pending"}"`,
      `"${i.city}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Wedding_Guest_List_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0F4C81]/30 via-slate-900 to-[#2E6F40]/30 border border-[#D4AF37]/40 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Feature 2 • Guest List Management</span>
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              Guest List & Invitation Tick System
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Tick guests as and when they are officially invited. Track RSVP statuses, side representation, and send 1-click personal WhatsApp invites.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleExportCsv}
              className="py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => setIsBulkModalOpen(true)}
              className="py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5"
            >
              <Upload className="w-4 h-4 text-cyan-400" />
              <span>Bulk Paste Contacts</span>
            </button>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:opacity-95 text-slate-950 font-bold text-xs shadow flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Invitee</span>
            </button>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Total Contacts</span>
            <div className="font-mono text-2xl font-bold text-white">{totalInvitees}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-emerald-900/50">
            <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">✅ Ticked as Invited</span>
            <div className="font-mono text-2xl font-bold text-emerald-300">{invitedCount}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-amber-900/50">
            <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">⏳ Yet to Invite</span>
            <div className="font-mono text-2xl font-bold text-amber-300">{pendingCount}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-blue-900/50">
            <span className="text-[10px] uppercase font-bold text-cyan-400 block mb-1">Estimated Guests</span>
            <div className="font-mono text-2xl font-bold text-cyan-300">{totalGuestsCount}</div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, city or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {/* Invited Filter Tabs */}
          <div className="flex bg-slate-950 rounded-xl border border-slate-700 p-0.5">
            <button
              onClick={() => setFilterInvited("all")}
              className={`px-3 py-1 text-xs rounded-lg transition-all ${
                filterInvited === "all" ? "bg-slate-800 text-white font-semibold" : "text-slate-400"
              }`}
            >
              All ({totalInvitees})
            </button>
            <button
              onClick={() => setFilterInvited("invited")}
              className={`px-3 py-1 text-xs rounded-lg transition-all flex items-center gap-1 ${
                filterInvited === "invited" ? "bg-emerald-950 text-emerald-300 font-semibold" : "text-slate-400"
              }`}
            >
              <span>Invited</span>
              <span className="text-[10px] bg-emerald-900 px-1 rounded-full">{invitedCount}</span>
            </button>
            <button
              onClick={() => setFilterInvited("pending")}
              className={`px-3 py-1 text-xs rounded-lg transition-all flex items-center gap-1 ${
                filterInvited === "pending" ? "bg-amber-950 text-amber-300 font-semibold" : "text-slate-400"
              }`}
            >
              <span>Pending</span>
              <span className="text-[10px] bg-amber-900 px-1 rounded-full">{pendingCount}</span>
            </button>
          </div>

          {/* Side Filter */}
          <select
            value={filterSide}
            onChange={(e) => setFilterSide(e.target.value)}
            className="px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-amber-400"
          >
            <option value="all">All Sides</option>
            <option value="Groom Side">Groom's Side (Harshith)</option>
            <option value="Bride Side">Bride's Side (Nidhi)</option>
            <option value="Both Sides">Both Sides</option>
          </select>
        </div>
      </div>

      {/* Invitees Table */}
      <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-950/70">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800 font-semibold uppercase tracking-wider text-[10px]">
                <th className="p-3.5 text-center w-28">Tick Invited</th>
                <th className="p-3.5">Invitee Name</th>
                <th className="p-3.5">Side & Category</th>
                <th className="p-3.5">Phone / WhatsApp</th>
                <th className="p-3.5 text-center">Attendees</th>
                <th className="p-3.5">Accommodation</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredInvitees.map((inv) => (
                <tr
                  key={inv.id}
                  className={`hover:bg-slate-900/50 transition-colors ${
                    inv.isInvited ? "bg-emerald-950/10" : ""
                  }`}
                >
                  {/* Tick as Invited Checkbox */}
                  <td className="p-3.5 text-center">
                    <button
                      type="button"
                      onClick={() => handleToggleTick(inv.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        inv.isInvited
                          ? "bg-emerald-950 text-emerald-300 border-emerald-500/60 shadow-sm"
                          : "bg-slate-900 text-slate-400 border-slate-700 hover:border-amber-400 hover:text-white"
                      }`}
                      title={inv.isInvited ? "Click to untick" : "Click to tick as invited"}
                    >
                      {inv.isInvited ? (
                        <>
                          <CheckSquare className="w-4 h-4 text-emerald-400" />
                          <span>Invited</span>
                        </>
                      ) : (
                        <>
                          <Square className="w-4 h-4 text-slate-500" />
                          <span>Tick</span>
                        </>
                      )}
                    </button>
                  </td>

                  {/* Invitee Name & City */}
                  <td className="p-3.5">
                    <div className="font-bold text-white text-xs">{inv.name}</div>
                    <div className="text-[10px] text-slate-400">{inv.city}</div>
                  </td>

                  {/* Side & Category */}
                  <td className="p-3.5">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                        inv.side.toLowerCase().includes("bride")
                          ? "bg-[#2E6F40]/30 text-emerald-200 border-emerald-500/40"
                          : inv.side.toLowerCase().includes("groom")
                          ? "bg-[#0F4C81]/30 text-cyan-200 border-blue-500/40"
                          : "bg-amber-950/30 text-amber-200 border-amber-500/40"
                      }`}
                    >
                      {inv.side}
                    </span>
                    <div className="text-[10px] text-slate-400 mt-0.5">{inv.category}</div>
                  </td>

                  {/* Phone */}
                  <td className="p-3.5 font-mono text-[11px] text-slate-300">
                    +{inv.phone}
                  </td>

                  {/* Guests Count */}
                  <td className="p-3.5 text-center font-mono font-bold text-amber-300">
                    {inv.guestsCount}
                  </td>

                  {/* Accommodation */}
                  <td className="p-3.5 text-[11px] text-slate-300">
                    {inv.accommodation || "Not Required"}
                  </td>

                  {/* Action Buttons */}
                  <td className="p-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleOpenWhatsApp(inv)}
                        className="py-1 px-2.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-700 text-[10px] font-semibold text-emerald-300 flex items-center gap-1 transition-colors"
                        title="Send WhatsApp Invite"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm(`Remove ${inv.name} from guest list?`)) {
                            deleteInvitee(inv.id);
                          }
                        }}
                        className="p-1 rounded-lg bg-slate-900 hover:bg-red-950/60 border border-slate-700 hover:border-red-500/50 text-slate-400 hover:text-red-300 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Single Invitee Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-[#D4AF37]/50 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="font-playfair text-xl font-bold text-white">Add New Wedding Invitee</h3>

            <form onSubmit={handleAddSingle} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Invitee / Family Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Nayak & Family"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">WhatsApp Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 919876543210 (with country code)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Side</label>
                  <select
                    value={form.side}
                    onChange={(e) => setForm({ ...form, side: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Groom Side">Groom's Side (Harshith)</option>
                    <option value="Bride Side">Bride's Side (Nidhi)</option>
                    <option value="Both Sides">Both Sides</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <input
                    type="text"
                    placeholder="e.g. Close Family, College Friends"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Guests Count</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={form.guestsCount}
                    onChange={(e) => setForm({ ...form, guestsCount: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">City / Town</label>
                  <input
                    type="text"
                    placeholder="e.g. Kundapura, Dandeli"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer mt-2">
                  <input
                    type="checkbox"
                    checked={form.isInvited}
                    onChange={(e) => setForm({ ...form, isInvited: e.target.checked })}
                    className="rounded text-emerald-500"
                  />
                  <span className="text-slate-300 font-medium">Mark as already invited (Tick)</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-3">
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
                  Save Invitee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bulk Paste Contacts Modal */}
      {isBulkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-slate-900 border border-blue-500/50 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="font-playfair text-xl font-bold text-white">Bulk Paste Contacts</h3>
            <p className="text-xs text-slate-400">
              Format: <code>Name, Phone, Side, GuestsCount, City</code> (one per line)
            </p>

            <form onSubmit={handleBulkSubmit} className="space-y-3 text-xs">
              <textarea
                rows="6"
                required
                placeholder="Ramesh Nayak, 919876543210, Groom Side, 4, Kundapura&#10;Sunita Prabhu, 919876543211, Bride Side, 2, Dandeli"
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-xs focus:border-amber-400 focus:outline-none"
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsBulkModalOpen(false)}
                  className="py-2 px-4 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold"
                >
                  Import Contacts
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
