import React from "react";
import logo from "../../assets/images/logos/Crestera-Logo-Centered.png";
import "./landingPage.scss"
import { NavLink} from 'react-router-dom';

const landingPage = () => {
  return (
    <div className="landing__page">
      <div className="landing__page__container">
        <div className="logo__container">
          <img src={logo} width={400} /> 
        </div>
        <div className="button__container">
          <NavLink to="/SignUp">
          <button className="sign__up">SIGN UP</button>
          </NavLink>
          <NavLink to="/SignIn">
          <button className="log__in">LOG IN</button>
          </NavLink>
          
          
        </div>
      </div>
     
    </div>
  );
};

export default landingPage;
