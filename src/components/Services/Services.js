import React from "react";


import Challengingbx from "./Challengingbx.js"
import Edconsult from "./Edconsult"
import Parentcoach from "./Parentcoach.js"

import "./Services.css";

const Services = () => {
  return (
    <main class="main-main">
      <h1>Services</h1> 
        <section class="services-conts">
          <h2>Challenging Behavior</h2>
          <Challengingbx />
        </section>
        <section class="services-conts">
          <h2>Educational Consultation</h2>
          <Edconsult />
        </section>
        <section class="services-conts">
          <h2>Parent Coaching</h2>
          <Parentcoach />
        </section>
    </main>
  );
};

export default Services;