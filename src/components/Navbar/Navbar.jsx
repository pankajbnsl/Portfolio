import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu]= useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    }

    const scrollToSection = (e, sectionId) => {
        e.preventDefault(); // Prevent the default anchor behavior
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className='nav-wrapper'>
            <div className="nav-content">
                <img className="logo" src="./assets/images/logo.svg" alt="logo" />

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

                <button className="menu-btn" onClick={toggleMenu}>
                        <span class={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                            {openMenu ? "close" : "menu"}
                        </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar