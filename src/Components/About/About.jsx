import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about container'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic impedit inventore porro quas ut dolor in temporibus unde eos consectetur explicabo repellendus odit accusamus ipsam, non aperiam commodi placeat assumenda.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sequi cupiditate commodi laborum, eius amet. Quaerat, tempore architecto unde qui numquam blanditiis voluptatibus, repellat facilis fugit reiciendis, alias quos eligendi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus ad laboriosam asperiores, consequatur, officiis provident hic reprehenderit amet quasi soluta eius fugiat. Beatae delectus voluptatibus labore qui ipsum accusantium?</p>
      </div>
    </div>
  )
}

export default About
