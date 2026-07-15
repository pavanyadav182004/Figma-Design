import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Service from './Component/Service/Service'
import Card from './Component/Package Card/Card'
import { Route, Routes } from 'react-router-dom'
import About from './Component/About/About'
import Banner from './Component/Banner/Banner'
import Galary from './Component/Galary/Galary'
import Reviews from './Component/Reviews/Reviews'
import Video from './Component/Video/Video'
import Footer from './Component/Footer/Footer'
import Contact from './Component/Contact/Contact'

function App() {


  return (
    <>

      <Navbar />
      <Hero />

      <Service />


      <Card />

      
      <About/>

      <Banner/>

      <Galary/>

      <Reviews/>

      <Video/>

      <Footer/>
      <Contact/>




    </>
  )
}

export default App
