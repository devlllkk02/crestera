import React from "react";

// Components
import Navbar from "./components/Navbar/Navbar";
import DashHome from "./components/Dashboard/DashHome/DashHome";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <DashHome />
    </div>
  );
};

export default App;
