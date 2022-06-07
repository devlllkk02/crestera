//------ LOGIN ------
import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

//images
import Logo from "../../assets/images/logos/Crestera-Logo.png";
import Google from "../../assets/images/Icons/google.png";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        {/* Login form begins here */}
        <form className="login__form">
          {/* Login Header */}

          {/* Link crestera logo to the landing page.
          So, once the user click the logo he/she will be redirected to landing page */}
          <Link to="/">
            <img
              src={Logo}
              alt="cresetra__logo"
              className="login__form__logo"
              height={40}
            />
          </Link>

          <h1>LOGIN</h1>

          <div className="login__form__group">
            {/* Email */}
            <input
              type="text"
              className="login__form__control"
              placeholder="Email"
            />
          </div>

          <div className="login__form__group">
            {/* Password */}
            <input
              type="password"
              className="login__form__control"
              placeholder="Password"
            />
          </div>

          {/* Once user click login button he/she will be redirected into user dashboard */}
          <Link to="/dashboard">
            <button type="submit" className="login__form__btn">
              LOGIN
            </button>
          </Link>
          <hr />
          <button type="button" className="login__form__google__btn">
            <img
              src={Google}
              alt="google-logo"
              width={30}
              className="login__form__google"
            />
            <span>Sign up with Google</span>
          </button>
          <p>Don't Have An Account?</p>
          <p className="login__signup__link">
            {/* If user does not have an account once he click Signup he/she will be redirected into Signup page */}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <p>Signup</p>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
