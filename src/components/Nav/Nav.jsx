import React from 'react'
import './Nav.css'
import {PiHouseLineBold,PiProjectorScreenChartDuotone,PiPhoneCallDuotone,PiPersonArmsSpreadDuotone} from 'react-icons/pi'
import {GoProjectRoadmap} from 'react-icons/go'
import {useState} from "react"

const Links = () => {
  const[activeNav, setActiveNav] = useState('#Header')
  return (
    <nav>
      <a href="#Header" onClick={() => setActiveNav('#Header')}className={activeNav === '#Header' ? 'active' : ''}><PiHouseLineBold size ={30}/></a> 
      <a href="#About" onClick={() => setActiveNav('#About')}className={activeNav === '#About' ? 'active' : ''}><PiPersonArmsSpreadDuotone size ={30}/></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')}className={activeNav === '#Experience' ? 'active' : ''}><PiProjectorScreenChartDuotone size ={30}/></a>
      <a href="#Projects" onClick={() => setActiveNav('#Projects')}className={activeNav === '#Projects' ? 'active' : ''}><GoProjectRoadmap size ={30}/></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')}className={activeNav === '#Contact' ? 'active' : ''}><PiPhoneCallDuotone size ={30}/></a>
    </nav>
  )
}

export default Links