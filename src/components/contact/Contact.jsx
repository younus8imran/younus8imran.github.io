import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md" 
import { BsInstagram } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

export default function Contact() {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g5smpoa', 'template_e9gmde6', form.current, 'R3_j0ObETiusHC84_')
    e.target.reset()

    };

  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon' />
                    <h4>Email</h4>
                    <h5>younus8imran@gmail.com</h5>
                    <a href="mailto:younus8imran@gmail.com" target='_blank'>
                        Send a message
                    </a>
                </article>
                <article className="contact__option">
                    <BsInstagram className="contact__option-icon" />
                    <h4>Instagram</h4>
                    <h5>@self.imran</h5>
                    <a href="https://www.instagram.com/self.imran/" target='_blank'>
                        Send a message
                    </a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className="contact__option-icon" />
                    <h4>WhatsApp</h4>
                    <h5>+919681668509</h5>
                    <a href="https://api.whatsapp.com/send?phone=919681668509" target='_blank'>
                        Send a message
                    </a>
                </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your Full Name' required />
                <input type="email" name="email" placeholder='Your Email' required />
                <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}
