
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import About from './Components/About/About'
import Animated from './Components/Animated/Animated'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/nav'
import PersonalSkill from './Components/PersonalSkills/PersonalSkill'
import Project from './Components/Project/Project'
import Services from './Components/Services/Services'
function App() {


  return (
    <>
      <Nav />
      <Header  />
      <About />
      <PersonalSkill />
      <Project />
      <Contact  />
      <Footer />
      {/* <Hero/> */}
    </>
  )
}

export default App
