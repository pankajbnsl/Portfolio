import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu}) => {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault(); // Prevent the default anchor behavior
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
            <img className='logo' src="./assets/images/logo.svg" alt="logo" />

            <ul>
                    <li>
                        <a href="/" className="menu-item" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
                    </li>
                    <li>
                        <a href="/" className="menu-item" onClick={(e) => scrollToSection(e, 'Skills')} >Skills</a>
                    </li>
                    <li>
                        <a href="/" className="menu-item"  onClick={(e) => scrollToSection(e, 'workExperience')}>Work Experience</a>
                    </li>
                    <li>
                        <a href="/" className="menu-item"  onClick={(e) => scrollToSection(e, 'Projects')}>Projects</a>
                    </li>
                    <li>
                        <a href="/" className="menu-item" onClick={(e) => scrollToSection(e, 'about')}>About</a>
                    </li>
                    <li>
                        <a href="/" className="menu-item" onClick={(e) => scrollToSection(e, 'contactMe')}>Contact me</a>
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