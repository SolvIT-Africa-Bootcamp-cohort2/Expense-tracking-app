import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { UserMainContext } from "../../../../context/UserContext";
import { backendUrl } from "../../../../controller/Config";
import { logout } from "../../../../helpers/logout";

import "../../../../styles/all_accounts.scss";
import ExpenseIncomeItem from "../ExpenseIncomeItem";
import { toast, ToastContainer } from "react-toastify";
import DeleteExpense from "../Modals/DeleteExpense";
import IncomesPlaceHolder from "../../../placeholders/IncomesPlaceHolder";

function Incomes() {
  const context = useContext(UserMainContext);
  const [incomes, setIncomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [transactionToBeDeleted, setTransactionToBeDeleted] = useState(null);

  const calulateTotal = (expensesAndIncome) => {
    let totalIncome = 0;
    let totalExpense = 0;
    let total = 0;
    for (let i = 0; i < expensesAndIncome.length; i++) {
      if (
        context.deletedTranscations.indexOf(expensesAndIncome[i]._id) === -1
      ) {
        if (expensesAndIncome[i].type === "income") {
          totalIncome += expensesAndIncome[i].amount;
        } else {
          totalExpense += expensesAndIncome[i].amount;
        }
      }
    }
    total = totalIncome + totalExpense;
    setTotal(total);
  };

  const getAccountName = (accId) => {
    let accName = "";
    for (let i = 0; i < context.moneyAccounts.length; i++) {
      if (context.moneyAccounts[i]._id === accId) {
        accName = context.moneyAccounts[i].accountName;
        break;
      }
    }

    return accName;
  };

  const deleteTransaction = () => {
    context.setProgressDeletion([
      ...context.progressDeletion,
      transactionToBeDeleted._id,
    ]);

    setShowDeleteAlert(false);

    if (transactionToBeDeleted.type === "income") {
      Axios.post(
        backendUrl + "/income/remove",
        { id: transactionToBeDeleted._id },
        {
          headers: {
            Authorization: `Bearer ${context.token}`,
          },
        }
      )
        .then((res) => {
          toast.dismiss();
          toast("Transaction deleted successful.", {
            autoClose: 2000,
            position: "bottom-right",
            bodyStyle: { width: "100%" },
            type: "success",
          });
          context.setDeletedTransactions([
            context.setDeletedTransactions,
            transactionToBeDeleted._id,
          ]);
          getTransactions();
          setTransactionToBeDeleted(null);
        })
        .catch((error) => {
          toast.dismiss();
          console.log(error);
          toast("Failed to delete transaction.", {
            autoClose: 2000,
            position: "bottom-right",
            bodyStyle: { width: "100%" },
            type: "error",
          });
          context.setProgressDeletion(
            context.progressDeletion.splice(
              context.progressDeletion.indexOf(transactionToBeDeleted),
              1
            )
          );
        });
    } else {
      Axios.post(
        backendUrl + "/expense/remove",
        { id: transactionToBeDeleted._id },
        {
          headers: {
            Authorization: `Bearer ${context.token}`,
          },
        }
      )
        .then((res) => {
          console.log(res.data);
          toast.dismiss();
          toast("Transaction deleted successful.", {
            autoClose: 2000,
            position: "bottom-right",
            bodyStyle: { width: "100%" },
            type: "success",
            className: "primaryColor",
          });
          context.setDeletedTransactions([
            context.setDeletedTransactions,
            transactionToBeDeleted._id,
          ]);
          getTransactions();
          setTransactionToBeDeleted(null);
        })
        .catch((error) => {
          toast.dismiss();
          console.log(error);
          context.setProgressDeletion(
            context.progressDeletion.splice(
              context.progressDeletion.indexOf(transactionToBeDeleted),
              1
            )
          );
          toast("Failed to delete transaction.", {
            autoClose: 2000,
            position: "bottom-right",
            bodyStyle: { width: "100%" },
            type: "error",
          });
        });
    }
  };

  const getTransactions = () => {
    Axios.get(backendUrl + "/income", {
      headers: {
        Authorization: `Bearer ${context.token}`,
      },
    })
      .then((res) => {
        if (!res.data.Message) {
          if (typeof res.data !== "string") {
            setIncomes(res.data.incomes);
            calulateTotal(res.data.incomes);
          }
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.response.data.Message);

        try {
          if (error.response.data.Message === "JWT token has expired") {
            logout();
          }
        } catch (err) {
          console.log(error.response);
        }
      });
  };

  useEffect(() => {
    getTransactions();
  }, [incomes]);
  return (
    <div>
      {incomes.length === 0 && isLoading === true ? (
        <IncomesPlaceHolder />
      ) : (
        <div>
          <div className="header">
            <h2>All Incomes</h2>
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
          <div style={{ paddingLeft: "15px" }} className="mt-2">
            <div className="table-responsive">
              <table className="w-100">
                <tbody className="expenses-main-container">
                  {incomes.map((expense, i) => (
                    <ExpenseIncomeItem
                      key={i}
                      expense={expense}
                      setTransactionToBeDeleted={setTransactionToBeDeleted}
                      setShowDeleteAlert={setShowDeleteAlert}
                    />
                  ))}
                </tbody>
              </table>{" "}
              <hr />
              <h4 className="mt-3" style={{ fontSize: "18px" }}>
                Total : &nbsp;&nbsp;
                {new Intl.NumberFormat("en", {
                  maximumSignificantDigits: 3,
                }).format(total)}
                &nbsp;RWF
              </h4>
            </div>
          </div>
        </div>
      )}

      <DeleteExpense
        showDeleteAlert={showDeleteAlert}
        setShowDeleteAlert={setShowDeleteAlert}
        deleteTransaction={deleteTransaction}
      />
      <ToastContainer />
    </div>
  );
}

export default Incomes;
