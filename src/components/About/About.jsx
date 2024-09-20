import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about-container' id="about">
         <h5>About Me</h5>
         <div className="about-content">
                <img src="./assets/images/img15.webp" alt="React Logo" />
                <div className="person-detail">
                    <p className=''>Hi, I’m Pankaj Bansal, a passionate Full Stack Developer specializing in React.js and Node.js. I enjoy building engaging web applications and solving complex problems through code. I hold a Bachelor's degree in Computer Science from the University of Kurukshetra. Over the past 2 years, I’ve gained valuable experience in full stack development and automation, working on projects ranging from metadata websites to interactive dashboards. Outside of coding, I love traveling to new places and capturing moments through photography.</p>
                        
                        <br/>
                        <p>
                        I am proficient in technologies including React.js, JavaScript, HTML, CSS, Node.js, and Selenium. Additionally, I have experience with version control systems like Git and SVN and working with RESTful APIs. My goal is to continue honing my skills, exploring new technologies, and contributing to meaningful projects that make a positive impact on people’s lives.
                         </p>
                </div>
         </div>
         <div className="about-count">
            <div className='about-count-box'>
                <h4>2+</h4>
                <p>Years of Experience</p>
            </div>
            <div className='about-count-box'>
                <h4>20</h4>
                <p>Projects Completed Successfully</p>
            </div>
            <div className='about-count-box'>
                <h4>4</h4>
                <p>Certifcations Earned</p>
            </div>
         </div>
    </section>
  )
}

export default About