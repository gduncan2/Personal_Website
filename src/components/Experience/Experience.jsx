import React from 'react'
import './Experience.css'
import {AiOutlineHtml5,AiFillGitlab,AiFillGithub} from 'react-icons/ai'
import {TbBrandPython,TbBrandCss3,TbBrandCpp,TbBrandJavascript,TbLetterC,TbBrandVscode,TbBrandReact,TbTerminal} from 'react-icons/tb'
import {VscTerminalLinux} from 'react-icons/vsc'
import {FaNodeJs} from 'react-icons/fa'
import {SiStmicroelectronics} from 'react-icons/si'
const Experience = () => {
  return (
    <section id = 'Experience'>
      <h5>Experience</h5>
      <h2>What I have worked with</h2>
      <div className = 'container experience_container'>
        <div className = 'experience_front'>
          <h3>Front End Languages</h3>
            <div className = 'experience_content'>
              <article className = 'experience_details'>
                <AiOutlineHtml5 size = {30} />
                <div>
                  <h4>HTML</h4>
                  <small className='Dets'>Experienced</small>
                </div>
              </article>

              <article className = 'experience_details'>
                <TbBrandCss3 size = {30} />
                <div>
                  <h4>CSS</h4>
                  <small className='Dets'>Experienced</small>
                </div>
              </article>
              
              <article className = 'experience_details'>
                <TbBrandReact size = {30} />
                <div>
                  <h4>React</h4>
                  <small className='Dets'>Experienced</small>
                </div>
              </article>
              
              <article className = 'experience_details'>
                <TbBrandJavascript  size = {30}/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='Dets'>Basic</small>
                </div>
              </article>
            </div>
          </div>
          <div className = 'experience_back'>
          <h3>Back End Languages</h3>
          <div className = 'experience_content'>
            <article className = 'experience_details'>
              <TbBrandPython  size = {30}/>
              <div>
                  <h4>Python</h4>
                  <small className='Dets'>Experienced</small>
                </div>
            </article>

            <article className = 'experience_details'>
              <TbBrandCpp  size = {30}/>
              <div>
                  <h4>C Plus Plus</h4>
                  <small className='Dets'>Expert</small>
                </div>
            </article>
            
            <article className = 'experience_details'>
              <TbLetterC size = {25} />
              <div>
                  <h4>C Language</h4>
                  <small className='Dets'>Expert</small>
                </div>
            </article>
            
            <article className = 'experience_details'>
              <TbTerminal size = {30} />
              <div>
                  <h4>Low Level Language</h4>
                  <small className='Dets'>Experienced</small>
                </div>
            </article>
          </div>
        </div>
        <div className = 'experience_tools'>
        <h3>Tools</h3>
          <div className = 'experience_content'>
            <article className = 'experience_details'>
              <AiFillGithub  size = {30}/>
              <div>
                  <h4>Github</h4>
                  <small className='Dets'>Expert</small>
                </div>
            </article>

            <article className = 'experience_details'>
              <AiFillGitlab  size = {30}/>
              <div>
                  <h4>Gitlab</h4>
                  <small className='Dets'>Experienced</small>
                </div>
            </article>
            
            <article className = 'experience_details'>
              <VscTerminalLinux size = {25} />
              <div>
                  <h4>Linux</h4>
                  <small className='Dets'>Experienced</small>
                </div>
            </article>
            
            <article className = 'experience_details'>
              <TbBrandVscode size = {30} />
              <div>
                  <h4>Visual Studio</h4>
                  <small className='Dets'>Expert</small>
                </div>
            </article>
            <article className = 'experience_details'>
              <FaNodeJs size = {30} />
              <div>
                  <h4>NodeJS</h4>
                  <small className='Dets'>Basic</small>
                </div>
            </article>
            <article className = 'experience_details'>
              <SiStmicroelectronics size = {30} />
              <div>
                  <h4>STM Workspaces</h4>
                  <small className='Dets'>Experienced</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience