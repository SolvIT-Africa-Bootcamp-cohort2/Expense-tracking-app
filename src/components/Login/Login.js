import React from "react";
import "../../styles/login.scss";

function Login() {
  return (
    <div className="login-main-container">
      <div className="login-background-container">
        <div></div>
        <div></div>
      </div>
      <div className="form-main-container">
        <img src={require("../../assets/logo.png")} alt="logo" />
        <div className="form-container">
          <h2>Welcome to XPENSE</h2>
          <p>Login to continue</p>
          <form method="post">
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <button>Login</button>
          </form>
          <div className="forget-password-container">
            <a href="#">Forget password?</a>
          </div>
          <hr />
          <div className="form-footer2">
            <span>New?</span>
            <a href="/register">CREATE ACCOUNT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
