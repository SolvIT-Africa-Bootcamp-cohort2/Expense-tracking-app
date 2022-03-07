import React, { useState, useRef } from "react";
import "../../styles/register.scss";
import Axios from "axios";
import { backendUrl } from "../../controller/Config";

function Register() {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmissionError, setFormSubmissionError] = useState("");
  const [formSubmissionSuccessMessage, setFormSubmissionSuccessMessage] =
    useState("");

  const namesRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);

  const [namesErrorMessage, setNamesErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormSubmissionError("");
    setFormSubmissionSuccessMessage("");
    if (names.trim() === "") {
      namesRef.current.classList.add("is-invalid");
      namesRef.current.focus();
      setNamesErrorMessage("Names is required");
      return;
    } else {
      setNamesErrorMessage("");
      namesRef.current.classList.remove("is-invalid");
    }

    if (email.trim() === "") {
      emailRef.current.classList.add("is-invalid");
      setEmailErrorMessage("Please enter a valid email address");
      emailRef.current.focus();
      return;
    } else {
      setEmailErrorMessage("");
      emailRef.current.classList.remove("is-invalid");
    }

    if (phone.trim() === "") {
      phoneRef.current.classList.add("is-invalid");
      setPhoneErrorMessage("Enter your phone number");
      phoneRef.current.focus();
      return;
    } else {
      setPhoneErrorMessage("");
      phoneRef.current.classList.remove("is-invalid");
    }

    if (password.trim() === "") {
      passwordRef.current.classList.add("is-invalid");
      setPasswordErrorMessage("Enter your password");
      passwordRef.current.focus();
      return;
    } else if (password.length <= 3) {
      passwordRef.current.classList.add("is-invalid");
      setPasswordErrorMessage("Password must be greater than 3 characters");
      passwordRef.current.focus();
      return;
    } else {
      setPasswordErrorMessage("");
      passwordRef.current.classList.remove("is-invalid");
    }

    if (password !== password2) {
      password2Ref.current.classList.add("is-invalid");
      setConfirmPasswordErrorMessage("Passwords do not match");
      password2Ref.current.focus();
      return;
    } else {
      setConfirmPasswordErrorMessage("");
      password2Ref.current.classList.remove("is-invalid");
    }

    setPasswordErrorMessage("");
    Axios.post(backendUrl + "/user/register", {
      username: names,
      email: email,
      gender: "male",
      phone: phone,
      password: password,
    })
      .then(function (response) {
        console.log(response);
        setIsSubmitting(false);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setFormSubmissionError(error.response.data);
      });
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
                ref={namesRef}
              />
              <span className="error">{namesErrorMessage}</span>
            </div>
            <div className="form-group">
              <span>Email</span>
              <input
                className="form-control"
                type="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
              />
              <span className="error">{emailErrorMessage}</span>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                className="form-control"
                type="phone"
                id="phone"
                value={phone}
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
                ref={phoneRef}
              />
              <span className="error">{phoneErrorMessage}</span>
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
                ref={passwordRef}
              />
              <span className="error">{passwordErrorMessage}</span>
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
                ref={password2Ref}
              />
              <span className="error">{confirmPasswordErrorMessage}</span>
            </div>
            {formSubmissionError != "" && (
              <div className="alert alert-danger my-2">
                {formSubmissionError}.
              </div>
            )}
            {isSubmitting ? (
              <button type="button" disabled={true}>
                Registering...
              </button>
            ) : (
              <button type="submit">Register</button>
            )}
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
