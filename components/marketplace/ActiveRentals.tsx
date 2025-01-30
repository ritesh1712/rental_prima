import React from "react";

interface ActiveRental {
  name: string;
  due: string;
}

interface ActiveRentalsProps {
  activeRentals: ActiveRental[];
}

const ActiveRentals: React.FC<ActiveRentalsProps> = ({ activeRentals }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-neutral-800">Active Rentals</h2>
        <button className="text-sm text-neutral-600 hover:text-neutral-900">View All</button>
      </div>
      <div className="space-y-4">
        {activeRentals.map((rental, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
            <div>
              <h3 className="text-sm font-medium text-neutral-800">{rental.name}</h3>
              <p className="text-sm text-neutral-600">{rental.due}</p>
            </div>
            <button className="px-3 py-1 text-sm border border-neutral-200/30 rounded-lg hover:bg-neutral-50">Extend</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveRentals;
