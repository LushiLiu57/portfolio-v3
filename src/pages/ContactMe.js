import React, { useState } from 'react';
import axios from "axios"
import '../styles/ContactMe.css'

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');

  const handleInputChange = e => {
    e.persist()
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending')

    try {
      const formID = "xnqyjbga";
      const url = `https://formspree.io/f/${formID}`;
      await axios.post(url, formData);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className='contact-me'>
      <div>
        <b style={{color:'dodgerblue', fontSize:'80px', marginRight:'20px'}}>Contact Me</b>
        <h3 style={{color:'mediumseagreen'}}>lushiliu1@gmail.com</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{color:'mediumseagreen'}}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" style={{color:'dodgerblue'}}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" style={{color:'firebrick'}}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {status === 'sending' && <p style={{color:'firebrick', marginTop:'20px'}}>Sending...</p>}
        {status === 'success' && <p style={{color:'firebrick', marginTop:'20px'}}>Message sent successfully!</p>}
        {status === 'error' && <p style={{color:'firebrick', marginTop:'20px'}}>Failed to send, try again later.</p>}
      </form>
    </div>
  );
};

export default ContactMe;