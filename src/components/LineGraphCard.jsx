import React from "react";

import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

function LineGraphCard() {
  const labels = ["7 am", "9 am", "11 am", "1 pm", "3 pm", "5 pm", "7 pm"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Car statistics",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: {
          target: "origin",
          above: "rgba(255, 118, 76, 0.2)",
        },
        borderColor: "#FF764C",
        tension: 0.1,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="line-graph-card">
      <p className="stat-title">
        <span className="bold-span">Car</span> statistics
      </p>
      <div className="details">
        <div className="text">20 February 2022</div>
        <div className="time-cat">
          <div className="time orange-accent">Day</div>
          <div className="time">Week</div>
          <div className="time">Month</div>
        </div>
      </div>
      <div className="line-graph-cont">
        <Line
          id="lineChart"
          className="line-graph"
          data={data}
          options={options}
        ></Line>
      </div>
    </div>
  );
}

export default LineGraphCard;
