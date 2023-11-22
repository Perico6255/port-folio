import { Link, Route, Router, Routes } from 'react-router-dom'

function Home() {
  return <h2>Home</h2>
}
function About() {
  return <h2>About</h2>
}
function Users() {
  return <h2>Users</h2>
}



function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </div>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>

    </>
  )
}

export default App
