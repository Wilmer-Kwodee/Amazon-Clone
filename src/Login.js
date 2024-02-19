import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        {/* logo */}
        <Link to='/'>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'/>
        </Link>
        {/* the box */}
        <div className='container'>
            {/* input email / pass */}
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='email' placeholder='enter your E-mail here'/>
                <h5>Password</h5>
                <input type='password' placeholder='enter your pass here'/>
                <button className='login__signInButton'>Sign in</button>
            </form>
            <p>
                By signing-in you agree to the Amazon's Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className='login__registerButton'>Create your Amazon Account</button>
            <Link to="/register">
            </Link>
        </div>
    </div>
  )
}

export default Login