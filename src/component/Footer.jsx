import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
      return (
        <>
          <div className="text-white text-center py-4 bg-gray-800">
          Designed and build by Adarsh © 2025 , All Right Reserved.{" "}
          <a href="#" className="go-to-top">
            &nbsp;
            <FontAwesomeIcon icon={faRotateLeft} />
          </a>
        </div>
        </>
      )
    }