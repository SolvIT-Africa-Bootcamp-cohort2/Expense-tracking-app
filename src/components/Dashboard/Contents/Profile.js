import React, { useState } from 'react'
import "../../../styles/profile.scss";

function onSubmit(e) {
    e.preventDefault();
}
function Profile() {

  const [names, setNames] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
const [password2, setPassword2] = useState("");

  return ( 
    
    <div class="container" >
  <div className='card shadow mt-2'>
    <div  className='card-body'>
    <div class= "row">
        <div class="col-md-6"> 
        <div class="rounded float-end" >
        <img src={require("../../../assets/profile.png")} className="d-block" width={140} height={140} alt="Profile"/>
        <a href='#edit' >Change Profile Picture</a>
        </div>
        </div>
        <div class="col-md-6"> 
        <div className="form-container">
        <div class="col-md-6">
          <p className="p"> My Profile info</p>
          <form onSubmit={(onSubmit)} method="post">
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
              <span>Email</span>
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
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
                <p className="p" class="text-center" >Edit password</p>
              <label>Current password</label>
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
              <label>New Password</label>
              <input
                className="form-control"
                type="password"
                id="password2"
                value={password2}
                placeholder="Confirm  password"
                onChange={(e) => setPassword2(e.target.value)}
                />
            </div>
              <button class="rounded float-end" type="submit">Save changes</button>
          </form>
          </div>
          </div>
         </div>
    </div>
    </div>
   </div>
  </div>

  );
}

export default Profile