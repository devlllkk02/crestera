import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import DashHomePage from "./pages/DashHomePage/DashHomePage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import DashNotePage from "./pages/DashNotePage/DashNotePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import UserEditPage from './pages/UserEditPage/UserEditPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'

// import UserCirclePage from './pages/UserCirclePage/UserCirclePage';
// import UserCirclesPage from './pages/UserCirclesPage/UserCirclesPage';
// import UserCirclesCreatePage from './pages/UserCirclesCreatePage/UserCirclesCreatePage';
import VaultSharePage from './pages/Vault/VaultSharePage/VaultSharePage';
import VaultDashboard from './pages/Vault/VaultDashboard';
import WhiteboardShare from './pages/Whteboard/WhiteboardSharePage/WhiteboardSharePage'

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
          <Route exact path="/edit" element={<UserEditPage />} />

          {/* <Route exact path="/usercircle" element={<UserCirclePage />} />
          <Route exact path="/usercirclescreate" element={<UserCirclesCreatePage />} />
          <Route exact  path="/usercirclescreate"  element={<UserCirclesCreatePage />}  /> */}

          <Route exact path="/dashboard/vault" element={<VaultDashboard />} />
          <Route exact path="/folder/:folderId" element={<VaultDashboard />} />
          <Route exact path="/vaultshare/:folderId" element={<VaultSharePage />} />
          
          <Route exact path="/boardshare" element={<WhiteboardShare />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
