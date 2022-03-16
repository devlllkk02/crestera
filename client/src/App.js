import React from "react";
import { Routes, Route } from 'react-router-dom';
// Components
import Navbar from "./components/Navbar/Navbar";
import DashHome from "./components/Dashboard/DashHome/DashHome";


//? note add rotes
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" exact component={DashHome} />
      </Routes>
    </div>
  );
};

export default App;
