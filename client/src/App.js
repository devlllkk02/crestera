import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Navbar from "./components/Navbar/Navbar";
import DashHome from "./components/Dashboard/DashHome/DashHome";
import Usercirclescreate from './components/Usercircles/Usercirclescreate/Usercirclescreate';
import Landing from "./pages/landing/landingPage";

//? note add rotes
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/SignIn" element={<DashHome/>} />
          <Route exact path="/SignUp" element={<DashHome/>} />
          <Route exact path="/DashBoard" element={<DashHome/>} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
