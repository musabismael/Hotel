import React, { useState } from 'react';

const InventoryManagement = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showLowStock, setShowLowStock] = useState(false);

  const addInventoryItem = () => {
    if (!newItemName || isNaN(newItemQuantity) || newItemQuantity <= 0) {
      alert('Please enter a valid item name and quantity.');
      return;
    }

    const newItem = {
      id: Date.now(),
      name: newItemName,
      quantity: parseInt(newItemQuantity),
    };

    setInventoryItems([...inventoryItems, newItem]);
    setNewItemName('');
    setNewItemQuantity('');
  };

  const deleteInventoryItem = (id) => {
    const updatedInventory = inventoryItems.filter((item) => item.id !== id);
    setInventoryItems(updatedInventory);
    setSelectedItemId(null); // Clear the selected item after deletion
  };

  const editInventoryItem = () => {
    if (!newItemName || isNaN(newItemQuantity) || newItemQuantity <= 0) {
      alert('Please enter a valid item name and quantity.');
      return;
    }

    const updatedItems = inventoryItems.map((item) =>
      item.id === selectedItemId
        ? { ...item, name: newItemName, quantity: parseInt(newItemQuantity) }
        : item
    );

    setInventoryItems(updatedItems);
    setNewItemName('');
    setNewItemQuantity('');
    setSelectedItemId(null); // Clear the selected item after editing
  };

  const toggleShowLowStock = () => {
    setShowLowStock(!showLowStock);
  };

  const totalQuantity = inventoryItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg text-gray-800 font-semibold mb-4">Inventory Management</h2>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">Inventory Items</h3>
        <div className="flex items-center space-x-2 mb-2">
          {/* Show Low Stock Toggle */}
          <button
            className={`${
              showLowStock
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
            } py-2 px-3 rounded-md`}
            onClick={toggleShowLowStock}
          >
            {showLowStock ? 'Hide Low Stock' : 'Show Low Stock'}
          </button>
          {/* Total Quantity */}
          <p className="text-gray-800 font-semibold">Total Quantity: {totalQuantity}</p>
        </div>
        <ul className="space-y-2">
          {inventoryItems
            .filter((item) => !showLowStock || item.quantity < 10)
            .map((item) => (
              <li key={item.id} className="p-2 rounded-lg bg-gray-100">
                {selectedItemId === item.id ? (
                  <div className="flex space-x-2">
                    {/* Edit Item Name */}
                    <input
                      type="text"
                      placeholder="Enter item name"
                      className="w-1/2 border rounded-md py-2 px-3"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                    />
                    {/* Edit Item Quantity */}
                    <input
                      type="number"
                      placeholder="Enter quantity"
                      className="w-1/4 border rounded-md py-2 px-3"
                      value={newItemQuantity}
                      onChange={(e) => setNewItemQuantity(e.target.value)}
                    />
                    {/* Save Edit */}
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-md"
                      onClick={editInventoryItem}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{item.name}</span>
                    <span className={`text-${item.quantity < 10 ? 'red' : 'gray'}-500`}>
                      Quantity: {item.quantity}
                    </span>
                  </div>
                )}
                <div>
                  <button
                    className="bg-yellow-500 text-white py-1 px-2 rounded-md mr-2"
                    onClick={() => setSelectedItemId(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded-md"
                    onClick={() => deleteInventoryItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">
          {selectedItemId ? 'Edit' : 'Add'} Inventory Item
        </h3>
        <div className="flex space-x-2">
          {/* Item Name Input */}
          <input
            type="text"
            placeholder="Enter item name"
            className="w-1/2 border rounded-md py-2 px-3"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          {/* Item Quantity Input */}
          <input
            type="number"
            placeholder="Enter quantity"
            className="w-1/4 border rounded-md py-2 px-3"
            value={newItemQuantity}
            onChange={(e) => setNewItemQuantity(e.target.value)}
          />
          {selectedItemId ? (
            <></>
          ) : (
            /* Add Button */
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={addInventoryItem}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
