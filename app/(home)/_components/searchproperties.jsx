"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FaSearch } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";

export const Search = () => {
  const [activeBox, setActiveBox] = useState("residential");

  const options = {
    residential: ["All", "Buy", "Rent"],
    commercial: ["Office", "Shop", "Warehouse"],
    hotels: [
      "All",
      "Luxury Hotels (5-Star)",
      "Boutique Hotels",
      "Budget Hotels (2-3 Star)",
      "Business Hotels",
      "Resorts",
      "Rent",
    ],
    payingGuest: ["Single Sharing", "Double Sharing", "Triple Sharing"],
  };

  return (
    <div className="p-6 bg-transparent">
      <div className="flex gap-4 mb-6 relative">
        {[
          { id: "residential", label: "Residential" },
          { id: "commercial", label: "Commercial" },
          { id: "hotels", label: "Hotels" },
          { id: "payingGuest", label: "Paying Guest" },
        ].map((box) => (
          <div key={box.id} className="relative">
            <Button
              variant="outline"
              className={`p-4 rounded-md border-none text-sm font-medium ${
                activeBox === box.id
                  ? "bg-[#7B00FF] text-white hover:bg-[#7B00FF]"
                  : "bg-white text-[#6C696A] hover:bg-purple-800"
              }`}
              onClick={() => setActiveBox(box.id)}
            >
              {box.label}
            </Button>
            {activeBox === box.id && (
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-10 h-2 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#7B00FF]" />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 bg-white py-3 px-5 rounded-lg">
        <Select>
          <SelectTrigger className="w-48 border border-gray-300 bg-transparent">
            <span className="text-sm">
              {options[activeBox][0] || "Select an option"}
            </span>
          </SelectTrigger>
          <SelectContent>
            {options[activeBox].map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="relative flex-1">
          <input
            type="text"
            placeholder="       Search area, city"
            className="w-full p-2 pr-16 border border-gray-300 rounded-md text-sm"
          />
          <FaSearch className="absolute text-stone-300 top-[12px] left-[10px]" />
          <Button
            variant="outline"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-[#7B00FF]"
          >
            Near Me
            <BiTargetLock className="text-[25px]" />
          </Button>
        </div>

        <Button variant="default" className="bg-[#7B00FF] text-white">
          Search
        </Button>
      </div>
    </div>
  );
};
