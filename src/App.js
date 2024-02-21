import React from 'react'
import "./App.css"
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';

export default function App() {
  return (
    // BEM
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/login" element={[<Login />]}/>
          <Route path='/register' element={[<Register />]}></Route>
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  )
}