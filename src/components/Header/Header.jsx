import React from 'react'
import './Header.css'
import CTA from './CTA'
import HSoc from './HSoc'
import Headshot from '../../assets/Headshot.PNG'

const Header = () => {
  return (
    <header id = 'Header'>
      
      <div className="container header_container">
        <h1>Grant Duncan</h1>
        <h5 className ="text-light">Computer Engineering Student</h5>
        <CTA />
        <HSoc className="container header_HSoc"/>
        <div className = "Headshot">
          <img src={Headshot} alt="Grant Duncan" />
        </div>
        
      </div>
    </header>
  )
}

export default Header