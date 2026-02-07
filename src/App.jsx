import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Routes, Route} from 'react-router-dom'
import Home from "../src/Components/Home.jsx"
import About from "../src/Components/About.jsx"
import Projects from "../src/Components/Projects.jsx"
import Certificate from "../src/Components/Certificate.jsx"
import Contact from "../src/Components/Contact.jsx"
import Navbar from './Components/Navbar.jsx';
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Certificate" element={<Certificate/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="*" element={<h2>Sub-Title-Error</h2>}/>
    </Routes>
    </>
  )
}

export default App
