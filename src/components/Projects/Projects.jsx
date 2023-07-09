import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import icon from '../../assets/icon.png'
import code from '../../assets/Code.jpeg'
import evconcept from '../../assets/evconcept.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Projects.css';

// import required modules
import {Pagination, Navigation } from 'swiper/modules';

const Projects = () => {
  return (
    <section id = 'Projects'>
      <h5>Projects</h5>
      <h2>What All I Have Worked On</h2>
      <div className='container slide_containter'>
      <Swiper
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="Web_Swiper"
          >
          <SwiperSlide className = "title_slide">
            <h5>Portfolio Website</h5>
            <div className = "title_img">
              <img src={icon} alt="Grant Duncan" />
            </div>
          </SwiperSlide>
          <SwiperSlide className = "info_slide">
            <h5>Project Information</h5>
            <p>This website was made to display all the tech skills I have aquired over the years. With the website itself I hope I can display proficient front end experience. With the About Me, I hope that readers get to understand whose website they are interacting with. And with the Projects and Experience page I hope that readers can understand my backend and other pertinent technical experience. I also wanted a way for viewers to reach out to me whether it be for input on projects, or professional inquiries!</p>
          </SwiperSlide>
          <SwiperSlide className = "end_slide">
            <h5>Associated Links</h5>
            <div className = "end_buttons">
              <a href = "https://github.com/gduncan2/gduncan2.github.io" target="_blank" rel="noreferrer">Git Repo</a>
            </div>
          </SwiperSlide>
        </Swiper>
        
        <Swiper
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="EV_Swiper"
          >
          <SwiperSlide className = "title_slide">
            <h5>EV Concept Car Club</h5>
            <div className = "title_img">
              <img src={evconcept} alt="Grant Duncan" />
            </div>
          </SwiperSlide>
          <SwiperSlide className = "info_slide">
            <h5>Project Information</h5>
            <p>The goal of the club was to build a power efficient EV Convept car to partake in Shell's Eco-marathon. This club is a large source of my embedded systems work. My experience came from the work on the dashboard I would do each meeting. I was responsible for programming the dashboard's PCB to send, recieve, and interpret signals to and from different parts of the car. This involved reading signals from other parts of the car that would be sent to the PCB, understanding our designed PCB's pinout configuration so I could program buttons to interact with elements in the dashboard, and working with a OLED and 8 segment displays to display information to the driver. </p>
          </SwiperSlide>
          <SwiperSlide className = "end_slide">
            <h5>Associated Links</h5>
            <div className = "end_buttons">
              <a href = "https://evconcept.engr.illinois.edu/" target="_blank" rel="noreferrer">Club Website</a>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="WIP_Swiper"
          >
          <SwiperSlide className = "title_slide">
            <h5>TBD</h5>
            <div className = "title_img">
              <img src={code} alt="Grant Duncan" />
            </div>
          </SwiperSlide>
          <SwiperSlide className = "info_slide">
            <h5>Project Information</h5>
            <p>Right now I have a few ideas in mind, I will either work on a PiPico Snake project that will feature a speed dial for the snake, an Unreal Engine Platformer Game, a Discord tech news bot, or a PiPicoW smart home remote. Currently I am leaning towards the PicoW smart home remote. I will be sure to feature all projects once they are started, on this website.</p>
          </SwiperSlide>
          <SwiperSlide className = "end_slide">
            <h5>Associated Links</h5>
            <div className = "end_buttons">
              <a href = "https://github.com/gduncan2" target="_blank" rel="noreferrer">Git Repo</a>
            </div>
          </SwiperSlide>
        </Swiper>
        
      </div>
    </section>
  )
}

export default Projects