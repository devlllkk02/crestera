//------ Singup  ------
import React, { useState } from "react";
import "./Signup.scss";

import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { ToastProperties } from "../../utils/ToastProperties";
import "react-toastify/dist/ReactToastify.css";

//Images
import CresteraLogo from "../../assets/images/logos/Crestera-Logo.png";
import Google from "../../assets/images/Icons/google.png";

function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const handleSignup = () => {
    // console.log(firstName, lastName, email, password, conpassword);

    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        conPassword: conPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return toast.error(data.error, ToastProperties);
        }
        if (data.message) {
          toast.success(data.message, ToastProperties);
          navigate("/login");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="signup">
      <div className="signup__container">
        {/* Signup form begins here */}
        <form className="signup__form">
          {/* Signup header */}
          <Link to="/">
            <img
              className="signup__form__logo"
              src={CresteraLogo}
              alt="Cresetra"
            />
          </Link>

          <h1>SIGN UP</h1>
          {/* Signup content */}
          {/* First Name */}
          <div className="signup__form__group">
            <input
              type="text"
              className="signup__form__control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* Last Name */}
          <div className="signup__form__group">
            <input
              type="text"
              className="signup__form__control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* Email */}
          <div className="signup__form__group">
            <input
              type="text"
              className="signup__form__control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password */}
          <div className="signup__form__group">
            <input
              type="password"
              className="signup__form__control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Confirm Password */}
          <div className="signup__form__group">
            <input
              type="password"
              className="signup__form__control"
              placeholder="Confirm Password"
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
            />
          </div>

          {/* Sign up button */}
          <button
            type="button"
            className="signup__form__submit-btn"
            onClick={() => handleSignup()}
          >
            SIGN UP
          </button>
          <hr />
          <button type="button" className="signup__form__google-btn">
            <img
              src={Google}
              alt="google-logo"
              width={30}
              className="signup__form__google"
            />
            <span>Sign up with Google</span>
          </button>
          <p>Already Have An Account?</p>

          <div className="signup__login__link">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <p>Login</p>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default Signup;
