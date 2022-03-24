import React from "react";
import "../../../styles/topbar.scss";
// import { FiSearch, FiBell, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

function TopBar() {
  return (
    <div className="topbar-main-container">
      <div>
        <a href="/home">
          <img src={require("../../../assets/logo.png")} />
        </a>
      </div>
      <div className="user-profile-container">
        <div className="profile-image-container">
          <AiOutlineUser size={20} />
        </div>
        <div className="username-container">
          Username
          <FiChevronDown />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
