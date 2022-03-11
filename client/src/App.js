import React from 'react';
import Navbar from './components/NavbarComponent/NavbarComponent';
// import { Switch, Route } from 'react-router-dom';
//In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from
import { Routes ,Route } from 'react-router-dom';
import DashboardPageComponent from './pages/DashboardPageComponent/DashboardPageComponent';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/home" exact component={DashboardPageComponent} />
      </Routes>
    </div>
  );
};

export default App;
