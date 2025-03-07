import ContactIcon from '../assets/images/contact.png'

import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
  return (
    <>
     <div className="connect" id="connect">
    <center className="contact-heading" style={{ color: "aliceblue" }}>
      How Can We Connect...
    </center>
    <div className="main">
      <div className="contact-pic">
        <img src={ContactIcon} className="telephone" />
      </div>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/adarsh-jai-402365286" target='_blank'>
          LinkedIn&nbsp;
          <FontAwesomeIcon icon={faLinkedin} />
         
        </a>
        <a className="" href="https://wa.me/8127575765"  target='_blank'>
          WhatsApp&nbsp;
       
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a className="" href="https://github.com/Adarsh-jai-29"  target='_blank'>
          Github&nbsp;
         <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="" href="https://twitter.com/AdarshJai29" target='_blank'>
          Twitter&nbsp;
       
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className=""
          href="mailto:adarshjai29@gmail.com"
          title="adarshjai29@gmail.com"
           target='_blank'
        >
          Mail&nbsp;&nbsp;
         
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  
  </div>
    </>
  )
}
