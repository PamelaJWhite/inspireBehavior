import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

//where should I actually store this logo?
//also, can I make a better svg?
import logo from "./inspireBehaviorLogo.png"
import hamburger from "./hamburgerIcon.png"

const Nav = () => {
  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);
  const displayMenu = () => {
      console.log("clicked burger button")
      setIsDrawerOpen(!isDrawerOpen)
    }

  return (
    <nav className="nav-bar">
      <img src={logo} class="logo"/>
      <div class="menu">
        <button 
          className="burger"
          onClick={displayMenu}
        >
          <img src={hamburger} />
        </button>
        {isDrawerOpen &&  
        <div class="links-cont">
          <Link to="/" >Home</Link>
          <Link to="/services" >Services</Link>
        </div>
      }
      </div>
      
    </nav>
  );
};

export default Nav;