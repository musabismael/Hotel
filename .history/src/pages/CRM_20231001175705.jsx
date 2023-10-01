import React, { useState, useEffect } from 'react';

const CRMPage = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('All');
  const [sortCriteria, setSortCriteria] = useState('Name');

  useEffect(() => {
    // Simulate fetching customer data from an API
    // In a real application, you would make an API call here
    const initialCustomers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
      // Add more customer data as needed
    ];

    setCustomers(initialCustomers);
  }, []);

  const addCustomer = () => {
    // Add a new customer to the customers array
    setCustomers([...customers, newCustomer]);
    // Clear the form fields after adding a customer
    setNewCustomer({ name: '', email: '', phone: '' });
  };

  const editCustomer = (index, updatedCustomer) => {
    // Update an existing customer's information
    const updatedCustomers = [...customers];
    updatedCustomers[index] = updatedCustomer;
    setCustomers(updatedCustomers);
    // Clear the selected customer after editing
    setSelectedCustomer(null);
  };

  const deleteCustomer = (index) => {
    // Delete a customer from the customers array
    const updatedCustomers = [...customers];
    updatedCustomers.splice(index, 1);
    setCustomers(updatedCustomers);
    // Clear the selected customer after deletion
    setSelectedCustomer(null);
  };

  // Filter and sort the customer list based on search and filter criteria
  const filteredCustomers = customers.filter((customer) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      customer.name.toLowerCase().includes(searchTermLower) ||
      customer.email.toLowerCase().includes(searchTermLower) ||
      customer.phone.includes(searchTermLower)
    );
  });

  const sortedCustomers = filteredCustomers.sort((a, b) => {
    if (sortCriteria === 'Name') {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === 'Email') {
      return a.email.localeCompare(b.email);
    } else if (sortCriteria === 'Phone') {
      return a.phone.localeCompare(b.phone);
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg text-gray-800 font-semibold mb-4">Customer Relationship Management (CRM)</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Customer List */}
        <div>
          <h3 className="text-lg text-gray-800 font-semibold mb-2">Customer List</h3>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Search by name, email, or phone"
              className="w-full border rounded-md py-2 px-3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="filterCriteria" className="text-gray-800">
              Filter by:
            </label>
            <select
              id="filterCriteria"
              className="w-full border rounded-md py-2 px-3"
              value={filterCriteria}
              onChange={(e) => setFilterCriteria(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Name">Name</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="sortCriteria" className="text-gray-800">
              Sort by:
            </label>
            <select
              id="sortCriteria"
              className="w-full border rounded-md py-2 px-3"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option value="Name">Name</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
          </div>
          <ul className="space-y-2">
            {sortedCustomers.map((customer, index) => (
              <li
                key={index}
                className={`p-2 rounded-lg ${selectedCustomer === customer ? 'bg-blue-200' : 'bg-yellow-200'}`}
                onClick={() => setSelectedCustomer(customer)}
              >
                <span className="text-gray-800 font-semibold">{customer.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Details */}
        <div>
          {selectedCustomer ? (
            <>
              <h3 className="text-lg text-gray-800 font-semibold mb-2">Customer Details</h3>
              <div className="mb-2">
                <p>Name: {selectedCustomer.name}</p>
              </div>
              <div className="mb-2">
                <p>Email: {selectedCustomer.email}</p>
              </div>
              <div className="mb-2">
                <p>Phone: {selectedCustomer.phone}</p>
              </div>
              <div className="mt-4">
                {/* Add/Edit Customer Form */}
                <h4 className="text-lg text-gray-800 font-semibold mb-2">
                  {selectedCustomer ? 'Edit Customer' : 'Add Customer'}
                </h4>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border rounded-md py-2 px-3 mb-2"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-md py-2 px-3 mb-2"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border rounded-md py-2 px-3 mb-2"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                />
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
                  onClick={selectedCustomer ? () => editCustomer(customers.indexOf(selectedCustomer), newCustomer) : addCustomer}
                >
                  {selectedCustomer ? 'Save Changes' : 'Add Customer'}
                </button>
                {selectedCustomer && (
                  <button
                    className="bg-gray-500 text-white py-2 px-4 rounded-md mt-2 ml-2"
                    onClick={() => setSelectedCustomer(null)}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </>
          ) : (
            <p className="text-gray-800">Select a customer to view/edit details or add a new customer.</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md"
          onClick={() => deleteCustomer(customers.indexOf(selectedCustomer))}
          disabled={!selectedCustomer}
        >
          Delete Selected Customer
        </button>
      </div>
    </div>
  );
};

export default CRMPage;
