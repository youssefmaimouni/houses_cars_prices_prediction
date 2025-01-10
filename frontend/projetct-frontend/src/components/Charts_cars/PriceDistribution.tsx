import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import cars_data from "../../data/cars_data.json";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define the interface for car objects
interface Car {
  marque: string;
  modele: string;
  annee_modele: number;
  kilometrage: number;
  type_de_carburant: string;
  puissance_fiscale: number;
  boite_de_vitesses: string;
  nombre_de_portes: number;
  origine: string;
  premiere_main: number;
  etat: string;
  airbags: number;
  climatisation: number;
  abs: number;
  esp: number;
  cd_mp3_bluetooth: number;
  prix: number;
}

// Cast JSON data to the correct type
const cars: Car[] = cars_data as Car[];

// Extract car prices
const prices = cars.map((car) => car.prix);

// Group prices into bins
const createPriceBins = (data: number[], binSize: number) => {
  const maxPrice = Math.max(...data);
  const bins: number[] = Array(Math.ceil(maxPrice / binSize)).fill(0);

  data.forEach((price) => {
    const binIndex = Math.floor(price / binSize);
    bins[binIndex] += 1;
  });

  return bins;
};

const binSize = 10000;
let bins = createPriceBins(prices, binSize);
let labels = bins.map((_, index) => `${index * binSize}-${(index + 1) * binSize} MAD`);

// Remove leading bins with a frequency of 0
const startIndex = bins.findIndex((count) => count > 0);
bins = bins.slice(startIndex);
labels = labels.slice(startIndex);

const data = {
  labels,
  datasets: [
    {
      label: "Fréquence",
      data: bins,
      backgroundColor: "#3C50E0",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Distribution des prix",
      font: { size: 18 },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Prix (MAD)",
      },
    },
    y: {
      title: {
        display: true,
        text: "Fréquence",
      },
    },
  },
};

const PriceDistribution: React.FC = () => {
  return (
    <div className="w-full p-2 shadow-lg rounded-md bg-white">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PriceDistribution;
