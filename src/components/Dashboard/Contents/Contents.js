import React from "react";
import "../../../styles/contents.scss";
import AllAccounts from "./AllAccounts";
import Profile from "./Profile"

function Contents() {
  return (
    <div className="contents-main-container">
      {/* <AllAccounts /> */}
      <Profile/>
    </div>
  );
}

export default Contents;
