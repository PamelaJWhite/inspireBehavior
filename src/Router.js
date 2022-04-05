import React from "react";
import { Routes, Route } from 'react-router-dom'

import Main from "./components/MainPage/Main.js"
import Services from "./components/Services/Services.js"

const Router = () => {
  return (
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />
      </Routes>
  )
}

export default Router