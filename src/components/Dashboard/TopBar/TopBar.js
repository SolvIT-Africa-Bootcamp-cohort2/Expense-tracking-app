import React, { useContext } from "react";
import "../../../styles/topbar.scss";
// import { FiSearch, FiBell, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { UserMainContext } from "../../../context/UserContext";

function TopBar() {
  const context = useContext(UserMainContext);
  return (
    <div
      className="topbar-main-container"
      style={{ cursor: "pointer" }}
      onClick={() => {
        context.setActiveTab({ id: null, name: "profile" });
      }}
    >
      <div>
        <a href="/home">
          <img src={require("../../../assets/logo.png")} />
        </a>
      </div>
      <div className="user-profile-container">
        <div className="profile-image-container">
          <AiOutlineUser size={20} />
        </div>
        <div className="username-container">
          {context?.user !== null && (
            <>{context?.user.username.split(" ")[0]}</>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
