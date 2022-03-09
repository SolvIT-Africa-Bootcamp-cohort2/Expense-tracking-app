import React, { useState } from "react";
import "../../styles/sidebar.scss";
import { FiSettings, FiLogOut, FiPlus } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
// import { FiWind,FiGrid, FiShoppingBag,  } from "react-icons/fi";
import AddSourceOfMoney from "./Contents/Modals/AddSourceOfMoney";

function Sidebar() {
  const [showSourceOfMoneyModal, setShowSourceOfMoneyModal] = useState(false);
  
  const handleCloseSourceOfMoneyModal = () => setShowSourceOfMoneyModal(false);
  const handleShowSourceOfMoneyModal = () => setShowSourceOfMoneyModal(true);
  

  return (
    <>
      <div className="sidebar-container">
        <div className="create-accounts-container">
          <span>Money accounts</span>
          <div
            className="create-account"
            onClick={() => setShowSourceOfMoneyModal(true)}
          >
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
      <AddSourceOfMoney
        showSourceOfMoneyModal={showSourceOfMoneyModal}
        handleCloseSourceOfMoneyModal={handleCloseSourceOfMoneyModal}
      />
    </>
  );
}

export default Sidebar;
