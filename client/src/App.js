import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/landing/landingPage";
import DashHome from './components/Dashboard/DashHome/DashHome';
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';

//? note add rotes
const App = () => {
  return (
    <div className="app">
     
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/DashBoard" element={<DashHome/>} />
          <Route exact path="/SignUp" element={<Signup />} />
          <Route exact path="/SignIn" element={<Login />} />
          
        </Routes>
      </Router>

    </div>
  );
};

export default App;
