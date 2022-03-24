import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { UserMainContext } from "../../../../context/UserContext";
import DeleteCategory from "../Modals/DeleteCategory";
import Axios from "axios";
import { backendUrl } from "../../../../controller/Config";
import ContentEditable from "react-contenteditable";
import { FaSave } from "react-icons/fa";

export default class CategoryItem extends Component {
  static contextType = UserMainContext;
  constructor() {
    super();
    this.state = {
      showDeleteAlert: false,
      isDeleting: false,
      edit: false,
      isSubmitting: false,
      editCategoryName: "",
    };

    this.editCategoryNameRef = React.createRef(null);
  }

  setEdit() {
    this.setState((prevState) => {
      return { ...prevState, edit: !prevState.edit };
    });
  }

  handleCategoryChange = (e) => {
    this.setState((prevState) => {
      return { ...prevState, editCategoryName: e.target.value };
    });
  };

  handleEdit = () => {
    if (this.state.editCategoryName == this.props.category.categoryName) {
      this.setEdit();
    } else {
      this.setState((prevState) => {
        return { ...prevState, isSubmitting: true };
      });
      Axios.post(
        backendUrl + "/category/update",
        {
          id: this.props.category._id,
          categoryName: this.state.editCategoryName,
        },
        {
          headers: {
            Authorization: `Bearer ${this.context.token}`,
          },
        }
      )
        .then((res) => {
          console.log("response", res.data);
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

  deleteCategory = () => {
    this.setState((prevState) => {
      return { ...prevState, isDeleting: true };
    });
    this.setShowDeleteAlert(false);
    this.context.setProgressDeletion([
      ...this.context.progressDeletion,
      this.props.category._id,
    ]);

    Axios.post(
      backendUrl + "/category/remove",
      {
        id: this.props.category._id,
      },
      {
        headers: {
          Authorization: `Bearer ${this.context.token}`,
        },
      }
    )
      .then((res) => {
        this.context.setDeletedTransactions([
          this.context.deletedTransactions,
          this.props.category._id,
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
        editCategoryName: this.props.category.categoryName,
      };
    });
  }

  render() {
    return (
      <>
        {this.context.deletedTranscations.indexOf(this.props.category._id) ==
          -1 && (
          <>
            <tr>
              <td className="w-100">
                <div className="py-2">
                  {this.state.edit ? (
                    <ContentEditable
                      html={`${this.state.editCategoryName}`}
                      disabled={this.state.isSubmitting}
                      onChange={this.handleCategoryChange}
                      innerRef={this.editCategoryNameRef}
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
                      {this.editCategoryNameRef === ""
                        ? this.props.category.categoryName
                        : this.state.editCategoryName}
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
              <td>
                {this.context.progressDeletion.indexOf(
                  this.props.category._id
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
                        onClick={() => this.setEdit()}
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

            <DeleteCategory
              deleleteCategory={this.deleteCategory}
              showDeleteAlert={this.state.showDeleteAlert}
              setShowDeleteAlert={this.setShowDeleteAlert}
            />
          </>
        )}
      </>
    );
  }
}
