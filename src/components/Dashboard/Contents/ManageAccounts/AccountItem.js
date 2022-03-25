import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { UserMainContext } from "../../../../context/UserContext";
import DeleteAccount from "../Modals/DeleteAccount";
import Axios from "axios";
import { backendUrl } from "../../../../controller/Config";
import { Spinner } from "react-bootstrap";
import ContentEditable from "react-contenteditable";
import { FaSave } from "react-icons/fa";

export default class AccountItem extends Component {
  static contextType = UserMainContext;
  constructor() {
    super();
    this.state = {
      showDeleteAlert: false,
      isDeleting: false,
      edit: false,
      isSubmitting: false,
      editAccountName: "",
    };

    this.editAccountNameRef = React.createRef(null);
  }

  setEdit() {
    this.setState((prevState) => {
      return { ...prevState, edit: !prevState.edit };
    });
  }

  handleCategoryChange = (e) => {
    this.setState((prevState) => {
      return { ...prevState, editAccountName: e.target.value };
    });
  };

  handleEdit = () => {
    if (this.state.editAccountName == this.props.account.accountName) {
      this.setEdit();
    } else {
      this.setState((prevState) => {
        return { ...prevState, isSubmitting: true };
      });
      Axios.post(
        backendUrl + "/accounts/update",
        {
          id: this.props.account._id,
          accountName: this.state.editAccountName,
        },
        {
          headers: {
            Authorization: `Bearer ${this.context.token}`,
          },
        }
      )
        .then((res) => {
          console.log("response", res.data);
          this.props.fetchAccounts();
          this.setState((prevState) => {
            return { ...prevState, isSubmitting: false };
          });
          this.setEdit();
        })
        .catch((error) => {
          console.log(error);
          this.setState((prevState) => {
            return { ...prevState, isSubmitting: false };
          });
        });
    }
  };

  deleteAccount = () => {
    this.setState((prevState) => {
      return { ...prevState, isDeleting: true };
    });
    this.setShowDeleteAlert(false);
    this.context.setProgressDeletion([
      ...this.context.progressDeletion,
      this.props.account._id,
    ]);

    Axios.post(
      backendUrl + "/accounts/remove",
      {
        id: this.props.account._id,
      },
      {
        headers: {
          Authorization: `Bearer ${this.context.token}`,
        },
      }
    )
      .then((res) => {
        this.props.fetchAccounts();
        this.context.setDeletedTransactions([
          this.context.deletedTransactions,
          this.props.account._id,
        ]);
        console.log(this.context.deletedTransactions);
      })
      .catch((error) => {
        console.log(error);
        this.setState((prevState) => {
          return { ...prevState, isDeleting: false };
        });
      });
  };

  setShowDeleteAlert = (value) => {
    this.setState((prevState) => {
      return { ...prevState, showDeleteAlert: value };
    });
  };

  componentDidMount() {
    this.setState((prevState) => {
      return {
        ...prevState,
        editAccountName: this.props.account.accountName,
      };
    });
  }

  render() {
    return (
      <>
        {this.context.deletedTranscations.indexOf(this.props.account._id) ==
          -1 && (
          <>
            <tr>
              <td className="w-100">
                <div className="py-2">
                  {this.state.edit ? (
                    <ContentEditable
                      html={`${this.state.editAccountName}`}
                      disabled={this.state.isSubmitting}
                      onChange={this.handleCategoryChange}
                      innerRef={this.editAccountNameRef}
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
                  ) : (
                    <span>
                      {this.state.editAccountName === ""
                        ? this.props.account.accountName
                        : this.state.editAccountName}
                    </span>
                  )}
                </div>
              </td>
              <td>
                {this.state.edit ? (
                  <div
                    className="delete-container"
                    style={{ cursor: "pointer" }}
                    onClick={this.handleEdit}
                  >
                    <FaSave size={20} color="blue" />
                  </div>
                ) : (
                  <div
                    className="delete-container"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      this.setEdit();
                    }}
                  >
                    <FiEdit2 size={20} color="blue" />
                  </div>
                )}
              </td>
              <td className="px-3">
                {this.context.progressDeletion.indexOf(
                  this.props.account._id
                ) != -1 && this.state.isDeleting ? (
                  <div className="delete-container">
                    <Spinner animation="border" size="sm" role="status" />
                  </div>
                ) : (
                  <>
                    {this.state.edit ? (
                      <div
                        className="delete-container"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.setEdit();
                          this.setState((prevState) => {
                            return {
                              ...prevState,
                              editAccountName: this.props.account.accountName,
                            };
                          });
                        }}
                      >
                        <AiOutlineClose size={20} color="blue" />
                      </div>
                    ) : (
                      <div
                        className="delete-container"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.setShowDeleteAlert(true);
                        }}
                      >
                        <AiOutlineClose size={20} color="red" />
                      </div>
                    )}
                  </>
                )}
              </td>
            </tr>

            <DeleteAccount
              deleteAccount={this.deleteAccount}
              showDeleteAlert={this.state.showDeleteAlert}
              setShowDeleteAlert={this.setShowDeleteAlert}
            />
          </>
        )}
      </>
    );
  }
}
