//------ Singup  ------
import React from 'react'
import Logo from "../../../public/images/logos/Crestera-Logo.png"

function Signup() {
  return (
    <div className='signup'>
      <div className='signup__container'>
        {/* Signup form begins here */}
        <form className='signup__form'>
          {/* Signup header begins here. It contains company logo and "SIGN UP" label*/}
           <div className='signup__form__header'>

             <img className='signup__form__logo' src={Logo} alt="Cresetra"/>
             <h1>SIGN UP</h1>
           </div>
        </form>
      </div>
    </div>
  )
}

export default Signup