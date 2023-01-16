import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

function DonutCard({
  className,
  fillPercentage,
  title,
  labels,
  cardTitle,
  iconName,
  displayText,
  activeColor,
  passiveColor,
}) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: [fillPercentage, 100 - fillPercentage],
        backgroundColor: [activeColor, passiveColor],
        hoverOffset: 10,
        borderWidth: 0,
        borderRadius: 10,
        cutout: "85%",
        circumference: 270,
        rotation: 225,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className={`${className} donut-cont`}>
      <div className={`card-icon-cont ${title}-icon-cont`}>
        <img src={iconName} alt="" className={`card-icon ${title}-icon`} />
      </div>
      <div className={`card-title ${title}-card-title`}>{cardTitle}</div>
      <div className={`size-control ${className} donut-cont`}>
        <Doughnut options={options} data={data} />
      </div>
      <div className={`card-text ${title}-card-text`}>{displayText}</div>
    </div>
  );
}

export default DonutCard;
