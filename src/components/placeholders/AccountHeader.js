import React from "react";
import Shimmer from "react-shimmer-effect";

function AccountHeader() {
  return (
    <div className="header">
      <Shimmer>
        <div style={{ height: "20px", width: "100%" }}></div>
      </Shimmer>
      <div className="filtering">
        <div className="date-filter-main-container"></div>
        <div className="filter-main-container">
          <Shimmer>
            <div style={{ height: "20px", width: "100%" }}></div>
          </Shimmer>
          <Shimmer>
            <div style={{ height: "20px", width: "100px" }}></div>
          </Shimmer>
        </div>
      </div>
    </div>
  );
}

export default AccountHeader;
