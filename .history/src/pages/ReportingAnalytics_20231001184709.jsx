import React, { useState } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

const ReportingAnalytics = () => {
  // Sample data (replace with your actual data)
  const [salesData, setSalesData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Data',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  });

  const [userEngagementData, setUserEngagementData] = useState({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'User Engagement',
        data: [50, 65, 70, 45, 60],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [productDistributionData, setProductDistributionData] = useState({
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 205, 86, 0.6)'],
      },
    ],
  });

  const [selectedChart, setSelectedChart] = useState('sales'); // Default selected chart

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleChartChange = (chartType) => {
    setSelectedChart(chartType);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg text-gray-800 font-semibold mb-4">Reporting and Analytics</h2>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">Select a Chart</h3>
        <div className="flex space-x-4">
          <button
            className={`${
              selectedChart === 'sales' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } py-2 px-4 rounded-md`}
            onClick={() => handleChartChange('sales')}
          >
            Sales Chart
          </button>
          <button
            className={`${
              selectedChart === 'userEngagement' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } py-2 px-4 rounded-md`}
            onClick={() => handleChartChange('userEngagement')}
          >
            User Engagement Chart
          </button>
          <button
            className={`${
              selectedChart === 'productDistribution' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } py-2 px-4 rounded-md`}
            onClick={() => handleChartChange('productDistribution')}
          >
            Product Distribution Chart
          </button>
        </div>
      </div>

      <div className="mb-4">
        {selectedChart === 'sales' && (
          <>
            <h3 className="text-lg text-gray-800 font-semibold">Sales Data Visualization</h3>
            <div className="bg-white p-4 rounded-lg shadow">
              <Bar data={salesData} options={options} />
            </div>
          </>
        )}
        {selectedChart === 'userEngagement' && (
          <>
            <h3 className="text-lg text-gray-800 font-semibold">User Engagement Data</h3>
            <div className="bg-white p-4 rounded-lg shadow">
              <Line data={userEngagementData} options={options} />
            </div>
          </>
        )}
        {selectedChart === 'productDistribution' && (
          <>
            <h3 className="text-lg text-gray-800 font-semibold">Product Distribution</h3>
            <div className="bg-white p-4 rounded-lg shadow">
              <Doughnut data={productDistributionData} options={options} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReportingAnalytics;
