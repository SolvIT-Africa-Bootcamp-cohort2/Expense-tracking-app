import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { UserMainContext } from "../../../../context/UserContext";
import DeleteCategory from "../Modals/DeleteCategory";
import Axios from "axios";
import { backendUrl } from "../../../../controller/Config";

export default class CategoryItem extends Component {
  static contextType = UserMainContext;
  constructor() {
    super();
    this.state = {
      showDeleteAlert: false,
      isDeleting: false,
    };

    // this.amountRef = React.createRef(null);
    // this.categoryRef = React.createRef(null);
    // this.descriptionRef = React.createRef(null);
  }

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

  render() {
    return (
      <>
        {this.context.deletedTranscations.indexOf(this.props.category._id) ==
          -1 && (
          <>
            <tr>
              <td className="w-100">
                <div className="py-2">{this.props.category.categoryName}</div>
              </td>
              <td>
                <div className="delete-container">
                  <FiEdit2 size={20} color="blue" />
                </div>
              </td>
              <td>
                {this.context.progressDeletion.indexOf(
                  this.props.category._id
                ) != -1 && this.state.isDeleting ? (
                  <div className="delete-container">
                    <Spinner animation="border" size="sm" role="status" />
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
