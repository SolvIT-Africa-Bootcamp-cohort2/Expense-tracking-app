import React, { useState, useEffect, useContext, useRef } from "react";
import { Modal } from "react-bootstrap";
import { UserMainContext } from "../../../../context/UserContext";
import "../../../../styles/addNew.scss";
import Axios from "axios";
import { backendUrl } from "../../../../controller/Config";

function AddNewIncome({
  showNewIncomeModal,
  handleCloseNewIncomeModal,
  getTransactions,
}) {
  const context = useContext(UserMainContext);
  const [amount, setAmount] = useState("");
  const [accountId, setAccountId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmiting, setIsSubmitting] = useState(false);

  const amountRef = useRef(null);
  const accountIdRef = useRef(null);
  const categoryNameRef = useRef(null);
  const descriptionRef = useRef(null);

  const [amountError, setAmountError] = useState("");
  const [accountIdError, setaccountIdError] = useState("");
  const [categoryNameError, setCategoryNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    if (amount.trim() === "") {
      setIsSubmitting(false);
      setAmountError("Please provide the amount");
      amountRef.current.classList.add("is-invalid");
      return;
    } else {
      setAmountError("");
      amountRef.current.classList.remove("is-invalid");
    }

    if (context.activeTab.id === null && context.activeTab.name === null) {
      if (accountId.trim() === "") {
        setIsSubmitting(false);
        setaccountIdError("Please select money account");
        accountIdRef.current.classList.add("is-invalid");
        return;
      } else {
        setaccountIdError("");
        accountIdRef.current.classList.remove("is-invalid");
      }
    } else {
      setAccountId(context.activeTab.id);
    }

    if (categoryName.trim() === "") {
      setIsSubmitting(false);
      setCategoryNameError("Please select category");
      categoryNameRef.current.classList.add("is-invalid");
      return;
    } else {
      setCategoryNameError("");
      categoryNameRef.current.classList.remove("is-invalid");
    }
    if (description.trim() === "") {
      setIsSubmitting(false);
      setDescriptionError("Please say something about this record");
      descriptionRef.current.classList.add("is-invalid");
      return;
    } else {
      setDescriptionError("");
      descriptionRef.current.classList.remove("is-invalid");
    }

    Axios.post(
      backendUrl + "/income",
      {
        description,
        amount,
        category: categoryName,
        accountId,
      },
      {
        headers: {
          Authorization: `Bearer ${context.token}`,
        },
      }
    )
      .then((res) => {
        console.log(res.data);
        handleCloseNewIncomeModal();
        getTransactions();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        try {
          if (error.response.Message) {
            setErrorMessage(error.response.Message);
          } else {
            setErrorMessage(error.message);
          }
        } catch (e) {
          setErrorMessage(error.message);
        }
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    setAmount("");
    setAccountId("");
    setCategoryName("");
    setDescription("");
    setErrorMessage("");
    setIsSubmitting("");
    setAmountError("");
    setaccountIdError("");
    setCategoryNameError("");
    setDescriptionError("");

    getCategories();
  }, [showNewIncomeModal]);

  const getCategories = () => {
    Axios.get(backendUrl + "/category", {
      headers: {
        Authorization: `Bearer ${context.token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.categories) {
          context.setCategories(res.data.categories);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal
      show={showNewIncomeModal}
      onHide={() => handleCloseNewIncomeModal()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="Modal-tittle">Add New Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addNew-main-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount"
                value={amount}
                ref={amountRef}
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="error">{amountError}</span>
            </div>
            {context.activeTab.id === null && (
              <div className="form-group">
                <label> Money account </label>
                <select
                  ref={accountIdRef}
                  className="form-select"
                  onChange={(e) => setAccountId(e.target.value)}
                >
                  <option value="" disabled={true} selected={true}>
                    Choose money account
                  </option>
                  {context.moneyAccounts.map((account, id) => (
                    <option key={id} value={account._id}>
                      {account.accountName}
                    </option>
                  ))}
                </select>
                <span className="error">{accountIdError}</span>
              </div>
            )}
            <div className="form-group">
              <label> Category </label>
              <select
                className="form-select"
                ref={categoryNameRef}
                onChange={(e) => setCategoryName(e.target.value)}
              >
                <option value="" disabled={true} selected={true}>
                  Choose the category
                </option>
                {context.categories.map((category, id) => (
                  <option key={id} value={category.categoryName}>
                    {category.categoryName}
                  </option>
                ))}
              </select>

              <span className="error">{categoryNameError}</span>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Tell us more"
                value={description}
                ref={descriptionRef}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span className="error">{descriptionError}</span>
            </div>
            {errorMessage != "" && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}
            <div className="mt-3 buttons-container">
              {isSubmiting ? (
                <button className="btn" type="button" disabled={true}>
                  Saving Income...
                </button>
              ) : (
                <button className="btn">Save Income</button>
              )}
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddNewIncome;
