import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from './constants/routes'
import Home from './pages/Home'
import Contract from './pages/Contract'

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.contract} element={<Contract />} />
        <Route path="*" element={<Navigate to={ROUTES.home} />} />
      </Routes>
    </div>
  )
}

export default App
