import React from 'react'
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero';
import Service from './component/Service/Service';
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    <Project/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App