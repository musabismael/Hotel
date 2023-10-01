import React, { useState } from 'react';

const RoomManagement = () => {
  const [roomTypes, setRoomTypes] = useState([
    { id: 1, name: 'Standard Room', rate: 100, available: 10 },
    { id: 2, name: 'Deluxe Room', rate: 150, available: 5 },
    { id: 3, name: 'Suite', rate: 250, available: 2 },
  ]);

  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [newRoomType, setNewRoomType] = useState({ name: '', rate: '', available: '' });

  const handleRoomTypeClick = (roomType) => {
    setSelectedRoomType(roomType);
  };

  const handleAddRoomType = () => {
    // Add a new room type to the list
    setRoomTypes([...roomTypes, newRoomType]);
    // Clear the input fields
    setNewRoomType({ name: '', rate: '', available: '' });
  };

  const handleDeleteRoomType = () => {
    // Remove the selected room type from the list
    if (selectedRoomType) {
      const updatedRoomTypes = roomTypes.filter((room) => room.id !== selectedRoomType.id);
      setRoomTypes(updatedRoomTypes);
      setSelectedRoomType(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="my-4 p-4 border rounded-lg">
        <h2 className="text-lg text-gray-800 font-semibold mb-4">Room Management</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg text-gray-800 font-semibold mb-2">Room Types</h3>
            <ul className="space-y-2">
              {roomTypes.map((roomType) => (
                <li
                  key={roomType.id}
                  className={`cursor-pointer ${
                    selectedRoomType && selectedRoomType.id === roomType.id
                      ? 'bg-blue-200'
                      : 'hover:bg-gray-100'
                  } p-2 rounded-lg`}
                  onClick={() => handleRoomTypeClick(roomType)}
                >
                  {roomType.name} - ${roomType.rate} (Available: {roomType.available})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-gray-800 font-semibold mb-2">Add New Room Type</h3>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Room Type Name"
                className="w-full border rounded-md py-2 px-3"
                value={newRoomType.name}
                onChange={(e) => setNewRoomType({ ...newRoomType, name: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                placeholder="Rate"
                className="w-full border rounded-md py-2 px-3"
                value={newRoomType.rate}
                onChange={(e) => setNewRoomType({ ...newRoomType, rate: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                placeholder="Available Rooms"
                className="w-full border rounded-md py-2 px-3"
                value={newRoomType.available}
                onChange={(e) => setNewRoomType({ ...newRoomType, available: e.target.value })}
              />
            </div>
            <button
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded-md"
              onClick={handleAddRoomType}
            >
              Add Room Type
            </button>
          </div>
        </div>
        {selectedRoomType && (
          <div className="mt-4">
            <h3 className="text-lg text-gray-800 font-semibold mb-2">Selected Room Type</h3>
            <div className="mb-2">
              <p>Name: {selectedRoomType.name}</p>
            </div>
            <div className="mb-2">
              <p>Rate: ${selectedRoomType.rate}</p>
            </div>
            <div className="mb-2">
              <p>Available: {selectedRoomType.available}</p>
            </div>
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded-md"
              onClick={handleDeleteRoomType}
            >
              Delete Room Type
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomManagement;
