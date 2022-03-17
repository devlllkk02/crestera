import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Navbar from "./components/Navbar/Navbar";
import DashHome from "./components/Dashboard/DashHome/DashHome";
import UserCirclesAll from './components/Usercircles/UserCirclesAll/UserCirclesAll';
import Landing from './pages/landing/landingPage';
import UserCirclesCreate from './components/Usercircles/UserCirclesCreate/UserCirclesCreate';
import UserCircle from './components/Usercircles/UserCircle/UserCircle';
import UserCirclesPublic from './components/Usercircles/UserCirclesPublic/UserCirclesPublic';
import UserCirclesPrivate from './components/Usercircles/UserCirclesPrivate/UserCirclesPrivate';

//? note add rotes
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/SignIn" element={<DashHome />} />
          <Route exact path="/SignUp" element={<DashHome />} />
          <Route exact path="/DashBoard" element={<DashHome />} />
          <Route exact path="/UserCirclesAll" element={<UserCirclesAll />} />
          <Route
            exact
            path="/UserCirclesPublic"
            element={<UserCirclesPublic />}
          />
          <Route
            exact
            path="/UserCirclesPrivate"
            element={<UserCirclesPrivate />}
          />
          <Route
            exact
            path="/UserCirclesCreate"
            element={<UserCirclesCreate />}
          />
          <Route exact path="/UserCircle" element={<UserCircle />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
