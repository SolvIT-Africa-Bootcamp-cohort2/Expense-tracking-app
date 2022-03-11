import React, { useContext, useEffect, useState } from "react";
import { UserMainContext } from "../../../context/UserContext";
import "../../../styles/all_accounts.scss";
import AccountExpenses from "../../placeholders/AccountExpenses";
import AccountHeader from "../../placeholders/AccountHeader";
import Balance from "../../placeholders/Balance";
import CircularPie from "./Charts/CircularPie";
import LineChart from "./Charts/LineChart";
import ExpensesAndIncomeForAccount from "./ExpensesAndIncomeForAccount";
import AddNewIncome from "../Contents/Modals/AddNewIncome";
import AddNewExpense from "../Contents/Modals/AddNewExpense";
import Axios from "axios";
import { backendUrl } from "../../../controller/Config";

function MoneyAccounts() {
  const context = useContext(UserMainContext);
  const [showNewIncomeModal, setShowNewIncomeModal] = useState(false);
  const [showNewExpenseModal, setShowNewExpenseModal] = useState(false);
  const [total, setTotal] = useState("0.000");

  const handleCloseNewIncomeModal = () => setShowNewIncomeModal(false);
  const handleShowNewIncomeModal = () => setShowNewIncomeModal(true);

  const handleCloseNewExpenseModal = () => setShowNewExpenseModal(false);
  const handleShowNewExpenseModal = () => setShowNewExpenseModal(true);

  const [isLoadingAccountContents, setIsLoadingAccountContents] =
    useState(true);
  const [expensesAndIncome, setExpensesAndIncome] = useState([]);

  const calulateTotal = (expensesAndIncome) => {
    let amount = 0;
    for (let i = 0; i < expensesAndIncome.length; i++) {
      amount += expensesAndIncome[i].amount;
    }
    if (amount > 0) {
      setTotal(amount);
    }
  };

  const getTransactions = () => {
    if (context.activeTab.name === null) {
      //select from all accounts
      Axios.get(backendUrl + "/transaction", {
        headers: {
          Authorization: `Bearer ${context.token}`,
        },
      })
        .then((res) => {
          console.log("result", res.data);
          if (!res.data.Message) {
            setTimeout(() => {
              setExpensesAndIncome(res.data.transaction);
              calulateTotal(res.data.transaction);
              setIsLoadingAccountContents(false);
            }, 2000);
          }
        })
        .catch((error) => {
          setIsLoadingAccountContents(false);
          console.log(error.response);
        });
    } else {
      setIsLoadingAccountContents(false);
    }
  };

  useEffect(() => {
    getTransactions();
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
                      <h2>{total} Rwf</h2>
                      <span>Total balance</span>
                    </div>
                    <div className="expense-buttons-container">
                      <button onClick={() => setShowNewExpenseModal(true)}>
                        add expense
                      </button>
                      <button onClick={() => setShowNewIncomeModal(true)}>
                        add income
                      </button>
                    </div>
                  </>
                )}
                <LineChart
                  isLoadingAccountContents={isLoadingAccountContents}
                  expensesAndIncome={expensesAndIncome}
                />
                <CircularPie
                  isLoadingAccountContents={isLoadingAccountContents}
                  expensesAndIncome={expensesAndIncome}
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="expenses-table-main-container">
              <div className="pt-3">
                {isLoadingAccountContents ? (
                  <AccountExpenses />
                ) : (
                  <ExpensesAndIncomeForAccount
                    expensesAndIncome={expensesAndIncome}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddNewIncome
        showNewIncomeModal={showNewIncomeModal}
        handleCloseNewIncomeModal={handleCloseNewIncomeModal}
        getTransactions={getTransactions}
      />
      <AddNewExpense
        showNewExpenseModal={showNewExpenseModal}
        handleCloseNewExpenseModal={handleCloseNewExpenseModal}
        getTransactions={getTransactions}
      />
    </div>
  );
}

export default MoneyAccounts;
