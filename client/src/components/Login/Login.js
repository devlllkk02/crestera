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
        <form className="login__form">
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
            <input
              type="text"
              className="login__form__control"
              placeholder="Email"
            />
          </div>
          <div className="login__form__group">
            <input
              type="password"
              className="login__form__control"
              placeholder="Password"
            />
          </div>
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
