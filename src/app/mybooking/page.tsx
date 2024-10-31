"use client";

import BookingList from "@/components/BookingList";

function MyBookingPage() {
  return (
    <div className="flex flex-col w-full p-[20px]">
      <h1 className="text-black">My Bookings</h1>
      <BookingList />
    </div>
  );
}

export default MyBookingPage;
