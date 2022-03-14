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
          {/* Signup header begins here. It contains company logo and "SIGN UP" label*/}
           <div className='signup__form__header'>

             <img className='signup__form__logo' src="./images/logos/Crestera-Logo.png" alt="Cresetra"/>
             <h1>SIGN UP</h1>
           </div>
            {/* Signup form content begins here */}
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='First Name'/>
            </div>
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Last Name'/>
            </div>
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Email'/>
            </div>
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Password'/>
            </div>
            <div className='form-group'>
                 <input type="text" className='form-control' placeholder='Confirm Password'/>
            </div>

            {/* Sign up button */}
            <button type="submit" className="form-btn">SIGN UP</button>
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