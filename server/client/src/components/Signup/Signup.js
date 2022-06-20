//------ Singup  ------
import React, { useState, useEffect, useContext } from "react";
import "./Signup.scss";

import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import { ToastProperties } from "../../utils/ToastProperties";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../App";
//Images
import CresteraLogo from "../../assets/images/logos/Crestera-Logo.png";
import Google from "../../assets/images/Icons/google.png";

function Signup() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const handleSignup = () => {
    // console.log(firstName, lastName, email, password, conpassword);

    fetch("/signup", {
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

  const handleGoogleAuth = (response) => {
    console.log(response.credential);
    console.log(jwt_decode(response.credential));
    let googleUser = jwt_decode(response.credential);

    fetch("/googleauth", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: googleUser.given_name,
        lastName: googleUser.family_name,
        email: googleUser.email,
        image: googleUser.picture,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch({ type: "USER", payload: data.user });
        navigate("/dashboard");
      })
      .catch((error) => console.log(error));
  };

  //Google Authentication
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "836162203429-ti117lo7go6p2vb1imqb1tav0b6j00en.apps.googleusercontent.com",
      callback: handleGoogleAuth,
    });

    google.accounts.id.renderButton(document.getElementById("signUp-element"), {
      theme: "outline",
      size: "large",
      text: "signup_with",
    });
  }, []);

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
          {/* <button type="button" className="signup__form__google-btn">
            <img
              src={Google}
              alt="google-logo"
              width={30}
              className="signup__form__google"
            />
            <span>Sign up with Google</span>
          </button> */}
          <div id="signUp-element" style={{ margin: "7px 0px" }}></div>
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
