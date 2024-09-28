

import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/nav'
import Project from './Components/Project/Project'
import Services from './Components/Services/Services'
function App() {
 

  return (
    <>
     <Nav/>
     <Header/>
     <About/>
     <Services/>
     <Project/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
