import React, { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import moment from "moment";
import { UserMainContext } from "../../../context/UserContext";

function ExpenseIncomeItem({
  expense,
  setTransactionToBeDeleted,
  setShowDeleteAlert,
}) {
  const context = useContext(UserMainContext);
  return (
    <>
      {context.deletedTranscations.indexOf(expense._id) === -1 && (
        <>
          {expense.type == "income" ? (
            <tr className="income-row">
              <td>
                <span className="amount">+ {expense.amount} rwf</span>
              </td>
              <td>
                <span className="date">
                  {/* {moment(expense.created_at).format("DD-MM-YYYY hh:mm:ss")} */}
                  {moment(expense.created_at).format("DD-MM-YYYY")}
                </span>
              </td>
              <td>
                <span className="category">{expense.category}</span>
              </td>
              <td>
                <span className="description">{expense.description}</span>
              </td>
              <td>
                {context.progressDeletion.indexOf(expense._id) != -1 ? (
                  <div className="text-center text-danger">
                    <span>Deleting...</span>
                  </div>
                ) : (
                  <>
                    <div className="icons-main-container">
                      <div className="icon-container" title="edit">
                        <FiEdit2 size={15} color="#5e419a" />
                      </div>
                      <div
                        className="icon-container2"
                        title="delete"
                        onClick={() => {
                          setTransactionToBeDeleted(expense);
                          setShowDeleteAlert(true);
                        }}
                      >
                        <AiTwotoneDelete size={15} color="#eb6c6d" />
                      </div>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ) : (
            <tr className="expense-row">
              <td>
                <span className="amount">- {expense.amount} Rwf</span>
              </td>
              <td>
                <span className="date">
                  {/* {moment(expense.created_at).format("DD-MM-YYYY hh:mm:ss")} */}
                  {moment(expense.created_at).format("DD-MM-YYYY")}
                </span>
              </td>
              <td>
                <span className="category">{expense.category}</span>
              </td>
              <td>
                <span className="description">{expense.description}</span>
              </td>
              <td>
                {context.progressDeletion.indexOf(expense._id) != -1 ? (
                  <div className="text-center text-danger">
                    <span>Deleting...</span>
                  </div>
                ) : (
                  <>
                    <div className="icons-main-container">
                      <div className="icon-container" title="edit">
                        <FiEdit2 size={15} color="#5e419a" />
                      </div>
                      <div
                        className="icon-container2"
                        title="delete"
                        onClick={() => {
                          setTransactionToBeDeleted(expense);
                          setShowDeleteAlert(true);
                        }}
                      >
                        <AiTwotoneDelete size={15} color="#eb6c6d" />
                      </div>
                    </div>
                  </>
                )}
              </td>
            </tr>
          )}
        </>
      )}
    </>
  );
}

export default ExpenseIncomeItem;
