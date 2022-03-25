import React, { useEffect, useState, useContext } from "react";
import Contents from "./Contents/Contents";
import Sidebar from "./Sidebar";

import "../../styles/dashboard.scss";
import TopBar from "./TopBar/TopBar";
import { UserMainContext } from "../../context/UserContext";
import Axios from "axios";
import { backendUrl } from "../../controller/Config";

function Dashboard() {
  const context = useContext(UserMainContext);
  useEffect(() => {
    Axios.get(backendUrl + "/user", {
      headers: {
        Authorization: `Bearer ${context.token}`,
      },
    })
      .then((res) => {
        console.log(res);
        context.setUser(res.data.users[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="dashboard-main-container">
      <TopBar />
      <Sidebar />
      <Contents />
    </div>
  );
}

export default Dashboard;
