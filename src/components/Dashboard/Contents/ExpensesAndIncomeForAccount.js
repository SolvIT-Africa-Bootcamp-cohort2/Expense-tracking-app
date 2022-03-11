import React from "react";
import ExpenseItem from "./ExpenseIncomeItem";
import { FaJenkins } from "react-icons/fa";

function ExpensesAndIncomeForAccount({ expensesAndIncome }) {
  return (
    <div>
      {expensesAndIncome.length > 0 ? (
        <table className="table">
          <tbody>
            {expensesAndIncome.map((expense, i) => (
              <ExpenseItem expense={expense} />
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
