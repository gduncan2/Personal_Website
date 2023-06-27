import React from 'react'
import './Nav.css'
import {PiHouseLineBold} from 'react-icons/pi'
import {PiProjectorScreenChartDuotone} from 'react-icons/pi'
import {PiPersonArmsSpreadDuotone} from 'react-icons/pi'
import {PiPhoneCallDuotone} from 'react-icons/pi'
import {useState} from "react"

const Links = () => {
  const[activeNav, setActiveNav] = useState('#Header')
  return (
    <nav>
      <a href="#Header" onClick={() => setActiveNav('#Header')}className={activeNav === '#Header' ? 'active' : ''}><PiHouseLineBold size ={30}/></a> 
      <a href="#About" onClick={() => setActiveNav('#About')}className={activeNav === '#About' ? 'active' : ''}><PiPersonArmsSpreadDuotone size ={30}/></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')}className={activeNav === '#Experience' ? 'active' : ''}><PiProjectorScreenChartDuotone size ={30}/></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')}className={activeNav === '#Contact' ? 'active' : ''}><PiPhoneCallDuotone size ={30}/></a>
    </nav>
  )
}

export default Links