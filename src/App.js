import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router.js";


import Nav from "./components/Nav/Nav.js"
import Footer from "./components/Footer/Footer.js"
// import MenuC from "./components/Menu/MenuC.js";
import MenuWhole from "./components/Menu/MenuWhole.js"

import "./App.css";


const App = () => {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <MenuWhole /> */}
      <Nav />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
