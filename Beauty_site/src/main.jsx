import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ShoppingCartProvider>       
          <App />
        </ShoppingCartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
