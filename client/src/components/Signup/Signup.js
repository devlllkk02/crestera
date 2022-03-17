//------ Singup  ------
import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

//Images
import CresteraLogo from "../../assets/images/logos/Crestera-Logo.png";
import Google from "../../assets/images/Icons/google.png";

function Signup() {
  return (
    <div className="signup">
      <div className="signup__container">
        {/* Signup form begins here */}
        <form className="signup__form">
          {/* Signup header */}

          {/* Link crestera logo to the landing page.
          So, once the user click the logo he/she will be redirected to landing page */}
          <Link to="/">
            <img
              className="signup__form__logo"
              src={CresteraLogo}
              alt="Cresetra"
            />
          </Link>
          <h1>SIGN UP</h1>

          {/* Signup content */}
          <div className="signup__form__group">
            {/* First name */}
            <input
              type="text"
              className="signup__form__control"
              placeholder="First Name"
            />
          </div>

          <div className="signup__form__group">
            {/* Last name */}
            <input
              type="text"
              className="signup__form__control"
              placeholder="Last Name"
            />
          </div>
          <div className="signup__form__group">
            {/* Email */}
            <input
              type="text"
              className="signup__form__control"
              placeholder="Email"
            />
          </div>

          <div className="signup__form__group">
            {/* Password */}
            <input
              type="text"
              className="signup__form__control"
              placeholder="Password"
            />
          </div>

          <div className="signup__form__group">
            {/* Confrim password */}
            <input
              type="text"
              className="signup__form__control"
              placeholder="Confirm Password"
            />
          </div>

          {/* Sign up button */}
          {/* Once user click signup button he/she will be redirected into login page */}
          <Link to="/login">
            <button type="submit" className="signup__form__submit-btn">
            SIGN UP
            </button>
          </Link>

          <hr />

          {/* Google signup button */}
          <button type="button" className="signup__form__google-btn">
            <img
              src={Google}
              alt="google-logo"
              width={30}
              className="signup__form__google"
            />
            <span>Sign up with google</span>
          </button>
          <p>Already Have An Account?</p>
          {/* If user already has an account once he click Login he/she will be redirected into login page */}
          <p className="signup__login__link">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
