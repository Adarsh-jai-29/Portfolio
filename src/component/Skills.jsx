import React from 'react'


import HTMLicon from '../images/skills/HTML_icon.svg'
import CSSicon from '../images/skills/CSS_icon.svg'
import TailwindIcon from '../images/skills/Tailwind_icon.svg'
import JavaScriptIcon from '../images/skills/JAVASCRIPT_icon.svg'
import GitIcon from '../images/skills/git_icon.svg'
import ReactIcon from '../images/skills/REACT_icon.svg'
import BootstrapIcon from '../images/skills/Bootstrap_icon.svg'
import NodeJsIcon from '../images/skills/NodeJs_icon.svg'
import NextJsIcon from '../images/skills/NextJs_icon.png'
import ReduxIcon from '../images/skills/Redux_icon.svg'
import MongoDBicon from '../images/skills/MongoDB_icon.svg'


import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <> 
    <div className="skills">
    <center>
      <h1 className="skill-heading">
        My <span className="purple">Technical</span> Skills
      </h1>
      <div className="skill-container">
       <SkillCard skillName={'HTML'} skillImage={HTMLicon} />
       <SkillCard skillName={'CSS'} skillImage={CSSicon} />
       <SkillCard skillName={'Tailwind'} skillImage={TailwindIcon} />
       <SkillCard skillName={'JavaScript'} skillImage={JavaScriptIcon} />
       <SkillCard skillName={'Git'} skillImage={GitIcon} />
       <SkillCard skillName={'React'} skillImage={ReactIcon} />
       <SkillCard skillName={'BootStrap'} skillImage={BootstrapIcon} />
       <SkillCard skillName={'NodeJs'} skillImage={NodeJsIcon} />
       <SkillCard skillName={'NextJs'} skillImage={NextJsIcon} />
       <SkillCard skillName={'Redux'} skillImage={ReduxIcon} />
       <SkillCard skillName={'MongoDB'} skillImage={MongoDBicon} />
       
      </div>
    </center>
  </div>
  <hr />
    </>
  )
}
