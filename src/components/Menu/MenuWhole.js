import React, { useState }from 'react'


import MenuC from "./MenuC.js"
import Hamburger from "./Hamburger.js"
import MenuO from "./MenuO.js"


const MenuWhole = () => {
  //create open/ closed state
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  //function to open/ close on click
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
    setMenuOpen(!menuOpen)
  }

  //function(s) to transition?
  return (
    <div>
      <div onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen}/>
      </div>
        < MenuC isOpen={menuOpen}/> 
    </div>


    

  )
      
}

export default MenuWhole
