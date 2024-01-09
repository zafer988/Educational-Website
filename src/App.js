import React from 'react'
import './App.css'
import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/common/header/Header'
import Home from './components/common/header/home/Home'
import About from './components/about/About'
import CoursesHome from './components/allcourses/CoursesHome'
import Team from './components/team/Team'
import Price from './components/pricing/Price'
import Journal from './components/blog/Blog'
import Footer from './components/common/footer/Footer'

const App = () => {
  const routesElements = createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='header' element={<Header />} />
      <Route path='about' element={<About />} />
      <Route path='courses' element={<CoursesHome />} />
      <Route path='team' element={<Team />} />
      <Route path='pricing' element={<Price />} />
      <Route path='journal' element={<Journal />} />


    </>

  )
  const router = createBrowserRouter(routesElements)
  return (
    <>

      <RouterProvider router={router} />
      <Footer />

    </>
  )
}

export default App