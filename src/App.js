import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ROUTES } from './constants/routes'
import Home from './pages/Home'
import Contact from './pages/Contact'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path="*" element={<Navigate to={ROUTES.home} />} />
      </Routes>
      <ToastContainer limit={2} />
    </div>
  )
}

export default App
