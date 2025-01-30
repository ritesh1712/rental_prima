import React from 'react';
import Container from '@/components/container/Container';
import StatsCard from '@/components/marketplace/StatsCard';
import RecentListingCard from '@/components/marketplace/RecentListingCard';
import RecentRequestCard from '@/components/marketplace/RecentRequestCard';

const Listings: React.FC = () => {

  const statsData = [
    { title: "Total Listings", value: "24", percentageChange: +12, color: "blue" },
    { title: "Active Rentals", value: "8", percentageChange: 'Active', color: "blue" },
    { title: "Total Revenue", value: "$2,450", percentageChange: +8, color: "green" },
    { title: "Pending Requests", value: "5", percentageChange: 'Pending', color: "yellow" },
  ];

  return (
    <Container>
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Listings */}
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-neutral-800">Recent Listings</h2>
            <button className="text-sm text-neutral-600 hover:text-neutral-900">View All</button>
          </div>
          <div className="space-y-4">
            <RecentListingCard name="Professional Camera" price="$50/day" status="Available" imageUrl="https://placehold.co/100x100?text=Item" />
            <RecentListingCard name="Office Desk" price="$30/week" status="Rented" imageUrl="https://placehold.co/100x100?text=Item" />
          </div>
        </div>

        {/* Recent Requests */}
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-neutral-800">Recent Requests</h2>
            <button className="text-sm text-neutral-600 hover:text-neutral-900">View All</button>
          </div>
          <div className="space-y-4">
            <RecentRequestCard userName="John Doe" productName="Professional Camera" rentalPeriod="3 days" imageUrl="https://avatar.iran.liara.run/public" />
            <RecentRequestCard userName="Jane Smith" productName="Office Desk" rentalPeriod="2 weeks" imageUrl="https://avatar.iran.liara.run/public" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Listings;
