import React from "react"

import "./Hamburger.css";

const Hamburger = ({ isOpen }) => {
  return (
    <>
    <div className="hamburger-cont">
      <div className="hamburger">
        <div class="burger burger1"></div>
        <div class="burger burger2"></div>
        <div class="burger burger3"></div>
      </div>
    </div>

      <style jsx>{`
        
        .burger1{
          transform: ${ isOpen ? 'rotate(44deg)' : 'rotate(0)'};
        }

        .burger2{
          transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${ isOpen ? 0 : 1 }
        }

        .burger3{
          transform: ${ isOpen? 'rotate(-44deg)' : 'rotate(0)'};
        }

        
      
        

      `}
      </style>
    </>

    
  )
      
}

export default Hamburger

// <div className="hamburger-cont">
     
//      <span class="hamburger ham1"></span>
//      <span class="hamburger ham2"></span>
//      <span class="hamburger ham3"></span>

//  </div>


//when i needed the hamburger to scoot down after opening
// .hamburger{
//   transform: ${ isOpen? 'translateY(11px)' : 'translateY(0)'}
// }