import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  // State to store user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleRegister = (e) => {
    e.preventDefault();

    // Perform registration logic here, e.g., make an API request
    // You can use a state management library like Redux or context API for managing user authentication.

    // After successful registration, you can redirect the user to the login page.
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-5">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Register
          </button>
        </form>
        <p className="text-gray-700 mt-3">
          Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>.
        </p>
      </div>
    </div>
  );
}

export default Register;
