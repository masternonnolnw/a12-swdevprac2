"use client";

import React, { useEffect, useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs";

interface DateReserveProps {
  value: string;
  onChange: (value: string) => void;
}
const DateReserve = ({ value, onChange }: DateReserveProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (
      selectedDate &&
      // not same as value
      selectedDate.format("YYYY-MM-DD") !== value
    ) {
      onChange(selectedDate.format("YYYY-MM-DD"));
    }
  }, [selectedDate, onChange]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select date"
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
        // renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
};

export default DateReserve;
