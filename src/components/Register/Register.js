import React from "react";
import "../../styles/register.scss";

function register() {
  return (
    <div className="register-main-container">
      <div className="register-background-container">
        <div></div>
        <div></div>
      </div>
      <div className="form-main-container">
        <img src={require("../../assets/logo.png")} alt="logo" />
        <div className="form-container">
          <p>REGISTER</p>
          <form method="post">
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input className="form-control" placeholder="+250..." />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button>Register</button>
          </form>
          <div className="form-footer2">
            <span>Already have an account</span>
            <a href="../Login">LOGIN</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
