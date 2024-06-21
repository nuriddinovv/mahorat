import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Home from '../page/Home'
import About from '../page/About'
import Services from '../page/Services'
import Projects from '../page/Projects'
import Experts from '../page/Experts'
import Journal from '../page/Journal'
import Contact from '../page/Contact'

const RouteComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='projects' element={<Projects />} />
            <Route path='experts' element={<Experts />} />
            <Route path='journal' element={<Journal/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteComponent