import React from "react";
import { Modal } from "react-bootstrap";
import "../../../../styles/addNew.scss";

function AddNewExpense({ showNewExpenseModal, handleCloseNewExpenseModal }) {
  return (
    <Modal
      show={showNewExpenseModal}
      onHide={() => handleCloseNewExpenseModal()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="Modal-tittle">Add New Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="addNew-main-container">
          <form>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the amount"
              />
            </div>
            <div className="form-group">
              <label> Category </label>
              <select className="form-select">
                <option value="" disabled={true} selected={true}>
                  Choose the category
                </option>
                <option value="Fees">fees</option>
                <option value="Transport">Transport</option>
                <option value=" Food">Food</option>
                <option value="Trip">Trip</option>
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Tell us more"
              />
            </div>
            <div className="mt-3 buttons-container">
              <button className="btn">Add New</button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddNewExpense;
