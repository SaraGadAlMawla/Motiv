import React, { useState } from "react";
import heartIcon from "../assets/icons/heart.svg";
import heartFilledIcon from "../assets/icons/heartFilled.svg";
import personIcon from "../assets/icons/person.svg";
import purpRefresh from "../assets/icons/purpRefresh.svg";

function BookingCard({
  imageName,
  carName,
  price,
  bookingSub,
  pCount,
  gearType,
  heartFilled,
}) {
  const [liked, setLiked] = useState(heartFilled);
  return (
    <div className={`booking-card`}>
      <div className="booking-car-cont">
        <div className="text-cont">
          <div className="booking-title">{carName}</div>
          <div className="booking-subtitle">{bookingSub}</div>
        </div>
        <img
          src={liked ? heartFilledIcon : heartIcon}
          alt=""
          onClick={() => setLiked((old) => !old)}
          className="heart-icon"
        />
      </div>
      <img src={imageName} alt="" className="car-img" />
      <div className="details-book">
        <div className="left-book">
          <div className="icon-group">
            <img src={personIcon} alt="" />
            <div className="people-count">{pCount}</div>
          </div>
          <div className="icon-group">
            <img src={purpRefresh} alt="" />
            <div className="gear-type">{gearType}</div>
          </div>
        </div>
        <div className="right">
          <div className="booking-price">
            $<span>{price}</span>/d
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
