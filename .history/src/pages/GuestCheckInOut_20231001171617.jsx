import React, { useState } from 'react';

const GuestCheckOut = () => {
  const [reservationId, setReservationId] = useState('');
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [error, setError] = useState('');

  const handleCheckOut = () => {
    // Simulate a check-out process here (replace with actual logic)
    const foundReservation = findCheckedInReservationById(reservationId);

    if (foundReservation) {
      // Update the reservation status to "Checked-Out"
      foundReservation.status = 'Checked-Out';
      setReservationData(foundReservation);
      setIsCheckedOut(true);
      setError('');
    } else {
      setError('Reservation not found or is not checked in.');
    }
  };

  const findCheckedInReservationById = (id) => {
    // Replace this with a function to search for checked-in reservations in your data
    const reservations = [
      // Sample reservations data
      { id: '123', name: 'John Doe', status: 'Checked-In' },
      { id: '456', name: 'Jane Smith', status: 'Pending' },
    ];

    return reservations.find((reservation) => reservation.id === id && reservation.status === 'Checked-In');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="my-4 p-4 border rounded-lg">
        <h2 className="text-lg text-gray-100 font-semibold">Guest Check-Out</h2>
        <form onSubmit={handleCheckOut} className="mt-2">
          <div className="mb-4">
            <label htmlFor="reservationId" className="block text-gray-100 font-semibold">
              Reservation ID
            </label>
            <input
              type="text"
              id="reservationId"
              className="w-full border rounded-md py-2 px-3"
              value={reservationId}
              onChange={(e) => setReservationId(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md">
            Check-Out
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {isCheckedOut && (
          <div className="mt-4">
            <p className="text-red-500">
              Guest {reservationData.name} has been successfully checked out.
            </p>
            <p>Check-Out Date: {new Date().toLocaleString()}</p>
            {/* Additional charges, payment, receipt, and feedback form can be added here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestCheckOut;
