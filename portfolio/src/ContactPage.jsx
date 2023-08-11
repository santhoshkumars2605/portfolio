// ContactPage.js
import React from 'react';
import './Contact.css'; // Import your custom CSS file

const ContactPage = () => {
  return (
    <div id='contact' style={{backgroundColor:'black' ,color:'white'}} className="contact-container">
      <h1>Contact Me</h1> <br />
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
