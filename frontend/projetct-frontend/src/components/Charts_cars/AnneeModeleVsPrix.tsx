import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import cars_data from "../../data/cars_data.json";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

// Define the interface for car objects
interface Car {
  marque: string;
  modele: string;
  annee_modele: number;
  kilometrage: number;
  prix: number;
}

// Cast JSON data to the correct type
const cars: Car[] = cars_data as Car[];

// Function to group data by "annee-modele" and calculate box plot statistics
const calculateBoxPlotData = (data: Car[]) => {
  const grouped: { [annee: number]: number[] } = {};

  data.forEach((car) => {
    if (!grouped[car.annee_modele]) {
      grouped[car.annee_modele] = [];
    }
    grouped[car.annee_modele].push(car.prix);
  });

  return Object.entries(grouped).map(([annee, prices]) => {
    prices.sort((a, b) => a - b);

    const min = prices[0];
    const max = prices[prices.length - 1];
    const median = prices[Math.floor(prices.length / 2)];
    const q1 = prices[Math.floor(prices.length / 4)];
    const q3 = prices[Math.floor((3 * prices.length) / 4)];

    return { annee: Number(annee), min, q1, median, q3, max };
  });
};

const boxPlotData = calculateBoxPlotData(cars);

// Prepare Chart.js data
const data = {
  labels: boxPlotData.map((item) => item.annee.toString()),
  datasets: [
    {
      label: "Min",
      data: boxPlotData.map((item) => ({ x: item.annee, y: item.min })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Q1",
      data: boxPlotData.map((item) => ({ x: item.annee, y: item.q1 })),
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    {
      label: "Median",
      data: boxPlotData.map((item) => ({ x: item.annee, y: item.median })),
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Q3",
      data: boxPlotData.map((item) => ({ x: item.annee, y: item.q3 })),
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
    {
      label: "Max",
      data: boxPlotData.map((item) => ({ x: item.annee, y: item.max })),
      backgroundColor: "rgba(153, 102, 255, 0.5)",
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Année-Modele vs Prix (Box Plot)",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Année-Modele",
      },
    },
    y: {
      title: {
        display: true,
        text: "Prix",
      },
    },
  },
};

const AnneeModeleVsPrix: React.FC = () => {
  return (
    <div className="w-full p-2 shadow-lg rounded-md bg-white">
      <Scatter data={data} options={options} />
    </div>
  );
};

export default AnneeModeleVsPrix;
