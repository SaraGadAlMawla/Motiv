import React from "react";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarGraphCard() {
  const data = {
    labels: ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],
    datasets: [
      {
        label: "Miles",
        data: [150000, 105000, 157000, 110000, 147000, 120000, 146000],
        backgroundColor: "#F4F5F9",
        barHoverBackgroundColor: "#2884FF",
        borderColor: "black",
        borderWidth: 0,
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
    <div className="bar-graph-card">
      <p className="stat-title">
        <span className="bold-span">Miles</span> statistics
      </p>
      <div className="details">
        <div className="time-cat">
          <div className="time blue-accent">Day</div>
          <div className="time">Week</div>
          <div className="time">Month</div>
        </div>
        <div className="text">256 Miles</div>
      </div>
      <div className="bar-graph-cont">
        <Bar className="barGraph" data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default BarGraphCard;
