import React from 'react'
import {PiLinkedinLogoDuotone} from 'react-icons/pi'
import {PiGithubLogoBold} from 'react-icons/pi'
import {PiInstagramLogoDuotone} from 'react-icons/pi'
const HSoc = () => {
  return (
    <div className='HSoc'>
       <a href = "https://www.linkedin.com/in/grantduncan54/" target="_blank" rel="noreferrer"><PiLinkedinLogoDuotone size={32}/></a>
       <a href = "https://github.com/gduncan2" target="_blank" rel="noreferrer"> <PiGithubLogoBold size={32}/></a>
       <a href = "https://www.instagram.com/grant.duncs/" target="_blank" rel="noreferrer"> <PiInstagramLogoDuotone size={32}/> </a>
    </div>
  )
}

export default HSoc