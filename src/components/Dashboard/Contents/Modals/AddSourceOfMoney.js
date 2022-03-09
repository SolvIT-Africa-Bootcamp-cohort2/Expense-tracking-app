import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import "../../../../styles/modals.scss";

function AddSourceOfMoney({
  showSourceOfMoneyModal,
  handleCloseSourceOfMoneyModal,
}) {
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
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the any name ex: mobile money, bank name,.."
              />
            </div>
            <div className="mt-3 buttons-container">
              <button className="btn">Save Account</button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddSourceOfMoney;
