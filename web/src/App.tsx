import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NameListPage from './pages/nameList'
import RegisterPage from './pages/register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NameListPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
