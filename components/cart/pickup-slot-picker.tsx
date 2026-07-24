"use client";

import React from "react";
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import { useStore } from "@/lib/store";
import { STORE_INFO } from "@/lib/data";

export const PickupSlotPicker = () => {
  const { 
    selectedPickupDate, 
    setSelectedPickupDate, 
    selectedPickupTimeSlot, 
    setSelectedPickupTimeSlot 
  } = useStore();

  // Generate next 5 available pickup dates
  const availableDates = Array.from({ length: 5 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + (i + 1));
    return {
      value: d.toISOString().split("T")[0],
      display: d.toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" }),
    };
  });

  const timeSlots = [
    "10:30 AM – 1:00 PM",
    "1:00 PM – 3:30 PM",
    "3:30 PM – 6:00 PM",
    "6:00 PM – 9:00 PM"
  ];

  return (
    <div className="space-y-4 glass-panel p-4 rounded-2xl border border-white/10">
      
      {/* Pickup Location Reminder */}
      <div className="flex items-center gap-2 text-xs bg-white/5 p-3 rounded-xl border border-white/10">
        <MapPin className="w-4 h-4 text-chrome shrink-0" />
        <div>
          <span className="font-bold text-white block">Pickup Boutique:</span>
          <span className="text-slate-300">{STORE_INFO.address}</span>
        </div>
      </div>

      {/* Date Picker */}
      <div>
        <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5 mb-2">
          <Calendar className="w-3.5 h-3.5 text-chrome" />
          Select Pickup Date
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {availableDates.map((dateObj) => (
            <button
              key={dateObj.value}
              type="button"
              onClick={() => setSelectedPickupDate(dateObj.value)}
              className={`p-2.5 rounded-xl text-xs font-semibold border transition text-center ${
                selectedPickupDate === dateObj.value
                  ? "bg-white text-black border-white shadow-chrome-glow font-bold"
                  : "bg-surface-card border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              {dateObj.display}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slot Picker */}
      <div>
        <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5 mb-2">
          <Clock className="w-3.5 h-3.5 text-chrome" />
          Select Preferred Time Window
        </label>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedPickupTimeSlot(slot)}
              className={`p-2.5 rounded-xl text-xs font-semibold border transition text-center flex items-center justify-center gap-1.5 ${
                selectedPickupTimeSlot === slot
                  ? "bg-white text-black border-white shadow-chrome-glow font-bold"
                  : "bg-surface-card border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              {selectedPickupTimeSlot === slot && <CheckCircle className="w-3 h-3 text-black" />}
              {slot}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
