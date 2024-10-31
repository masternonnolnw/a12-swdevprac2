"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import DateReserve from "@/components/DateReserve"; // Import the DatePicker component
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";
import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    id: "",
    hospital: "Chula",
    date: ""
  });

  const { data: session } = useSession();
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setFormData({ ...formData, hospital: event.target.value as string });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Dispatch the booking data to Redux
    dispatch(
      addBooking({
        name: formData.name,
        surname: formData.surname,
        id: formData.id,
        hospital: formData.hospital,
        bookDate: formData.date
      })
    );

    console.log("Booking submitted:", formData);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", mt: 5 }}>
      <h1 className="text-black">Vaccine Booking</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <TextField
          label="First Name"
          name="name"
          variant="standard"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Surname */}
        <TextField
          label="Last Name"
          name="surname"
          variant="standard"
          value={formData.surname}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Citizen ID */}
        <TextField
          label="Citizen ID"
          name="id"
          variant="standard"
          value={formData.id}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Hospital Select */}
        <FormControl fullWidth margin="normal" variant="standard">
          <InputLabel id="hospital-label">Hospital</InputLabel>
          <Select
            labelId="hospital-label"
            id="hospital"
            value={formData.hospital}
            onChange={handleSelectChange}
          >
            <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
            <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
            <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
          </Select>
        </FormControl>

        {/* Date Picker */}
        <DateReserve
          value={formData.date}
          onChange={(newDate) => setFormData({ ...formData, date: newDate })}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          name="Book Vaccine"
          fullWidth
          sx={{ mt: 2 }}
        >
          Book Vaccine
        </Button>
      </form>
    </Box>
  );
}
