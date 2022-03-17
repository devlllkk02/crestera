import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Navbar from "./components/Navbar/Navbar";
import UserCirclesAll from './components/Usercircles/UserCirclesAll/UserCirclesAll';
import UserCirclesCreate from './components/Usercircles/UserCirclesCreate/UserCirclesCreate';
import UserCircle from './components/Usercircles/UserCircle/UserCircle';
import UserCirclesPublic from './components/Usercircles/UserCirclesPublic/UserCirclesPublic';
import UserCirclesPrivate from './components/Usercircles/UserCirclesPrivate/UserCirclesPrivate';

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import DashHomePage from "./pages/DashHomePage/DashHomePage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import DashNotePage from "./pages/DashNotePage/DashNotePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
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
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<DashHomePage />} />
          <Route exact path="/dashboard/board" element={<DashBoardPage />} />
          <Route exact path="/dashboard/note" element={<DashNotePage />} />
          <Route exact path="/profile" element={<UserProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
