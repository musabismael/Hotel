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

  const handleAdultsChange = (e) => {
    const newNumAdults = parseInt(e.target.value);
    if (!isNaN(newNumAdults) && newNumAdults >= 0) {
      setNumAdults(newNumAdults);
    }
  };

  const handleChildrenChange = (e) => {
    const newNumChildren = parseInt(e.target.value);
    if (!isNaN(newNumChildren) && newNumChildren >= 0) {
      setNumChildren(newNumChildren);
    }
  };

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
      id: new Date().getTime(), // Generate a unique ID
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

  const deleteReservation = (id) => {
    const updatedReservations = reservations.filter((reservation) => reservation.id !== id);
    setReservations(updatedReservations);
  };

  const updateReservationStatus = (id, newStatus) => {
    const updatedReservations = reservations.map((reservation) => {
      if (reservation.id === id) {
        return { ...reservation, status: newStatus };
      }
      return reservation;
    });
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
          {/* ... (previous form fields) */}
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
          {/* ... (previous form elements) */}
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
        {/* ... (previous reservation list) */}
        {/* Add more features here */}
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
