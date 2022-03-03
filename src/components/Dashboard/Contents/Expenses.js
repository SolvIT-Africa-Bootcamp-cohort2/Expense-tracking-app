import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
  const expenses = [
    {
      type: "income",
      category: "food",
      amount: "12500",
      date: "12 feb 2021",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
    {
      type: "expense",
      category: "airtime",
      date: "12 feb 2021",
      amount: "500",
      description: "Testing description",
    },
  ];
  return (
    <div>
      <table className="table">
        <tbody>
          {expenses.map((expense, i) => (
            <ExpenseItem expense={expense} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;
