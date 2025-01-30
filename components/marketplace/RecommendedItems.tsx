import React from "react";

interface Item {
  name: string;
  price: string;
}

interface RecommendedItemsProps {
  recommendedItems: Item[];
}

const RecommendedItems: React.FC<RecommendedItemsProps> = ({ recommendedItems }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-neutral-800">Recommended For You</h2>
        <button className="text-sm text-neutral-600 hover:text-neutral-900">View All</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendedItems.map((item, index) => (
          <div key={index} className="p-4 bg-neutral-50 rounded-lg">
            <img
              src="https://placehold.co/300x200?text=Item"
              alt=""
              className="w-full h-32 object-cover rounded-lg mb-3 transition-opacity duration-300 opacity-100"
              loading="lazy"
            />
            <h3 className="text-sm font-medium text-neutral-800">{item.name}</h3>
            <p className="text-sm text-neutral-600">{item.price}</p>
            <button className="mt-2 w-full px-3 py-1 text-sm bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
