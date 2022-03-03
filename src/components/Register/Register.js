import React, { useState } from "react";
import "../../styles/register.scss";
import Axios from "axios";

function Register() {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (password !== password2) {
      setPasswordErrorMessage("Password don't match");
    } else {
      setPasswordErrorMessage("");
      Axios.post("API_URL", {
        names: names,
        email: email,
        phone: phone,
        password: password,
        password2: password2,
      }).then(function (response) {
        console.log(response);
      });
    }
  }

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
          <form onSubmit={onSubmit} method="post">
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                id="name"
                value={names}
                placeholder="Enter your name"
                onChange={(e) => setNames(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                className="form-control"
                type="phone"
                id="phone"
                value={phone}
                placeholder="+250..."
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                className="form-control"
                type="password"
                id="password2"
                value={password2}
                placeholder="Confirm  password"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <div className="PasswordErrorMessage">{passwordErrorMessage}</div>
            <button type="submit">Register</button>
          </form>
          <div className="form-footer2">
            <span>Already have an account</span>
            <a href="/Login">LOGIN</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
