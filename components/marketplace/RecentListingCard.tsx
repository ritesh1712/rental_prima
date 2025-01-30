// components/marketplace/RecentListingCard.tsx
import React from "react";

interface ListingCardProps {
  name: string;
  price: string;
  status: string;
  imageUrl: string;
}

const RecentListingCard: React.FC<ListingCardProps> = ({ name, price, status, imageUrl }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <img
          src={imageUrl}
          alt="Product"
          className="w-12 h-12 rounded-lg object-cover transition-opacity duration-300 opacity-100"
          loading="lazy"
        />
        <div>
          <h3 className="text-sm font-medium text-neutral-800">{name}</h3>
          <p className="text-sm text-neutral-600">{price}</p>
        </div>
      </div>
      <span className={`text-sm ${status === "Available" ? "text-green-600" : "text-red-600"}`}>{status}</span>
    </div>
  );
};

export default RecentListingCard;
