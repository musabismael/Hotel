// src/components/ReservationHome.js
import React, { useState } from 'react';

const ReservationHome = () => {
  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [reservations, setReservations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !checkInDate || !checkOutDate) {
      alert('Please fill out all fields.');
      return;
    }

    // Check date range
    if (checkInDate >= checkOutDate) {
      alert('Check-In date must be before Check-Out date.');
      return;
    }

    const newReservation = {
      name,
      checkInDate,
      checkOutDate,
      status: 'Pending',
    };

    setReservations([...reservations, newReservation]);
    setName('');
    setCheckInDate('');
    setCheckOutDate('');
  };

  const deleteReservation = (index) => {
    const updatedReservations = [...reservations];
    updatedReservations.splice(index, 1);
    setReservations(updatedReservations);
  };

  const updateReservationStatus = (index, newStatus) => {
    const updatedReservations = [...reservations];
    updatedReservations[index].status = newStatus;
    setReservations(updatedReservations);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="my-4 p-4 border rounded-lg">
        <h2 className="text-lg text-gray-100 font-semibold">Make a Reservation</h2>
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-100 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md py-2 px-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="checkInDate" className="block text-gray-100 font-semibold">
              Check-In Date
            </label>
            <input
              type="date"
              id="checkInDate"
              className="w-full border rounded-md py-2 px-3"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="checkOutDate" className="block text-gray-100 font-semibold">
              Check-Out Date
            </label>
            <input
              type="date"
              id="checkOutDate"
              className="w-full border rounded-md py-2 px-3"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
      <div className="mt-4">
        <h2 className="text-lg text-gray-100 font-semibold">Reservations</h2>
        <ul className="mt-2">
          {reservations.map((reservation, index) => (
            <li key={index} className="border rounded-md p-2 mb-2">
              <strong className="text-gray-100">{reservation.name}</strong>
              <p>
                Check-In: {reservation.checkInDate} - Check-Out: {reservation.checkOutDate}
              </p>
              <p>Status: {reservation.status}</p>
              <button
                onClick={() => deleteReservation(index)}
                className="bg-red-500 text-white py-1 px-2 rounded-md ml-2"
              >
                Delete
              </button>
              <button
                onClick={() => updateReservationStatus(index, 'Confirmed')}
                className="bg-green-500 text-white py-1 px-2 rounded-md ml-2"
              >
                Confirm
              </button>
              <button
                onClick={() => updateReservationStatus(index, 'Cancelled')}
                className="bg-yellow-500 text-white py-1 px-2 rounded-md ml-2"
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReservationHome;
