"use client";

import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r p-4 hidden flex-col justify-between text-black md:flex">
      <div>
        <h1 className="text-2xl font-bold mb-6">RentMarket</h1>
        <nav className="space-y-2">
          <Link href="/marketplace" className="block p-3 rounded-md bg-gray-100 font-semibold">
            Marketplace
          </Link>
          <Link href="/" className="block p-3 rounded-md hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/listings" className="block p-3 rounded-md hover:bg-gray-100">
            Listings
          </Link>
          <Link href="/requests" className="block p-3 rounded-md hover:bg-gray-100">
            Requests
          </Link>
          <Link href="/categories" className="block p-3 rounded-md hover:bg-gray-100">
            Categories
          </Link>
          <Link href="/settings" className="block p-3 rounded-md hover:bg-gray-100">
          Settings
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-3 p-3 rounded-md">
      <img src="https://avatar.iran.liara.run/public" alt="User" className="w-10 h-10 rounded-full transition-opacity duration-300 opacity-100" loading="lazy"/>        <div>
          <p className="font-semibold">John Doe</p>
          <p className="text-sm text-gray-500">john@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
