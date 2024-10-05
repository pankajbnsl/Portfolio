import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({iconUrl, text, link}) => {
  // Conditional style for LinkedIn icon
  const iconStyle = text.toLowerCase().includes('linkedin') || text.toLowerCase().includes('phone')
    ? { filter: 'invert(1)' }
    : {};  
  return (
    
    <a href={link} className="contact-details-card" target="_blank" rel="noopener noreferrer">
        <div className="icon">
            <img src={iconUrl}  alt={text} style={iconStyle} />
        </div>
        <p>{text}</p>
    </a>
  )
}

export default ContactInfoCard