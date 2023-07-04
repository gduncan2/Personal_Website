import React from 'react'
import './Experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandPython,TbBrandCss3,TbBrandCpp,TbBrandJavascript,TbLetterC,TbBrandReact,TbTerminal} from 'react-icons/tb'

const Experience = () => {
  return (
    <section id = 'Experience'>
      <h5>Experience</h5>
      <div className = 'container experience_container'>
        <div className = 'experience_info'>
          <h3>Front End Languages</h3>
            <div className = 'Langs'>
              <article className = 'Lang'>
                <AiOutlineHtml5 />
                <h4>HTML</h4>
                <small>Experienced</small>
              </article>

              <article className = 'Lang'>
                <TbBrandCss3 />
                <h4>CSS</h4>
                <small>Experienced</small>
              </article>
              
              <article className = 'Lang'>
                <TbBrandReact />
                <h4>React</h4>
                <small>Experienced</small>
              </article>
              
              <article className = 'Lang'>
                <TbBrandJavascript />
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </article>
            </div>
          </div>
      </div>
      
      <div className = 'container experience_container'>
        <div className = 'experience_info'>
          <h3>Back End Languages</h3>
          <div className = 'Langs'>
            <article className = 'Lang'>
              <TbBrandPython />
              <h4>Python</h4>
              <small>Experienced</small>
            </article>

            <article className = 'Lang'>
              <TbBrandCpp />
              <h4>C++</h4>
              <small>Experienced</small>
            </article>
            
            <article className = 'Lang'>
              <TbLetterC />
              <h4>C Language</h4>
              <small>Experienced</small>
            </article>
            
            <article className = 'Lang'>
              <TbTerminal />
              <h4>Low Level Language</h4>
              <small>Experienced</small>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience