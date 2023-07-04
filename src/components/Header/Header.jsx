import React from 'react'
import './Header.css'
import CTA from './CTA'
import HSoc from './HSoc'
import Headshot from '../../assets/Headshot.PNG'
import TypeWrite from './TypeWrite'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <header id = 'Header'>
      
      <div className="container header_container">
        <h1><TypeWrite text = {"Grant Duncan"}/></h1>
        <h5 className ="text-light">
        <Typewriter
            words={['Computer Engineer', 'Student', 'Full Stack Dev', 'Software Engineer', 'Embedded Systems Dev']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={((Math.random() * 25) + 50)}
            deleteSpeed={((Math.random() * 10) + 30)}
            delaySpeed={1500}
          />
        </h5>
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