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
          <img src={Logo} alt="cresetra__logo" className="login__form__logo" height={40}/>
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
              type="text"
              className="login__form__control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="login__form__btn">
            LOGIN
          </button>
          <hr />

          <button type="button" className="login__form__google__btn">
            <img
              src={Google}
              alt="google-logo"
              width={30}
              className="login__form__google"
            />
            <span>Sign up with google</span>
          </button>
          <p>New User?</p>
          <p className='login__signup__link'>
            <Link to="/SignUp"  style={{ textDecoration: 'none' }}>Signup</Link>
            </p>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
