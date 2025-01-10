import React from 'react';
import { Chart as ChartJS, Tooltip, Legend, Title, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary Chart.js components
ChartJS.register(LinearScale, BarElement, Tooltip, Legend, Title);

// Sample data for correlation matrix (you can compute this using pandas or any other method)
const correlationMatrix = [
  [1, 0.2, -0.3, 0.4],
  [0.2, 1, 0.5, -0.6],
  [-0.3, 0.5, 1, 0.7],
  [0.4, -0.6, 0.7, 1]
];

const labels = ['prix', 'kilometrage', 'puissance_fiscale', 'annee-modele'];

// Convert correlation matrix into a data structure suitable for a chart
const data = {
  labels: labels,
  datasets: correlationMatrix.map((row, rowIndex) => ({
    label: labels[rowIndex],
    data: row,
    backgroundColor: row.map(value => {
      // Map correlation values to colors (this is a simplified version)
      if (value >= 0.7) return '#FF5733'; // Strong positive correlation
      if (value <= -0.7) return '#33C1FF'; // Strong negative correlation
      return '#D3D3D3'; // Neutral correlation
    }),
    borderColor: 'white',
    borderWidth: 1,
  }))
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Carte de Corrélation des Caractéristiques Numériques',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `${tooltipItem.raw} (correlation)`;
        },
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const CorrelationMatrixChart: React.FC = () => {
  return (
    <div className="w-full p-2 shadow-lg rounded-md bg-white">
      <Bar data={data} options={options} />
    </div>
  );
};

export default CorrelationMatrixChart;
