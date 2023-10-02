import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const ReportingAnalytics = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const occupancyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Occupancy Trends",
        data: [70, 75, 80, 85, 90, 95],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      {/* Tabs */}
      <ul className="flex border-b">
        <li
          onClick={() => setSelectedTab("overview")}
          className={`cursor-pointer px-4 py-2 ${
            selectedTab === "overview" ? "bg-gray-200" : ""
          }`}
        >
          Overview
        </li>
        <li
          onClick={() => setSelectedTab("data")}
          className={`cursor-pointer px-4 py-2 ${
            selectedTab === "data" ? "bg-gray-200" : ""
          }`}
        >
          Data
        </li>
      </ul>

      {/* Tab Content */}
      <div className="p-4">
        {selectedTab === "overview" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview Tab</h3>
            <p>View high-level analytics here.</p>
          </div>
        )}

        {selectedTab === "data" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Tab</h3>
            <p>Explore detailed analytics data.</p>
            <div className="mt-4">
              <h4 className="text-md font-semibold">Revenue Breakdown</h4>
              {/* Add a pie chart for revenue breakdown here */}
            </div>
            <div className="mt-4">
              <h4 className="text-md font-semibold">Occupancy Trends</h4>
              <Line data={occupancyData} options={{ maintainAspectRatio: false }} />
            </div>
            <div className="mt-4">
              <h4 className="text-md font-semibold">Guest Feedback</h4>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Feedback
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Replace this with your actual feedback data */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      January 1, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Excellent service and clean rooms.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* Add actions or buttons for each feedback item */}
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      January 5, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Had some issues with room temperature.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View
                      </button>
                    </td>
                  </tr>
                  {/* Add more rows for each feedback item */}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportingAnalytics;
