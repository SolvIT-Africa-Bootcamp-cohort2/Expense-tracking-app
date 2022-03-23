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
        <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
          <div className="container position-relative">
            <a className="navbar-brand" href="index.html">
              <img
                className="navbar-brand-regular"
                src={require("../../assets/logo.png")}
                alt="brand-logo"
              />
              <img
                className="navbar-brand-sticky"
                src="assets/img/logo/logo.png"
                alt="sticky brand-logo"
              />
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-inner">
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="navbarToggler"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <nav>
                <ul className="navbar-nav" id="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle h4"
                      href="javascript:;"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="index.html">Homepage-1</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="index-2.html">Homepage-2</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="index-3.html">Homepage-3</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="index-4.html">Homepage-4</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="index-5.html">Homepage-5</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="index-6.html">Homepage-6</a>
                                    </li>
                                </ul> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll h4" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle h4"
                      href="javascript:;"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      {/* <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="javascript:;">Inner Pages<span className="badge badge-pill badge-warning ml-2">New</span></a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="pricing.html">Pricing </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="download.html">Download</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="newsletter.html">Newsletter</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="thank-you.html">Thank you</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="404.html">404</a>
                                            </li>
                                        </ul>
                                    </li> */}
                      {/* <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="javascript:;">Blog Pages</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="blog-two-column.html">Blog- 2 Column</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="blog-three-column.html">Blog- 3 Column</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="blog-left-sidebar.html">Blog- Left Sidebar</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="blog-right-sidebar.html">Blog- Right Sidebar</a>
                                            </li>
                                        </ul>
                                    </li> */}
                      {/* <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="javascript:;">Blog Details</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="blog-details-left-sidebar.html">Blog Details- Left Sidebar</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="blog-details-right-sidebar.html">Blog Details- Right Sidebar</a>
                                            </li>
                                        </ul>
                                    </li> */}
                      <li className="dropdown-submenu">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="javascript:;"
                        >
                          Accounts
                          <span className="badge badge-pill badge-warning ml-2">
                            New
                          </span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="/login">
                              Login
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/register">
                              Register
                            </a>
                          </li>
                          {/* <li>
                                                <a className="dropdown-item" href="forgot.html">Reset Password</a>
                                            </li> */}
                        </ul>
                      </li>
                      {/* <li>
                                        <a className="dropdown-item" href="reviews.html">Reviews</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="faq.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item disabled" href="#">More Coming Soon</a>
                                    </li> */}
                    </ul>
                  </li>
                  {/* <li className="nav-item">
                                <a className="nav-link scroll" href="#screenshots">Screenshots</a>
                            </li> */}
                  {/* <li className="nav-item">
                                <a className="nav-link scroll" href="#pricing">Pricing</a>
                            </li> */}
                  <li className="nav-item">
                    <a className="nav-link scroll h4 " href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <div className="row">
          <div className="col-md-6">
            <img
              className="photo1"
              src={require("../../assets/home1.png")}
              alt="home"
            />
          </div>
          <div className="col-md-6">
            <h1>
              {" "}
              Managing money.
              <br />
              made simple.
            </h1>
            <a
              className="btn btn-primary bg-warning"
              href="/register"
              role="button"
            >
              Register for free
            </a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <img
              className="photo"
              src={require("../../assets/expense.png")}
              alt="Expense"
            />
          </div>
          <div className="col-md-6">
            <h1>
              {" "}
              Keep every expense <br></br>
              crystal clear.
            </h1>
            <p>
              Get a full view so you know where to save. Track spending, <br />
              detect fraud, and keep tabs on rising subscription costs.
            </p>
            <a
              className="btn btn-primary bg-warning"
              href="/register"
              role="button"
            >
              Register for free
            </a>
          </div>
        </div>
        <br />
        <br />
        {/* here is the problem  */}
        <div className="row">
          <div className="col-md-6">
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
              className="btn btn-primary bg-warning"
              href="/register"
              role="button"
            >
              Register for free
            </a>
          </div>
          <div className="col-md-6">
            <img
              className="photo"
              src={require("../../assets/save.png")}
              alt="save"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              className="photo"
              src={require("../../assets/expense.png")}
              alt="Expense"
            />
          </div>
          <div className="col-md-6">
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
              className="btn btn-primary bg-warning"
              href="/register"
              role="button"
            >
              Register for free
            </a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
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
              className="btn btn-primary bg-warning"
              href="/register"
              role="button"
            >
              Register for free
            </a>
          </div>
          <div className="col-md-6">
            <img
              className="photo"
              src={require("../../assets/expense.png")}
              alt="Expense"
            />
          </div>
        </div>
        {/* <div className="row">
              <div className="col-md-6">
                 <div id="about" className="container-fluid ">
                   <h1>About us</h1>
                <p>EXPENSE brings together everything from spending, balances, and budgets <br/>
                 to your   credit score and more. Access your financial life in one powerful app.</p>
           </div>
        </div>
               <div className="col-md-6"> </div>
             </div>
      <div className="container-fluid text-center bg-warning text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">More info</h5>
                <p>Expense brings together everything from spending, balances, and budgets to your credit score and more. Access your financial life in one powerful app.</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Contact us</a></li>
                    <li><a href="#!">About us</a></li>
                    
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                <li><a href="#!">My account</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright text-center bg-warning py-3">© 2022 Copyright:
        <a href="#"> EXPENSE</a>
    </div>  
  </div>
  </div> */}

        <footer className="footer footer-area">
          <div className="footer-top ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-items">
                    <a className="navbar-brand" href="#">
                      <img
                        className="logo"
                        src={require("../../assets/logo.png")}
                        alt="logo"
                      />
                    </a>
                    <p className="mt-2 mb-3">
                      Expense brings together everything from spending,
                      balances, and budgets to your credit score and more.
                      Access your financial life in one powerful app.
                    </p>

                    {/* <div className="social-icons d-flex">
                                   <a className="facebook" href="#">
                                       <i className="fab fa-facebook-f"></i>
                                       <i className="fab fa-facebook-f"></i>
                                   </a>
                                   <a className="twitter" href="#">
                                       <i className="fab fa-twitter"></i>
                                       <i className="fab fa-twitter"></i>
                                   </a>
                                   <a className="google-plus" href="#">
                                       <i className="fab fa-google-plus-g"></i>
                                       <i className="fab fa-google-plus-g"></i>
                                   </a>
                                   <a className="vine" href="#">
                                       <i className="fab fa-vine"></i>
                                       <i className="fab fa-vine"></i>
                                   </a>
                               </div> */}
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-items">
                    <h3 className="footer-title mb-2">Useful Links</h3>
                    <ul>
                      <li className="py-2">
                        <a href="#">Home</a>
                      </li>
                      <li className="py-2">
                        <a href="#">About Us</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-items">
                    <h3 className="footer-title mb-2">Product Help</h3>
                    <ul>
                      <li className="py-2">
                        <a href="#">FAQ</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Support</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-items">
                    <h3 className="footer-title mb-2">Download</h3>

                    <div className="button-group store-buttons store-black d-flex flex-wrap">
                      <a href="#">
                        <img
                          src="assets/img/icon/google-play-black.png"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img src="assets/img/icon/app-store-black.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                    <div className="copyright-left">
                      &copy; Copyrights 2022 XPENSE All rights reserved.
                    </div>

                    <div className="copyright-right">
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
