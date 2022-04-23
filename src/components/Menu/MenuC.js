import React from "react"
import { Link } from "react-router-dom"

import "./MenuC.css";
const MenuC = ({ isOpen }) => {
  return (
    <>
      <div class="menu-cont">
        <span class="menu">
          {/* should the hambuger go here? or on the same level as the menu? */}
        </span>
        <div className="menu-links-cont">
          <ul className="menu-links-ul">
            <li class="menu-links-li">
              <Link to="/">Home</Link>
            </li>
            <li class="menu-links-li">
              <Link to="/approach">Our Approach</Link>
            </li>
            <li class="menu-links-li">
              <Link to="/services">Services</Link>
            </li>
            <li class="menu-links-li">
              <Link to="/about">About Us</Link>
            </li> 
          </ul>
        </div>
        
      </div>

      <style jsx> {`
        
        .menu{
          width: ${isOpen ? '100vh' : '100px'};
          height: ${isOpen ? '100vh': '85px'};
          border-radius: ${isOpen ? '0' : '60% 0% 60% 40%'};
        }

        .menu-links-cont{
          display: ${isOpen ? 'flex' : 'none'};
        }
      
      `}
        
          
      </style>
    </>
    
  )
      
}

export default MenuC
