import React from "react";
import { Link } from "react-router-dom"

import "./Main.css";

import beInspired from "./b-inspire-d.png"

const Main = () => {
  return (
    <main class="main-main">
      <section class="main-section">
        <img src={beInspired} alt="be inspired image" class="beInspired" />
      </section>
      <section class="main-section">
        {/* Evenatually, the services paragraphs should be pulled in from somewhere else. Then later, editable from a log-in */}
        <h1>Services</h1>
        <div class="services-cont">
          <div class="services-link-cont"> 
            <h2>Challenging Behavior</h2>
            <p class="services-para">Some text about challenging behavior up to three lines or so, I don't know really.Car rides are evil scratch leg; meow for can opener to feed me so scratch the furniture and scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in pooping rainbow while flying in a toasted bread costume in space or eat the rubberband.  </p>
            <Link to="/services">More</Link>
          </div>
          <div class="services-link-cont"> 
            <h2>Educational Consultation</h2>
            <p class="services-para">Some text about Ed consult up to three lines or so, I don't know really. My left donut is missing, as is my right push your water glass on the floor kitty loves pigs. Run up and down stairs catch small lizards, bring them into house, then unable to find them on carpet don't nosh on the birds. The door is opening! how exciting oh, it's you, meh warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats tuxedo cats always looking dapper spill litter box, scratch at owner, destroy all furniture, especially couch or go crazy with excitement when plates are clanked together signalling the arrival of cat food paw at beetle and eat it before it gets away.</p>
            <Link to="/services">More</Link>
          </div>
          <div class="services-link-cont"> 
            <h2>Parent Coaching</h2>
            <p class="services-para">Some text about parent coaching up to three lines or so, I don't know really. </p>

            <Link to="/services">More</Link>
          </div>
        </div>
      </section>
      <section class="main-section">
        <h1>About Us</h1>
        <p>
          Kitty kitty meow loudly just to annoy owners so cats are fats i like to pets them they like to meow back meow all night having their mate disturbing sleeping humans. 
        </p>
        <Link to="/about">More</Link>
      </section >
      <section class="main-section">
      <h1>Our Approach</h1>
        <p>
        Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, 
        </p>
        <Link to="/approach">More</Link>
      </section>


    </main>
  );
};

export default Main;