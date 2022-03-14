//------ Singup  ------
import React from 'react'
// import Logo from "./images/logos/Crestera-Logo.png"
import "./Signup.scss";

function Signup() {
  return (
    <div className='signup'>
      <div className='signup__container'>
        {/* Signup form begins here */}
        <form className='signup__form'>
             {/* Signup header */}
             <img className='signup__form__logo' src="./images/logos/Crestera-Logo.png" alt="Cresetra"/>
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
                <p>
                    Already Have An Account?
                </p>
                <a href="#">Login</a>
        </form>
      </div>
    </div>
  )
}

export default Signup