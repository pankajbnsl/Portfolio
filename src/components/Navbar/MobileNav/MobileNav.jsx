import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
            <img className='logo' src="./assets/images/logo.svg" alt="logo" />

            <ul>
                <li>
                    <a href="/" className="menu-item">Home</a>
                </li>
                <li>
                    <a href="/" className="menu-item">Skills</a>
                </li>
                <li>
                    <a href="/" className="menu-item">Work Experience</a>
                </li>
                <li>
                    <a href="/" className="menu-item">About</a>
                </li>
                <li>
                    <a href="/" className="menu-item">Contact me</a>
                </li>

                <button className='contact-btn' onClick={() => {}}>
                    Hire Me
                </button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav