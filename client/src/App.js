import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import DashHomePage from "./pages/DashHomePage/DashHomePage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import DashNotePage from "./pages/DashNotePage/DashNotePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import VaultDashboard from "./pages/Vault/VaultDashboard";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<DashHomePage />} />
          <Route exact path="/dashboard/board" element={<DashBoardPage />} />
          <Route exact path="/dashboard/note" element={<DashNotePage />} />
          <Route exact path="/profile" element={<UserProfilePage />} />
          <Route path="/vault" element={<VaultDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
