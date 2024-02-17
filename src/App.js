import React from 'react'
import "./App.css"
import Header from './Header'
import Home from './Home'

export default function App() {
  return (
    // BEM
    <div className='app'>
      {/* Header */}
      <Header></Header>
      {/* Home */}
      <Home></Home>
    </div>
  )
}
