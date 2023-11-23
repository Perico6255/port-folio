import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import './css/App.css'

import './css/Header.css'
function About() {
  return <h2>About</h2>
}
function Projects() {
  return <h2>Projects</h2>
}



function App() {
  return (
    <>
      <div className='header-links'>
          <Link className='box-header-links box-home' to="/">Home</Link>
          <Link className='box-header-links box-about' to="/about">About</Link>
          <Link className='box-header-links box-projects' to="/projects">Proyectos</Link>
      </div>
      <div className='container'>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
