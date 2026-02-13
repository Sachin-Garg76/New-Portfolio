import React from 'react';
import HomeContent from './HomeContent';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
const Home = () => {
  return (
    <>
    <div className="bg-dark"> 
     
      <HomeContent />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default Home
