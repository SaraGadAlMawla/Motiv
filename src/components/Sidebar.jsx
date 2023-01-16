import React, { useState, useEffect } from "react";
import dashboardIcon from "../assets/icons/dashboard.svg";
import chromeIcon from "../assets/icons/chrome.svg";
import carIcon from "../assets/icons/car.svg";
import shoppingBagIcon from "../assets/icons/shoppingBag.svg";
import cartIcon from "../assets/icons/cart.svg";
import servicesIcon from "../assets/icons/services.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import messagesIcon from "../assets/icons/message.svg";
import settingsIcon from "../assets/icons/settings.svg";
import logoutIcon from "../assets/icons/logout.svg";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

function sidebar() {
  const [clicked, setClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (localStorage.getItem("nav")) {
      setClicked(() => JSON.parse(localStorage.getItem("nav")));
    }
  }, []);

  function onClick(id) {
    setClicked((old) => {
      const newArr = [];
      for (let i = 0; i < clicked.length; i++) {
        if (i === id && old[i] === false) {
          newArr.push(true);
        } else {
          newArr.push(false);
        }
      }
      localStorage.setItem("nav", JSON.stringify(newArr));
      return newArr;
    });
  }
  return (
    <div className="sidebar">
      <div className="logo-header">
        <img src={logo} alt="" className="logo" />
        <h1 className="logo-name">Motive.</h1>
      </div>
      <nav className="nav-list">
        <div className="nav-top">
          <Link
            to="/dashboard"
            className={`nav-item ${clicked[0] ? "active" : ""}`}
            onClick={() => onClick(0)}
          >
            <img src={dashboardIcon} alt="" className="nav-icon" />
            <p className="nav-title">Dashboard</p>
          </Link>
          <a
            href="#"
            className={`nav-item ${clicked[1] ? "active" : ""}`}
            onClick={() => onClick(1)}
          >
            <img src={chromeIcon} alt="" className="nav-icon" />
            <p className="nav-title">Assets</p>
          </a>
          <Link
            to="/booking"
            className={`nav-item ${clicked[2] ? "active" : ""}`}
            onClick={() => onClick(2)}
          >
            <img src={carIcon} alt="" className="nav-icon" />
            <p className="nav-title">Booking</p>
          </Link>
          <a
            href="#"
            className={`nav-item ${clicked[3] ? "active" : ""}`}
            onClick={() => onClick(3)}
          >
            <img src={shoppingBagIcon} alt="" className="nav-icon" />
            <p className="nav-title">Sell Cars</p>
          </a>
          <a
            href="#"
            className={`nav-item ${clicked[4] ? "active" : ""}`}
            onClick={() => onClick(4)}
          >
            <img src={cartIcon} alt="" className="nav-icon" />
            <p className="nav-title">Buy Cars</p>
          </a>
          <a
            href="#"
            className={`nav-item ${clicked[5] ? "active" : ""}`}
            onClick={() => onClick(5)}
          >
            <img src={servicesIcon} alt="" className="nav-icon" />
            <p className="nav-title">Services</p>
          </a>
          <a
            href="#"
            className={`nav-item ${clicked[6] ? "active" : ""}`}
            onClick={() => onClick(6)}
          >
            <img src={calendarIcon} alt="" className="nav-icon" />
            <p className="nav-title">Calendar</p>
          </a>
          <a
            href="#"
            className={`nav-item ${clicked[7] ? "active" : ""}`}
            onClick={() => onClick(7)}
          >
            <img src={messagesIcon} alt="" className="nav-icon" />
            <p className="nav-title">Messages</p>
          </a>
        </div>
        <div className="nav-bottom">
          <a
            href="#"
            className={`nav-item ${clicked[8] ? "active" : ""}`}
            onClick={() => onClick(8)}
          >
            <img src={settingsIcon} alt="" className="nav-icon" />
            <p className="nav-title">Settings</p>
          </a>
          <a
            href="#"
            className={`nav-item ${clicked[9] ? "active" : ""}`}
            onClick={() => onClick(9)}
          >
            <img src={logoutIcon} alt="" className="nav-icon" />
            <p className="nav-title">Logout</p>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default sidebar;
