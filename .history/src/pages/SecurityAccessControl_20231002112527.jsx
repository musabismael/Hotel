import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUnlock,
  faTimes,
  faCheck,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const SecurityAccessControl = () => {
  const [userList, setUserList] = useState([
    { id: 1, name: "User 1", role: "Admin", status: "Active" },
    { id: 2, name: "User 2", role: "User", status: "Active" },
    { id: 3, name: "User 3", role: "User", status: "Inactive" },
    { id: 4, name: "User 4", role: "Admin", status: "Inactive" },
  ]);

  const toggleStatus = (id) => {
    const updatedUserList = userList.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
        : user
    );
    setUserList(updatedUserList);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Security and Access Control</h2>
      <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userList.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`${
                      user.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    } font-medium`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => toggleStatus(user.id)}
                    className={`${
                      user.status === "Active"
                        ? "text-red-600 hover:text-red-800"
                        : "text-green-600 hover:text-green-800"
                    } mx-2`}
                  >
                    {user.status === "Active" ? (
                      <FontAwesomeIcon icon={faLock} />
                    ) : (
                      <FontAwesomeIcon icon={faUnlock} />
                    )}
                  </button>
                  <button
                    className="text-indigo-600 hover:text-indigo-900 mx-2"
                    title="Edit"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 mx-2"
                    title="Delete"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
          Add User
        </button>
      </div>
    </div>
  );
};

export default SecurityAccessControl;
