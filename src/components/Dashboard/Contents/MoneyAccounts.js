import React, { useContext, useEffect, useState, useRef } from "react";
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
import { logout } from "../../../helpers/logout";
import DeleteExpense from "./Modals/DeleteExpense";
import { toast, ToastContainer } from "react-toastify";

function MoneyAccounts() {
  const context = useContext(UserMainContext);
  const [showNewIncomeModal, setShowNewIncomeModal] = useState(false);
  const [showNewExpenseModal, setShowNewExpenseModal] = useState(false);
  const [total, setTotal] = useState("0.000");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [transactionToBeDeleted, setTransactionToBeDeleted] = useState(null);

  const handleCloseNewIncomeModal = () => setShowNewIncomeModal(false);
  const handleShowNewIncomeModal = () => setShowNewIncomeModal(true);
  const handleCloseNewExpenseModal = () => setShowNewExpenseModal(false);
  const handleShowNewExpenseModal = () => setShowNewExpenseModal(true);

  const [isLoadingAccountContents, setIsLoadingAccountContents] =
    useState(true);
  const [expensesAndIncome, setExpensesAndIncome] = useState([]);

  const calulateTotal = (expensesAndIncome) => {
    let totalIncome = 0;
    let totalExpense = 0;
    let total = 0;
    if (expensesAndIncome) {
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
    }
    total = totalIncome - totalExpense;
    setTotal(total);
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
          getTransactions2();
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
          getTransactions2();
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

  const getTransactions2 = () => {
    if (context.activeTab.name === null && context.activeTab.id === null) {
      //select from all accounts
      Axios.get(backendUrl + "/transaction", {
        headers: {
          Authorization: `Bearer ${context.token}`,
        },
      })
        .then((res) => {
          if (!res.data.Message) {
            if (typeof res.data !== "string") {
              setExpensesAndIncome(res.data.transaction);
              calulateTotal(res.data.transaction);
            }
            setIsLoadingAccountContents(false);
          }
        })
        .catch((error) => {
          setIsLoadingAccountContents(false);
          console.log(error.response.data.Message);

          try {
            if (error.response.data.Message === "JWT token has expired") {
              logout();
            }
          } catch (err) {
            console.log(error.response);
          }
        });
    } else if (context.activeTab.id !== null) {
      Axios.get(backendUrl + "/transaction/" + context.activeTab.id, {
        headers: {
          Authorization: `Bearer ${context.token}`,
        },
      })
        .then((res) => {
          if (!res.data.Message) {
            if (typeof res.data !== "string") {
              setExpensesAndIncome(res.data.transaction);
              calulateTotal(res.data.transaction);
            }
            setIsLoadingAccountContents(false);
          } else {
            setExpensesAndIncome([]);
            setIsLoadingAccountContents(false);
          }
        })
        .catch((error) => {
          setIsLoadingAccountContents(false);
          console.log(error.response.data.Message);
          try {
            if (error.response.data.Message === "JWT token has expired") {
              logout();
            }
          } catch (err) {
            console.log(error.response);
          }
        });
    } else {
      setIsLoadingAccountContents(false);
    }
  };

  const getTransactions = () => {
    setIsLoadingAccountContents(true);
    if (context.activeTab.name === null && context.activeTab.id === null) {
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
              if (typeof res.data !== "string") {
                setExpensesAndIncome(res.data.transaction);
                calulateTotal(res.data.transaction);
              }
              setIsLoadingAccountContents(false);
            }, 2000);
          }
        })
        .catch((error) => {
          setIsLoadingAccountContents(false);
          console.log(error.response.data.Message);

          try {
            if (error.response.data.Message === "JWT token has expired") {
              logout();
            }
          } catch (err) {
            console.log(error.response);
          }
        });
    } else if (context.activeTab.id !== null) {
      Axios.get(backendUrl + "/transaction/" + context.activeTab.id, {
        headers: {
          Authorization: `Bearer ${context.token}`,
        },
      })
        .then((res) => {
          console.log("result", res.data);
          if (!res.data.Message) {
            setTimeout(() => {
              if (typeof res.data !== "string") {
                setExpensesAndIncome(res.data.transaction);
                calulateTotal(res.data.transaction);
              }
              setIsLoadingAccountContents(false);
            }, 2000);
          } else {
            setExpensesAndIncome([]);
            setIsLoadingAccountContents(false);
          }
        })
        .catch((error) => {
          setIsLoadingAccountContents(false);
          console.log(error.response.data.Message);
          try {
            if (error.response.data.Message === "JWT token has expired") {
              logout();
            }
          } catch (err) {
            console.log(error.response);
          }
        });
    } else {
      setIsLoadingAccountContents(false);
    }
  };

  useEffect(() => {
    getTransactions();
  }, [context.activeTab.id]);

  const compareCategoryAz = (a, b) => {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  };

  const compareCategoryZa = (a, b) => {
    if (b.category < a.category) {
      return -1;
    }
    if (b.category > a.category) {
      return 1;
    }
    return 0;
  };

  const handleFilter = (value) => {
    if (value === "category-az") {
      const res = expensesAndIncome.sort(compareCategoryAz);
      setExpensesAndIncome([...res]);
    } else if (value === "category-za") {
      const res = expensesAndIncome.sort(compareCategoryZa);
      setExpensesAndIncome([...res]);
    }
  };
  return (
    <div>
      {isLoadingAccountContents ? (
        <AccountHeader />
      ) : (
        <div className="header">
          <h2>
            {context.activeTab.id === null && context.activeTab.name === null
              ? "All accounts"
              : context.activeAccountName}
          </h2>
          <div className="filtering">
            <div className="date-filter-main-container"></div>
            <div className="filter-main-container">
              <div>Filter</div>
              <div>
                <select onChange={(e) => handleFilter(e.target.value)}>
                  <option value="">Choose</option>
                  <option value="category-az">Category A-Z</option>
                  <option value="category-za">Category Z-A</option>
                  <option value="amount-lh">Amount Low - High</option>
                  <option value="amount-hl">Amount Low - High</option>
                  <option value="date-asc">Date ASC</option>
                  <option value="date-desc">Date DESC</option>
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
                      {total >= 0 ? (
                        <div className="total-income">
                          <h2>
                            {new Intl.NumberFormat("en", {
                              maximumSignificantDigits: 3,
                            }).format(total)}
                            &nbsp;RWF
                          </h2>
                          <span>Total balance</span>
                        </div>
                      ) : (
                        <div className="total-expense">
                          <h2>
                            {new Intl.NumberFormat("en", {
                              maximumSignificantDigits: 3,
                            }).format(total)}
                            &nbsp;RWF
                          </h2>
                          <span>Total balance</span>
                        </div>
                      )}
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
                    deleteTransaction={deleteTransaction}
                    setTransactionToBeDeleted={setTransactionToBeDeleted}
                    setShowDeleteAlert={setShowDeleteAlert}
                    getTransactions2={getTransactions2}
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
        getTransactions2={getTransactions2}
      />
      <AddNewExpense
        showNewExpenseModal={showNewExpenseModal}
        handleCloseNewExpenseModal={handleCloseNewExpenseModal}
        getTransactions2={getTransactions2}
      />
      <DeleteExpense
        showDeleteAlert={showDeleteAlert}
        setShowDeleteAlert={setShowDeleteAlert}
        deleteTransaction={deleteTransaction}
      />
      <ToastContainer />
    </div>
  );
}

export default MoneyAccounts;
