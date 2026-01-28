import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './pages/List'
import Mod from './pages/Mod'
import Del from './pages/Del'
import Upd from './pages/Upd'
import Single from './pages/Single'
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
        <Route path='/' element={<List />}/>
        <Route path='/' element={<Single />}/>
        <Route path='/' element={<Mod />}/>
        <Route path='/' element={<Upd />}/>
        <Route path='/' element={<Del />}/>
      </Routes>
    </>
  )
}

export default App
