import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  console.log("[bc] data", data);

  const chartData = {
    labels: ['Low', 'Medium', 'High', 'Critical'],
    datasets: [
      {
        label: 'Vulnerabilities',
        data: [data.Low, data.Medium, data.High, data.Critical],
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)', // Green for Low
          'rgba(59, 130, 246, 0.7)', // Blue for Medium
          'rgba(234, 179, 8, 0.7)', // Yellow for High
          'rgba(239, 68, 68, 0.7)'  // Red for Critical
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)', // Darker Green
          'rgba(59, 130, 246, 1)', // Darker Blue
          'rgba(234, 179, 8, 1)', // Darker Yellow
          'rgba(239, 68, 68, 1)'  // Darker Red
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
       display:false,
      },
      title: {
        display: true,
        text: 'Vulnerabilities by Severity'
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Remove vertical grid lines
        }
      },
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
