import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  KeyRound, 
  UserPlus, 
  
  
  Trash2, 
  Copy, 
  Check, 
  MessageSquare, 
  
  
  RefreshCw,
  Search
} from "lucide-react";
import confetti from "canvas-confetti";

export const UserMasterManager = () => {
  const { users, addUser, deleteUser, autoGenerateUsersFromInvitees, weddingDetails } = useWedding();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    role: "user",
    side: "both",
    phone: "",
    assignedRoom: "Standard Room"
  });

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (u.phone && u.phone.includes(searchTerm))
  );

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (!form.username.trim() || !form.password.trim() || !form.name.trim()) return;

    addUser(form);
    setIsAddModalOpen(false);
    setForm({
      username: "",
      password: "",
      name: "",
      role: "user",
      side: "both",
      phone: "",
      assignedRoom: "Standard Room"
    });

    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.6 }
    });
  };

  const handleAutoGenerate = () => {
    const createdCount = autoGenerateUsersFromInvitees();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    alert(`Successfully auto-generated ${createdCount} unique guest login credentials from invitee records!`);
  };

  const handleCopyCredentials = (u) => {
    const text = `Wedding Portal Login\nUsername: ${u.username}\nPassword: ${u.password}\nLink: https://harshithwedsnidhi.com`;
    navigator.clipboard.writeText(text);
    setCopiedId(u.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendCredentialsWhatsApp = (u) => {
    const cleanPhone = (u.phone || "").replace(/[^0-9]/g, "");
    const msg = `👑 *Wedding Portal Confidential Access* 👑\n\nNamaste ${u.name},\n\nYou have been granted exclusive access to *${weddingDetails.couple}*'s wedding portal:\n\n🌐 *Portal Website:* https://harshithwedsnidhi.com\n👤 *Username:* ${u.username}\n🔑 *Secret Password:* ${u.password}\n\nPlease login to explore ceremony schedules, live game challenges, venue maps, and outstation guides!\n\nWarm Regards,\nNayak & Prabhu Families`;
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
              <span>Admin Feature 4 • User Master Management</span>
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              User Master & Access Credentials
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Create and manage unique logins and passwords for each wedding guest and administrator. Send login access cards directly via WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleAutoGenerate}
              className="py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-cyan-300 flex items-center gap-1.5 cursor-pointer"
              title="Automatically generate username & password for all invitees"
            >
              <RefreshCw className="w-4 h-4 text-cyan-400" />
              <span>Auto-Generate from Invitees</span>
            </button>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:opacity-95 text-slate-950 font-bold text-xs shadow flex items-center gap-1.5 cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>Create User Account</span>
            </button>
          </div>
        </div>

        {/* Quick summary stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Total Registered Accounts</span>
            <div className="font-mono text-2xl font-bold text-white">{users.length}</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-amber-900/40">
            <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">Admin Accounts</span>
            <div className="font-mono text-2xl font-bold text-amber-300">
              {users.filter((u) => u.role === "admin").length}
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-emerald-900/40">
            <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Guest Accounts</span>
            <div className="font-mono text-2xl font-bold text-emerald-300">
              {users.filter((u) => u.role === "user").length}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search username, guest name, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
          />
        </div>

        <span className="text-xs text-slate-400">
          Showing {filteredUsers.length} accounts
        </span>
      </div>

      {/* Users Table */}
      <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-950/70">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800 font-semibold uppercase tracking-wider text-[10px]">
                <th className="p-3.5">User Identity</th>
                <th className="p-3.5">Role & Side</th>
                <th className="p-3.5 text-cyan-300 font-mono">Username</th>
                <th className="p-3.5 text-amber-300 font-mono">Secret Password</th>
                <th className="p-3.5">Assigned Room / Table</th>
                <th className="p-3.5 text-right">Dispatch & Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-900/50 transition-colors">
                  {/* Identity */}
                  <td className="p-3.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{u.avatar || "👤"}</span>
                      <div>
                        <div className="font-bold text-white text-xs">{u.name}</div>
                        {u.phone && <div className="text-[10px] text-slate-400 font-mono">+{u.phone}</div>}
                      </div>
                    </div>
                  </td>

                  {/* Role & Side */}
                  <td className="p-3.5">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                        u.role === "admin"
                          ? "bg-amber-950 text-amber-300 border-amber-500/50"
                          : u.side === "bride"
                          ? "bg-emerald-950 text-emerald-300 border-emerald-500/50"
                          : "bg-blue-950 text-cyan-300 border-blue-500/50"
                      }`}
                    >
                      {u.role === "admin" ? "Admin" : u.side === "bride" ? "Bride Guest" : "Groom Guest"}
                    </span>
                  </td>

                  {/* Username */}
                  <td className="p-3.5 font-mono text-cyan-300 font-semibold">
                    {u.username}
                  </td>

                  {/* Password */}
                  <td className="p-3.5 font-mono text-amber-300 font-semibold">
                    {u.password}
                  </td>

                  {/* Room / Table */}
                  <td className="p-3.5 text-slate-300">
                    {u.assignedRoom || "Standard"}
                  </td>

                  {/* Actions */}
                  <td className="p-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {/* Copy credentials */}
                      <button
                        onClick={() => handleCopyCredentials(u)}
                        className="py-1 px-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[10px] text-slate-300 flex items-center gap-1"
                        title="Copy credentials"
                      >
                        {copiedId === u.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>Copy</span>
                      </button>

                      {/* WhatsApp Credentials Dispatch */}
                      {u.phone && (
                        <button
                          onClick={() => handleSendCredentialsWhatsApp(u)}
                          className="py-1 px-2.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-700 text-[10px] font-semibold text-emerald-300 flex items-center gap-1"
                          title="Send Username & Password via WhatsApp"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Send WhatsApp</span>
                        </button>
                      )}

                      {/* Delete */}
                      {u.username !== "admin" && (
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete user ${u.name}?`)) {
                              deleteUser(u.id);
                            }
                          }}
                          className="p-1 rounded-lg bg-slate-900 hover:bg-red-950/60 border border-slate-700 text-slate-400 hover:text-red-300"
                          title="Delete User"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create User Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-blue-500/50 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="font-playfair text-xl font-bold text-white">Create New User Account</h3>

            <form onSubmit={handleCreateUser} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suresh Nayak"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Unique Username *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. guest_suresh"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value.toLowerCase() })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Password *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. vivah2026"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Role</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="user">User (Guest)</option>
                    <option value="admin">Administrator (Full Access)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Side</label>
                  <select
                    value={form.side}
                    onChange={(e) => setForm({ ...form, side: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="groom">Groom's Side (Harshith)</option>
                    <option value="bride">Bride's Side (Nidhi)</option>
                    <option value="both">Both Sides</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. 919876543210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Assigned Room</label>
                  <input
                    type="text"
                    placeholder="e.g. Coastal Villa 102"
                    value={form.assignedRoom}
                    onChange={(e) => setForm({ ...form, assignedRoom: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
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
                  className="py-2 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
