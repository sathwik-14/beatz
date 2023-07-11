import React from 'react'
import './styles/login.css'
import BeatLine from '../assets/hero-logo.svg'


function Login() {
  return (
    <div className='main'>
      <div className="beat-line">
        <img src={BeatLine} alt="" />
      </div>
      <div className='login-container'>
        <h1 className='login-title'>Login</h1>
        <form className='login-form'>
          <div className='login-form-group'>
            <label className='login-form-label'>Email: </label>
            <input className='login-form-input' type='email' placeholder='jhondoe@gmail.com' />
          </div>
          <div className='login-form-group'>
            <label className='login-form-label'>Password: </label>
            <input className='login-form-input' type='password' placeholder='**********' />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button className='login-form-button' type='submit'>Login</button>
        </form>
        <div className='login-form-footer'>
          <p className='login-form-footer-text'>Are you new here? <a href='/register'>Register</a></p>
        </div>
      </div>
    </div>  )
}

export default Login