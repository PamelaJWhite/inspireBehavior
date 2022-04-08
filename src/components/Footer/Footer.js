import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

import pplImg from "./pplImg.png"


const Footer = () => {
 

  return (
    <footer class="nav-bar footer">
      <img src={pplImg} class="ppl-img"/>
      <div class="text-cont">
        {/* Needs to be an email link */}
        <h4>Contact</h4>
        <div class="copyright">
          {/* Need to dynamically render date */}
          <h6 class="copyright-msg"> &#169; Copyright 2022 Inspire Behavior Therapy </h6>
          <h6 class="copyright-msg">All rights Reserved</h6>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;