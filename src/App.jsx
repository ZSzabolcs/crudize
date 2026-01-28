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
        <NavLink to="/listaOsszes">Mindent is kilistáz </NavLink> |
        <NavLink to="/listaEgy">Csak azt listázza ki amit kő </NavLink> |
        <NavLink to="/modositas">Módosít </NavLink> |
        <NavLink to="/feltoltes">Új elemet tölt fel </NavLink> |
        <NavLink to="/torles">Kitöröl egy elemet </NavLink>
      </nav>

      <Routes>
        <Route path='/listaOsszes' element={<List />}/>
        <Route path='/listaEgy' element={<Single />}/>
        <Route path='/modositas' element={<Mod />}/>
        <Route path='/feltoltes' element={<Upd />}/>
        <Route path='/torles' element={<Del />}/>
      </Routes>
    </>
  )
}

export default App