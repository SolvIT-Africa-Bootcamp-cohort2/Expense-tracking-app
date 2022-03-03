import React from "react";
import "../../../styles/all_accounts.scss";
import CircularPie from "./Charts/CircularPie";
import LineChart from "./Charts/LineChart";
import Expenses from "./Expenses";

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
                <LineChart />
                <CircularPie />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="expenses-table-main-container">
              <div className="pt-3">
                <Expenses />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllAccounts;
