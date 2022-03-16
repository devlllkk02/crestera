import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Navbar from "./components/Navbar/Navbar";
import DashHome from "./components/Dashboard/DashHome/DashHome";
import Usercirclescreate from './components/Usercircles/Usercirclescreate/Usercirclescreate';

//? note add rotes
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<DashHome />} />
          <Route exact path="/usercircles" element={<Usercirclescreate />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
