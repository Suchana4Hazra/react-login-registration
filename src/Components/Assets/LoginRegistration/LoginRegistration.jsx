import React, { useState } from 'react'
import './LoginRegistration.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegistration = () => {

  const [action,setAction] = useState('');

  const registrationLink = () =>{
     setAction(' active');
  };

  const LoginLink = () =>{
    setAction('');
 };
  return (
    <div className={`wrapper${action}`}>
      <div className="form-box-login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type='text' placeholder='Username'></input>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type='password' placeholder='Password'></input>
            <FaLock className='icon'/>
          </div>

          <div className='rememberForgot'>
            <label><input type = 'checkbox'></input>Remember me</label>
            <a href='#'>Forgot password</a>
          </div>

          <button type='submit'>Login</button>

          <div className='registerLink'>
            <p>Don't have an account?<a href='#' onClick={registrationLink}>Register</a></p>
          </div>
        </form>
      </div>

      <div className="form-box-register">
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type='text' placeholder='Username'></input>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type='text' placeholder='Email'></input>
            <FaEnvelope className='icon'/>
          </div>
          <div className="input-box">
            <input type='password' placeholder='Password'></input>
            <FaLock className='icon'/>
          </div>

          <div className='rememberForgot'>
            <label><input type = 'checkbox'></input>I agree to the terms & conditions</label>
          </div>

          <button type='submit'>Register</button>

          <div className='registerLink'>
            <p>Already have an account?<a href='#' onClick={LoginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginRegistration
