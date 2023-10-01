// src/components/ReservationHome.js
import React, { useState } from 'react';

const ReservationForm = ({ onAddReservation }) => {
  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

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

    onAddReservation({ name, checkInDate, checkOutDate, status: 'Pending' });
    setName('');
    setCheckInDate('');
    setCheckOutDate('');
  };

  return (
    <div className="my-4 p-4 border rounded-lg">
      <h2 className="text-lg text-gray-100 font-semibold">Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="mt-2">
        {/* ... (form fields) */}
      </form>
    </div>
  );
};

const ReservationList = ({ reservations, onDeleteReservation, onUpdateStatus }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg text-gray-100 font-semibold">Reservations</h2>
      <ul className="mt-2">
        {reservations.map((reservation, index) => (
          <li key={index} className="border rounded-md p-2 mb-2">
            <strong className='text-gray-100'>{reservation.name}</strong>
            <p>
              Check-In: {reservation.checkInDate} - Check-Out: {reservation.checkOutDate}
            </p>
            <p>Status: {reservation.status}</p>
            <button onClick={() => onDeleteReservation(index)} className="bg-red-500 text-white py-1 px-2 rounded-md ml-2">
              Delete
            </button>
            <button onClick={() => onUpdateStatus(index, 'Confirmed')} className="bg-green-500 text-white py-1 px-2 rounded-md ml-2">
              Confirm
            </button>
            <button onClick={() => onUpdateStatus(index, 'Cancelled')} className="bg-yellow-500 text-white py-1 px-2 rounded-md ml-2">
              Cancel
            </button>
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
      <ReservationForm onAddReservation={addReservation} />
      <ReservationList
        reservations={reservations}
        onDeleteReservation={deleteReservation}
        onUpdateStatus={updateReservationStatus}
      />
    </div>
  );
}

export default ReservationHome;
