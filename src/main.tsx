import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage.tsx'
import { ToDosPage } from './pages/to-dos/ToDosPage.tsx'
import { withPrivateRoute } from './common/auth/authStateProvider/withPrivateRoute.tsx'
import { AuthProvider } from './common/auth/authStateProvider/authContext.tsx'

const ToDosWithPrivateRoute = withPrivateRoute(ToDosPage)

const HomeWithPrivateRoute = withPrivateRoute(HomePage)

ReactDOM
  .createRoot(document.getElementById(`root`)!)
  .render(
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/to-dos"
              element={<ToDosWithPrivateRoute />}
            />
            <Route
              path="/*"
              element={<HomeWithPrivateRoute />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>,
  )
