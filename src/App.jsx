import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'


export default function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer /> 
    </>
  )
}
