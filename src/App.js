import React, { useEffect } from 'react'
import "./App.css"
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';

import { auth } from './firebase'; //walau gakepake, tapi ini sekedar untuk jalanin firebse
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';
import Payment from './Payment';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51OmR3hLqQYXclDvR44PRlo7XEIVLCCeC1HphQgeslBm9rekRFbbHFwRjqd8jGl1KExJ3gctrKxTvo3jIb6fjdByK00uiYOYXyv"
); 

export default function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    const Auth = getAuth();
    onAuthStateChanged(Auth, (authUser) => {
      console.log('the user is =>', authUser)

      if(authUser){
        // user logged in
        dispatch({
          type: 'SET_USER', 
          user: authUser
        })
      }
      else{
        // user logged out
        dispatch({
          type: 'SET_USER', 
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path='/register' element={<Register />} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/" element={[<Header />, <Home />]}/>
          <Route path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements> ]} />
        </Routes>
      </div>
    </Router>
  )
}