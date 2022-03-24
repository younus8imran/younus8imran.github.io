import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/younusimran/" target="_blank"><BsLinkedin /></a>
        <a href="https://instagram.com/self.imran" target="_blank"><BsInstagram /></a>
        <a href="https://github.com/younus8imran" target="_blank"><FaGithub /></a>
    </div>
  )
}
