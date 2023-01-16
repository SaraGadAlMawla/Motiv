import React from "react";
import downIcon from "../assets/icons/downward.svg";
import dashboardIcon from "../assets/icons/dashboard.svg";
import settingsIcon from "../assets/icons/settings2.svg";
import bookingCar1 from "../assets/pics/bookingCar1.png";
import bookingCar2 from "../assets/pics/bookingCar2.png";
import bookingCar3 from "../assets/pics/bookingCar3.png";
import bookingCar4 from "../assets/pics/bookingCar4.png";
import bookingCar5 from "../assets/pics/bookingCar5.png";
import bookingCar6 from "../assets/pics/bookingCar6.png";
import BookingCard from "./bookingCard";

function Booking() {
  return (
    <div className="outlet booking">
      <div className="title-text">Booking</div>
      <div className="options">
        <div className="left">
          <div className="pillet">
            <div className="pillet-text">New</div>
            <img src={downIcon} alt="" className="down-icon" />
          </div>
          <div className="pillet">
            <div className="pillet-text">Toyota</div>
            <img src={downIcon} alt="" className="down-icon" />
          </div>
        </div>
        <div className="right">
          <div className="option basic-option">
            <img src={dashboardIcon} alt="" />
          </div>

          <div className="option purple-option">
            <img src={settingsIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="booking-grid">
        <BookingCard
          carName="Porshe 718 Cayman S"
          bookingSub="Coupe"
          gearType="Manual"
          imageName={bookingCar1}
          heartFilled={false}
          pCount={4}
          price={400}
        />
        <BookingCard
          carName="Porshe 718 Cayman S"
          bookingSub="Coupe"
          gearType="Manual"
          imageName={bookingCar2}
          heartFilled={true}
          pCount={4}
          price={400}
        />
        <BookingCard
          carName="Porshe 718 Cayman S"
          bookingSub="Coupe"
          gearType="Manual"
          imageName={bookingCar3}
          heartFilled={false}
          pCount={4}
          price={400}
        />
        <BookingCard
          carName="Porshe 718 Cayman S"
          bookingSub="Coupe"
          gearType="Manual"
          imageName={bookingCar4}
          heartFilled={false}
          pCount={4}
          price={400}
        />
        <BookingCard
          carName="Porshe 718 Cayman S"
          bookingSub="Coupe"
          gearType="Manual"
          imageName={bookingCar5}
          heartFilled={false}
          pCount={4}
          price={400}
        />
        <BookingCard
          carName="Porshe 718 Cayman S"
          bookingSub="Coupe"
          gearType="Manual"
          imageName={bookingCar6}
          heartFilled={false}
          pCount={4}
          price={400}
        />
        <BookingCard
          carName="Porshe 718 Cayman S"
          bookingSub="Coupe"
          gearType="Manual"
          imageName={bookingCar1}
          heartFilled={false}
          pCount={4}
          price={400}
        />
        <BookingCard
          carName="Porshe 718 Cayman S"
          bookingSub="Coupe"
          gearType="Manual"
          imageName={bookingCar2}
          heartFilled={false}
          pCount={4}
          price={400}
        />
        <BookingCard
          carName="Porshe 718 Cayman S"
          bookingSub="Coupe"
          gearType="Manual"
          imageName={bookingCar3}
          heartFilled={false}
          pCount={4}
          price={400}
        />
      </div>
    </div>
  );
}

export default Booking;
