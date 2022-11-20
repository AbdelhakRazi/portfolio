import React from 'react'
import '../styles/about.css';
import NavBar from './NavBar'
import Skills from './Skills'
import Profile from './Profile'
/* smallCircleParent made to apply the filter of dropShadow beacuse u can't apply it on the div itself*/
export default function About() {
  return (
    <section className="about-section">
      <div className="about-big-circle"></div>
      <div className="about">
        <NavBar />
        <div className="about-body">
          <div>
            <h3 className="about-hi">Hi! I'm</h3>
            <h1 className="about-name">Abdelhak Razi</h1>
            <h1>I build and design<br />softwares</h1>
            <p>Passionate about creating flexible and reusable software systems <br/> and equipped with professional skills in software architecture design and UX/UI Design.</p>
          </div>
          <Profile />
        </div>
        <Skills />
      </div>
    </section>

  )
}
