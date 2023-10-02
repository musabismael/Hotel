import React, { useState } from "react";

const HousekeepingMaintenance = () => {
  const [housekeepingTasks, setHousekeepingTasks] = useState([
    {
      id: 1,
      task: "Clean Room 101",
      status: "Pending",
      details: "Clean room, change sheets, vacuum.",
    },
    {
      id: 2,
      task: "Replace Towels in Room 102",
      status: "Completed",
      details: "Replace towels and toiletries.",
    },
    {
      id: 3,
      task: "Clean Lobby Area",
      status: "Pending",
      details: "Sweep, mop, and dust lobby.",
    },
  ]);

  const [maintenanceRequests, setMaintenanceRequests] = useState([
    {
      id: 1,
      request: "Fix Broken Sink in Room 103",
      status: "Pending",
      details: "Sink is leaking.",
    },
    {
      id: 2,
      request: "Replace Light Bulbs in Hallway",
      status: "In Progress",
      details: "Replace hallway light bulbs.",
    },
  ]);

  const [newTask, setNewTask] = useState({
    task: "",
    status: "Pending",
    details: "",
  });
  const [newRequest, setNewRequest] = useState({
    request: "",
    status: "Pending",
    details: "",
  });

  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [filterTaskStatus, setFilterTaskStatus] = useState("All"); // Filter by 'All', 'Pending', 'Completed'
  const [filterRequestStatus, setFilterRequestStatus] = useState("All"); // Filter by 'All', 'Pending', 'In Progress'

  const [sortTaskStatus, setSortTaskStatus] = useState("All"); // Sort by 'All', 'Pending', 'In Progress', 'Completed'
  const [sortRequestStatus, setSortRequestStatus] = useState("All"); // Sort by 'All', 'Pending', 'In Progress', 'Completed'

  const handleAddHousekeepingTask = () => {
    if (newTask.task.trim() === "") return;
    const updatedTasks = [...housekeepingTasks, newTask];
    setHousekeepingTasks(updatedTasks);
    setNewTask({ task: "", status: "Pending", details: "" });
  };

  const handleAddMaintenanceRequest = () => {
    if (newRequest.request.trim() === "") return;
    const updatedRequests = [...maintenanceRequests, newRequest];
    setMaintenanceRequests(updatedRequests);
    setNewRequest({ request: "", status: "Pending", details: "" });
  };

  const handleEditTask = () => {
    if (selectedTask) {
      const updatedTasks = housekeepingTasks.map((task) =>
        task.id === selectedTask.id ? { ...task, ...newTask } : task
      );
      setHousekeepingTasks(updatedTasks);
      setSelectedTask(null);
    }
  };

  const handleEditRequest = () => {
    if (selectedRequest) {
      const updatedRequests = maintenanceRequests.map((request) =>
        request.id === selectedRequest.id
          ? { ...request, ...newRequest }
          : request
      );
      setMaintenanceRequests(updatedRequests);
      setSelectedRequest(null);
    }
  };

  const handleClearSelection = () => {
    setSelectedTask(null);
    setSelectedRequest(null);
  };

  const handleTaskStatusChange = (id, newStatus) => {
    const updatedTasks = housekeepingTasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setHousekeepingTasks(updatedTasks);
  };

  const handleRequestStatusChange = (id, newStatus) => {
    const updatedRequests = maintenanceRequests.map((request) =>
      request.id === id ? { ...request, status: newStatus } : request
    );
    setMaintenanceRequests(updatedRequests);
  };

  const sortTasks = (tasks, status) => {
    if (status === "All") return tasks;
    return tasks.filter((task) => task.status === status);
  };

  const sortRequests = (requests, status) => {
    if (status === "All") return requests;
    return requests.filter((request) => request.status === status);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="my-4 p-4 border rounded-lg">
        <h2 className="text-lg text-gray-800 font-semibold mb-4">
          Housekeeping and Maintenance
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg text-gray-800 font-semibold mb-2">
              Housekeeping Tasks
            </h3>
            <div className="mb-2">
              <label htmlFor="filterTaskStatus" className="text-white">
                Filter by Status:
              </label>
              <select
                id="filterTaskStatus"
                className="w-full border rounded-md py-2 px-3"
                value={filterTaskStatus}
                onChange={(e) => setFilterTaskStatus(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="sortTaskStatus" className="text-white">
                Sort by Status:
              </label>
              <select
                id="sortTaskStatus"
                className="w-full border rounded-md py-2 px-3"
                value={sortTaskStatus}
                onChange={(e) => setSortTaskStatus(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <ul className="space-y-2">
              {sortTasks(housekeepingTasks, sortTaskStatus).map((task) => (
                <li
                  key={task.id}
                  className={`p-2 rounded-lg ${
                    task.status === "Completed"
                      ? "bg-green-200"
                      : "bg-yellow-200"
                  }`}
                  onClick={() => setSelectedTask(task)}
                >
                  <span className="text-gray-800 font-semibold">
                    {task.task}
                  </span>{" "}
                  ({task.status})
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add Housekeeping Task"
                className="w-full border rounded-md py-2 px-3"
                value={newTask.task}
                onChange={(e) =>
                  setNewTask({ ...newTask, task: e.target.value })
                }
              />
              <textarea
                placeholder="Task Details"
                className="w-full h-20 border rounded-md py-2 px-3 mt-2"
                value={newTask.details}
                onChange={(e) =>
                  setNewTask({ ...newTask, details: e.target.value })
                }
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
                onClick={
                  selectedTask ? handleEditTask : handleAddHousekeepingTask
                }
              >
                {selectedTask ? "Edit Task" : "Add Task"}
              </button>
              {selectedTask && (
                <button
                  className="bg-gray-500 text-white py-2 px-4 rounded-md mt-2 ml-2"
                  onClick={handleClearSelection}
                >
                  Clear Selection
                </button>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-2">
              Maintenance Requests
            </h3>
            <div className="mb-2">
              <label htmlFor="filterRequestStatus" className="text-white">
                Filter by Status:
              </label>
              <select
                id="filterRequestStatus"
                className="w-full border rounded-md py-2 px-3"
                value={filterRequestStatus}
                onChange={(e) => setFilterRequestStatus(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>
            <ul className="space-y-2">
              {sortRequests(maintenanceRequests, sortRequestStatus).map(
                (request) => (
                  <li
                    key={request.id}
                    className={`p-2 rounded-lg ${
                      request.status === "In Progress"
                        ? "bg-blue-200"
                        : "bg-yellow-200"
                    }`}
                    onClick={() => setSelectedRequest(request)}
                  >
                    <span className="text-gray-800 font-semibold">
                      {request.request}
                    </span>{" "}
                    ({request.status})
                  </li>
                )
              )}
            </ul>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add Maintenance Request"
                className="w-full border rounded-md py-2 px-3"
                value={newRequest.request}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, request: e.target.value })
                }
              />
              <textarea
                placeholder="Request Details"
                className="w-full h-20 border rounded-md py-2 px-3 mt-2"
                value={newRequest.details}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, details: e.target.value })
                }
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
                onClick={
                  selectedRequest
                    ? handleEditRequest
                    : handleAddMaintenanceRequest
                }
              >
                {selectedRequest ? "Edit Request" : "Add Request"}
              </button>
              {selectedRequest && (
                <button
                  className="bg-gray-500 text-white py-2 px-4 rounded-md mt-2 ml-2"
                  onClick={handleClearSelection}
                >
                  Clear Selection
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 p-4 border rounded-lg">
        {selectedTask && (
          <>
            <h3 className="text-lg text-white font-semibold mb-2">
              Task Details
            </h3>
            <div className="mb-2">
              <p>Task: {selectedTask.task}</p>
            </div>
            <div className="mb-2">
              <p>Status: {selectedTask.status}</p>
            </div>
            <div className="mb-2">
              <p>Details: {selectedTask.details}</p>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2"
                onClick={() =>
                  handleTaskStatusChange(selectedTask.id, "In Progress")
                }
              >
                Start Work
              </button>
              <button
                className="bg-green-500 text-white py-1 px-2 rounded-md mr-2"
                onClick={() =>
                  handleTaskStatusChange(selectedTask.id, "Completed")
                }
              >
                Mark as Completed
              </button>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded-md"
                onClick={() =>
                  handleTaskStatusChange(selectedTask.id, "Cancelled")
                }
              >
                Cancel
              </button>
            </div>
          </>
        )}
        {selectedRequest && (
          <>
            <h3 className="text-lg text-white font-semibold mb-2">
              Request Details
            </h3>
            <div className="mb-2">
              <p>Request: {selectedRequest.request}</p>
            </div>
            <div className="mb-2">
              <p>Status: {selectedRequest.status}</p>
            </div>
            <div className="mb-2">
              <p>Details: {selectedRequest.details}</p>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2"
                onClick={() =>
                  handleRequestStatusChange(selectedRequest.id, "In Progress")
                }
              >
                Start Work
              </button>
              <button
                className="bg-green-500 text-white py-1 px-2 rounded-md mr-2"
                onClick={() =>
                  handleRequestStatusChange(selectedRequest.id, "Completed")
                }
              >
                Mark as Completed
              </button>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded-md"
                onClick={() =>
                  handleRequestStatusChange(selectedRequest.id, "Cancelled")
                }
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HousekeepingMaintenance;
