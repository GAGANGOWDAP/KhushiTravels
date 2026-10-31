"use client";

import React, { useState } from "react";

export default function KashiEnquiryForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("16 Adults");
  const [rooms, setRooms] = useState("08 Double-Sharing Rooms");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hi Khushi Travels, I want to enquire about the Kashi – Triveni – Ayodhya Yatra.

Package: Kashi – Triveni – Ayodhya Yatra
Duration: 03 Nights / 04 Days
Group: ${travellers}
Rooms: ${rooms}
Price: ₹17,900 per person + 5% GST
Travel Date: ${travelDate || "To be decided"}
Name: ${fullName || "Not provided"}
Phone: ${phone || "Not provided"}
${notes ? `Additional Notes: ${notes}` : ""}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919901333113?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-[#193454] border border-[#C6A04A]/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="kashi-name"
              className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1"
            >
              Full Name *
            </label>
            <input
              id="kashi-name"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Ramesh Sharma"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A04A]"
            />
          </div>

          <div>
            <label
              htmlFor="kashi-phone"
              className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1"
            >
              Phone / WhatsApp Number *
            </label>
            <input
              id="kashi-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A04A]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="kashi-travellers"
              className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1"
            >
              Number of Travellers
            </label>
            <select
              id="kashi-travellers"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A04A]"
            >
              <option value="16 Adults">16 Adults (Standard Group)</option>
              <option value="12-15 Adults">12–15 Adults</option>
              <option value="17-20 Adults">17–20 Adults</option>
              <option value="Other Group Size">Other Group Size</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="kashi-rooms"
              className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1"
            >
              Room Requirements
            </label>
            <select
              id="kashi-rooms"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A04A]"
            >
              <option value="08 Double-Sharing Rooms">08 Double-Sharing Rooms</option>
              <option value="06-07 Rooms">06–07 Rooms</option>
              <option value="09-10 Rooms">09–10 Rooms</option>
              <option value="Custom Rooming Plan">Custom Rooming Plan</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="kashi-date"
              className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1"
            >
              Proposed Travel Date
            </label>
            <input
              id="kashi-date"
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A04A]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="kashi-notes"
            className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1"
          >
            Special Requirements / Notes (Optional)
          </label>
          <textarea
            id="kashi-notes"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Senior citizens in group, Jain satvik meals preference, flight timing..."
            className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A04A]"
          />
        </div>

        {/* Prepopulated Package Summary Card */}
        <div className="bg-slate-950/40 rounded-xl p-3.5 border border-white/10 text-xs text-slate-300">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>
              <strong>Selected:</strong> Kashi – Triveni – Ayodhya Yatra (4D/3N)
            </span>
            <span className="text-[#E3C77E] font-bold">
              ₹17,900 / Person + 5% GST
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="submit"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C6A04A] via-[#E3C77E] to-[#C6A04A] text-slate-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            <span>Send Enquiry via WhatsApp</span>
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>

          <a
            href="tel:+919901333113"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-all text-center"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>Call: +91 99013 33113</span>
          </a>
        </div>
      </form>
    </div>
  );
}

