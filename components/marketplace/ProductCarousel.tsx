"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft,ChevronRight } from "lucide-react";
const products = [
  {
    title: "Professional Camera",
    description: "High-end DSLR camera with multiple lenses",
    price: "$50/day",
    availability: "Available Now",
  },
  {
    title: "Office Desk",
    description: "Modern ergonomic desk with storage",
    price: "$30/week",
    availability: "Available Next Week",
  },
  {
    title: "Wedding Decor",
    description: "Complete wedding decoration set",
    price: "$500/day",
    availability: "Book in Advance",
  },
  {
    title: "Gaming Laptop",
    description: "High-performance laptop for gaming & work",
    price: "$80/day",
    availability: "Limited Stock",
  },
  {
    title: "Mountain Bike",
    description: "Premium all-terrain mountain bike",
    price: "$20/day",
    availability: "Available Now",
  },
  {
    title: "Projector",
    description: "4K HD projector for home theater",
    price: "$25/day",
    availability: "Available Next Week",
  },
  {
    title: "Projector",
    description: "4K HD projector for home theater",
    price: "$25/day",
    availability: "Available Next Week",
  },
  {
    title: "Projector",
    description: "4K HD projector for home theater",
    price: "$25/day",
    availability: "Available Next Week",
  },
  {
    title: "Projector",
    description: "4K HD projector for home theater",
    price: "$25/day",
    availability: "Available Next Week",
  },
  {
    title: "Projector",
    description: "4K HD projector for home theater",
    price: "$25/day",
    availability: "Available Next Week",
  },
];

const ITEMS_PER_PAGE = 4;

const ProductCarousel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      {/* Product Cards */}
      <div className="flex gap-5 justify-center flex-wrap md:flex-nowrap">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-5 flex justify-center">
        <div className="flex gap-5">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`h-10 w-10 flex justify-center items-center rounded-xl cursor-pointer shadow-md ${
              currentPage === 1 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-white text-black"
            }`}
          >
            {/* &lt; */}
            <ChevronLeft />
            </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`h-10 w-10 flex justify-center items-center rounded-xl shadow-md ${
                currentPage === i + 1 ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`h-10 w-10 flex justify-center items-center rounded-xl cursor-pointer shadow-md ${
              currentPage === totalPages ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-white text-black"
            }`}
          >
   <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
