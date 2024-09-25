import React from 'react'
import '../style.css'
import Project from './Project'

import ToDo from "../images/toDo.jpg"
import MovieHub from "../images/moviehub.jpg"
import Wt from "../images/wt.jpg"
import Showcase from './Showcase'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'



export default function Home() {


  return (
   <>
   <Navbar />
  <Showcase />
  <Project className={'project project-1'} id={'project-1'} projectHeading={'To-do App'} href={'https://adarshjai-to-do.netlify.app'} prImage={ToDo} />
  <Project className={'project project-2'} id={'project-2'} projectHeading={'MovieHub'} href={'https://adarshjai-moviehub.netlify.app'} prImage={MovieHub} />
  <Project className={'project project-3'} id={'project-3'} projectHeading={'World Travel'} href={'https://adarshjaiwt.netlify.app'} prImage={Wt} />

  <hr />
  <About />
  <Skills />
  <Contact />
  <Footer />


    
     
    

   </>
  )
}
