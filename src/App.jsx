import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';

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
        <div className='box-header-links box-home'>
          <Link to="/">Home</Link>
        </div>
        <div className='box-header-links box-about'>
          <Link to="/about">About</Link>
        </div>
        <div className='box-header-links box-projects'>
          <Link to="/projects">Proyectos</Link>
        </div>
      </div>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
