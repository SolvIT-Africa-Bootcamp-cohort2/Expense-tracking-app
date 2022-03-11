import React, { useContext } from "react";
import { UserMainContext } from "../../../context/UserContext";
import "../../../styles/contents.scss";
import Expenses from "./Expenses/Expenses";
import Incomes from "./Incomes/Incomes";
import ManageAccounts from "./ManageAccounts/ManageAccounts";
import ManageCategories from "./ManageCategories/ManageCategories";
import MoneyAccounts from "./MoneyAccounts";
import Profile from "./Profile";

function Contents() {
  const context = useContext(UserMainContext);
  return (
    <div className="contents-main-container">
      {context.activeTab.name == null && <MoneyAccounts />}
      {context.activeTab.name == "manageCategories" && <ManageCategories />}
      {context.activeTab.name == "manageAccounts" && <ManageAccounts />}
      {context.activeTab.name == "incomes" && <Incomes />}
      {context.activeTab.name == "expenses" && <Expenses />}
      {context.activeTab.name == "profile" && <Profile />}
    </div>
  );
}

export default Contents;
