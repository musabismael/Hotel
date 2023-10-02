import React, { useState, useEffect } from 'react';

const FrontDeskOperations = () => {
  const [roomStatus, setRoomStatus] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [billingInfo, setBillingInfo] = useState(null);

  useEffect(() => {
    // Simulate fetching room status data, reservations, and billing info from an API
    // In a real application, you would make API calls here
    const initialRoomStatus = [
      { roomNumber: '101', status: 'Clean', guest: 'John Doe' },
      { roomNumber: '102', status: 'Dirty', guest: null },
      { roomNumber: '103', status: 'Clean', guest: 'Jane Smith' },
      // Add more room status data as needed
    ];

    const initialReservations = [
      { roomNumber: '101', guestName: 'John Doe', checkInDate: '2023-10-15', checkOutDate: '2023-10-20' },
      // Add more reservation data as needed
    ];

    const initialBillingInfo = {
      guestName: 'John Doe',
      roomNumber: '101',
      totalAmount: 500, // Total billing amount
      paidAmount: 0, // Amount paid
      remainingAmount: 500, // Remaining amount to be paid
    };

    setRoomStatus(initialRoomStatus);
    setReservations(initialReservations);
    setBillingInfo(initialBillingInfo);
  }, []);

  const checkInGuest = (roomNumber, guestName) => {
    const updatedRoomStatus = [...roomStatus];
    const roomIndex = updatedRoomStatus.findIndex((room) => room.roomNumber === roomNumber);
    if (roomIndex !== -1) {
      updatedRoomStatus[roomIndex].status = 'Occupied';
      updatedRoomStatus[roomIndex].guest = guestName;
      setRoomStatus(updatedRoomStatus);
    }
  };

  const checkOutGuest = (roomNumber) => {
    const updatedRoomStatus = [...roomStatus];
    const roomIndex = updatedRoomStatus.findIndex((room) => room.roomNumber === roomNumber);
    if (roomIndex !== -1) {
      updatedRoomStatus[roomIndex].status = 'Clean';
      updatedRoomStatus[roomIndex].guest = null;
      setRoomStatus(updatedRoomStatus);
    }
  };

  const handlePayment = (amount) => {
    // Update billing info when a payment is made
    const updatedBillingInfo = { ...billingInfo };
    updatedBillingInfo.paidAmount += amount;
    updatedBillingInfo.remainingAmount -= amount;
    setBillingInfo(updatedBillingInfo);
  };

  const handleGuestInfoEdit = (guestName) => {
    // Update guest information
    const updatedRoomStatus = [...roomStatus];
    const roomIndex = updatedRoomStatus.findIndex((room) => room.roomNumber === selectedRoom.roomNumber);
    if (roomIndex !== -1) {
      updatedRoomStatus[roomIndex].guest = guestName;
      setRoomStatus(updatedRoomStatus);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg text-gray-800 font-semibold mb-4">Front Desk Operations</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Room Status */}
        <div>
          <h3 className="text-lg text-gray-800 font-semibold mb-2">Room Status</h3>
          <ul className="space-y-2">
            {roomStatus.map((room, index) => (
              <li
                key={index}
                className={`p-2 rounded-lg ${selectedRoom === room ? 'bg-blue-200' : 'bg-yellow-200'}`}
                onClick={() => setSelectedRoom(room)}
              >
                <span className="text-gray-800 font-semibold">
                  Room {room.roomNumber} - {room.status}
                </span>
                {room.guest && <p>Guest: {room.guest}</p>}
              </li>
            ))}
          </ul>
        </div>

        {/* Guest Information */}
        <div>
          {selectedRoom ? (
            <>
              <h3 className="text-lg text-gray-800 font-semibold mb-2">Guest Information</h3>
              <div className="mb-2">
                {selectedRoom.guest ? (
                  <>
                    <p>Room: {selectedRoom.roomNumber}</p>
                    <p>Guest: {selectedRoom.guest}</p>
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded-md mt-2"
                      onClick={() => checkOutGuest(selectedRoom.roomNumber)}
                    >
                      Check-Out
                    </button>
                  </>
                ) : (
                  <>
                    <p>Room: {selectedRoom.roomNumber}</p>
                    <input
                      type="text"
                      placeholder="Guest Name"
                      className="w-full border rounded-md py-2 px-3 mb-2"
                      value={selectedGuest || ''}
                      onChange={(e) => setSelectedGuest(e.target.value)}
                    />
                    <button
                      className="bg-green-500 text-white py-2 px-4 rounded-md mt-2"
                      onClick={() => checkInGuest(selectedRoom.roomNumber, selectedGuest)}
                    >
                      Check-In
                    </button>
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
                      onClick={() => handleGuestInfoEdit(selectedGuest)}
                    >
                      Save Guest Info
                    </button>
                  </>
                )}
              </div>
            </>
          ) : (
            <p className="text-gray-800">Select a room to view/check-in/check-out a guest.</p>
          )}
        </div>
      </div>

      {/* Reservation Management */}
      <div className="mt-6">
        <h3 className="text-lg text-gray-800 font-semibold mb-2">Reservation Management</h3>
        <ul className="space-y-2">
          {reservations.map((reservation, index) => (
            <li key={index} className="p-2 rounded-lg">
              <span className="text-gray-800 font-semibold">
                Reservation for {reservation.guestName} (Room {reservation.roomNumber})
              </span>
              <p>Check-In: {reservation.checkInDate}</p>
              <p>Check-Out: {reservation.checkOutDate}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Billing Information */}
      <div className="mt-6">
        {selectedRoom && billingInfo ? (
          <>
            <h3 className="text-lg text-gray-800 font-semibold mb-2">Billing Information</h3>
            <p>Guest Name: {billingInfo.guestName}</p>
            <p>Room Number: {billingInfo.roomNumber}</p>
            <p>Total Amount: ${billingInfo.totalAmount}</p>
            <p>Paid Amount: ${billingInfo.paidAmount}</p>
            <p>Remaining Amount: ${billingInfo.remainingAmount}</p>
            {billingInfo.remainingAmount > 0 && (
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md mt-2"
                onClick={() => handlePayment(100)} // Example payment amount, you can change this
              >
                Make Payment
              </button>
            )}
          </>
        ) : (
          <p className="text-gray-800">Select a room to view billing information.</p>
        )}
      </div>
    </div>
  );
};

export default FrontDeskOperations;
