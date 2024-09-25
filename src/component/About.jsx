import React from 'react'
import AdarshJaiswalResume from "../images/AdarshJaiswalResume.pdf";


export default function About() {
  return (
    <>
      
  <div className="about-me text" id="about-me">
    About Me...
  </div>
  <div className="about-me-container">
    Hello!,This side Adarsh Jaiswal, a small-town Web-developer.I am first year
    alumni of Uttaranchal University. My skills includes a solid foundation of
    HTMl , CSS and JavaScript. I can comfortably code anything you think,
    whether it's a mobile application or a web application. from Development
    perspective, I have done many project using JavaScript for both mobile and
    web. As of now, i am learning React.
    <h4>Have a good day :)</h4>
    <div>
      You can see my Resume from below
      <i className="fa fa-arrow-right" aria-hidden="true" />
    </div>
    {/* <a href="#" download=".../images/AdarshJaiswalResume.pdf">Download Resume</a> */}
    <a
      className="download-resume-btn"
      href={AdarshJaiswalResume}
      download=""
    >
      Download Resume
    </a>
  </div>
  <hr />
    </>
  )
}
