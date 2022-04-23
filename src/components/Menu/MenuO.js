import React from "react"
import { Link } from "react-router-dom";

import "./MenuO.css";

const MenuO = ({ isOpen }) => {
  return (
    <>
      <div className="open-cont" id="open-cont">
        <span className="menu-open">
          <ul className ="menu-list">
            <li className="menu-list-item">
              <Link to="/" className="menu-links">
                Home
              </Link>
            </li>
            <li className="menu-list-item">
              <Link to="/approach" className="menu-links">
                Our Approach
              </Link>
            </li>
            <li className="menu-list-item">
              <Link to="/services" className="menu-links">
                Services
              </Link>
            </li>
            <li className="menu-list-item">
              <Link to="about" className="menu-links">
                About Us
              </Link>
            </li>
            {/* <li Link to="" className="menu-list-item">
              <Link className="menu-links">
                Contact
              </Link>
            </li> */}
          </ul>
          {/* should the hambuger closed go here? or on the same level as the menu? */}
        </span>
      </div>

      
    </>
    
  )
      
}

export default MenuO