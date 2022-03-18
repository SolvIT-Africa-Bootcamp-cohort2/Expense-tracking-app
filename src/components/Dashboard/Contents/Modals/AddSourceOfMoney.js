import React, { useState, useRef, useContext, useEffect } from "react";
import Axios from "axios";
import { Modal, Spinner } from "react-bootstrap";
import "../../../../styles/modals.scss";
import { UserMainContext } from "../../../../context/UserContext";
import { backendUrl } from "../../../../controller/Config";
import { logout } from "../../../../helpers/logout";

function AddSourceOfMoney({
  showSourceOfMoneyModal,
  handleCloseSourceOfMoneyModal,
}) {
  const context = useContext(UserMainContext);
  const [accountName, setAccountName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accountNameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    if (accountName === "") {
      accountNameRef.current.classList.add("is-invalid");
      accountNameRef.current.focus();
      setMessage("Please enter the name");

      setIsSubmitting(false);
    } else if (accountName.length > 15) {
      accountNameRef.current.focus();
      accountNameRef.current.classList.add("is-invalid");
      setMessage("Please anter a name with less than 15 characters");
      setIsSubmitting(false);
    } else {
      accountNameRef.current.classList.remove("is-invalid");
      setMessage("");

      Axios.post(
        backendUrl + "/accounts",
        { accountName },
        {
          headers: {
            Authorization: `Bearer ${context.token}`,
          },
        }
      )
        .then((res) => {
          console.log("response", res.data);
          Axios.get(backendUrl + "/accounts", {
            headers: {
              Authorization: `Bearer ${context.token}`,
            },
          })
            .then((res) => {
              if (res.data.accounts) {
                context.setMoneyAccounts(res.data.accounts);
              }
            })
            .catch((error) => {
              console.log(error);
            });
          handleCloseSourceOfMoneyModal();
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.log(JSON.stringify(error));
          console.log(error.response);
          try {
            if (error.response.status === 403) {
              setErrorMessage("Invalid access token");
              logout();
            } else if (error.response.data.Message) {
              setErrorMessage(error.response.data.Message);
            } else {
              setErrorMessage(
                "Something went wrong, try again later after sometime."
              );
            }
          } catch (err) {
            setErrorMessage(error.message);
          }
        });
    }
  };

  useEffect(() => {
    setAccountName("");
    setErrorMessage("");
    setIsSubmitting(false);
  }, [showSourceOfMoneyModal]);

  return (
    <Modal
      show={showSourceOfMoneyModal}
      onHide={() => handleCloseSourceOfMoneyModal()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Money Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="create-source-of-money-main-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={accountName}
                ref={accountNameRef}
                maxLength={15}
                onChange={(e) => setAccountName(e.target.value)}
                placeholder="Enter the any name ex: mobile money, bank name,.."
              />
              {message !== "" && <span className="error">{message}</span>}
            </div>
            {errorMessage !== "" && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}
            <div className="mt-3 buttons-container">
              {isSubmitting ? (
                <button type="button" disabled={false} className="btn">
                  <Spinner animation="border" size="sm" role="status" />
                  &nbsp;Saving Account...
                </button>
              ) : (
                <button type="submit" className="btn">
                  Save Account
                </button>
              )}
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddSourceOfMoney;
