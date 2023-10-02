import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCheck,
  faTimes,
  faUser,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReservationHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: 'John Doe',
      roomNumber: 101,
      checkInDate: '2023-10-10',
      checkOutDate: '2023-10-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      roomNumber: 102,
      checkInDate: '2023-10-12',
      checkOutDate: '2023-10-14',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      roomNumber: 103,
      checkInDate: '2023-10-08',
      checkOutDate: '2023-10-18',
    },
  ]);

  const handleSearch = () => {
    // Handle search logic here
  };

  return (
    <div>
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Search by name, room number, or date"
          className="border rounded-md py-2 px-3 w-1/3 mr-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          Search
        </button>
      </div>
      <div className="mt-4 flex">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold">Reservations</h2>
          <ul className="mt-2">
            {guests.map((guest) => (
              <li
                key={guest.id}
                className="border rounded-md p-4 mb-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">{guest.name}</h3>
                  <p>
                    Room Number: {guest.roomNumber}
                  </p>
                  <p>
                    Check-In: {guest.checkInDate} - Check-Out: {guest.checkOutDate}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    className="text-green-500 hover:text-green-600"
                    onClick={() => handleCheckIn(guest.id)}
                  >
                    <FontAwesomeIcon icon={faCheck} className="mr-1" />
                    Check In
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600 ml-4"
                    onClick={() => handleCheckOut(guest.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="mr-1" />
                    Check Out
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 ml-8">
          <h2 className="text-2xl font-semibold">Reservation Details</h2>
          <div className="border rounded-md p-4 mt-2">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              calendarType="US"
              className="border rounded-md mt-2"
            />
            <p className="text-gray-700 mt-2">
              Selected Date: {selectedDate.toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationHome;
