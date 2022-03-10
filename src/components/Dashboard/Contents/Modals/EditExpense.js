import React from 'react'
import { Modal } from "react-bootstrap"
import "../../../../styles/addNew.scss";



function EditExpense( {
    showEditExpenseModal,
    handleCloseEditExpenseModal,
}) {
  return (
    <Modal
    show={showEditExpenseModal}
    onHide={() => handleCloseEditExpenseModal()}
    backdrop="static"
    keyboard={false}
    >
    <Modal.Header closeButton>
    <Modal.Title className='Modal-tittle'>Edit Expense</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className="addNew-main-container">
            <form>
          <div className="form-group">
              <label>Edit Amount</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the amount"
            />
            </div>
            <div className='form-group'>
             <label> Edit Category </label>
          <select className="form-select">
          <option value="" disabled={true} selected>Choose the category</option>
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
            <button className="btn">Save Changes</button>
          </div>
        </form>
        </div>
    </Modal.Body>
    </Modal>
  )
}

export default EditExpense