import React, { useState, useEffect } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

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

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    return () => {
      // Clean up any resources here if needed
    };
  }, []);

  const handleChartChange = (chartType) => {
    setSelectedChart(chartType);
    setSelectedDataLabel('');
    setSelectedData([]);
    setShowDataTable(false);
  };

  const handleDataPointClick = (event, elements) => {
    if (elements.length > 0) {
      const element = elements[0];
      const dataset = chartData[selectedChart].datasets[element.datasetIndex];
      const label = dataset.label;
      const value = dataset.data[element.index];
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

  let chartComponent;

  if (selectedChart === 'sales') {
    chartComponent = <Bar data={chartData.sales} options={options} />;
  } else if (selectedChart === 'userEngagement') {
    chartComponent = <Line data={chartData.userEngagement} options={options} />;
  } else if (selectedChart === 'productDistribution') {
    chartComponent = <Doughnut data={chartData.productDistribution} options={options} />;
  }

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
          {chartComponent}
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
