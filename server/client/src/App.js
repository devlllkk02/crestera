import React, { createContext, useContext, useEffect, useReducer } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { initialState, reducer } from "./reducers/UserReducer";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import DashHomePage from "./pages/DashHomePage/DashHomePage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import DashNotePage from "./pages/DashNotePage/DashNotePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import UserEditPage from "./pages/UserEditPage/UserEditPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import OtherUserProfile from "./components/OtherUserProfile/otherProfile";
import Notification from "./components/Notification/Notification";
import VaultDashboard from "./pages/Vault/VaultDashboard";
import UserCirclePage from "./pages/UserCirclePage/UserCirclePage";
import UserCirclesPage from "./pages/UserCirclesPage/UserCirclesPage";
import UserCirclesCreatePage from "./pages/UserCirclesCreatePage/UserCirclesCreatePage";
import Whiteboard from "./components/Whiteboard/Whiteboard";
import VaultFolderSharePage from "./pages/Vault/VaultSharePage/VaultFolderSharePage";
import VaultFileSharePage from "./pages/Vault/VaultSharePage/VaultFileSharePage";
import FileDownloadPage from "./pages/Vault/FileDownloadPage/FileDownloadPage";
import NotePage from "./pages/NotePage/NotePage";
import WhiteboardSharePage from "./pages/Whteboard/WhiteboardSharePage/WhiteboardSharePage";
import ScrollToTop from "./utils/ScrollToTop";

export const UserContext = createContext();

const Routing = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "USER", payload: user });
      // navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
      <Route exact path="/login" element={<LoginPage />} />

      {/* Dashboard */}
      <Route exact path="/dashboard" element={<DashHomePage />} />
      <Route exact path="/dashboard/board" element={<DashBoardPage />} />
      <Route exact path="/dashboard/note" element={<DashNotePage />} />
      <Route exact path="/profile" element={<UserProfilePage />} />
      <Route exact path="/edit" element={<UserEditPage />} />
      <Route exact path="/boardshare" element={<WhiteboardSharePage />} />
      <Route exact path="/otheruser/:userId" element={<OtherUserProfile />} />
      <Route exact path="/downloadpage/:fileId" element={<FileDownloadPage/>} />

      {/* User Circles */}
      <Route exact path="/usercircle/:usercircleId" element={<UserCirclePage />}/>
      <Route exact path="/usercircles" element={<UserCirclesPage />} />
      <Route exact path="/usercirclescreate" element={<UserCirclesCreatePage />}/>
      <Route exact  path="/usercirclescreate"  element={<UserCirclesCreatePage />} />

      {/* Vault */}
      <Route exact path="/folder/:folderId" element={<VaultDashboard />} />
      <Route exact path="/vaultfileshare/" element={<VaultFileSharePage />} />
      <Route exact path="/vaultfoldershare/:folderId" element={<VaultFolderSharePage />}/>

      {/* Note */}
      <Route exact path="/note/:noteId" element={<NotePage />} />
      {/* Board */}
      <Route exact path="/board/:boardId" element={<Whiteboard />} />

      {/* Notification */}
      <Route exact path="/Notification" element={<Notification />} />
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="app">
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <ScrollToTop>
            <Routing />
          </ScrollToTop>
        </Router>
      </UserContext.Provider>
    </div>
  );
};

export default App;
