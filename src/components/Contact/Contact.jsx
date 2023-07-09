import './Contact.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vpxs9om', 'template_5vrbn6k', form.current, 'InHKsppaapQpH4RBj')

    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="Contact">
      <h5>Contact Me</h5>
      <div className="container contact_container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
