import React, { useContext, useEffect, useState } from "react";
import { UserMainContext } from "../../../context/UserContext";
import "../../../styles/all_accounts.scss";
import AccountExpenses from "../../placeholders/AccountExpenses";
import AccountHeader from "../../placeholders/AccountHeader";
import Balance from "../../placeholders/Balance";
import CircularPie from "./Charts/CircularPie";
import LineChart from "./Charts/LineChart";
import Expenses from "./Expenses";
import AddNewIncome from "../Contents/Modals/AddNewIncome";
import AddNewExpense from "../Contents/Modals/AddNewExpense";
import Axios from "axios";
import { backendUrl } from "../../../controller/Config";

function MoneyAccounts() {
  const context = useContext(UserMainContext);
  const [showNewIncomeModal, setShowNewIncomeModal] = useState(false);
  const [showNewExpenseModal, setShowNewExpenseModal] = useState(false);

  const handleCloseNewIncomeModal = () => setShowNewIncomeModal(false);
  const handleShowNewIncomeModal = () => setShowNewIncomeModal(true);

  const handleCloseNewExpenseModal = () => setShowNewExpenseModal(false);
  const handleShowNewExpenseModal = () => setShowNewExpenseModal(true);

  const [isLoadingAccountContents, setIsLoadingAccountContents] =
    useState(true);
  const [expensesAndIncome, setExpensesAndIncome] = useState([]);
  useEffect(() => {
    let sub = true;
    if (context.activeTab.name === null) {
      //select from all accounts
      Axios.get(backendUrl + "/expense", {
        headers: {
          Authorization: `Bearer ${context.token}`,
        },
      })
        .then((res) => {
          if (!res.data.Message) {
            setExpensesAndIncome(res.data);
          }
          setIsLoadingAccountContents(false);
        })
        .catch((error) => {
          setIsLoadingAccountContents(false);
          console.log(error);
        });
    } else {
      setIsLoadingAccountContents(false);
    }
    return () => {
      sub = false;
    };
  }, []);
  return (
    <div>
      {isLoadingAccountContents ? (
        <AccountHeader />
      ) : (
        <div className="header">
          <h2>All accounts</h2>
          <div className="filtering">
            <div className="date-filter-main-container"></div>
            <div className="filter-main-container">
              <div>Filter</div>
              <div>
                <select>
                  <option>Category A-Z</option>
                  <option>Category Z-A</option>
                  <option>Amount Low - High</option>
                  <option>Amount Low - High</option>
                  <option>Amount Low - High</option>
                  <option>Amount High - Low</option>
                  <option>Date ASC</option>
                  <option>Date DESC</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="charts-main-container">
              <div className="pt-3">
                {isLoadingAccountContents ? (
                  <Balance />
                ) : (
                  <>
                    <div className="account-balance-container">
                      <h2>123,500 rwf</h2>
                      <span>12 feb 2020 - now</span>
                    </div>
                    <div className="expense-buttons-container">
                      <button onClick={() => setShowNewExpenseModal(true)}>
                        expense
                      </button>
                      <button onClick={() => setShowNewIncomeModal(true)}>
                        income
                      </button>
                    </div>
                  </>
                )}
                <LineChart
                  isLoadingAccountContents={isLoadingAccountContents}
                />
                <CircularPie
                  isLoadingAccountContents={isLoadingAccountContents}
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="expenses-table-main-container">
              <div className="pt-3">
                {isLoadingAccountContents ? <AccountExpenses /> : <Expenses />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddNewIncome
        showNewIncomeModal={showNewIncomeModal}
        handleCloseNewIncomeModal={handleCloseNewIncomeModal}
      />
      <AddNewExpense
        showNewExpenseModal={showNewExpenseModal}
        handleCloseNewExpenseModal={handleCloseNewExpenseModal}
      />
    </div>
  );
}

export default MoneyAccounts;
