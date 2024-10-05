import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className="contact-container" id="contactMe">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div className="contact-content-container">
                <ContactInfoCard iconUrl="./assets/images/email-icon.svg" text="Gmail" link="mailto:pankajbansal406@example.com"/>
                <ContactInfoCard iconUrl="./assets/images/github-icon.svg" text="Github" link="https://github.com/pankajbnsl" />
                <ContactInfoCard iconUrl="./assets/images/linkedIn-icon.svg" text="LinkedIn" link="https://www.linkedin.com/in/pankajbnsl"/>
                <ContactInfoCard iconUrl="./assets/images/phone-icon.svg" text="Phone" link="tel:+919560681357"/>
            </div>
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe