import { useState } from 'react'
import Hamburger from 'hamburger-react'

import AdarshJaiswalResume from "./../assets/images/AdarshJaiswalResume.pdf";
export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
     <header className="header">
        <a href='#' className="logo">Adarsh's Portfolio</a>
        <nav className="nav-links">
          {/* <div class="hamburger-menu"><img src="https://www.clipartmax.com/png/small/158-1587307_burger-menu-icon-white.png" alt="Burger Menu Icon White @clipartmax.com"></div> */}

    {/* Desktop View */}
          <ul className=''>
            <li>
              <a className="menu" href="#">
                HOME
              </a>
            </li>
            <li>
              <a className="menu" download='' href={AdarshJaiswalResume}>
                RESUME
              </a>
            </li>
            <li>
              <a className="menu" href="#project-1">
                PROJECT
              </a>
            </li>
            <li>
              <a className="menu" href="#about-me">
                ABOUT &amp; SKILL
              </a>
            </li>
            <li>
              <a className="menu" href="#connect">
                CONTACT ME
              </a>
            </li>
          </ul>
        </nav>
    <Hamburger  toggled={isOpen} toggle={setOpen} color="#F0F8FF" />
      </header>
{/* Mobile View */}        
 
      <div className={isOpen ? 'mobile-menu show' : 'mobile-menu'}>
    <ul className='mobile-ul'>
            <li>
              <a className="menu" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menu" download='' href={AdarshJaiswalResume}>
                Resume
              </a>
            </li>
            <li>
              <a className="menu" href="#project-1">
                Projects
              </a>
            </li>
            <li>
              <a className="menu" href="#about-me">
                About &amp; skill
              </a>
            </li>
            <li>
              <a className="menu" href="#connect">
                Contact me
              </a>
            </li>
          </ul></div>
    </>
  )
}
