//------ Singup  ------
import React from 'react'
import "./Signup.scss";
import { Link } from "react-router-dom";

//Images
import CresteraLogo from "../../assets/images/logos/Crestera-Logo.png"
import Google from "../../assets/images/Icons/google.png"

function Signup() {
     
  return (
    <div className='signup'>
      <div className='signup__container'>
        {/* Signup form begins here */}
        <form className='signup__form'>
             {/* Signup header */}
             <img className='signup__form__logo' src={CresteraLogo} alt="Cresetra"/>
             <h1>SIGN UP</h1>
             {/* Signup content */}
            <div className='signup__form__group'>
                 <input type="text" className='signup__form__control' placeholder='First Name'/>
            </div>
            <div className='signup__form__group'>
                 <input type="text" className='signup__form__control' placeholder='Last Name'/>
            </div>
            <div className='signup__form__group'>
                 <input type="text" className='signup__form__control' placeholder='Email'/>
            </div>
            <div className='signup__form__group'>
                 <input type="text" className='signup__form__control' placeholder='Password'/>
            </div>
            <div className='signup__form__group'>
                 <input type="text" className='signup__form__control' placeholder='Confirm Password'/>
            </div>

            {/* Sign up button */}
            <button type="submit" className="signup__form__submit-btn">SIGN UP</button>

            <hr/>

            <button type="button" className="signup__form__google-btn">
                 <img src={Google} alt="google-logo" width={30} className="signup__form__google"/>
                 <span>Sign up with google</span></button>
                <p>
                    Already Have An Account?
                </p>
                
                <p className='signup__login__link'><Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup