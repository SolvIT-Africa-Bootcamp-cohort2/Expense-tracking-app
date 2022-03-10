import React, { useState, useContext, useEffect } from "react";
import "../../styles/sidebar.scss";
import { FiLogOut, FiPlus, FiChevronRight } from "react-icons/fi";
import { AiFillDownSquare, AiFillFund, AiOutlineUser } from "react-icons/ai";
// import { FiWind,FiGrid, FiShoppingBag,  } from "react-icons/fi";
import AddSourceOfMoney from "./Contents/Modals/AddSourceOfMoney";
import { logout } from "../../helpers/logout";
import { UserMainContext } from "../../context/UserContext";
import Axios from "axios";
import { backendUrl } from "../../controller/Config";

function Sidebar() {
  const context = useContext(UserMainContext);
  const [showSourceOfMoneyModal, setShowSourceOfMoneyModal] = useState(false);
  const [showIncomeMenus, setShowIncomeMenus] = useState(false);
  const [showExpenseMenus, setShowExpenseMenus] = useState(false);
  const [moneyAccounts, setMoneyAccounts] = useState([]);

  const handleCloseSourceOfMoneyModal = () => setShowSourceOfMoneyModal(false);
  const handleShowSourceOfMoneModal = () => setShowSourceOfMoneyModal(true);

  useEffect(() => {
    let sub = true;
    if (sub) {
      Axios.get(backendUrl + "/accounts", {
        headers: {
          Authorization: `Bearer ${context.token}`,
        },
      })
        .then((res) => {
          if (sub) {
            setMoneyAccounts(res.data.accounts);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => {
      sub = false;
    };
  }, [moneyAccounts]);

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
        <div className="money-account-container">
          <ul className="sidebar-items">
            <li
              onClick={() => context.setActiveTab("")}
              className={context.activeTab === "" ? "active" : ""}
            >
              All accounts
            </li>
            {moneyAccounts.map((account, id) => (
              <li key={id}>{account.accountName}</li>
            ))}
          </ul>
        </div>
        <hr />
        <ul className="menu-container">
          <li
            className={context.activeTab === "incomes" ? "active" : ""}
            onClick={() => {
              context.setActiveTab("incomes");
            }}
          >
            <AiFillDownSquare size={20} />
            <span>Incomes</span>
            <FiChevronRight size={20} />
          </li>
          <li>
            <AiFillFund size={20} />
            <span>Expenses</span>
            <FiChevronRight size={20} />
          </li>
          <li>
            <AiOutlineUser size={20} />
            <span>Profile</span>
          </li>
        </ul>
        <div className="footer">
          <div className="footer-contents" onClick={() => logout()}>
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
