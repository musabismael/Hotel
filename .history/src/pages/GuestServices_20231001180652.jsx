import React, { useState } from 'react';

const GuestServices = () => {
  const [serviceRequests, setServiceRequests] = useState([]);
  const [newServiceRequest, setNewServiceRequest] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [requestDetails, setRequestDetails] = useState('');
  const [requestUrgency, setRequestUrgency] = useState('Low');

  const categories = ['All', 'Housekeeping', 'Room Service', 'Concierge', 'Maintenance'];
  const urgencies = ['Low', 'Medium', 'High'];

  const addServiceRequest = () => {
    if (newServiceRequest.trim() === '') return;

    const request = {
      id: serviceRequests.length + 1,
      category: selectedCategory,
      description: newServiceRequest,
      details: requestDetails,
      urgency: requestUrgency,
      status: 'Pending',
    };

    setServiceRequests([...serviceRequests, request]);
    setNewServiceRequest('');
    setRequestDetails('');
    setRequestUrgency('Low');
  };

  const updateServiceRequestStatus = (id, newStatus) => {
    const updatedRequests = serviceRequests.map((request) =>
      request.id === id ? { ...request, status: newStatus } : request
    );

    setServiceRequests(updatedRequests);
  };

  const deleteServiceRequest = (id) => {
    const updatedRequests = serviceRequests.filter((request) => request.id !== id);
    setServiceRequests(updatedRequests);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg text-gray-800 font-semibold mb-4">Guest Services</h2>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">Service Requests</h3>

        {/* Filter by Category */}
        <div className="flex space-x-2 mb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`${
                category === selectedCategory
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
              } py-2 px-3 rounded-md`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Request List */}
        <ul className="space-y-2">
          {serviceRequests
            .filter((request) => selectedCategory === 'All' || request.category === selectedCategory)
            .map((request) => (
              <li key={request.id} className="p-2 rounded-lg bg-gray-100">
                <span className="font-semibold">{request.description}</span>
                <p>Status: {request.status}</p>
                <p>Urgency: {request.urgency}</p>
                <p>Details: {request.details}</p>
                {request.status === 'Pending' && (
                  <div className="mt-2">
                    <button
                      className="bg-green-500 text-white py-1 px-2 rounded-md mr-2"
                      onClick={() => updateServiceRequestStatus(request.id, 'In Progress')}
                    >
                      Start
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded-md"
                      onClick={() => deleteServiceRequest(request.id)}
                    >
                      Cancel
                    </button>
                  </div>
                )}
                {request.status === 'In Progress' && (
                  <button
                    className="bg-blue-500 text-white py-1 px-2 rounded-md"
                    onClick={() => updateServiceRequestStatus(request.id, 'Completed')}
                  >
                    Mark as Completed
                  </button>
                )}
              </li>
            ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">Request New Service</h3>
        <div className="flex space-x-2">
          {/* Category Dropdown */}
          <select
            className="w-1/4 border rounded-md py-2 px-3"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* Description Input */}
          <input
            type="text"
            placeholder="Enter service request description"
            className="w-1/2 border rounded-md py-2 px-3"
            value={newServiceRequest}
            onChange={(e) => setNewServiceRequest(e.target.value)}
          />
          {/* Urgency Dropdown */}
          <select
            className="w-1/4 border rounded-md py-2 px-3"
            value={requestUrgency}
            onChange={(e) => setRequestUrgency(e.target.value)}
          >
            {urgencies.map((urgency) => (
              <option key={urgency} value={urgency}>
                {urgency}
              </option>
            ))}
          </select>
          {/* Request Button */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={addServiceRequest}
          >
            Request
          </button>
        </div>
        {/* Details Input */}
        <textarea
          placeholder="Enter additional details (optional)"
          className="w-full h-20 border rounded-md py-2 px-3 mt-2"
          value={requestDetails}
          onChange={(e) => setRequestDetails(e.target.value)}
        />
      </div>
    </div>
  );
};

export default GuestServices;
