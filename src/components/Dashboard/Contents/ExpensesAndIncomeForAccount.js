import React from "react";
import ExpenseIncomeItem from "./ExpenseIncomeItem";
import { FaJenkins } from "react-icons/fa";
import "../../../styles/expenseIncomeItem.scss";

function ExpensesAndIncomeForAccount({
  expensesAndIncome,
  setTransactionToBeDeleted,
  setShowDeleteAlert,
  getTransactions2,
}) {
  return (
    <div>
      {expensesAndIncome.length > 0 ? (
        <div className="table-responsive">
          <table className="w-100">
            <tbody className="expenses-main-container">
              {expensesAndIncome.map((expense, i) => (
                <ExpenseIncomeItem
                  key={i}
                  expense={expense}
                  setTransactionToBeDeleted={setTransactionToBeDeleted}
                  setShowDeleteAlert={setShowDeleteAlert}
                  getTransactions2={getTransactions2}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="nothing-main-container">
          <FaJenkins size={100} color="#ccc" />
          <p style={{ color: "#808080" }}>No records found!</p>
        </div>
      )}
    </div>
  );
}

export default ExpensesAndIncomeForAccount;
