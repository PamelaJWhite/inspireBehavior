import React from "react"

import "./MenuA.css";
const Menu = () => {
  return (
    // <div class="menu-cont">
      <label class="label">
          <input type="checkbox"/>
          {/* <div class="menu-div"> */}
            <span class="menu">
              <span class="hamburger"></span>
            </span>
          {/* </div> */}
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Approach</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </label> 
      // </div>

  )
      
}

export default Menu
