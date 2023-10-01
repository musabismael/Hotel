import React, { useState } from 'react';

const GuestCheckOut = () => {
  const [reservationId, setReservationId] = useState('');
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [error, setError] = useState('');
  const [bill, setBill] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleCheckOut = () => {
    // Simulate a check-out process here (replace with actual logic)
    const foundReservation = findCheckedInReservationById(reservationId);

    if (foundReservation) {
      // Calculate the bill and additional charges
      const additionalCharges = calculateAdditionalCharges(foundReservation);
      const totalBill = foundReservation.totalCost + additionalCharges;

      // Update the reservation status to "Checked-Out"
      foundReservation.status = 'Checked-Out';
      setReservationData(foundReservation);
      setBill(totalBill);
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
      { id: '123', name: 'John Doe', status: 'Checked-In', totalCost: 200 },
      { id: '456', name: 'Jane Smith', status: 'Pending', totalCost: 150 },
    ];

    return reservations.find((reservation) => reservation.id === id && reservation.status === 'Checked-In');
  };

  const calculateAdditionalCharges = (reservation) => {
    // Simulated function to calculate additional charges (e.g., room service, minibar)
    return Math.random() * 50; // Replace with actual calculation
  };

  const handleFeedbackSubmit = () => {
    // Simulate sending guest feedback (replace with actual logic)
    console.log('Feedback submitted:', feedback);
    // Reset the feedback form
    setFeedback('');
  };

  const handlePayment = () => {
    // Simulate payment processing logic here
    const paymentSuccessful = Math.random() < 0.9; // 90% success rate
    if (paymentSuccessful) {
      // Payment successful, finalize the check-out process
      alert('Payment successful! Guest checked out.');
      // You can perform additional actions here, such as marking the room as vacant.
      setIsCheckedOut(true);
    } else {
      // Payment failed, show an error message
      setError('Payment failed. Please try again.');
    }
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
          <button
            type="button"
            onClick={handlePayment}
            className="bg-green-500 text-white py-2 px-4 rounded-md ml-2"
          >
            Process Payment
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {isCheckedOut && (
          <div className="mt-4">
            <p className="text-red-500">
              Guest {reservationData.name} has been successfully checked out.
            </p>
            <p>Check-Out Date: {new Date().toLocaleString()}</p>
            <h3 className="text-gray-100 mt-2">Bill Summary:</h3>
            <p>Room Charges: ${reservationData.totalCost}</p>
            <p>Additional Charges: ${bill - reservationData.totalCost}</p>
            <p>Total Bill: ${bill}</p>
            <h3 className="text-gray-100 mt-4">Guest Feedback:</h3>
            <textarea
              className="w-full border rounded-md py-2 px-3"
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button
              type="button"
              onClick={handleFeedbackSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
            >
              Submit Feedback
            </button>
            {/* Payment handling, receipt generation, room inspection, key return, etc., can be added here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestCheckOut;
