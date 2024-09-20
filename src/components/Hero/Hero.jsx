import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container" id="home">
        <div className="hero-content">
            <h2>Empowering Ideas through Creative Code</h2>
            <p>
            Passionate Full Stack Developer | Bringing Ideas to Life with Stunning Web Design
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/img01.png" alt="React Logo" />
                </div>
                <img style={{borderRadius: '5rem'}} src="./assets/images/img14.webp" alt="" />
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/img02.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img03.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img04.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero