import '../style.css'
import {Project} from './Project'
import Showcase from './Showcase'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import { projects } from '../data/projects'
import TechnicalExperience from './TechnicalExperience'



export default function Home() {

  
  return (
   <>
   <Navbar />
  <Showcase />
  <TechnicalExperience />
  <h1 className="flex justify-center items-center text-2xl text-amber-50 ">My PROjects...</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-6 lg:gap-12 !m-auto">
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
