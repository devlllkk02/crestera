import React from "react";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup/Signup';

// import Navbar from "./components/Navbar/Navbar";
// import DashHome from "./components/Dashboard/DashHome/DashHome";

const App = () => {
  return (
    <div className="app">
    
      {/* <Navbar />
      <DashHome /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
     

    </div>
  );
};

export default App;
