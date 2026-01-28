import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Teszt</h1>
      <nav>
        <NavLink></NavLink>
      </nav>
    </>
  )
}

export default App
