import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Booking from "./components/Booking";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
