"use client";

import { Bell, User, AlignJustify, X } from "lucide-react"; // Import the X (close) icon
import Link from "next/link";
import React, { useState } from "react";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false); // The state for the hamburger menu

  // Toggle the hamburger menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-[10%] flex justify-between items-center p-4 border-b bg-white text-black">
      <h1 className="text-2xl font-bold">Marketplace</h1>
      <div>
        {isLoggedIn ? (
          <div className="flex space-x-4 items-center">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />

            <div className="hidden md:block">
              <User className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>

            {/* Hamburger menu for mobile */}
            <div className="block md:hidden">
              <AlignJustify
                className="w-6 h-6 text-gray-600 cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
          <Link href="/crm/auth/login">
            <span className="px-4 py-2 bg-black text-white rounded-md cursor-pointer">
              Login
            </span>
          </Link>
           <div className="block md:hidden">
           <AlignJustify
             className="w-6 h-6 text-gray-600 cursor-pointer"
             onClick={toggleMenu}
           />
         </div>
         </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-black absolute top-0 left-0 w-screen h-screen bg-opacity-50 flex justify-end">
        <div className="bg-white w-4/5 shadow-lg rounded-lg p-4">
          {/* Close button */}
          <div className="flex justify-end">
            <X
              className="w-6 h-6 text-gray-600 cursor-pointer"
              onClick={closeMenu} // Close the menu when clicked
              />
          </div>
          <div className="mt-5">
          <Link href="/crm/marketplace" className="block p-3 rounded-md bg-gray-100 font-semibold">
            Marketplace
          </Link>
          <Link href="/crm/dashboard" className="block p-3 rounded-md hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/crm/listings" className="block p-3 rounded-md hover:bg-gray-100">
            Listings
          </Link>
          <Link href="/crm/requests" className="block p-3 rounded-md hover:bg-gray-100">
            Requests
          </Link>
          <Link href="/crm/categories" className="block p-3 rounded-md hover:bg-gray-100">
            Categories
          </Link>
          <Link href="/crm/settings" className="block p-3 rounded-md hover:bg-gray-100">
          Settings
          </Link>
        </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Navbar;
