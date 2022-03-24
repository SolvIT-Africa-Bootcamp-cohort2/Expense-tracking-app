import React from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./controller/ProtectedRoute";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
import Home from "./components/Home/Home";

function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="home" element={<Home />}></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
