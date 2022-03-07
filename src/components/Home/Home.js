import React from 'react'
import "../../styles/home.scss";
import {Nav, Navbar, Container} from 'react-bootstrap'

function Home() {
  return (
    <div className='home-main-container'>
        <div className="home-background-container">
        <div div className='header1' >
            <div></div>
            <div></div>
      <div  class="row">
  <div class="col-xl">
    <Navbar className="justify-content-end" bg="warning" >
    <Container>
    <Navbar.Brand href="#home"><img
        src={(".../../assets/logo.png")}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About us</Nav.Link>
      <Nav.Link href="#contact">Contact us</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
     </div>
     <div class="row">
        <div class="col-md-6">
          <img className="photo1" src={require("../../assets/home.png")} alt="home" /> 
        </div>
        <div class="col-md-6">  
         <div className="container-xl mt-3 bg-grey">
        <section className='container pt-5' style={{marginBottom:'10rem'}}>
          <h1> Managing money.<br></br>
            made simple.</h1>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
        </section>
        <br/> 
        </div>
        </div>
        
        
     {/* <div class="col-md-6"> 
     <div className="container-xl mt-3">
     <div className="container-xl mt-3 bg-grey">
        <section className='container pt-5' style={{marginBottom:'10rem'}}>
          <h1> Managing money.<br></br>
            made simple.</h1>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
        </section>
        <br/> 
        </div>
     <div className="container-xl mt-3">
     <img className="photo1" src={require("../../assets/home.png")} alt="home" /> 
      </div>
     </div>
    <div className="container-xl mt-3 bg-grey">
        <section className='container pt-5' style={{marginBottom:'10rem'}}>
          <h1> Managing money.<br></br>
            made simple.</h1>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
            <img className="photo1" src={require("../../assets/home.png")} alt="home" /> 
        </section>
        <br/>
        </div> */}
        <div class="row">
        <div class="col-md-6"> 
      <img className="photo" src={require("../../assets/expense.png")} alt="Expense" /> 
       </div>
     <div class="col-md-6"> 
     <div className="container-xl mt-3">
        <section className='container pt-5' style={{marginBottom:'10rem'}}>
          <h1> Keep every expense <br></br>
          crystal clear.</h1>
          <p>Get a full view so you know where to save. Track spending, <br/>
             detect fraud, and keep tabs on rising subscription costs.</p>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
        </section>
        </div>
        </div>
      
        <br/>
        <div className="container-xl mt-3">
        <section className='container pt-5' style={{marginBottom:'10rem'}}>
          <h1> Spend smarter and <br></br>
          save more.</h1>
          <p>EXPENSE™ automatically help find savings you missed, <br/>
             so you can make your money go further without breaking a sweat.</p>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
            <img className="photo" src={require("../../assets/save.png")} alt="save" /> 
        </section>
        </div>
        </div>
        <div class="row">
  <div class="col-md-6">
  <img className="photo" src={require("../../assets/expense.png")} alt="Expense" /> 
  </div>
  <div class="col-md-6">
  <div className="container-xl mt-3">
        <section className='container pt-5' style={{marginBottom:'10rem' }}>
          <h1>Stay focused on your <br></br>
          financial goals.</h1>
          <p>Improve your spending habits with custom goals that keep you going. <br/>
             Save for a home, conquer debt, and prepare for the future.</p>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
            
        </section>
        </div>
    </div>
    </div>
        <br/>
        <div className="container-xl mt-3">
        <section className='container pt-5' style={{marginBottom:'10rem' }}>
          <h1>Stay focused on your <br></br>
          financial goals.</h1>
          <p>Improve your spending habits with custom goals that keep you going. <br/>
             Save for a home, conquer debt, and prepare for the future.</p>
            <a class="btn btn-primary bg-warning" href="/register" role="button">Register for free</a>
            <img className="photo" src={require("../../assets/expense.png")} alt="Expense" /> 
        </section>
        </div>
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
  </div>
  // </div>
  
  
  )
}

export default Home