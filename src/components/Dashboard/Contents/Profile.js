import React, { useContext } from "react";
import { UserMainContext } from "../../../context/UserContext";
import "../../../styles/profile.scss";

function Profile() {
  const context = useContext(UserMainContext);
  return (
    <div className="p-3">
      <h2>My Profile</h2>
      <div className="card mt-4">
        <div className="card-body info-container">
          <div>
            <b>Full name</b>
            <p className="m-0 p-0">{context.user.username}</p>
          </div>
          <div>
            <span className="edit">Edit</span>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body info-container">
          <div>
            <b>Email address</b>
            <p className="m-0 p-0">{context.user.email}</p>
          </div>
          <div>
            <span className="edit">Edit</span>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body info-container">
          <div>
            <b>Phone number</b>
            <p className="m-0 p-0">{context.user.phone}</p>
          </div>
          <div>
            <span className="edit">Edit</span>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body info-container">
          <div>
            <b>Gender</b>
            <p className="m-0 p-0">{context.user.gender}</p>
          </div>
          <div>
            <span className="edit">Edit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
