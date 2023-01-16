import React, { useState } from "react";
import searchIcon from "../assets/icons/search.svg";
import notificationIcon from "../assets/icons/notification.svg";
import avatar from "../assets/pics/person.png";
function Search() {
  const [input, setInput] = useState("");
  function onChange(e) {
    setInput(() => e.target.value);
  }
  return (
    <div className="search">
      <div className="search-box">
        <img src={searchIcon} alt="" className="search-icon" />
        <input
          className="input"
          type="text"
          value={input}
          placeholder="Search or type"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="icons">
        <img src={notificationIcon} alt="" className="notification" />
        <img src={avatar} alt="" className="avatar" />
      </div>
    </div>
  );
}

export default Search;
