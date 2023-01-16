import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Search from "./components/Search";
import { Outlet } from "react-router-dom";
import Placeholder from "./components/Placeholder";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Search />
      <Placeholder />
      <Outlet />
    </div>
  );
}

export default App;
