import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router.js";
import Nav from "./components/Nav/Nav.js"
import Footer from "./components/Footer/Footer.js"

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
