import React from 'react'

export default function Navbar() {
  return (
    <>
     <header className="header">
        <a href='#' className="logo">Adarsh's Portfolio</a>
        <nav className="nav-links">
          {/* <div class="hamburger-menu"><img src="https://www.clipartmax.com/png/small/158-1587307_burger-menu-icon-white.png" alt="Burger Menu Icon White @clipartmax.com"></div> */}
          <ul>
            <li>
              <a className="menu" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menu" href="#download-resume-btn">
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
          </ul>
        </nav>
      </header>
    </>
  )
}
