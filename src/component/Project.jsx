import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Project({className,id,projectHeading,href,prImage}) {
  console.log(prImage)
  return (
    <>
  <div className="">
    <div className={className} id={id}>
      <div className="project-name">
        <div className="circle" />
        &nbsp;
        <h1 className="project-heading">{projectHeading}</h1>
      </div>
      <div className="project-desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere alias
        atque repellendus minus saepe.
      <a href={href} className="view-pr">
          View Project&nbsp;
         <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
    <div className="pr-image">
      <img src={prImage} className="prImage" />
    </div>
  </div>    
    </>
  )
}
