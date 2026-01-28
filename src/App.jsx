import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Teszt</h1>
      <nav className='d-flex gap-4 p-3 fs-3'>
        <NavLink to="/listaOsszes"></NavLink>
        <NavLink to="/listaEgy"></NavLink>
        <NavLink to="/modositas"></NavLink>
        <NavLink to="/feltoltes"></NavLink>
        <NavLink to="/torles"></NavLink>
      </nav>

      <Routes>
        <Route path='/lista' element={}></Route>
      </Routes>
    </>
  )
}

export default App
