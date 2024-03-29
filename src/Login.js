import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'; //walau gakepake, tapi ini sekedar untuk jalanin firebse
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function loginSubmit(){
    
}

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        const Auth = getAuth();
        signInWithEmailAndPassword(Auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate('/');
            alert("sign in success")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
          });
    }
    const register = e => {
        e.preventDefault()

        const Auth = getAuth();
        createUserWithEmailAndPassword(Auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("success")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
          });
    }

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
                <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login__signInButton'>Sign in</button>
            </form>
            <p>
                By signing-in you agree to the Amazon's Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            <Link to="/register">
            </Link>
        </div>
    </div>
  )
}

export default Login