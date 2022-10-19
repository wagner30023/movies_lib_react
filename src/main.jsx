import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

// pages
import App from './App'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}> 
            <Route  path="/" element={<Home />}> </Route>
            <Route  path="/movie/:id" element={<Movie />}> </Route>
            <Route  path="/search" element={<Search />}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
