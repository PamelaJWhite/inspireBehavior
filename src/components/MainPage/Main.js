import React from "react";
import { Link } from "react-router-dom"

import "./Main.css";

import beInspired from "./b-inspire-d.png"

const Main = () => {
  return (
    <main class="main-main">
      <section class="main-section">
        <img src={beInspired} class="beInspired" />
      </section>
      <section class="main-section">
        <h1>Services</h1>
        <div class="services-cont">
          <div class="services-link-cont"> 
            <h2>service 1</h2>
            <Link to="/services">More</Link>
          </div>
          <div class="services-link-cont"> 
            <h2>service 2</h2>
            <Link to="/services">More</Link>
          </div>
          <div class="services-link-cont"> 
          <h2>service 3</h2>
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