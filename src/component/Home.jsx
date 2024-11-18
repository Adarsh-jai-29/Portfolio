import React from 'react'

import '../style.css'
import Project from './Project'
import AdjStore from "../assets/images/adjStore.avif"
import RestCountryApp from "../assets/images/rest-country-app-image.avif"
import ExpenseTracker from "../assets/images/expense-tracker-image.avif"
import ToDo from "../assets/images/toDo.jpg"
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

  <Project className={'project'} projectHeading={'AdjStore'} href={'https://adj-store.netlify.app'} prImage={AdjStore} />
  <Project className={'project'} projectHeading={'RestCountryApp'} href={'https://adarshjai-rest-country-api.netlify.app'} prImage={RestCountryApp} />
  <Project className={'project'} projectHeading={'ExpenseTracker'} href={'https://adarshjai-expense-tracker.netlify.app'} prImage={ExpenseTracker} />
  <Project className={'project'} projectHeading={'To-do App'} href={'https://adarshjai-to-do.netlify.app'} prImage={ToDo} />

  <hr />
  <About />
  <Skills />
  <Contact />
  <Footer />


    
     
    

   </>
  )
}
