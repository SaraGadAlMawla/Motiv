import React from "react";
import energyIcon from "../assets/icons/energy.svg";
import rangeIcon from "../assets/icons/range.svg";
import fluidIcon from "../assets/icons/fluid.svg";
import tireIcon from "../assets/icons/tire.svg";
import silverCar from "../assets/pics/miniCooper.png";
import whiteCar from "../assets/pics/porsche911.png";
import redCar from "../assets/pics/redPorsche911.png";

import DonutCard from "./DonutCard";
import BarGraphCard from "./BarGraphCard";
import LineGraphCard from "./LineGraphCard";
import CarRecCard from "./CarRecCard";

function Dashboard() {
  return (
    <div className="outlet flex-center">
      <div className="dashboard">
        <DonutCard
          className="donut1-cont"
          labels={["Energy remaining", "Energy used"]}
          title="Energy"
          fillPercentage={45}
          cardTitle="Energy"
          iconName={energyIcon}
          displayText="45%"
          activeColor="#FFFFFF"
          passiveColor="#B37EFC"
        />
        <DonutCard
          className="donut2-cont"
          labels={["Range used", "limit"]}
          title="Range"
          fillPercentage={60}
          cardTitle="Range"
          iconName={rangeIcon}
          displayText="157K%"
          activeColor="#FF7E86"
          passiveColor="#F4F5F9"
        />
        <DonutCard
          className="donut3-cont"
          labels={["Break fluid used", "remaining"]}
          title="Break"
          fillPercentage={9}
          cardTitle="Break fluid"
          iconName={fluidIcon}
          displayText="9%"
          activeColor="#A162F7"
          passiveColor="#F4F5F9"
        />
        <DonutCard
          className="donut4-cont"
          labels={["Time passed", "Time before repair"]}
          title="Tire"
          fillPercentage={25}
          cardTitle="Tire wear"
          iconName={tireIcon}
          displayText="25%"
          activeColor="#f6cc0d"
          passiveColor="#F4F5F9"
        />
        <BarGraphCard />
        <LineGraphCard />
        <CarRecCard
          carName="Mini Cooper"
          className="rec1"
          imageName={silverCar}
          kVotes={132}
          price={32}
          recText="64% Recommend"
        />
        <CarRecCard
          carName="Porsche 911 Carrera"
          className="rec2"
          imageName={whiteCar}
          kVotes={130}
          price={28}
          recText="74% Recommend"
        />
        <CarRecCard
          carName="Porsche 911 Carrera"
          className="rec3"
          imageName={redCar}
          kVotes={130}
          price={28}
          recText="74% Recommend"
        />
      </div>
    </div>
  );
}

export default Dashboard;
