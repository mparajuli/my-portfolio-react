import React from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fbt8urm', 'template_2jn3imb', form.current, 'uwumCxG7wp7-yjTLc');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Let's Connect!</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mausamparajuli313@gmail.com</h5>
            <a href="mailto:mausamparajuli313@gmail.com" target="_blank">Email me</a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Mausam Parajuli</h5>
            <a href="https://m.me/VIPerr.MauXam/" target="_blank">Message me</a>            
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1256*******</h5>
            <a href="https://web.whatsapp.com/send?phone=+12562949697" target="_blank">Whatsapp me</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}  
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>  
      
    </section>
  )
}

export default Contact