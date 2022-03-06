import React from 'react';
import Navbar from './components/NavbarComponent/NavbarComponent';
import { Switch, Route } from 'react-router-dom';
import DashboardPageComponent from './pages/DashboardPageComponent/DashboardPageComponent';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/home" exact component={DashboardPageComponent} />
      </Switch>
    </div>
  );
};

export default App;
