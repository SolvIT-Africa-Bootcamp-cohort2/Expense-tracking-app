import React from "react";
import "../../styles/sidebar.scss";
import { FiSettings, FiLogOut, FiPlus } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
// import { FiWind,FiGrid, FiShoppingBag,  } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="create-accounts-container">
        <span>My accounts</span>
        <div className="create-account">
          <FiPlus color="#fff" />
        </div>
      </div>
      <ul className="sidebar-items">
        <li className="active">All accounts</li>
        <li>Mobile money</li>
        <li>Equity bank</li>
        <li>cash</li>
      </ul>
      <hr />
      <ul className="menu-container">
        <li>
          <FiSettings size={20} />
          <span>Preferences</span>
        </li>
        <li>
          <AiOutlineUser size={20} />
          <span>Profile</span>
        </li>
      </ul>
      <div className="footer">
        <div className="footer-contents">
          <span>Logout</span>
          <FiLogOut />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
