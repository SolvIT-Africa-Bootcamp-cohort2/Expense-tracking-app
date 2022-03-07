import React, { useState, useRef } from "react";
import "../../styles/register.scss";
import Axios from "axios";
import { backendUrl } from "../../controller/Config";
import { Spinner } from "react-bootstrap";

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
    setFormSubmissionSuccessMessage("");
    if (names.trim() === "") {
      namesRef.current.classList.add("is-invalid");
      namesRef.current.focus();
      setNamesErrorMessage("Names is required");
      setIsSubmitting(false);
      return;
    } else {
      setNamesErrorMessage("");
      namesRef.current.classList.remove("is-invalid");
    }

    if (email.trim() === "") {
      emailRef.current.classList.add("is-invalid");
      setEmailErrorMessage("Please enter a valid email address");
      emailRef.current.focus();
      setIsSubmitting(false);
      return;
    } else {
      setEmailErrorMessage("");
      emailRef.current.classList.remove("is-invalid");
    }

    if (phone.trim() === "") {
      phoneRef.current.classList.add("is-invalid");
      setPhoneErrorMessage("Enter your phone number");
      phoneRef.current.focus();
      setIsSubmitting(false);
      return;
    } else {
      setPhoneErrorMessage("");
      phoneRef.current.classList.remove("is-invalid");
    }

    if (password.trim() === "") {
      passwordRef.current.classList.add("is-invalid");
      setPasswordErrorMessage("Enter your password");
      passwordRef.current.focus();
      setIsSubmitting(false);
      return;
    } else if (password.length <= 3) {
      passwordRef.current.classList.add("is-invalid");
      setPasswordErrorMessage("Password must be greater than 3 characters");
      passwordRef.current.focus();
      setIsSubmitting(false);
      return;
    } else {
      setPasswordErrorMessage("");
      passwordRef.current.classList.remove("is-invalid");
    }

    if (password !== password2) {
      password2Ref.current.classList.add("is-invalid");
      setConfirmPasswordErrorMessage("Passwords do not match");
      password2Ref.current.focus();
      setIsSubmitting(false);
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
        setFormSubmissionSuccessMessage(
          "User registration has been completed success full. Please open a verification link that we have sent to " +
            email
        );
        setNames("");
        setEmail("");
        setPhone("");
        setPassword("");
        setPassword2("");
      })
      .catch((error) => {
        console.log(error.response);
        setIsSubmitting(false);
        setPassword("");
        setPassword2("");
        setFormSubmissionError(error.response.data.Message);
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
              <span className="error">{confirmPasswordErrorMessage}</span>
            </div>
            {formSubmissionError != "" && (
              <div className="alert alert-danger my-2">
                {formSubmissionError}.
              </div>
            )}

            {formSubmissionSuccessMessage != "" && (
              <div className="alert alert-success my-2">
                {formSubmissionSuccessMessage}.
              </div>
            )}
            {isSubmitting ? (
              <button type="button" disabled={true}>
                <Spinner animation="border" size="sm" role="status" />
                &nbsp;Registering...
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
