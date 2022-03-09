import React, { useState, useRef } from "react";
import "../../styles/login.scss";
import Axios from "axios";
import { backendUrl } from "../../controller/Config";
import { Spinner } from "react-bootstrap";

const logTheUserIn = async ({ token }) => {
  await localStorage.setItem("token", token);
  window.location = "/dashboard";
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");
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

    if (password.trim() === "") {
      passwordRef.current.classList.add("is-invalid");
      setPasswordErrorMessage("Enter your password");
      passwordRef.current.focus();
      setIsSubmitting(false);
      return;
    } else {
      setPasswordErrorMessage("");
      passwordRef.current.classList.remove("is-invalid");
    }
    Axios.post(backendUrl + "/user/login", { email, password })
      .then((res) => {
        setIsSubmitting(false);
        logTheUserIn(res.data);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setPassword("");
        console.log(JSON.stringify(error));
        try {
          if (error.response.data.Message) {
            setSubmissionError(error.response.data.Message);
          } else {
            setSubmissionError(
              "Something went wrong, try again later after sometime."
            );
          }
        } catch (err) {
          setSubmissionError(error.message);
        }
      });
  };

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
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                placeholder="Enter your email"
                disabled={isSubmitting}
                type="text"
                name="email"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="error">{emailErrorMessage}</span>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                ref={passwordRef}
                disabled={isSubmitting}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="error">{passwordErrorMessage}</span>
            </div>
            {submissionError != "" && (
              <div className="alert alert-danger mt-2">{submissionError}</div>
            )}
            {isSubmitting ? (
              <button type="button" disabled={true}>
                <Spinner animation="border" size="sm" role="status" />
                &nbsp; Logging in...
              </button>
            ) : (
              <button type="submit">Login</button>
            )}
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
