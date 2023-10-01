// src/components/ReservationForm.js
import { useState } from 'react';

const ReservationForm = ({ onAddReservation }) => {
  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReservation({ name, checkInDate, checkOutDate });
    setName('');
    setCheckInDate('');
    setCheckOutDate('');
  };

  return (
    <div className="my-4 p-4 border rounded-lg">
      <h2 className="text-lg font-semibold">Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold">
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
          <label htmlFor="checkInDate" className="block text-white-700 font-semibold">
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
          <label htmlFor="checkOutDate" className="block text-gray-700 font-semibold">
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
  );
};

const ReservationList = ({ reservations }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Reservations</h2>
      <ul className="mt-2">
        {reservations.map((reservation, index) => (
          <li key={index} className="border rounded-md p-2 mb-2">
            <strong>{reservation.name}</strong>
            <p>
              Check-In: {reservation.checkInDate} - Check-Out: {reservation.checkOutDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

function ReservationHome() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div className="container mx-auto p-4">
      <ReservationForm onAddReservation={addReservation} />
      <ReservationList reservations={reservations} />
    </div>
  );
}

export default ReservationHome;
