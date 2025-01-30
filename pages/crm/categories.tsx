import React, { ReactNode } from "react";
import Container from "@/components/container/Container";
import CategoryCard from "@/components/marketplace/CategoryCard";
import ProductCarousel from "@/components/marketplace/ProductCarousel";
import SearchFilter from "@/components/marketplace/SearchFilter";
import StatsCard from "@/components/marketplace/StatsCard";

const categoriesData = [
    {
        title:'Electronics'
    },
    {
        title:'Weddings'
    },
    {
        title:'Vehicles'
    },
    {
        title:'Office Furniture'
    },
]
const statsData = [
    { title: "Total Users", value: "1,234", percentageChange: 15, color: "blue" },
    { title: "Active Listings", value: "456", percentageChange: +8, color: "green" },
    { title: "Platform Revenue", value: "$12,450", percentageChange: +12, color: "red" },
    { title: "Active Rentals", value: "89", percentageChange: 'Active', color: "purple" },
  ];

const categories = () => {
  return (
    <Container>
        <div className="flex justify-between my-5">
          <h1 className="font-semibold text-2xl">Categories</h1>
          <div className="flex gap-3">
            <div className="h-10 w-10 flex justify-center items-center rounded-xl shadow-md cursor-pointer hover:bg-gray-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                    </svg>
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-xl shadow-md cursor-pointer hover:bg-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
          </div>
          </div>

        </div>
        <div className="flex justify-between flex-wrap">
            {
                categoriesData.map((category)=>(
                    <CategoryCard title={category.title} />
                ))
            }
        </div>
        <SearchFilter />
        <div className="w-full">
        <ProductCarousel />
        </div>
        <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-neutral-800">Category Management</h2>
                <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">Add Category</button>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                        <div>
                            <h3 className="text-sm font-medium text-neutral-800">Electronics</h3>
                            <p className="text-sm text-neutral-600">156 items</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="p-2 text-neutral-600 hover:text-neutral-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                            </svg>
                        </button>
                        <button className="p-2 text-red-600 hover:text-red-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        <div>
                            <h3 className="text-sm font-medium text-neutral-800">Office Furniture</h3>
                            <p className="text-sm text-neutral-600">89 items</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="p-2 text-neutral-600 hover:text-neutral-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                            </svg>
                        </button>
                        <button className="p-2 text-red-600 hover:text-red-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-neutral-800">Recent Users</h2>
                <button className="text-sm text-neutral-600 hover:text-neutral-900">View All</button>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <img src="https://avatar.iran.liara.run/public" alt="User" className="w-10 h-10 rounded-full transition-opacity duration-300 opacity-100" loading="lazy"/>
                        <div>
                            <h3 className="text-sm font-medium text-neutral-800">John Doe</h3>
                            <p className="text-sm text-neutral-600">Seller</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded">Active</span>
                        <button className="p-2 text-neutral-600 hover:text-neutral-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <img src="https://avatar.iran.liara.run/public" alt="User" className="w-10 h-10 rounded-full transition-opacity duration-300 opacity-100" loading="lazy"/>
                        <div>
                            <h3 className="text-sm font-medium text-neutral-800">Jane Smith</h3>
                            <p className="text-sm text-neutral-600">Buyer</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded">Active</span>
                        <button className="p-2 text-neutral-600 hover:text-neutral-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Container>
  );
};

export default categories;
