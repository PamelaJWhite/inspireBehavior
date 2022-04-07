import React from "react";
import { Routes, Route } from 'react-router-dom'

import Main from "./components/MainPage/Main.js"
import Services from "./components/Services/Services.js"
import About from "./components/About/About.js"
import Approach from "./components/Approach/Approach.js"

const Router = () => {
  return (
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach /> } />
      </Routes>
  )
}

export default Router