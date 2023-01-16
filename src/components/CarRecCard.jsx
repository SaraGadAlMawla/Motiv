import React from "react";
import circleRefresh from "../assets/icons/circRefresh.svg";
import squareRefresh from "../assets/icons/sqrRefresh.svg";
import add from "../assets/icons/weirdAdd.svg";
import energy from "../assets/icons/energyNotFilled.svg";

function CarRecCard({ className, imageName, recText, carName, kVotes, price }) {
  return (
    <div className={`car-rec-card ${className}`}>
      <div className="rec-percentage-cont">
        <img src={circleRefresh} alt="" className="refresh-icon-c" />
        <div className="rec-text">{recText}</div>
      </div>
      <img src={imageName} alt="" className="car-img" />
      <h3 className="car-name">{carName}</h3>
      <div className="details-rec">
        <div className="left">
          <img src={squareRefresh} alt="" className="sqr-refresh-icon" />
          <div className="votes">{kVotes}</div>
          <img src={add} alt="" />
          <img src={energy} alt="" />
        </div>
        <div className="right">
          <div className="price">${price}/h</div>
        </div>
      </div>
    </div>
  );
}

export default CarRecCard;
