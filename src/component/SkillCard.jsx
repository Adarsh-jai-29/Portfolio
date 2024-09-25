import React from 'react'

export default function SkillCard({skillName,skillImage}) {
  return (
    <>
     <div className={`${skillName} skill`}>
          <h3>{skillName}</h3>
          <img src={skillImage} alt="" />
        </div>
    </>
  )
}
