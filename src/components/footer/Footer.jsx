import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa"
import { BsGithub, BsLink } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"


export default function Footer() {
  return (
    <footer>
        <a href="#" className="footer__logo">imrandev</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Home</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://github.com/younus8imran"><BsGithub /></a>
            <a href="https://instagram.com/self.imran"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/younusimran/"><BsLinkedin /></a>            
        </div>

        <div className="footer__copyright">
            <small>&copy; imrandev. All rights reserved.</small>
        </div>
    </footer>
  )
}
