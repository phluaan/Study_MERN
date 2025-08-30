import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/register.jsx'
import './styles/global.css'

import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import UserPage from './pages/user.jsx'
import LoginPage from './pages/login.jsx'
import { AuthWrapper } from './components/context/auth.context.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "user",
        element: <UserPage/>
      },

    ]
  },
  {
    path: "register",
    element: <RegisterPage/>      
  },
  {
    path: "login",
    element: <LoginPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </React.StrictMode>,
)
