import React, { useState } from "react";

const GuestCheckOut = () => {
  const [reservationId, setReservationId] = useState("");
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [error, setError] = useState("");
  const [bill, setBill] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  const [isReceiptGenerated, setIsReceiptGenerated] = useState(false);

  const handleCheckOut = () => {
    // Simulate a check-out process here (replace with actual logic)
    const foundReservation = findCheckedInReservationById(reservationId);

    if (foundReservation) {
      // Calculate the bill and additional charges
      const additionalCharges = calculateAdditionalCharges(foundReservation);
      const totalBill = foundReservation.totalCost + additionalCharges;

      // Update the reservation status to "Checked-Out"
      foundReservation.status = "Checked-Out";
      setReservationData(foundReservation);
      setBill(totalBill);
      setIsCheckedOut(true);
      setError("");
    } else {
      setError("Reservation not found or is not checked in.");
    }
  };

  const findCheckedInReservationById = (id) => {
    // Replace this with a function to search for checked-in reservations in your data
    const reservations = [
      // Sample reservations data
      { id: "123", name: "John Doe", status: "Checked-In", totalCost: 200 },
      { id: "456", name: "Jane Smith", status: "Pending", totalCost: 150 },
    ];

    return reservations.find(
      (reservation) =>
        reservation.id === id && reservation.status === "Checked-In"
    );
  };

  const calculateAdditionalCharges = (reservation) => {
    // Simulated function to calculate additional charges (e.g., room service, minibar)
    return Math.random() * 50; // Replace with actual calculation
  };

  const handleFeedbackSubmit = () => {
    // Simulate sending guest feedback (replace with actual logic)
    console.log("Feedback submitted:", feedback);
    // Reset the feedback form and set a flag to indicate submission
    setFeedback("");
    setIsFeedbackSubmitted(true);
  };

  const handleGenerateReceipt = () => {
    // Simulate receipt generation (replace with actual logic)
    console.log("Receipt generated for:", reservationData.name);
    setIsReceiptGenerated(true);
  };

  const handleNewCheckOut = () => {
    // Reset the checkout form and flags for a new check-out
    setReservationId("");
    setIsCheckedOut(false);
    setReservationData(null);
    setError("");
    setBill(0);
    setFeedback("");
    setIsFeedbackSubmitted(false);
    setIsReceiptGenerated(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="my-4 p-4 border rounded-lg">
        <h2 className="text-lg text-gray-800 font-semibold mb-4">
          Guest Check-Out
        </h2>
        {!isCheckedOut ? (
          <form onSubmit={handleCheckOut} className="mt-2">
            <div className="mb-4">
              <label
                htmlFor="reservationId"
                className="block text-gray-600 font-semibold mb-1"
              >
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
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Check-Out
            </button>
          </form>
        ) : (
          <>
            <div className="mt-4">
              <p className="text-green-600 font-semibold">
                Guest {reservationData.name} has been successfully checked out.
              </p>
              <p className="text-gray-600">
                Check-Out Date: {new Date().toLocaleString()}
              </p>
              <h3 className="text-gray-800 mt-4 font-semibold">
                Bill Summary:
              </h3>
              <p className="text-gray-600">
                Room Charges: ${reservationData.totalCost}
              </p>
              <p className="text-gray-600">
                Additional Charges: ${bill - reservationData.totalCost}
              </p>
              <p className="text-gray-600">Total Bill: ${bill}</p>
              {isFeedbackSubmitted ? (
                <p className="text-green-600 mt-4">
                  Thank you for your feedback!
                </p>
              ) : (
                <>
                  <h3 className="text-gray-800 mt-4 font-semibold">
                    Guest Feedback:
                  </h3>
                  <textarea
                    className="w-full border rounded-md py-2 px-3"
                    rows="4"
                    placeholder="Provide feedback..."
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
                </>
              )}
              {!isReceiptGenerated ? (
                <button
                  type="button"
                  onClick={handleGenerateReceipt}
                  className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
                >
                  Generate Receipt
                </button>
              ) : (
                <p className="text-green-600 mt-4">
                  Receipt generated and sent to guest.
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={handleNewCheckOut}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Start New Check-Out
            </button>
          </>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default GuestCheckOut;
