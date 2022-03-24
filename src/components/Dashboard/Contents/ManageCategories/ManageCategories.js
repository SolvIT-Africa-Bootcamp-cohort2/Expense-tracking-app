import React, { useState, useEffect, useContext, useRef } from "react";
import { UserMainContext } from "../../../../context/UserContext";
import "../../../../styles/manageCategories.scss";
import ManageCategoriesPlaceholders from "../../../placeholders/ManageCategoriesPlaceholders";
import Axios from "axios";
import { backendUrl } from "../../../../controller/Config";
import { Spinner } from "react-bootstrap";
import CategoryItem from "./CategoryItem";

function ManageCategories() {
  const context = useContext(UserMainContext);
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState("");

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const categoryNameRef = useRef(null);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    Axios.get(backendUrl + "/category", {
      headers: {
        Authorization: `Bearer ${context.token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setIsLoadingCategories(false);
        }, 2000);
        if (res.data.categories) {
          setCategories(res.data.categories);
          context.setCategories(res.data.categories);
        }
      })
      .catch((error) => {
        setTimeout(() => {
          setIsLoadingCategories(false);
        }, 2000);
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");
    setSubmissionSuccess("");
    if (categoryName.trim() === "") {
      categoryNameRef.current.focus();
      categoryNameRef.current.classList.add("is-invalid");
      setSubmissionError("Please enter category name.");
      setIsSubmitting(false);
    } else {
      categoryNameRef.current.classList.remove("is-invalid");
      Axios.post(
        backendUrl + "/category",
        { categoryName },
        {
          headers: {
            Authorization: `Bearer ${context.token}`,
          },
        }
      )
        .then((res) => {
          //   console.log(res.data);
          setCategoryName("");
          getCategories();
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.Message);
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="main-container">
      {isLoadingCategories ? (
        <ManageCategoriesPlaceholders />
      ) : (
        <div>
          <h3>Manage categories</h3>
          <div className="row mt-3">
            <div className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <b>Add new category</b>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        placeholder="Enter the name. ex: transport"
                        className="form-control"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        ref={categoryNameRef}
                      />
                      <span className="error">{submissionError}</span>
                    </div>
                    <div className="submit-button-container">
                      {isSubmiting ? (
                        <button className="btn" type="button" disabled={true}>
                          <Spinner animation="border" size="sm" role="status" />
                          &nbsp;Saving category...
                        </button>
                      ) : (
                        <button className="btn">Save category</button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <table className="w-100">
                    <thead>
                      <th
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: "#ccc",
                        }}
                      >
                        Names
                      </th>
                      <th
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: "#ccc",
                        }}
                      ></th>
                      <th
                        style={{
                          borderBottomWidth: 1,
                          borderBottomColor: "#ccc",
                        }}
                      >
                        Action
                      </th>
                    </thead>
                    <tbody>
                      {categories.length > 0 ? (
                        <>
                          {categories.map((category, id) => (
                            <CategoryItem key={id} category={category} />
                          ))}
                        </>
                      ) : (
                        <tr>
                          <td colSpan={3}>No categories found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageCategories;
