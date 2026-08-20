import React from 'react'
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero';
import Service from './component/Service/Service';
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    <Project/>
    <Contact/>

    </>
  )
}

export default App