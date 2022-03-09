import React, {useState} from 'react'
import { Modal, Dropdown, CustomMenu, CustomToggle } from "react-bootstrap";
import "../../../../styles/addNew.scss";


function AddNewIncome( {
    showNewIncomeModal,
    handleCloseNewIncomeModal,
  }) {
  return (
      <Modal
      show={showNewIncomeModal}
      onHide={() => handleCloseNewIncomeModal()}
      backdrop="static"
      keyboard={false}
      >
      <Modal.Header closeButton>
      <Modal.Title className='Modal-tittle'>Add New Income</Modal.Title>
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
              {/* <div className='form-control'>
              <Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      Custom toggle
    </Dropdown.Toggle>
    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1">Red</Dropdown.Item>
      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Orange
      </Dropdown.Item>
      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
              </div> */}
              <div className="form-group">
            <label>Description</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter the amount"
              />
              </div>
            <div className="mt-3 buttons-container">
              <button className="btn">Save Account</button>
            </div>
          </form>
          </div>
      </Modal.Body>
      </Modal>
  )
}


export default AddNewIncome