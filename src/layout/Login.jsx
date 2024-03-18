import React from 'react'
import '../layout/css/login.css'
import logo from './images/logo.png'


const Login = () => {
  return (
    <>
      <div className='login'>
        <div className='login-container'>
        <div className='logo-border'>
        <img width={150} src={logo} alt="" />
        </div>
        <p>Great to have you back!</p>
        <form action="">
          <input type='email' placeholder='Email adress' required />
          <input type="password" placeholder='Password' />
          <p>Forgot your password?</p>
          <button>Log in</button>
          <button>Don't have an account? <span>Register now</span></button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Login