import React from "react"

import "./MenuB.css"

const MenuB = () => {
  return (
    <div>
      
    
      
    </div>
  )
};

export default MenuB

// let dropDown = document.getElementById("mobileHamburger");
// let navBackground = document.getElementById("navMenuBackground");
// let content = document.getElementById("mobileNavContentContainer");

// var state = false;

// const handleButtonClick = () => {
//   if (state) {
//     navBackground.classList.remove("grow");
//     navBackground.classList.add("shrink");
//     setTimeout(() => {
//       content.style.display = "none";
//     }, 50);

//     setTimeout(() => {
//       navBackground.classList.remove("shrink");
//       navBackground.classList.add("static");
//     }, 360);
//     dropDown.style.position = "absolute";
//     dropDown.classList.remove("hamburgerFixed");

//     return (state = false);
//   } else {
//     if (navBackground.classList.contains("shrink")) {
//       navBackground.classList.remove("shrink");
//     }
//     setTimeout(() => {
//       content.style.display = "flex";
//       dropDown.style.position = "fixed";
//     }, 100);
//     navBackground.classList.add("grow");
//     dropDown.classList.add("hamburgerFixed");
//     return (state = true);
//   }
// };

// const handleResize = (e) => {
//   if (e.currentTarget.innerWidth > 1010) {
//     if (navBackground.classList.contains("grow")) {
//       navBackground.classList.remove("grow");
//       content.style.display = "none";
//       dropDown.classList.remove("hamburgerFixed");
//       return (state = false);
//     }
//   }
// };

// dropDown.addEventListener("click", handleButtonClick);

// window.addEventListener("resize", handleResize);

//   return (
//     <div class="container-fluid p-0">
  
//   <div id="navMenuBackground"></div>
//   <div id="mobileNavContentContainer">
//     <a href="../html/landing.html">Home</a>
//     <a href="../html/apps.html">Apps</a>
//     <a href="../html/pricing.html">Pricing</a>
//     <a href="../html/testimonials.html">Testimonials</a>
//     <a href="../html/about.html">About</a>
//   </div> 
//   <div class="row" id="header">
//     <div
//       class="col-lg-6 col-md-12 col-sm-12 col-12 navItem"
//       id="headerLeft"
//     >
//     <div id="mobileHamburgerCont">
//       <img src="../images/hamburger-menu.svg" id="mobileHamburger"/>
//     </div>
//     <div id="hamburgerCont">
//       <a href="../html/apps.html">Apps</a>
//       <a href="../html/pricing.html">Pricing</a>
//       <a href="../html/testimonials.html">Testimonials</a>
//       <a href="../html/about.html">About</a>
//     </div>
//     </div>
//     <div id="title">
//       <a href="../html/landing.html"><img src="../images/zospace-logo.svg"/></a>
//     </div>
//     <div
//       class="col-lg-6 d-lg-flex d-xl-flex d-none d-sm-none"
//       id="headerRight"
//     >
//       <a href="https://www.google.com">Try for free!</a>
//       <button class="btn" id="signUpButton">Sign Up</button>
//     </div>
//   </div>
  
// </div>
