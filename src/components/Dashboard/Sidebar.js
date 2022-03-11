import React, { useState, useContext, useEffect } from "react";
import "../../styles/sidebar.scss";
import { FiLogOut, FiPlus, FiChevronRight, FiSettings } from "react-icons/fi";
import { AiFillDownSquare, AiFillFund, AiOutlineUser } from "react-icons/ai";
// import { FiWind,FiGrid, FiShoppingBag,  } from "react-icons/fi";
import AddSourceOfMoney from "./Contents/Modals/AddSourceOfMoney";

import { logout } from "../../helpers/logout";
import { UserMainContext } from "../../context/UserContext";
import Axios from "axios";
import { backendUrl } from "../../controller/Config";
import MoneyAccounts from "../placeholders/MoneyAccounts";

function Sidebar({}) {
  const context = useContext(UserMainContext);
  const [showSourceOfMoneyModal, setShowSourceOfMoneyModal] = useState(false);
  const [showIncomeMenus, setShowIncomeMenus] = useState(false);
  const [showExpenseMenus, setShowExpenseMenus] = useState(false);
  const [moneyAccounts, setMoneyAccounts] = useState([]);
  const [isLoadingMoneyAccounts, setIsLoadingMoneyAccounts] = useState(true);

  const handleCloseSourceOfMoneyModal = () => setShowSourceOfMoneyModal(false);
  const handleShowSourceOfMoneyModal = () => setShowSourceOfMoneyModal(true);

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
            if (res.data.accounts) {
              setMoneyAccounts(res.data.accounts);
              context.setMoneyAccounts(res.data.accounts);
            }
          }
          setTimeout(() => {
            setIsLoadingMoneyAccounts(false);
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          setIsLoadingMoneyAccounts(false);
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
        {isLoadingMoneyAccounts ? (
          <MoneyAccounts />
        ) : (
          <div className="money-account-container">
            <ul className="sidebar-items">
              <li
                onClick={() => context.setActiveTab({ id: null, name: null })}
                className={context.activeTab.name === null ? "active" : ""}
              >
                All accounts
              </li>
              {moneyAccounts.map((account, id) => (
                <li key={id}>{account.accountName}</li>
              ))}
            </ul>
          </div>
        )}
        <hr />
        <ul className="menu-container">
          <li
            className={context.activeTab.name === "incomes" ? "active" : ""}
            onClick={() => {
              context.setActiveTab({ id: null, name: "incomes" });
            }}
          >
            <AiFillDownSquare size={20} />
            <span>Incomes</span>
          </li>
          <li
            className={context.activeTab.name === "expenses" ? "active" : ""}
            onClick={() => {
              context.setActiveTab({ id: null, name: "expenses" });
            }}
          >
            <AiFillFund size={20} />
            <span>Expenses</span>
          </li>
          <li
            className={
              context.activeTab.name === "manageCategories" ? "active" : ""
            }
            onClick={() => {
              context.setActiveTab({ id: null, name: "manageCategories" });
            }}
          >
            <FiSettings size={20} />
            <span>Manage categories</span>
          </li>
          <li
            className={
              context.activeTab.name === "manageAccounts" ? "active" : ""
            }
            onClick={() => {
              context.setActiveTab({ id: null, name: "manageAccounts" });
            }}
          >
            <FiSettings size={20} />
            <span>Manage Money Accounts</span>
          </li>
          <li
            className={context.activeTab.name === "profile" ? "active" : ""}
            onClick={() => {
              context.setActiveTab({ id: null, name: "profile" });
            }}
          >
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
