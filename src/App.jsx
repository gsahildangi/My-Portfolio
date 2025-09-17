// import { useState } from 'react'

import { Home } from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"



function App() {
 //Below out first step is to define the routes and we are donig it using router-dom 
 // as react is a SPA (Single page application ) so one Route is for the full application and
 // other is for the "Page not found " - 404 error when someting will go wrong in out appication.
 //<Route index element={}/> will be taken as index file or entry point 
  return (
    <>  
     <BrowserRouter>
        <Routes>
             <Route index element={<Home />}/>
             <Route path="*" element={<NotFound/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
