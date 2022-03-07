import React, { useEffect } from "react";
import Contents from "./Contents/Contents";
import Sidebar from "./Sidebar";

import "../../styles/dashboard.scss";
import TopBar from "./TopBar/TopBar";

function Dashboard() {
  useEffect(() => {}, []);
  return (
    <div className="dashboard-main-container">
      <TopBar />
      <Sidebar />
      <Contents />
    </div>
  );
}

export default Dashboard;
