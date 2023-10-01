import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ITEMS_PER_PAGE = 5;

const ReservationHome = () => {
  
  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const roomTypes = [
    { id: 1, name: 'Standard Room', rate: 100 },
    { id: 2, name: 'Deluxe Room', rate: 150 },
    { id: 3, name: 'Suite', rate: 250 },
  ];
  const [selectedRoomType, setSelectedRoomType] = useState(roomTypes[0]);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

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
      roomType: selectedRoomType.name,
      numAdults,
      numChildren,
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

  const filteredReservations = reservations.filter((reservation) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      reservation.name.toLowerCase().includes(searchTermLower) ||
      reservation.checkInDate.includes(searchTermLower) ||
      reservation.checkOutDate.includes(searchTermLower) ||
      reservation.status.toLowerCase().includes(searchTermLower)
    );
  });

  const totalPageCount = Math.ceil(filteredReservations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedReservations = filteredReservations.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const calculateTotalCost = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    return selectedRoomType.rate * nights;
  };

  const maxOccupancy = 4; // Maximum occupancy per room
  const isExceedingMaxOccupancy = numAdults + numChildren > maxOccupancy;

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
          <div className="mb-4">
            <label htmlFor="roomType" className="block text-gray-100 font-semibold">
              Room Type
            </label>
            <select
              id="roomType"
              className="w-full border rounded-md py-2 px-3"
              value={selectedRoomType.id}
              onChange={(e) => {
                const roomTypeId = parseInt(e.target.value);
                setSelectedRoomType(roomTypes.find((type) => type.id === roomTypeId));
              }}
            >
              {roomTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="numAdults" className="block text-gray-100 font-semibold">
              Adults
            </label>
            <input
              type="number"
              id="numAdults"
              className="w-full border rounded-md py-2 px-3"
              value={numAdults}
              onChange={handleAdultsChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="numChildren" className="block text-gray-100 font-semibold">
              Children
            </label>
            <input
              type="number"
              id="numChildren"
              className="w-full border rounded-md py-2 px-3"
              value={numChildren}
              onChange={handleChildrenChange}
            />
          </div>
          {isExceedingMaxOccupancy && (
            <p className="text-red-500">Exceeding maximum occupancy for the room.</p>
          )}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search by name, date, or status"
          className="w-full border rounded-md py-2 px-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mt-4 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4">
          <h2 className="text-lg text-gray-100 font-semibold">Reservations</h2>
          <ul className="mt-2">
            {displayedReservations.map((reservation, index) => (
              <li key={index} className="border rounded-md p-2 mb-2">
                <strong className="text-gray-100">{reservation.name}</strong>
                <p>
                  Check-In: {reservation.checkInDate} - Check-Out: {reservation.checkOutDate}
                </p>
                <p>Status: {reservation.status}</p>
                <p>Room Type: {reservation.roomType}</p>
                <p>
                  Guests: {reservation.numAdults} Adults, {reservation.numChildren} Children
                </p>
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
        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <h2 className="text-lg text-gray-100 font-semibold">Reservation Details</h2>
          <div className="border rounded-md p-4 mt-2">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              calendarType="US"
              className="border rounded-md mt-2"
            />
            <p className="text-gray-100 mt-2">Selected Date: {selectedDate.toDateString()}</p>
            <p className="text-gray-100 mb-2">
              Rate: ${selectedRoomType.rate} per night
            </p>
            <p className="text-gray-100 mb-2">Total Cost: ${calculateTotalCost()}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <nav className="flex justify-center">
          <ul className="flex">
            {Array.from({ length: totalPageCount }).map((_, page) => (
              <li key={page} className="ml-2">
                <button
                  className={`${
                    page + 1 === currentPage
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
                  } py-2 px-3 rounded-md`}
                  onClick={() => setCurrentPage(page + 1)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ReservationHome;
