import React from 'react'
import './About.css'
import AbtMe from '../../assets/AbtMe.png'
import {PiGraduationCapDuotone} from 'react-icons/pi'
import {SlBadge} from 'react-icons/sl'
const About = () => {
  return (
    <section id = 'About'>
      <h5>About Me</h5>
      <div className="containter about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={AbtMe} alt="Grant Duncan" />
          </div>
        </div>

        <div className="about_content">
            <div className="cards">

              <article className='card'>
                <PiGraduationCapDuotone className='about_icon'/>
                <h5>Undergraduate Student</h5>
                <small>Sohphomore in Computer Engineering</small>
              </article>

              <article className='card'>
                <SlBadge className='about_icon'/>
                <h5>Programming</h5>
                <small>5+ years experience</small>
              </article>

            </div>
            <p>
            My experience in software goes back to middle school, where my study hall teacher would encourage students with no homework to go to an online computer programming language course. This was my first exposure to Python. From there, I continued my interest in software related areas in high school and dedicated my courseload to the pursuit of a career as a computer engineer, taking two years of physics, programming classes, and all the advanced mathematics courses my school offered. Even outside of schoolwork, software has been my interest--if someone were to look through my YouTube watch history, this would become especially evident. In college, I have honed my software skills to be applicable to the job field. Working with data structures, learning multiple programming languages, understanding algorithms, working on embedded systems, and pursuing all relevant information available to me, has made me feel ready to begin applying myself in these areas. Whether it be working on advanced algorithms, working on new features for the many apps or programs, operating system work, or online development, I am excited to work with companies to further my career as a computer engineer.
            </p>

            <a href="#Contact" className='btn btn-primary'>Reach Out</a>
        </div>
      </div>
    </section>
  )
}

export default About