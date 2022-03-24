import React from "react";
import "../../styles/home.scss";
import { Nav, Navbar, Container } from "react-bootstrap";

// import "../../css/vendor/bootstrap.min.css";
// import "../css/all.min.css";
// import "../../css/fonts/flaticon.css";
// import "../../css/vendor/animate.min.css";
// import "../../css/vendor/aos.css";
// import "../../css/vendor/owl.carousel.min.css";
// import "../../css/vendor/slick.css";
// import "../../css/vendor/jquery.fancybox.min.css";

// import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&amp;display=swap";

function Home() {
  return (
    <div className="home-main-container">
      <div className="home-background-container">
        <header class="navbar navbar-sticky navbar-expand-lg navbar-dark">
          <div class="container position-relative">
            <a class="navbar-brand" href="/home">
              <img
                class="navbar-brand-regular"
                src={require("../../assets/logo.png")}
                alt="brand-logo"
              />
              <img
                class="navbar-brand-sticky"
                src="assets/img/logo/logo.png"
                alt="sticky brand-logo"
              />
            </a>
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-inner">
              <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-toggle="navbarToggler"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <nav>
                <ul class="navbar-nav" id="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link  h4 mr-3" href="/dashboard">
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle h4"
                      href="/login"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                    >
                      Login
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li class="dropdown-submenu">
                        <a
                          class="dropdown-item dropdown-toggle"
                          href="javascript:;"
                        >
                          Are you New
                          <span class="badge badge-pill badge-warning ml-2">
                            Here
                          </span>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="/register">
                              Register
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link scroll h4 " href="#About">
                      About us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className="body">
          <div class="row" style={{ height: "100vh" }}>
            <div class="col-md-9">
              <img
                className="photo1"
                src={require("../../assets/home1.png")}
                alt="home"
              />
            </div>
            <div class="col-md-3">
              <div className="front-container">
                <h1>
                  {" "}
                  Managing expense
                  <br />
                  made simple.
                </h1>
              </div>
              <div className="register-container">
                <a
                  class="btn btn-primary bg-warning"
                  href="/register"
                  role="button"
                >
                  Register for free
                </a>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <img
                className="photo"
                src={require("../../assets/expense.png")}
                alt="Expense"
              />
            </div>
            <div class="col-md-6">
              <h1>
                {" "}
                Keep every expense <br></br>
                crystal clear.
              </h1>
              <p>
                Get a full view so you know where to save. Track spending,{" "}
                <br />
                detect fraud, and keep tabs on rising subscription costs.
              </p>
              <a
                class="btn btn-primary bg-warning"
                href="/register"
                role="button"
              >
                Register for free
              </a>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-md-6">
              <h1>
                {" "}
                Spend smarter and <br></br>
                save more.
              </h1>
              <p>
                EXPENSE™ automatically help find savings you missed, <br />
                so you can make your money go further without breaking a sweat.
              </p>
              <a
                class="btn btn-primary bg-warning"
                href="/register"
                role="button"
              >
                Register for free
              </a>
            </div>
            <div class="col-md-6">
              <img
                className="photo"
                src={require("../../assets/save.png")}
                alt="save"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <img
                className="photo"
                src={require("../../assets/expense.png")}
                alt="Expense"
              />
            </div>
            <div class="col-md-6">
              <h1>
                Stay focused on your <br></br>
                financial goals.
              </h1>
              <p>
                Improve your spending habits with custom goals that keep you
                going. <br />
                Save for a home, conquer debt, and prepare for the future.
              </p>
              <a
                class="btn btn-primary bg-warning"
                href="/register"
                role="button"
              >
                Register for free
              </a>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <h1>
                No need for <br />
                multiple apps
              </h1>
              <p>
                Easily connect all your accounts. <br />
                From cash and credit to loans and investments, <br />
                you can see your complete financial picture in.
              </p>
              <a
                class="btn btn-primary bg-warning"
                href="/register"
                role="button"
              >
                Register for free
              </a>
            </div>
            <div class="col-md-6">
              <img
                className="photo"
                src={require("../../assets/expense.png")}
                alt="Expense"
              />
            </div>
          </div>
        </div>

        {/* //contact area  */}

        <section id="About" class="contact-area bg-gray ptb_100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-10 col-lg-8">
                <div class="section-heading text-center">
                  <h2 class="text-capitalize">About us</h2>
                  <p class="d-none d-sm-block mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati dignissimos quae quo ad iste ipsum
                    officiis deleniti asperiores sit.
                  </p>
                  <p class="d-block d-sm-none mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="contact-box text-center">
                  <p class="form-message"></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer" class="footer-area">
          <div class="footer-top ptb_100">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="footer-items">
                    <a class="navbar-brand" href="/home">
                      <img
                        class="logo"
                        src={require("../../assets/logo.png")}
                        alt="logo"
                      />
                    </a>
                    <p class="mt-2 mb-3">
                      Expense brings together everything from spending,
                      balances, and budgets to your credit score and more.
                      Access your financial life in one powerful app.
                    </p>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="footer-items">
                    <h3 class="footer-title mb-2">Useful Links</h3>
                    <ul>
                      <li class="py-2">
                        <a href="#">Home</a>
                      </li>
                      <li class="py-2">
                        <a href="/about">About Us</a>
                      </li>
                      <li class="py-2">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="footer-items">
                    <h3 class="footer-title mb-2">Product Help</h3>
                    <ul>
                      <li class="py-2">
                        <a href="#">FAQ</a>
                      </li>
                      <li class="py-2">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li class="py-2">
                        <a href="#">Support</a>
                      </li>
                      <li class="py-2">
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li class="py-2">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="footer-items">
                    <h3 class="footer-title mb-2">Contact us</h3>
                    <p>Tel: +250780000000</p>
                    <p>
                      Email:
                      <a href="mailto:contactus@expense.com">
                        contactus@expense.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                    <div class="copyright-left">
                      &copy; Copyrights 2022 XPENSE All rights reserved.
                    </div>

                    <div class="copyright-right">
                      Made By <a href="#"> EXPENSE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
