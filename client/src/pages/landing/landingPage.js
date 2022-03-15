import React from "react";
import logo from "../../assets/images/logos/Crestera-Logo-Centered.png";
import "./landingPage.scss"

const landingPage = () => {
  return (
    <div className="landing__page">
      <div className="landing__page__container">
        <div className="logo__container">
          <img src={logo} width={400} /> 
        </div>
        <div className="button__container">
          <button className="sign__up">SIGN UP</button>
          <button className="log__in">LOG IN</button>
        </div>
      </div>
     
    </div>
  );
};

export default landingPage;
