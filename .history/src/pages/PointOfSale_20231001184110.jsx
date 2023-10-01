import React, { useState } from 'react';

const PointOfSale = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Sample menu items
  const menuItems = [
    { id: 1, name: 'Burger', price: 10 },
    { id: 2, name: 'Pizza', price: 15 },
    { id: 3, name: 'Pasta', price: 12 },
    // Add more menu items here
  ];

  const addToOrder = () => {
    if (!selectedMenuItem) {
      alert('Please select a menu item.');
      return;
    }

    const orderItem = {
      menuItem: selectedMenuItem,
      quantity,
      total: selectedMenuItem.price * quantity,
    };

    setOrderItems([...orderItems, orderItem]);
    setSelectedMenuItem(null);
    setQuantity(1);
  };

  const removeOrderItem = (index) => {
    const updatedOrderItems = [...orderItems];
    updatedOrderItems.splice(index, 1);
    setOrderItems(updatedOrderItems);
  };

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + item.total, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg text-gray-800 font-semibold mb-4">Point of Sale</h2>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">Menu</h3>
        <ul className="space-y-2">
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.id}
              className={`p-2 rounded-lg ${
                selectedMenuItem && selectedMenuItem.id === menuItem.id
                  ? 'bg-blue-100'
                  : 'bg-gray-100 hover:bg-blue-100 cursor-pointer'
              }`}
              onClick={() => setSelectedMenuItem(menuItem)}
            >
              <span className="font-semibold">{menuItem.name}</span>
              <p>${menuItem.price}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">Order</h3>
        <ul className="space-y-2">
          {orderItems.map((orderItem, index) => (
            <li key={index} className="p-2 rounded-lg bg-gray-100">
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  {orderItem.menuItem.name} (x{orderItem.quantity})
                </span>
                <p>${orderItem.total}</p>
              </div>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded-md mt-2"
                onClick={() => removeOrderItem(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">Add to Order</h3>
        <div className="flex space-x-2">
          {/* Menu Item Dropdown */}
          <select
            className="w-1/2 border rounded-md py-2 px-3"
            onChange={(e) => setSelectedMenuItem(menuItems.find((item) => item.id === +e.target.value))}
            value={selectedMenuItem ? selectedMenuItem.id : ''}
          >
            <option value="">Select an item</option>
            {menuItems.map((menuItem) => (
              <option key={menuItem.id} value={menuItem.id}>
                {menuItem.name}
              </option>
            ))}
          </select>
          {/* Quantity Input */}
          <input
            type="number"
            placeholder="Quantity"
            className="w-1/4 border rounded-md py-2 px-3"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {/* Add to Order Button */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={addToOrder}
          >
            Add to Order
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg text-gray-800 font-semibold">Total</h3>
        <p className="font-semibold">${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default PointOfSale;
