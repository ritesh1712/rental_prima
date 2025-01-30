"use client";

import React from "react";

const SearchFilter: React.FC = () => {
  return (
    <div className="md:flex space-y-5 items-center gap-4 py-4 bg-gray-100 rounded-lg">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search items..."
        className="w-full border-2 border-gray-100 rounded-xl p-2 focus:border-gray-400 focus:ring-black outline-none bg-white text-black placeholder-gray-500 shadow-sm"
        />
      {/* Price Range Dropdown */}
      <select className="px-4 py-2 border rounded-xl bg-white focus:outline-none">
        <option>Price Range</option>
        <option>$0-$100</option>
        <option>$100-$500</option>
        <option>$500+</option>
      </select>

      {/* Availability Dropdown */}
      <select className="px-4 py-2 border rounded-xl bg-white focus:outline-none">
       
      <option>Availability</option>
        <option>Available Now</option>
                    <option>Next Week</option>
                    <option>Next Month</option>
      </select>
    </div>
  );
};

export default SearchFilter;
