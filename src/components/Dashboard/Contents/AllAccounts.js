import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import "../../../styles/all_accounts.scss";

function AllAccounts() {
  return (
    <div>
      <div className="header">
        <h2>All accounts</h2>
        <div className="filtering">
          <div className="date-filter-main-container">
            {/* <div>
              <span>From</span>
              <input type="date" />
            </div> */}
          </div>
          <div className="filter-main-container">
            <div>Filter</div>
            <div>
              <select>
                <option>Category A-Z</option>
                <option>Category Z-A</option>
                <option>Amount Low - High</option>
                <option>Amount Low - High</option>
                <option>Amount Low - High</option>
                <option>Amount High - Low</option>
                <option>Date ASC</option>
                <option>Date DESC</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="charts-main-container">
              <div className="pt-3">
                <div className="account-balance-container">
                  <h2>123,500 rwf</h2>
                  <span>12 feb 2020 - now</span>
                </div>
                <div className="expense-buttons-container">
                  <button>expense</button>
                  <button>income</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="expenses-table-main-container">
              <div className="pt-3">
                <table className="table">
                  <tbody>
                    <tr className="income-row">
                      <td>
                        <div className="transaction-dot"></div>
                      </td>
                      <td>
                        <span className="amount">123,000rwf</span>
                      </td>
                      <td>
                        <span className="date">14 feb 2021</span>
                      </td>
                      <td>
                        <span className="category">betting</span>
                      </td>
                      <td>
                        <span className="description">Testing description</span>
                      </td>
                      <td>
                        <div className="icon-container" title="edit">
                          <FiEdit2 size={15} color="#5e419a" />
                        </div>
                      </td>
                      <td>
                        <div className="icon-container2" title="delete">
                          <AiTwotoneDelete size={15} color="#eb6c6d" />
                        </div>
                      </td>
                    </tr>
                    <tr className="income-row">
                      <td>
                        <div className="transaction-dot"></div>
                      </td>
                      <td>
                        <span className="amount">123,000rwf</span>
                      </td>
                      <td>
                        <span className="date">14 feb 2021</span>
                      </td>
                      <td>
                        <span className="category">payment</span>
                      </td>
                      <td>
                        <span className="description">Testing description</span>
                      </td>
                      <td>
                        <div className="icon-container" title="edit">
                          <FiEdit2 size={15} color="#5e419a" />
                        </div>
                      </td>
                      <td>
                        <div className="icon-container2" title="delete">
                          <AiTwotoneDelete size={15} color="#eb6c6d" />
                        </div>
                      </td>
                    </tr>
                    <tr className="expense-row">
                      <td>
                        <div className="transaction-dot"></div>
                      </td>
                      <td>
                        <span className="amount">123,000rwf</span>
                      </td>
                      <td>
                        <span className="date">14 feb 2021</span>
                      </td>
                      <td>
                        <span className="category">food</span>
                      </td>
                      <td>
                        <span className="description">Testing description</span>
                      </td>
                      <td>
                        <div className="icon-container" title="edit">
                          <FiEdit2 size={15} color="#5e419a" />
                        </div>
                      </td>
                      <td>
                        <div className="icon-container2" title="delete">
                          <AiTwotoneDelete size={15} color="#eb6c6d" />
                        </div>
                      </td>
                    </tr>
                    <tr className="income-row">
                      <td>
                        <div className="transaction-dot"></div>
                      </td>
                      <td>
                        <span className="amount">123,000rwf</span>
                      </td>
                      <td>
                        <span className="date">14 feb 2021</span>
                      </td>
                      <td>
                        <span className="category">transfer</span>
                      </td>
                      <td>
                        <span className="description">Testing description</span>
                      </td>
                      <td>
                        <div className="icon-container" title="edit">
                          <FiEdit2 size={15} color="#5e419a" />
                        </div>
                      </td>
                      <td>
                        <div className="icon-container2" title="delete">
                          <AiTwotoneDelete size={15} color="#eb6c6d" />
                        </div>
                      </td>
                    </tr>
                    <tr className="expense-row">
                      <td>
                        <div className="transaction-dot"></div>
                      </td>
                      <td>
                        <span className="amount">123,000rwf</span>
                      </td>
                      <td>
                        <span className="date">14 feb 2021</span>
                      </td>
                      <td>
                        <span className="category">food</span>
                      </td>
                      <td>
                        <span className="description">Testing description</span>
                      </td>
                      <td>
                        <div className="icon-container" title="edit">
                          <FiEdit2 size={15} color="#5e419a" />
                        </div>
                      </td>
                      <td>
                        <div className="icon-container2" title="delete">
                          <AiTwotoneDelete size={15} color="#eb6c6d" />
                        </div>
                      </td>
                    </tr>
                    <tr className="income-row">
                      <td>
                        <div className="transaction-dot"></div>
                      </td>
                      <td>
                        <span className="amount">123,000rwf</span>
                      </td>
                      <td>
                        <span className="date">14 feb 2021</span>
                      </td>
                      <td>
                        <span className="category">food</span>
                      </td>
                      <td>
                        <span className="description">Testing description</span>
                      </td>
                      <td>
                        <div className="icon-container" title="edit">
                          <FiEdit2 size={15} color="#5e419a" />
                        </div>
                      </td>
                      <td>
                        <div className="icon-container2" title="delete">
                          <AiTwotoneDelete size={15} color="#eb6c6d" />
                        </div>
                      </td>
                    </tr>
                    <tr className="expense-row">
                      <td>
                        <div className="transaction-dot"></div>
                      </td>
                      <td>
                        <span className="amount">123,000rwf</span>
                      </td>
                      <td>
                        <span className="date">14 feb 2021</span>
                      </td>
                      <td>
                        <span className="category">food</span>
                      </td>
                      <td>
                        <span className="description">Testing description</span>
                      </td>
                      <td>
                        <div className="icon-container" title="edit">
                          <FiEdit2 size={15} color="#5e419a" />
                        </div>
                      </td>
                      <td>
                        <div className="icon-container2" title="delete">
                          <AiTwotoneDelete size={15} color="#eb6c6d" />
                        </div>
                      </td>
                    </tr>
                    <tr className="expense-row">
                      <td>
                        <div className="transaction-dot"></div>
                      </td>
                      <td>
                        <span className="amount">123,000rwf</span>
                      </td>
                      <td>
                        <span className="date">14 feb 2021</span>
                      </td>
                      <td>
                        <span className="category">food</span>
                      </td>
                      <td>
                        <span className="description">Testing description</span>
                      </td>
                      <td>
                        <div className="icon-container" title="edit">
                          <FiEdit2 size={15} color="#5e419a" />
                        </div>
                      </td>
                      <td>
                        <div className="icon-container2" title="delete">
                          <AiTwotoneDelete size={15} color="#eb6c6d" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllAccounts;
