import React from 'react'
import { skillsData } from '../data/skillData'
import {SkillCard} from './SkillCard'

export default function Skills() {
  return (
    <div className="min-h-screen ">
      <hr />
      <div className="max-w-4xl mt-2 mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-center mb-16">
          <h1 className="text-xl flex items-center justify-center md:text-2xl font-light max-w-[100px] text-white mb-2">
            My&nbsp; <span className=" text-purple-400 font-semibold">Technical&nbsp;</span> Skills
          </h1>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 m-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.name}
              skillIcon={skill.icon}
            />
          ))}
        </div>
        
      </div>
    </div>
  )
}