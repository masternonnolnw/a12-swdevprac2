// src/redux/features/bookSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingItem {
  name: string;
  surname: string;
  id: string;
  hospital: string;
  bookDate: string;
}

interface BookState {
  bookItems: BookingItem[];
}

const initialState: BookState = {
  bookItems: []
};

const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const existingBookingIndex = state.bookItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingBookingIndex !== -1) {
        state.bookItems[existingBookingIndex] = action.payload;
      } else {
        state.bookItems.push(action.payload);
      }
    },
    removeBooking: (state, action: PayloadAction<string>) => {
      state.bookItems = state.bookItems.filter(
        (item) => item.id !== action.payload
      );
    }
  }
});

export const { addBooking, removeBooking } = bookSlice.actions;

export { bookSlice };

export default bookSlice.reducer;
