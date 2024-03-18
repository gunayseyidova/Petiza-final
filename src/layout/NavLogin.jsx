import React from 'react'
import '../layout/css/navLogin.css'

const NavLogin = () => {
  return (
    <>
        <div className='nav-login'>
            <form action="">
            <input type='email' placeholder='Email adress' required/>
            <input type="password" placeholder='Password' />
            <p>Forgot your password?</p>
            <button>Log in</button>
            <p>or</p>
            <p>Register now</p>
            </form>
        </div>
    </>
  )
}

export default NavLogin