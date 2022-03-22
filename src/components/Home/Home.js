import React from 'react'
import "../../styles/home.scss";
import {Nav, Navbar, Container} from 'react-bootstrap'

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
    <div className='home-main-container'>
        <div className="home-background-container">
        <header class="navbar navbar-sticky navbar-expand-lg navbar-dark">
            <div class="container position-relative">
                <a class="navbar-brand" href="index.html">
                    <img class="navbar-brand-regular" src={require("../../assets/logo.png")} alt="brand-logo" />
                    <img class="navbar-brand-sticky" src="assets/img/logo/logo.png" alt="sticky brand-logo" />
                </a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-inner">
                   
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <nav>
                        <ul class="navbar-nav" id="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle h4" href="javascript:;" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Home
                                </a>
                                {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a class="dropdown-item" href="index.html">Homepage-1</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="index-2.html">Homepage-2</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="index-3.html">Homepage-3</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="index-4.html">Homepage-4</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="index-5.html">Homepage-5</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="index-6.html">Homepage-6</a>
                                    </li>
                                </ul> */}
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll h4" href="#features">Features</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle h4" href="/login" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Login
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {/* <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="javascript:;">Inner Pages<span class="badge badge-pill badge-warning ml-2">New</span></a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" href="pricing.html">Pricing </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="download.html">Download</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="newsletter.html">Newsletter</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="thank-you.html">Thank you</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="404.html">404</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="javascript:;">Blog Pages</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" href="blog-two-column.html">Blog- 2 Column</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="blog-three-column.html">Blog- 3 Column</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="blog-left-sidebar.html">Blog- Left Sidebar</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="blog-right-sidebar.html">Blog- Right Sidebar</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="javascript:;">Blog Details</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" href="blog-details-left-sidebar.html">Blog Details- Left Sidebar</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="blog-details-right-sidebar.html">Blog Details- Right Sidebar</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="javascript:;">Are you New<span class="badge badge-pill badge-warning ml-2">Here</span></a>
                                        <ul class="dropdown-menu">
                                            
                                            <li>
                                                <a class="dropdown-item" href="/register">Register</a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll h4 "  href="#About">About us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <div className='body'>
        <div class="row" style={{height:"100vh"}}>
        <div class="col-md-9">
          <img className="photo1" src={require("../../assets/home1.png")} alt="home" /> 
        </div>
        <div class="col-md-3"> 
         <div className='front-container'>
          <h1> Managing money.<br/>
            made simple.</h1>
            </div>
            <div className='register-container'>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
            </div>
            </div>
     </div>
         <br/>
        <div class="row">
          <div class="col-md-6"> 
            <img className="photo" src={require("../../assets/expense.png")} alt="Expense" /> 
           </div>
          <div class="col-md-6"> 
             <h1> Keep every expense <br></br>
                 crystal clear.</h1>
            <p>Get a full view so you know where to save. Track spending, <br/>
             detect fraud, and keep tabs on rising subscription costs.</p>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
         </div> 
         </div>
         <br/>
         <br/>
         <div class="row">
          <div class="col-md-6">
          <h1> Spend smarter and <br></br>
          save more.</h1>
          <p>EXPENSE™ automatically help find savings you missed, <br/>
             so you can make your money go further without breaking a sweat.</p>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a> 
            </div>
          <div class="col-md-6"> 
          <img className="photo" src={require("../../assets/save.png")} alt="save" /> 
            </div>
            </div>
        <div class="row">
          <div class="col-md-6">
              <img className="photo" src={require("../../assets/expense.png")} alt="Expense" /> 
          </div>
         <div class="col-md-6">
          <h1>Stay focused on your <br></br>
          financial goals.</h1>
          <p>Improve your spending habits with custom goals that keep you going. <br/>
             Save for a home, conquer debt, and prepare for the future.</p>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a> 
           </div>
            </div>
            <br/> 
              <div class="row">
            <div class="col-md-6"> 
                 <h1>No need for <br/>
                 multiple apps</h1>
                 <p>Easily connect all your accounts. <br/>
                  From cash and credit to loans and investments, <br/>
                  you can see your complete financial picture in.</p>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
              </div>
                 <div class="col-md-6"  > 
                  <img className="photo" src={require("../../assets/expense.png")} alt="Expense" /> 
                </div>
             </div>
             {/* <div class="row">
              <div class="col-md-6">
                 <div id="about" class="container-fluid ">
                   <h1>About us</h1>
                <p>EXPENSE brings together everything from spending, balances, and budgets <br/>
                 to your   credit score and more. Access your financial life in one powerful app.</p>
           </div>
        </div>
               <div class="col-md-6"> </div>
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
  </div>

    {/* //contact area  */}
     
    <section id="About" class="contact-area bg-gray ptb_100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        
                        <div class="section-heading text-center">
                            <h2 class="text-capitalize">About us</h2>
                            <p class="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                            <p class="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                           
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                     
                        <div class="contact-box text-center">
                            
                          
                            {/* <form id="contact-form" method="POST" action="https://theme-land.com/sapp/demo/assets/php/mail.php">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="name" placeholder="Name" required="required">
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="subject" placeholder="Subject" required="required">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <textarea class="form-control" name="message" placeholder="Message" required="required"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-bordered mt-3 mt-sm-4" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form> */}
                            <p class="form-message"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       <footer className='footer' class="footer-area">
           
           <div class="footer-top ptb_100">
               <div class="container">
                   <div class="row">
                       <div class="col-12 col-sm-6 col-lg-3">
                           
                           <div class="footer-items">
                             
                               <a class="navbar-brand" href="#">
                                   <img class="logo" src={require("../../assets/logo.png")} alt="logo" />
                               </a>
                               <p class="mt-2 mb-3">Expense brings together everything from spending, balances, and budgets to your credit score and more. Access your financial life in one powerful app.</p>
                              
                               {/* <div class="social-icons d-flex">
                                   <a class="facebook" href="#">
                                       <i class="fab fa-facebook-f"></i>
                                       <i class="fab fa-facebook-f"></i>
                                   </a>
                                   <a class="twitter" href="#">
                                       <i class="fab fa-twitter"></i>
                                       <i class="fab fa-twitter"></i>
                                   </a>
                                   <a class="google-plus" href="#">
                                       <i class="fab fa-google-plus-g"></i>
                                       <i class="fab fa-google-plus-g"></i>
                                   </a>
                                   <a class="vine" href="#">
                                       <i class="fab fa-vine"></i>
                                       <i class="fab fa-vine"></i>
                                   </a>
                               </div> */}
                           </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-3">
                           
                           <div class="footer-items">
                              
                               <h3 class="footer-title mb-2">Useful Links</h3>
                               <ul>
                                   <li class="py-2"><a href="#">Home</a></li>
                                   <li class="py-2"><a href="#">About Us</a></li>
                                   <li class="py-2"><a href="#">Contact</a></li>
                               </ul>
                           </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-3">
                           
                           <div class="footer-items">
                              
                               <h3 class="footer-title mb-2">Product Help</h3>
                               <ul>
                                   <li class="py-2"><a href="#">FAQ</a></li>
                                   <li class="py-2"><a href="#">Privacy Policy</a></li>
                                   <li class="py-2"><a href="#">Support</a></li>
                                   <li class="py-2"><a href="#">Terms &amp; Conditions</a></li>
                                   <li class="py-2"><a href="#">Contact</a></li>
                               </ul>
                           </div>
                       </div>
                       <div class="col-12 col-sm-6 col-lg-3">
                           
                           <div class="footer-items">
                            
                               <h3 class="footer-title mb-2">Contact us</h3>
                            <p>Tel: +250780000000</p>
                            <p>Email:<a href='contactus@expense.com'>contactus@expense.com</a></p>
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
                               
                               <div class="copyright-left">&copy; Copyrights 2022 XPENSE All rights reserved.</div>
                          
                               <div class="copyright-right">Made  By <a href="#"> EXPENSE</a></div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </footer>
      
  </div>
  </div>
  )
}


export default Home