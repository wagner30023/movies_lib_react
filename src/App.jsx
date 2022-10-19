import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import { Link, Outlet } from 'react-router-dom'

// css 
import './App.css'

function App() {
  return (
    <div className="App">
      <h2> Movies Lib </h2>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
