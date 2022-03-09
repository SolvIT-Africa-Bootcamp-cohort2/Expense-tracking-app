import React, { useEffect, useState, useContext } from "react";
import Contents from "./Contents/Contents";
import Sidebar from "./Sidebar";

import "../../styles/dashboard.scss";
import TopBar from "./TopBar/TopBar";
import { UserMainContext } from "../../context/UserContext";

function Dashboard() {
  const context = useContext(UserMainContext);
  return (
    <div className="dashboard-main-container">
      <TopBar />
      <Sidebar />
      <Contents />
    </div>
  );
}

export default Dashboard;
