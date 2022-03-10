import React from "react";
import Shimmer from "react-shimmer-effect";

function Balance() {
  return (
    <div>
      <Shimmer>
        <div className="account-balance-container">
          <br />
          <br />
        </div>
      </Shimmer>
      <div className="expense-buttons-container">
        <Shimmer>
          <div />
        </Shimmer>
        <Shimmer>
          <div />
        </Shimmer>
      </div>
    </div>
  );
}

export default Balance;
