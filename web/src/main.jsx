import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './Pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Login></Login>
  </StrictMode>,
)
