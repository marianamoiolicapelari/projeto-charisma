import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyled } from './styles/globalStyles.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/index.jsx'
import ConsultaNoticias from './pages/ConsultaNoticias'
import Relatorios from './pages/Relatorios/index.jsx'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage/index.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [    
      {
        path: '/', 
        element: <Home/>
      },
      {
        path: '/relatorios', 
        element: <Relatorios/>
      },
      {
        path: '/noticias', 
        element: <ConsultaNoticias/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
