import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import { PokePage } from './pages/PokePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokepage' element={<PokePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
