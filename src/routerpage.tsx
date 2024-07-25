import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'

function RouterPage() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterPage