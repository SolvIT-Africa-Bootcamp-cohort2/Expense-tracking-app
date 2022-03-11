import React from "react";
import ExpenseIncomeItem from "./ExpenseIncomeItem";
import { FaJenkins } from "react-icons/fa";
import "../../../styles/expenseIncomeItem.scss";

function ExpensesAndIncomeForAccount({ expensesAndIncome }) {
  return (
    <div>
      {expensesAndIncome.length > 0 ? (
        <table className="w-100">
          <tbody className="expenses-main-container">
            {expensesAndIncome.map((expense, i) => (
              <ExpenseIncomeItem expense={expense} />
            ))}
          </tbody>
        </table>
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
