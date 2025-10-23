import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ProgressChart({ logs }) {
  // Prepare data for the chart
  const labels = logs.map(log => log.date);
  const mealsData = logs.map(log => log.meals.length);
  const exercisesData = logs.map(log => log.exercises.length);
  const waterData = logs.map(log => parseFloat(log.water));

  const data = {
    labels,
    datasets: [
      {
        label: "Meals",
        data: mealsData,
        backgroundColor: "rgba(75, 192, 192, 0.6)"
      },
      {
        label: "Exercises",
        data: exercisesData,
        backgroundColor: "rgba(255, 159, 64, 0.6)"
      },
      {
        label: "Water (L)",
        data: waterData,
        backgroundColor: "rgba(153, 102, 255, 0.6)"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Weekly Health Progress"
      }
    }
  };

  return <Bar data={data} options={options} />;
}

export default ProgressChart;
