import React from 'react'
import '../styles/global.css'
import '../styles/navbar.css'
import Logo from "../images/logo.svg"
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from 'react';

export default function NavBar() {
  const navRef = useRef();
  const buttonRef = useRef();
  const [click,setClick]= useState(false)
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
    buttonRef.current.classList.toggle("responsive_nav");
    setClick(!click)
	};

  return (
   <nav className="nav">
   <div className="nav-home-menu" onClick={showNavbar}>
   {click ? <FaTimes /> : <FaBars />}
   </div>
     <Logo className="nav-logo"/>
    <ul ref={navRef} className="nav-links">
        <li className="nav-link"><a href="#">About</a></li>
        <li className="nav-link"><a href="#">Experience</a></li>
        <li className="nav-link"><a href="#">Projects</a></li>
        <li className="nav-link"><a href="#">Contact</a></li>
    </ul>
    <button ref={buttonRef} className="nav-button" >DOWNLOAD CV</button>

</nav>
  )
}
