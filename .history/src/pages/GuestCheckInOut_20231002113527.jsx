import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSignOutAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const GuestCheckOut = () => {
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: "Guest 1",
      roomNumber: 101,
      checkInDate: "2023-10-10",
      checkOutDate: "2023-10-15",
    },
    {
      id: 2,
      name: "Guest 2",
      roomNumber: 102,
      checkInDate: "2023-10-12",
      checkOutDate: "2023-10-14",
    },
    {
      id: 3,
      name: "Guest 3",
      roomNumber: 103,
      checkInDate: "2023-10-08",
      checkOutDate: "2023-10-18",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckOut = (id) => {
    const updatedGuests = guests.filter((guest) => guest.id !== id);
    setGuests(updatedGuests);
  };

  const filteredGuests = guests.filter((guest) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      guest.name.toLowerCase().includes(searchTermLower) ||
      guest.roomNumber.toString().includes(searchTermLower)
    );
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold">Guest Check-Out</h2>
      <div className="mt-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by name or room number"
            className="border rounded-md py-2 px-3 w-1/3 mr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Search
          </button>
        </div>
      </div>
      <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Guest Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Room Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Check-In Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Check-Out Date
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredGuests.map((guest) => (
              <tr key={guest.id}>
                <td className="px-6 py-4 whitespace-nowrap">{guest.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {guest.roomNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {guest.checkInDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {guest.checkOutDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleCheckOut(guest.id)}
                    className="text-red-600 hover:text-red-800 mx-2"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 mx-2"
                    title="Delete"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuestCheckOut;
