import React from 'react'
import './styles/register.css'
import BeatLine from '../assets/BeatLineWhite.svg'

function Register() {
  return (
    <div className='main'>
      <div className="beat-line">
        <img src={BeatLine} alt="" />
      </div>
      <div className='register-container'>
        <h1 className='register-title'>Register</h1>
        <form className='register-form'>
          <div className='register-form-group'>
            <label className='register-form-label'>Name: </label>
            <input className='register-form-input' type='text' placeholder='Jhon Doe' />
            </div>
          <div className='register-form-group'>
            <label className='register-form-label'>Email: </label>
            <input className='register-form-input' type='email' placeholder='jhondoe@gmail.com' />
            </div>
          <div className='register-form-group'>
            <label className='register-form-label'>Password: </label>
            <input className='register-form-input' type='password' placeholder='**********' />
            </div>
          <div className='register-form-group'>
            <label className='register-form-label'>Confirm Password: </label>
            <input className='register-form-input' type='password' placeholder='**********' />
            </div>
          <button className='register-form-button' type='submit'>Register</button>
        </form>
        <div className='register-form-footer'>
          <p className='register-form-footer-text'>Already have an account? <a href='/login'>Login</a></p>
          </div>
      </div>
    </div>
  )
}

export default Register