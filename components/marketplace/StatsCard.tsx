import React from "react";
import { Heart } from "lucide-react";


interface StatsCardProps {
  title: string;
  value: number | string;
  percentageChange?: number | string; // Accept both number and string
  color?: string; // Optional for different themes
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  percentageChange,
  color = "blue", 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-neutral-200/30 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-neutral-600">{title}</p>
          <h3 className="text-2xl font-semibold text-neutral-800 mt-1">{value}</h3>
        </div>

        {/* Only show percentageChange if it is defined */}
        {percentageChange !== undefined ? (
          <span
            className={`bg-${color}-100 text-${color}-800 text-xs font-medium px-2.5 py-0.5 rounded`}
          >
            {typeof percentageChange === "number"
              ? percentageChange > 0
                ? `+${percentageChange}%`
                : `${percentageChange}%`
              : percentageChange}
          </span>
        ):
        <Heart />
        }
      </div>
    </div>
  );
};

export default StatsCard;
