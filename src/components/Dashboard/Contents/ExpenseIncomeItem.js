import React, { Component } from "react";
import { AiOutlineClose, AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2, FiSave } from "react-icons/fi";
import moment from "moment";
import { UserMainContext } from "../../../context/UserContext";
import ContentEditable from "react-contenteditable";
import Axios from "axios";
import { backendUrl } from "../../../controller/Config";

export default class ExpenseIncomeItem extends Component {
  static contextType = UserMainContext;
  constructor() {
    super();
    this.state = {
      editAmount: "",
      editCategory: "",
      editDescription: "",
      submitingChanges: false,
      edit: false,
    };

    this.amountRef = React.createRef(null);
    this.categoryRef = React.createRef(null);
    this.descriptionRef = React.createRef(null);
  }

  toggleEdit = () => {
    // this.setState({ edit: true });
    this.setState((prevState) => {
      return { ...prevState, edit: !prevState.edit };
    });
  };

  handleCategoryChange = (e) => {
    this.setState((prevState) => {
      return { ...prevState, editCategory: e.target.value };
    });
  };

  handleAmountChange = (e) => {
    this.setState((prevState) => {
      return { ...prevState, editAmount: e.target.value };
    });
  };

  handleDescriptionChange = (e) => {
    this.setState((prevState) => {
      return { ...prevState, editDescription: e.target.value };
    });
  };

  handlUpdate() {
    this.setState((prevState) => {
      return { ...prevState, submitingChanges: true };
    });
    const amount = parseFloat(this.state.editAmount);
    if (!amount) {
      this.setState((prevState) => {
        return { ...prevState, submitingChanges: false };
      });
      this.amountRef.current.focus();
    } else if (this.state.editCategory.trim() === "") {
      this.setState((prevState) => {
        return { ...prevState, submitingChanges: false };
      });
      this.categoryRef.current.focus();
    } else if (this.state.editDescription.trim() === "") {
      this.setState((prevState) => {
        return { ...prevState, submitingChanges: false };
      });
      this.descriptionRef.current.focus();
    } else {
      if (
        this.state.editAmount == this.props.expense.amount &&
        this.state.editCategory == this.props.expense.category &&
        this.state.editDescription == this.props.expense.description
      ) {
        this.setState((prevState) => {
          return { ...prevState, submitingChanges: false, edit: false };
        });
      } else {
        let endpoint = null;
        if (this.props.expense.type === "income") {
          endpoint = backendUrl + "/income/update";
        } else {
          endpoint = backendUrl + "/expense/update";
        }
        Axios.post(
          endpoint,
          {
            id: this.props.expense._id,
            amount: this.state.editAmount,
            category: this.state.editCategory,
            description: this.state.editDescription,
          },
          {
            headers: {
              Authorization: `Bearer ${this.context.token}`,
            },
          }
        )
          .then((res) => {
            // console.log(res.data);
            this.setState((prevState) => {
              return { ...prevState, submitingChanges: false, edit: false };
            });
            this.props.getTransactions2();
          })
          .catch((error) => {
            this.setState((prevState) => {
              return { ...prevState, submitingChanges: false };
            });
            console.log(error);
          });
      }
    }
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {
        ...prevState,
        editAmount: this.props.expense.amount,
        editCategory: this.props.expense.category,
        editDescription: this.props.expense.description,
      };
    });
  }

  render() {
    return (
      <>
        {this.context.deletedTranscations.indexOf(this.props.expense._id) ===
          -1 && (
          <>
            {this.props.expense.type == "income" ? (
              <tr className="income-row">
                <td>
                  {this.state.edit ? (
                    <div style={{ display: "inline" }}>
                      <ContentEditable
                        html={`${this.state.editAmount}`}
                        disabled={false}
                        onChange={this.handleAmountChange}
                        innerRef={this.amountRef}
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
                    <>
                      {this.state.editAmount !== "" ? (
                        <span className="amount">
                          +
                          {new Intl.NumberFormat("en", {
                            maximumSignificantDigits: 3,
                          }).format(this.state.editAmount)}
                          &nbsp;Rwf
                        </span>
                      ) : (
                        <span className="amount">
                          +
                          {new Intl.NumberFormat("en", {
                            maximumSignificantDigits: 3,
                          }).format(this.props.expense.amount)}
                          &nbsp;Rwf
                        </span>
                      )}
                    </>
                  )}
                </td>
                <td>
                  <span className="date">
                    {moment(this.props.expense.created_at).format("DD-MM-YYYY")}
                  </span>
                </td>
                <td>
                  {this.state.edit ? (
                    <div style={{ display: "inline" }}>
                      <select
                        className="form-control"
                        style={{ width: 100 }}
                        onChange={this.handleCategoryChange}
                        ref={this.categoryRef}
                      >
                        <option value={this.props.expense.category}>
                          {this.state.editCategory !== ""
                            ? this.state.editCategory
                            : this.props.expense.category}
                        </option>
                        {this.context.categories.map((category, id) => (
                          <>
                            {category.categoryName !==
                              this.state.editCategory && (
                              <option key={id} value={category.categoryName}>
                                {category.categoryName}
                              </option>
                            )}
                          </>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <span className="category">
                      {this.state.editCategory !== ""
                        ? this.state.editCategory
                        : this.props.expense.category}
                    </span>
                  )}
                </td>
                <td>
                  {this.state.edit ? (
                    <div style={{ display: "inline" }}>
                      <ContentEditable
                        html={this.state.editDescription}
                        disabled={this.state.submitingChanges}
                        onChange={this.handleDescriptionChange}
                        innerRef={this.descriptionRef}
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
                    <span className="description">
                      {this.state.editDescription !== ""
                        ? this.state.editDescription
                        : this.props.expense.description}
                    </span>
                  )}
                </td>
                <td>
                  {this.context.progressDeletion.indexOf(
                    this.props.expense._id
                  ) != -1 ? (
                    <div className="text-center text-danger">
                      <span>Deleting...</span>
                    </div>
                  ) : (
                    <>
                      {this.state.submitingChanges ? (
                        <div className="text-center text-info">
                          <span>Updating...</span>
                        </div>
                      ) : (
                        <div className="icons-main-container">
                          {this.state.edit ? (
                            <div
                              onClick={() => this.handlUpdate()}
                              className="icon-container"
                              title="Save"
                            >
                              <FiSave size={20} color="#5e419a" />
                            </div>
                          ) : (
                            <div
                              onClick={this.toggleEdit}
                              className="icon-container"
                              title="edit"
                            >
                              <FiEdit2 size={15} color="#5e419a" />
                            </div>
                          )}
                          {this.state.edit ? (
                            <div
                              onClick={this.toggleEdit}
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
                                this.props.setTransactionToBeDeleted(
                                  this.props.expense
                                );
                                this.props.setShowDeleteAlert(true);
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
                  {this.state.edit ? (
                    <div style={{ display: "inline" }}>
                      <ContentEditable
                        html={`${this.state.editAmount}`}
                        disabled={false}
                        onChange={this.handleAmountChange}
                        innerRef={this.amountRef}
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
                    <>
                      {this.state.editAmount !== "" ? (
                        <span className="amount">
                          -
                          {new Intl.NumberFormat("en", {
                            maximumSignificantDigits: 3,
                          }).format(this.state.editAmount)}
                          &nbsp;Rwf
                        </span>
                      ) : (
                        <span className="amount">
                          -
                          {new Intl.NumberFormat("en", {
                            maximumSignificantDigits: 3,
                          }).format(this.props.expense.amount)}
                          &nbsp;Rwf
                        </span>
                      )}
                    </>
                  )}
                </td>
                <td>
                  <span className="date">
                    {/* {moment(expense.created_at).format("DD-MM-YYYY hh:mm:ss")} */}
                    {moment(this.props.expense.created_at).format("DD-MM-YYYY")}
                  </span>
                </td>
                <td>
                  {this.state.edit ? (
                    <div style={{ display: "inline" }}>
                      <select
                        className="form-control"
                        style={{ width: 100 }}
                        onChange={this.handleCategoryChange}
                        ref={this.categoryRef}
                      >
                        <option value={this.props.expense.category}>
                          {this.state.editCategory !== ""
                            ? this.state.editCategory
                            : this.props.expense.category}
                        </option>
                        {this.context.categories.map((category, id) => (
                          <>
                            {category.categoryName !==
                              this.state.editCategory && (
                              <option key={id} value={category.categoryName}>
                                {category.categoryName}
                              </option>
                            )}
                          </>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <span className="category">
                      {this.state.editCategory !== ""
                        ? this.state.editCategory
                        : this.props.expense.category}
                    </span>
                  )}
                </td>
                <td>
                  {this.state.edit ? (
                    <div style={{ display: "inline" }}>
                      <ContentEditable
                        html={this.state.editDescription}
                        disabled={this.state.submitingChanges}
                        onChange={this.handleDescriptionChange}
                        innerRef={this.descriptionRef}
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
                    <span className="description">
                      {this.state.editDescription !== ""
                        ? this.state.editDescription
                        : this.props.expense.description}
                    </span>
                  )}
                </td>
                <td>
                  {this.context.progressDeletion.indexOf(
                    this.props.expense._id
                  ) != -1 ? (
                    <div className="text-center text-danger">
                      <span>Deleting...</span>
                    </div>
                  ) : (
                    <>
                      {this.state.submitingChanges ? (
                        <div className="text-center text-info">
                          <span>Updating...</span>
                        </div>
                      ) : (
                        <div className="icons-main-container">
                          {this.state.edit ? (
                            <div
                              onClick={() => this.handlUpdate()}
                              className="icon-container"
                              title="Save"
                            >
                              <FiSave size={20} color="#5e419a" />
                            </div>
                          ) : (
                            <div
                              onClick={this.toggleEdit}
                              className="icon-container"
                              title="edit"
                            >
                              <FiEdit2 size={15} color="#5e419a" />
                            </div>
                          )}
                          {this.state.edit ? (
                            <div
                              onClick={this.toggleEdit}
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
                                this.props.setTransactionToBeDeleted(
                                  this.props.expense
                                );
                                this.props.setShowDeleteAlert(true);
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
            )}
          </>
        )}
      </>
    );
  }
}
