import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
      return (
        <>
          <div className="footer  ">
          Designed and build by Adarsh © 2024 , All Right Reserved.{" "}
          <a href="#" className="go-to-top">
            &nbsp;
            <FontAwesomeIcon icon={faRotateLeft} />
          </a>
        </div>
        </>
      )
    }