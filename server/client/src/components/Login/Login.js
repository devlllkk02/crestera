import React, { useState, useEffect, useContext } from "react";
import "./Login.scss";

import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ToastProperties } from "../../utils/ToastProperties";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../App";

//images
import Logo from "../../assets/images/logos/Crestera-Logo.png";
import Google from "../../assets/images/Icons/google.png";

function Login() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // console.log(firstName, lastName, email, password, conpassword);

    fetch("/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return toast.error(data.error, ToastProperties);
        }
        if (data.message) {
          toast.success(data.message, ToastProperties);
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          navigate("/dashboard");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleAuth = (response) => {
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
      size: "medium",
      text: "signin_with",
    });
  }, []);

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
          {/* Email */}
          <div className="login__form__group">
            {/* Email */}
            <input
              type="text"
              className="login__form__control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password */}
          <div className="login__form__group">
            {/* Password */}
            <input
              type="password"
              className="login__form__control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="login__form__btn"
            onClick={() => handleLogin()}
          >
            LOGIN
          </button>

          <hr />
          {/* <button type="button" className="login__form__google__btn">
            <img
              src={Google}
              alt="google-logo"
              width={30}
              className="login__form__google"
            />
            <span>Sign up with Google</span>
          </button> */}
          <div id="signUp-element" style={{ margin: "7px 0px" }}></div>
          <p>Don't Have An Account?</p>
          <div className="login__signup__link">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <p>Signup</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
