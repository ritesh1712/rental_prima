import React from "react";
import { Plus } from "lucide-react";

interface CategoryCardProps {
  title: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, onClick }) => {
  return (
    <div
      className="flex items-center space-x-2 p-4 border shadow-sm cursor-pointer bg-white hover:bg-gray-200 md:w-1/5 rounded-xl shrink-0 w-[45%] m-2"
      onClick={onClick}
    >
      <Plus className="w-5 h-5 text-gray-500" />
      <span className="text-gray-700 font-medium">{title}</span>
    </div>
  );
};

export default CategoryCard;
