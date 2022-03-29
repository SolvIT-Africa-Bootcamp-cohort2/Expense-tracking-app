import React from "react";
import "../../styles/home.scss";
import { Nav, Navbar, Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="nav-main-container">
        <div>
          <a href="/">
            <img
              src={require("../../assets/logo.png")}
              style={{ width: "100px" }}
            />
          </a>
        </div>
        <div className="nav-bar-right-contents">
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
      <section className="welcome-section">
        <div className="cene-container">
          <div className="white-container">
            <h2>Managing Expenses Made Simple</h2>
            <p>
              Expense tracker automatically help find saivings you missed, so
              that you can make your money go further without breaking a sweat.
            </p>
            <a href="/register">
              <button className="btn">Get started now!</button>
            </a>
          </div>
          <div className="blue-container"></div>
        </div>
        <div className="image-container">
          <img src={require("../../assets/people1.png")} />
        </div>
      </section>
      <section className="decription-section">
        <div className="container">
          <div className="text-center">
            <h2>Spend Smarter And Save More</h2>
            <p>
              Expense tracking app brings together everything from spending,
              balances, and budgetsto your credit score and more. Access your
              financial life in one powerful App.
            </p>
            <p>Access your financial life in one powerful App.</p>
            <button className="btn">Register For Free</button>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="py-5">
          <img
            src={require("../../assets/home1.png")}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="footer">Epense tracker &copy; 2022</div>
    </div>
  );
}

export default Home;
