"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { Button } from "@mui/material";

const BookingList = () => {
  const bookings = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeBooking(id));
  };

  if (bookings.length === 0) {
    return (
      <div className="text-black flex text-center w-full mx-auto">
        <p>No Vaccine Bookings</p>
      </div>
    );
  }

  return (
    <div className="text-black">
      <h2>Booking List</h2>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>Id: {booking.id}</p>
          <p>Name: {booking.name}</p>
          <p>Surname: {booking.surname}</p>
          <p>Hospital: {booking.hospital}</p>
          <p>Date: {booking.bookDate}</p>
          <Button onClick={() => handleRemove(booking.id)}>
            Cancel Booking
          </Button>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
