import '../style.css'
import {Project} from './Project'
import Showcase from './Showcase'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import { projects } from '../data/projects'



export default function Home() {

  
  return (
   <>
   <Navbar />
  <Showcase />

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 !m-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
  <hr />
  <About />
  <Skills />
  <Contact />
  <Footer />


    
     
    

   </>
  )
}
