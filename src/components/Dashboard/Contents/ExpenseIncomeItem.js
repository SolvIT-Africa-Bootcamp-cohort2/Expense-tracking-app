import React, { useContext, useState, useRef } from "react";
import { AiOutlineClose, AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2, FiSave } from "react-icons/fi";
import moment from "moment";
import { UserMainContext } from "../../../context/UserContext";
import ContentEditable from "react-contenteditable";

function ExpenseIncomeItem({
  expense,
  setTransactionToBeDeleted,
  setShowDeleteAlert,
}) {
  const context = useContext(UserMainContext);
  const [edit, setEdit] = useState(false);
  const [submitingChanges, setSubmittingChanges] = useState(false);
  const editAmount = useRef(null);
  const editCategory = useRef(null);
  const editDescription = useRef(null);

  const handleSaveChanges = () => {
    console.log(
      editAmount.current,
      editCategory.current,
      editDescription.current
    );
    // setSubmittingChanges(true);

    // setTimeout(() => {
    //   setEdit(false);
    //   setSubmittingChanges(false);
    // }, 2000);
  };
  return (
    <>
      {context.deletedTranscations.indexOf(expense._id) === -1 && (
        <>
          {expense.type == "income" ? (
            <tr className="income-row">
              <td>
                {edit ? (
                  <div style={{ display: "inline" }}>
                    <ContentEditable
                      html={expense.amount}
                      disabled={submitingChanges}
                      onChange={(e) => {
                        editAmount.current = e.target.value;
                      }}
                      tagName="span"
                      style={{
                        padding: " 0.375rem 0.75rem",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: "1.5",
                        color: "#212529",
                        backgroundColor: "#fff",
                        border: "1px solid #ced4da",
                        borderRadius: "0.25rem",
                      }}
                    />
                  </div>
                ) : (
                  <span className="amount">
                    +
                    {new Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(expense.amount)}
                    &nbsp;Rwf
                  </span>
                )}
              </td>
              <td>
                <span className="date">
                  {/* {moment(expense.created_at).format("DD-MM-YYYY hh:mm:ss")} */}
                  {moment(expense.created_at).format("DD-MM-YYYY")}
                </span>
              </td>
              <td>
                {edit ? (
                  <div style={{ display: "inline" }}>
                    <select
                      className="form-control"
                      style={{ width: 100 }}
                      onChange={(e) => {
                        editCategory.current = e.target.value;
                      }}
                    >
                      <option value={expense.category}>
                        {expense.category}
                      </option>
                      {context.categories.map((category, id) => (
                        <>
                          {category.categoryName !== expense.category && (
                            <option key={id} value={category.categoryName}>
                              {category.categoryName}
                            </option>
                          )}
                        </>
                      ))}
                    </select>
                  </div>
                ) : (
                  <span className="category">{expense.category}</span>
                )}
              </td>
              <td>
                {edit ? (
                  <div style={{ display: "inline" }}>
                    <ContentEditable
                      html={expense.description}
                      disabled={submitingChanges}
                      onChange={(e) => {
                        editDescription.current = e.target.value;
                      }}
                      tagName="span"
                      style={{
                        padding: " 0.375rem 0.75rem",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: "1.5",
                        color: "#212529",
                        backgroundColor: "#fff",
                        border: "1px solid #ced4da",
                        borderRadius: "0.25rem",
                      }}
                    />
                  </div>
                ) : (
                  <span className="description">{expense.description}</span>
                )}
              </td>
              <td>
                {context.progressDeletion.indexOf(expense._id) != -1 ? (
                  <div className="text-center text-danger">
                    <span>Deleting...</span>
                  </div>
                ) : (
                  <>
                    {submitingChanges ? (
                      <div className="text-center text-info">
                        <span>Updating...</span>
                      </div>
                    ) : (
                      <div className="icons-main-container">
                        {edit ? (
                          <div
                            onClick={() => handleSaveChanges()}
                            className="icon-container"
                            title="Save"
                          >
                            <FiSave size={20} color="#5e419a" />
                          </div>
                        ) : (
                          <div
                            onClick={() => setEdit(true)}
                            className="icon-container"
                            title="edit"
                          >
                            <FiEdit2 size={15} color="#5e419a" />
                          </div>
                        )}
                        {edit ? (
                          <div
                            onClick={() => setEdit(false)}
                            className="icon-container2"
                            title="Close"
                          >
                            <AiOutlineClose size={20} color="#ecaa11" />
                          </div>
                        ) : (
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
                        )}
                      </div>
                    )}
                  </>
                )}
              </td>
            </tr>
          ) : (
            <tr className="expense-row">
              <td>
                <span className="amount">
                  -{" "}
                  {new Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(expense.amount)}
                  &nbsp;Rwf
                </span>
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
