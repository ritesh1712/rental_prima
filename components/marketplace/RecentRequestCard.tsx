import React from "react";

interface RequestCardProps {
  userName: string;
  productName: string;
  rentalPeriod: string;
  imageUrl: string;
}

const RecentRequestCard: React.FC<RequestCardProps> = ({ userName, productName, rentalPeriod, imageUrl }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <img
          src={imageUrl}
          alt="User"
          className="w-10 h-10 rounded-full transition-opacity duration-300 opacity-100"
          loading="lazy"
        />
        <div>
          <h3 className="text-sm font-medium text-neutral-800">{userName}</h3>
          <p className="text-sm text-neutral-600">{productName} - {rentalPeriod}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600">Accept</button>
        <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">Decline</button>
      </div>
    </div>
  );
};

export default RecentRequestCard;
