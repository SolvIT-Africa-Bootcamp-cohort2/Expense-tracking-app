import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import "../../../styles/expenseIncomeItem.scss";

function ExpenseIncomeItem({ expense }) {
  return (
    <div className="expenses-main-container">
      {expense.type == "income" ? (
        <tr className="income-row">
          <td>
            <div className="transaction-dot"></div>
          </td>
          <td>
            <span className="amount">+ {expense.amount} rwf</span>
          </td>
          <td>
            <span className="date"> {expense.created_at}</span>
          </td>
          <td>
            <span className="category">{expense.category}</span>
          </td>
          <td>
            <span className="description">{expense.description}</span>
          </td>
          <td>
            <div className="icons-main-container">
              <div className="icon-container" title="edit">
                <FiEdit2 size={15} color="#5e419a" />
              </div>
              <div className="icon-container2" title="delete">
                <AiTwotoneDelete size={15} color="#eb6c6d" />
              </div>
            </div>
          </td>
        </tr>
      ) : (
        <tr className="expense-row">
          <td>
            <div className="transaction-dot"></div>
          </td>
          <td>
            <span className="amount">- {expense.amount} rwf</span>
          </td>
          <td>
            <span className="date"> {expense.created_at}</span>
          </td>
          <td>
            <span className="category">{expense.category}</span>
          </td>
          <td>
            <span className="description">{expense.description}</span>
          </td>
          <td>
            <div className="icons-main-container">
              <div className="icon-container" title="edit">
                <FiEdit2 size={15} color="#5e419a" />
              </div>
              <div className="icon-container2" title="delete">
                <AiTwotoneDelete size={15} color="#eb6c6d" />
              </div>
            </div>
          </td>
        </tr>
      )}
    </div>
  );
}

export default ExpenseIncomeItem;
