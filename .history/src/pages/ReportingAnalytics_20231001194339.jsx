import React, { useState, useEffect } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2'; // Import Chart from 'react-chartjs-2'

// Define your chartData object with sample data
const chartData = {
  sales: {
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
  },
  userEngagement: {
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
  },
  productDistribution: {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 205, 86, 0.6)'],
      },
    ],
  },
};

const ReportingAnalytics = () => {
  const [selectedChart, setSelectedChart] = useState('sales');
  const [selectedDataLabel, setSelectedDataLabel] = useState('');
  const [selectedData, setSelectedData] = useState([]);
  const [showDataTable, setShowDataTable] = useState(false);
  const [chartInstance, setChartInstance] = useState(null); // Reference to the chart instance

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    // When the selected chart changes, destroy the previous chart if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create a new chart based on the selected chart type
    let newChart;
    if (selectedChart === 'sales') {
      newChart = new Chart(document.getElementById('chart'), { // Use Chart from 'react-chartjs-2'
        type: 'bar',
        data: chartData.sales,
        options: options,
      });
    } else if (selectedChart === 'userEngagement') {
      newChart = new Chart(document.getElementById('chart'), { // Use Chart from 'react-chartjs-2'
        type: 'line',
        data: chartData.userEngagement,
        options: options,
      });
    } else if (selectedChart === 'productDistribution') {
      newChart = new Chart(document.getElementById('chart'), { // Use Chart from 'react-chartjs-2'
        type: 'doughnut',
        data: chartData.productDistribution,
        options: options,
      });
    }

    // Set the new chart instance
    setChartInstance(newChart);

    // Clean up the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [selectedChart]);

  const handleChartChange = (chartType) => {
    setSelectedChart(chartType);
    setSelectedDataLabel('');
    setSelectedData([]);
    setShowDataTable(false);
  };

  const handleDataPointClick = (event, elements) => {
    if (elements.length > 0) {
      const chart = elements[0]._chart;
      const datasetIndex = elements[0]._datasetIndex;
      const dataIndex = elements[0]._index;
      const label = chart.data.labels[dataIndex];
      const value = chart.data.datasets[datasetIndex].data[dataIndex];
      setSelectedDataLabel(label);
      setSelectedData([{ label, value }]);
      setShowDataTable(true);
    }
  };

  const resetDataSelection = () => {
    setSelectedDataLabel('');
    setSelectedData([]);
    setShowDataTable(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg text-gray-800 font-semibold mb-4">Reporting and Analytics</h2>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">Select a Chart</h3>
        <div className="flex space-x-4">
          {Object.keys(chartData).map((chartType) => (
            <button
              key={chartType}
              className={`${
                selectedChart === chartType ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } py-2 px-4 rounded-md`}
              onClick={() => handleChartChange(chartType)}
            >
              {chartType.charAt(0).toUpperCase() + chartType.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg text-gray-800 font-semibold">
          {selectedChart.charAt(0).toUpperCase() + selectedChart.slice(1)} Data Visualization
        </h3>
        <div className="bg-white p-4 rounded-lg shadow">
          <canvas id="chart"></canvas> {/* This is where the chart will be rendered */}
        </div>
      </div>

      {showDataTable && (
        <div className="mb-4">
          <h3 className="text-lg text-gray-800 font-semibold">Selected Data</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md mb-2"
              onClick={resetDataSelection}
            >
              Clear Selection
            </button>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border py-2 px-4">Label</th>
                  <th className="border py-2 px-4">Value</th>
                </tr>
              </thead>
              <tbody>
                {selectedData.map((data, index) => (
                  <tr key={index}>
                    <td className="border py-2 px-4">{data.label}</td>
                    <td className="border py-2 px-4">{data.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportingAnalytics;
