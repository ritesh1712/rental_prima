import React from "react";

interface Rental {
  name: string;
  completedOn: string;
}

interface RentalHistoryProps {
  rentalHistory: Rental[];
}

const RentalHistory: React.FC<RentalHistoryProps> = ({ rentalHistory }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-neutral-800">Rental History</h2>
        <button className="text-sm text-neutral-600 hover:text-neutral-900">View All</button>
      </div>
      <div className="space-y-4">
        {rentalHistory.map((rental, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
            <div>
              <h3 className="text-sm font-medium text-neutral-800">{rental.name}</h3>
              <p className="text-sm text-neutral-600">{rental.completedOn}</p>
            </div>
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700">Review</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalHistory;
