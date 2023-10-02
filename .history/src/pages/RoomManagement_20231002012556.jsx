import React, { useState } from 'react';

const RoomManagement = () => {
  const [roomTypes, setRoomTypes] = useState([
    { id: 1, name: 'Standard Room', rate: 100, available: 10 },
    { id: 2, name: 'Deluxe Room', rate: 150, available: 5 },
    { id: 3, name: 'Suite', rate: 250, available: 2 },
  ]);

  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [newRoomType, setNewRoomType] = useState({ name: '', rate: '', available: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleRoomTypeClick = (roomType) => {
    setSelectedRoomType(roomType);
    setIsEditing(false);
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

  const handleEditRoomType = () => {
    setIsEditing(true);
  };

  const handleUpdateRoomType = () => {
    // Update the selected room type with new data
    if (selectedRoomType) {
      const updatedRoomTypes = roomTypes.map((room) =>
        room.id === selectedRoomType.id ? { ...room, ...newRoomType } : room
      );
      setRoomTypes(updatedRoomTypes);
      setSelectedRoomType(null);
      setIsEditing(false);
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
                  <span className="text-gray-800 font-semibold">{roomType.name}</span> -{' '}
                  <span className="text-gray-600">Rate: ${roomType.rate}</span> (
                  <span className="text-gray-600">Available: {roomType.available}</span>)
                </li>
              ))}
            </ul>
          </div>
          <div>
            {selectedRoomType && (
              <>
                <h3 className="text-lg text-gray-800 font-semibold mb-2">
                  {isEditing ? 'Edit Room Type' : 'Selected Room Type'}
                </h3>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Room Type Name"
                    className="w-full border rounded-md py-2 px-3"
                    value={isEditing ? newRoomType.name : selectedRoomType.name}
                    onChange={(e) => setNewRoomType({ ...newRoomType, name: e.target.value })}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    placeholder="Rate"
                    className="w-full border rounded-md py-2 px-3"
                    value={isEditing ? newRoomType.rate : selectedRoomType.rate}
                    onChange={(e) => setNewRoomType({ ...newRoomType, rate: e.target.value })}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    placeholder="Available Rooms"
                    className="w-full border rounded-md py-2 px-3"
                    value={isEditing ? newRoomType.available : selectedRoomType.available}
                    onChange={(e) =>
                      setNewRoomType({ ...newRoomType, available: e.target.value })
                    }
                    readOnly={!isEditing}
                  />
                </div>
                {isEditing ? (
                  <button
                    type="button"
                    className="bg-green-500 text-gray-800 py-2 px-4 rounded-md"
                    onClick={handleUpdateRoomType}
                  >
                    Update Room Type
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="bg-red-500 text-gray-800 py-2 px-4 rounded-md"
                      onClick={handleDeleteRoomType}
                    >
                      Delete Room Type
                    </button>
                    <button
                      type="button"
                      className="bg-blue-500 text-gray-800 py-2 px-4 rounded-md ml-2"
                      onClick={handleEditRoomType}
                    >
                      Edit Room Type
                    </button>
                  </>
                )}
              </>
            )}
            <h3 className="text-lg text-gray-800 font-semibold mt-4 mb-2">Add New Room Type</h3>
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
              className="bg-green-500 text-gray-800 py-2 px-4 rounded-md"
              onClick={handleAddRoomType}
            >
              Add Room Type
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomManagement;
