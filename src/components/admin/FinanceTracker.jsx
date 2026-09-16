import React, { useState } from "react";
import { useWedding } from "../../context/WeddingContext";
import { 
  IndianRupee, 
  PlusCircle, 
  Trash2, 
  CreditCard, 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Edit2, 
  Download,
  Search,
  PieChart,
  ArrowUpDown
} from "lucide-react";
import confetti from "canvas-confetti";

export const FinanceTracker = () => {
  const { finances, addExpense, updateExpense, deleteExpense } = useWedding();
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [quickPayItem, setQuickPayItem] = useState(null);
  const [quickPayAmount, setQuickPayAmount] = useState("");

  // Form State
  const [form, setForm] = useState({
    vendorName: "",
    serviceCategory: "Photography & Cinematography",
    agreedAmount: "",
    paidAmount: "",
    paymentMethod: "UPI (Google Pay)",
    lastPaymentDate: new Date().toISOString().split("T")[0],
    phone: "",
    notes: ""
  });

  // Calculate Totals
  const totalAgreed = finances.reduce((acc, curr) => acc + Number(curr.agreedAmount || 0), 0);
  const totalPaid = finances.reduce((acc, curr) => acc + Number(curr.paidAmount || 0), 0);
  const totalBalance = Math.max(0, totalAgreed - totalPaid);
  const percentagePaid = totalAgreed > 0 ? Math.round((totalPaid / totalAgreed) * 100) : 0;

  // Filtered List
  const filteredFinances = finances.filter((item) => {
    const matchesCategory = filterCategory === "all" || item.serviceCategory === filterCategory;
    const matchesSearch = item.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.serviceCategory.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!form.vendorName.trim() || !form.agreedAmount) return;

    if (editingItem) {
      updateExpense(editingItem.id, form);
      setEditingItem(null);
    } else {
      addExpense(form);
    }

    setIsAddModalOpen(false);
    setForm({
      vendorName: "",
      serviceCategory: "Photography & Cinematography",
      agreedAmount: "",
      paidAmount: "",
      paymentMethod: "UPI (Google Pay)",
      lastPaymentDate: new Date().toISOString().split("T")[0],
      phone: "",
      notes: ""
    });

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setForm({
      vendorName: item.vendorName,
      serviceCategory: item.serviceCategory,
      agreedAmount: item.agreedAmount,
      paidAmount: item.paidAmount,
      paymentMethod: item.paymentMethod,
      lastPaymentDate: item.lastPaymentDate || new Date().toISOString().split("T")[0],
      phone: item.phone || "",
      notes: item.notes || ""
    });
    setIsAddModalOpen(true);
  };

  const handleQuickPaySubmit = (e) => {
    e.preventDefault();
    if (!quickPayItem || !quickPayAmount) return;
    const additional = Number(quickPayAmount);
    const newPaid = Number(quickPayItem.paidAmount) + additional;

    updateExpense(quickPayItem.id, {
      paidAmount: newPaid,
      lastPaymentDate: new Date().toISOString().split("T")[0],
      notes: quickPayItem.notes
        ? `${quickPayItem.notes} | Added ₹${additional.toLocaleString()} on ${new Date().toLocaleDateString()}`
        : `Added ₹${additional.toLocaleString()} on ${new Date().toLocaleDateString()}`
    });

    setQuickPayItem(null);
    setQuickPayAmount("");
    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.7 }
    });
  };

  const handleExportCsv = () => {
    const headers = ["Vendor Name", "Category", "Agreed Quotation (INR)", "Amount Paid (INR)", "Balance Due (INR)", "Status", "Payment Method", "Last Payment Date"];
    const rows = finances.map((f) => [
      `"${f.vendorName.replace(/"/g, '""')}"`,
      `"${f.serviceCategory}"`,
      f.agreedAmount,
      f.paidAmount,
      Math.max(0, f.agreedAmount - f.paidAmount),
      `"${f.status}"`,
      `"${f.paymentMethod}"`,
      `"${f.lastPaymentDate || ""}"`
    ]);

    rows.push(["TOTALS", "", totalAgreed, totalPaid, totalBalance, `${percentagePaid}% Paid`, "", ""]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Wedding_Finances_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Overview */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0F4C81]/30 via-slate-900 to-[#2E6F40]/30 border border-[#D4AF37]/40 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
              <IndianRupee className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Feature 1 • Marriage Finance Tracker</span>
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">
              Marriage Finance Tracker & Quotation Comparison
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Compare <strong className="text-cyan-300">Agreed Quotations Received</strong> against <strong className="text-emerald-300">Amounts Paid / Given</strong>. Calculate totals and track balances in real-time.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handleExportCsv}
              className="py-2.5 px-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => {
                setEditingItem(null);
                setForm({
                  vendorName: "",
                  serviceCategory: "Photography & Cinematography",
                  agreedAmount: "",
                  paidAmount: "",
                  paymentMethod: "UPI (Google Pay)",
                  lastPaymentDate: new Date().toISOString().split("T")[0],
                  phone: "",
                  notes: ""
                });
                setIsAddModalOpen(true);
              }}
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:opacity-95 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add New Quotation / Payment</span>
            </button>
          </div>
        </div>

        {/* 3 Summary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {/* Card 1: Total Agreed Quotation */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-blue-900/40">
            <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider block mb-1">
              1. Total Agreed Quotations
            </span>
            <div className="font-mono text-2xl font-bold text-white flex items-center">
              <span>₹{totalAgreed.toLocaleString("en-IN")}</span>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">
              Total committed quotation from all vendors
            </span>
          </div>

          {/* Card 2: Total Amount Paid / Given */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-900/40">
            <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
              2. Total Amount Paid / Given
            </span>
            <div className="font-mono text-2xl font-bold text-emerald-300 flex items-center">
              <span>₹{totalPaid.toLocaleString("en-IN")}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-emerald-400 h-1.5 rounded-full"
                style={{ width: `${percentagePaid}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">
              {percentagePaid}% of total quotation cleared
            </span>
          </div>

          {/* Card 3: Remaining Balance */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-900/40">
            <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block mb-1">
              3. Total Remaining Balance
            </span>
            <div className="font-mono text-2xl font-bold text-amber-400 flex items-center">
              <span>₹{totalBalance.toLocaleString("en-IN")}</span>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">
              Pending payment to be settled
            </span>
          </div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search vendor or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-amber-400"
          >
            <option value="all">All Service Categories</option>
            <option value="Photography & Cinematography">Photography & Cinematography</option>
            <option value="Kalamandir Venue & Stage">Venue & Stage</option>
            <option value="Catering & Wedding Feast">Catering & Feast</option>
            <option value="Decor, Mandap & Lighting">Decor & Flowers</option>
            <option value="Traditional Music & Sound">Music & Sound</option>
          </select>
        </div>
      </div>

      {/* Main Quotation vs Payment Comparison Table */}
      <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-950/70">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800 font-semibold uppercase tracking-wider text-[10px]">
                <th className="p-3.5">Vendor Name & Service</th>
                <th className="p-3.5 text-right text-cyan-300 font-bold">
                  Column 1: Agreed Quotation
                </th>
                <th className="p-3.5 text-right text-emerald-300 font-bold">
                  Column 2: Amount Paid / Given
                </th>
                <th className="p-3.5 text-right text-amber-300">Balance Due</th>
                <th className="p-3.5 text-center">Status</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredFinances.map((item) => {
                const balance = Math.max(0, Number(item.agreedAmount) - Number(item.paidAmount));
                const pct = item.agreedAmount > 0 ? Math.round((item.paidAmount / item.agreedAmount) * 100) : 0;
                const isHarshit = item.vendorName.toLowerCase().includes("harshit");

                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-900/50 transition-colors ${
                      isHarshit ? "bg-amber-500/5" : ""
                    }`}
                  >
                    {/* Vendor Name */}
                    <td className="p-3.5">
                      <div className="font-bold text-white text-xs flex items-center gap-1.5">
                        {isHarshit && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono">
                            Example
                          </span>
                        )}
                        <span>{item.vendorName}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.serviceCategory}</div>
                      {item.notes && (
                        <div className="text-[10px] text-slate-400 italic mt-0.5 line-clamp-1">
                          "{item.notes}"
                        </div>
                      )}
                    </td>

                    {/* Column 1: Agreed Quotation */}
                    <td className="p-3.5 text-right font-mono font-bold text-cyan-300 text-sm">
                      ₹{Number(item.agreedAmount).toLocaleString("en-IN")}
                    </td>

                    {/* Column 2: Amount Paid / Given */}
                    <td className="p-3.5 text-right font-mono font-bold text-emerald-300 text-sm">
                      ₹{Number(item.paidAmount).toLocaleString("en-IN")}
                      <div className="text-[10px] text-slate-400 font-sans mt-0.5">
                        {pct}% cleared
                      </div>
                    </td>

                    {/* Balance Due */}
                    <td className="p-3.5 text-right font-mono font-bold text-amber-400 text-sm">
                      ₹{balance.toLocaleString("en-IN")}
                    </td>

                    {/* Status badge */}
                    <td className="p-3.5 text-center">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                          balance === 0
                            ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40"
                            : item.paidAmount > 0
                            ? "bg-blue-950/80 text-cyan-300 border-blue-500/40"
                            : "bg-red-950/80 text-red-300 border-red-500/40"
                        }`}
                      >
                        {balance === 0 ? "Paid in Full" : item.paidAmount > 0 ? "Partially Paid" : "Unpaid"}
                      </span>
                    </td>

                    {/* Action buttons */}
                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {balance > 0 && (
                          <button
                            onClick={() => {
                              setQuickPayItem(item);
                              setQuickPayAmount("");
                            }}
                            className="px-2 py-1 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/50 text-[10px] font-semibold text-emerald-300 transition-colors"
                            title="Record Payment Installment"
                          >
                            + Pay
                          </button>
                        )}

                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => {
                            if (window.confirm(`Delete quotation for ${item.vendorName}?`)) {
                              deleteExpense(item.id);
                            }
                          }}
                          className="p-1.5 rounded-lg bg-slate-900 hover:bg-red-950/60 border border-slate-700 hover:border-red-500/50 text-slate-400 hover:text-red-300 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {/* Total Row */}
              <tr className="bg-slate-900 font-bold border-t-2 border-slate-700 text-xs">
                <td className="p-3.5 text-white uppercase tracking-wider">
                  Grand Total (All Quotations)
                </td>
                <td className="p-3.5 text-right font-mono text-cyan-300 text-sm">
                  ₹{totalAgreed.toLocaleString("en-IN")}
                </td>
                <td className="p-3.5 text-right font-mono text-emerald-300 text-sm">
                  ₹{totalPaid.toLocaleString("en-IN")}
                </td>
                <td className="p-3.5 text-right font-mono text-amber-400 text-sm">
                  ₹{totalBalance.toLocaleString("en-IN")}
                </td>
                <td className="p-3.5 text-center text-slate-300 text-[11px]">
                  {percentagePaid}% Cleared
                </td>
                <td className="p-3.5 text-right text-[10px] text-slate-400">
                  {finances.length} Vendors
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Quotation Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-slate-900 border border-[#D4AF37]/50 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="font-playfair text-xl font-bold text-white">
              {editingItem ? "Edit Vendor Quotation & Payment" : "Add New Vendor Quotation & Payment"}
            </h3>

            <form onSubmit={handleAddExpense} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Vendor / Payee Name (e.g. Harshit) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Harshit (Photography & Cinematography)"
                  value={form.vendorName}
                  onChange={(e) => setForm({ ...form, vendorName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Service Category</label>
                <select
                  value={form.serviceCategory}
                  onChange={(e) => setForm({ ...form, serviceCategory: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="Photography & Cinematography">Photography & Cinematography</option>
                  <option value="Kalamandir Venue & Stage">Venue & Stage</option>
                  <option value="Catering & Wedding Feast">Catering & Wedding Feast</option>
                  <option value="Decor, Mandap & Lighting">Decor, Mandap & Lighting</option>
                  <option value="Traditional Music & Sound">Traditional Music & Sound</option>
                  <option value="Bridal Sarees & Attire">Bridal Sarees & Attire</option>
                  <option value="Hospitality & Logistics">Hospitality & Logistics</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Agreed Quotation (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 35000"
                    value={form.agreedAmount}
                    onChange={(e) => setForm({ ...form, agreedAmount: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Amount Paid / Given (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 5000"
                    value={form.paidAmount}
                    onChange={(e) => setForm({ ...form, paidAmount: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Payment Method</label>
                  <select
                    value={form.paymentMethod}
                    onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="UPI (Google Pay)">UPI (Google Pay)</option>
                    <option value="Bank NEFT Transfer">Bank NEFT Transfer</option>
                    <option value="Cash">Cash</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Payment Date</label>
                  <input
                    type="date"
                    value={form.lastPaymentDate}
                    onChange={(e) => setForm({ ...form, lastPaymentDate: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Notes / Terms</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Quotation includes 2-day candid coverage, drone, and traditional album."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none resize-none"
                />
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
                  {editingItem ? "Save Changes" : "Save Quotation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quick Pay Modal */}
      {quickPayItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-sm bg-slate-900 border border-emerald-500/50 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="font-playfair text-lg font-bold text-white">
              Record Installment for {quickPayItem.vendorName}
            </h3>

            <div className="p-3 rounded-xl bg-slate-950 text-xs space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Agreed Quotation:</span>
                <span className="text-cyan-300 font-mono">₹{quickPayItem.agreedAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Already Paid:</span>
                <span className="text-emerald-300 font-mono">₹{quickPayItem.paidAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-white border-t border-slate-800 pt-1">
                <span>Current Balance Due:</span>
                <span className="text-amber-400 font-mono">
                  ₹{Math.max(0, quickPayItem.agreedAmount - quickPayItem.paidAmount).toLocaleString()}
                </span>
              </div>
            </div>

            <form onSubmit={handleQuickPaySubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Additional Amount Paid Now (₹) *
                </label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 5000"
                  value={quickPayAmount}
                  onChange={(e) => setQuickPayAmount(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-emerald-400 focus:outline-none text-sm font-mono"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setQuickPayItem(null)}
                  className="py-1.5 px-3.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-1.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
                >
                  Record Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
