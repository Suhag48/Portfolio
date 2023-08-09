import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./routes/Home"
import Project from "./routes/Project"
import About from "./routes/About"
import Contact from "./routes/Contact"
import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/project" element={ <Project /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
