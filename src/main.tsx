import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage.tsx'
import { ToDosPage } from './pages/to-dos/ToDosPage.tsx'

ReactDOM
  .createRoot(document.getElementById(`root`)!)
  .render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/to-dos"
            element={<ToDosPage />}
          />
          <Route
            path="/*"
            element={<HomePage />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  )
