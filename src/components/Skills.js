import React from 'react'
import '../styles/global.css';
import '../styles/skills.css';
import {FaCode,FaDribbble,FaAndroid} from 'react-icons/fa';
export default function Skills() {
  return (
    <section className="skills">
        <div className="skills-section">
            <FaCode className='skills-section-icon'/>
            <h2>Web development</h2>
            <p>Using HTML, CSS, Javascript,<br />ReactJS  Gatsby, NodeJS, ExpressJS</p>
        </div>
        <div className="skills-section">
        <FaAndroid className='skills-section-icon'/>
            <h2>Mobile development</h2>
            <p>Using Java, Android Studio, Flutter</p>
        </div>
        <div className="skills-section">
        <FaDribbble className='skills-section-icon'/>
            <h2>UX/UI Design</h2>
            <p>Figma, Adobe XD, User Flow,<br />Competitive audit, Usability studies...</p>
        </div>
    </section>

  )
}
