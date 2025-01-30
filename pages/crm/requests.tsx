import React from 'react'
import Container from '@/components/container/Container'
import StatsCard from '@/components/marketplace/StatsCard'
import ActiveRentals from "@/components/marketplace/ActiveRentals";
import RentalHistory from "@/components/marketplace/RentalHistory";
import RecommendedItems from "@/components/marketplace/RecommendedItems";

function requests() {
  const statsData = [
    { title: "Active Rentals", value: "3", percentageChange: "Active", color: "blue" },
    { title: "Pending Requests", value: "2", percentageChange: "Pending", color: "yellow" },
    { title: "Total Spent", value: "$850", percentageChange: 'This Month', color: "green" },
    { title: "Saved Items", value: "12", color: "purple" },
  ];

  const recommendedItems = [
    { name: "Wireless Microphone", price: "$25/day" },
    { name: "Conference Table", price: "$40/week" },
    { name: "Party Lights", price: "$35/day" },
    { name: "Luxury Car", price: "$200/day" },
  ];
  
  const rentalHistory = [
    { name: "Wedding Decor Set", completedOn: "Completed on May 15" },
    { name: "Projector", completedOn: "Completed on May 10" },
  ];

  const activeRentals = [
    { name: "DSLR Camera", due: "Due in 2 days" },
    { name: "Office Chair", due: "Due in 5 days" },
  ];
  

  return (
    <Container>

<div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>


    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ActiveRentals  activeRentals={activeRentals}/>
        <RentalHistory  rentalHistory={rentalHistory}/>
      </div>
      <RecommendedItems recommendedItems={recommendedItems} />
    </Container>
  )
}

export default requests