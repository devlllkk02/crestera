//? ------ Landing Page  ------
import React from "react";
import "./Landing.scss";
import { NavLink } from "react-router-dom";

//Images
import CresteraLogoCentered from "../../assets/images/logos/Crestera-Logo-Centered.png";

const LandingPage = () => {
  return (
    <div className="landing__page">
      <div className="landing__page__container">
        <div className="landing__page__logo__container">
          <img src={CresteraLogoCentered} width={400} />
        </div>
        <div className="landing__page__button__container">
          <NavLink to="/signup">
            <button className="sign__up">SIGN UP</button>
          </NavLink>
          <NavLink to="/login">
            <button className="log__in">LOG IN</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
