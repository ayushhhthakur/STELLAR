// src/components/BookingForm.jsx
import React, { useState } from 'react';
import '../styles/components/BookingForm.css';
import Calendar from 'react-calendar';
import Navbar from './Navbar';

const BookingForm = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('09:00 AM'); // Default time

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="booking-form">
        <h2>Book an Appointment</h2>
        <Calendar
          onChange={handleDateChange}
          value={date}
          minDate={new Date()} // Prevent selecting past dates
        />
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Date:
            <input type="text" value={date.toDateString()} readOnly />
          </label>
          <label>
            Time:
            <select value={time} onChange={handleTimeChange} required>
              {Array.from({ length: 13 }, (_, i) => {
                const hour = 9 + i;
                const ampm = hour < 12 ? 'AM' : 'PM';
                const displayHour = hour % 12 || 12;
                const timeString = `${displayHour}:00 ${ampm}`;
                return (
                  <option key={timeString} value={timeString}>
                    {timeString}
                  </option>
                );
              })}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
