import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, Title } from "chart.js";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import { Chart } from "react-chartjs-2";
import cars_data from "../../data/cars_data.json";

// Register components
ChartJS.register(MatrixController, MatrixElement, CategoryScale, LinearScale, Tooltip, Title);

// Helper function to calculate correlation matrix
const calculateCorrelationMatrix = (data: any[], features: string[]) => {
  const matrix = features.map((f1) =>
    features.map((f2) => {
      const values1 = data.map((item) => item[f1]).filter((v) => typeof v === "number");
      const values2 = data.map((item) => item[f2]).filter((v) => typeof v === "number");

      if (values1.length !== values2.length || values1.length === 0) return 0;

      const mean1 = values1.reduce((sum, v) => sum + v, 0) / values1.length;
      const mean2 = values2.reduce((sum, v) => sum + v, 0) / values2.length;

      const numerator = values1.reduce((sum, v, i) => sum + (v - mean1) * (values2[i] - mean2), 0);
      const denominator = Math.sqrt(
        values1.reduce((sum, v) => sum + Math.pow(v - mean1, 2), 0) *
          values2.reduce((sum, v) => sum + Math.pow(v - mean2, 2), 0)
      );

      return denominator ? numerator / denominator : 0;
    })
  );

  return matrix;
};

// Extract numerical features
const numericalFeatures = ["prix", "kilometrage", "puissance_fiscale", "annee-modele"];
const correlationMatrix = calculateCorrelationMatrix(cars_data, numericalFeatures);

// Prepare data for the heatmap
const data = {
  datasets: [
    {
      label: "Correlation Matrix",
      data: correlationMatrix.flatMap((row, i) =>
        row.map((value, j) => ({
          x: numericalFeatures[j],
          y: numericalFeatures[i],
          v: value,
        }))
      ),
      backgroundColor: (context: any) => {
        const value = context.raw.v;
        const color = value > 0 ? `rgba(0, 0, 255, ${value})` : `rgba(255, 0, 0, ${Math.abs(value)})`;
        return color;
      },
      borderWidth: 1,
      width: ({ chart }: any) => chart.width / numericalFeatures.length - 10,
      height: ({ chart }: any) => chart.height / numericalFeatures.length - 10,
    },
  ],
};

// Chart options
const options = {
  scales: {
    x: {
      type: "category",
      labels: numericalFeatures,
    },
    y: {
      type: "category",
      labels: numericalFeatures,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        title: () => "",
        label: (context: any) => `Correlation: ${context.raw.v.toFixed(2)}`,
      },
    },
    title: {
      display: true,
      text: "Carte de Corrélation des Caractéristiques Numériques",
    },
  },
};

const CorrelationHeatmap: React.FC = () => {
  return (
    <div className="w-full p-2 shadow-lg rounded-md bg-white">
      <Chart type="matrix" data={data} options={options} />
    </div>
  );
};

export default CorrelationHeatmap;
