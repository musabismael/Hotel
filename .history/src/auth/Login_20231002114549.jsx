import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  // State to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic here, e.g., make an API request
    // You can use a state management library like Redux or context API for managing user authentication.

    // After successful login, you can redirect the user to another page.
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-5">Login</h2>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <p className="text-gray-700 mt-3">
          Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>.
        </p>
      </div>
    </div>
  );
}

export default Login;
