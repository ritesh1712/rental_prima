import React from "react";

interface ProductCardProps {
  image?: string;
  title: string;
  description: string;
  price: string;
  availability: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  availability,
}) => {
  return (
    <div className="md:w-1/4 w-full bg-white rounded-xl shadow-md overflow-hidden border">
      <div className="h-40 bg-gray-300 flex items-center justify-center text-gray-400 text-2xl">
        {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : "Product"}
      </div>
      <div className="p-4 justify-between flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <span className="text-sm text-gray-600">{price}</span>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex">
        <p className="text-sm text-gray-500 mt-2">{availability}</p>
        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
          Rent Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
