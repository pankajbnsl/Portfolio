import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className="contact-container" id="contactMe">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard iconUrl="./assets/images/email-icon.svg" text="pankajbansal406@gmail.com" />
                <ContactInfoCard iconUrl="./assets/images/github-icon.svg" text="https://github.com/pankajbnsl" />
            </div>
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe