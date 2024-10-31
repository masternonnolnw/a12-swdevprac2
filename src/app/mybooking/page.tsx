"use client";

import BookingList from "@/components/BookingList";

function MyBookingPage() {
  return (
    <div className="flex w-full p-[20px]">
      <h1>My Bookings</h1>
      <BookingList />
    </div>
  );
}

export default MyBookingPage;
