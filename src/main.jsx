import { StrictMode } from 'react'  // create warning about code issue
import { createRoot } from 'react-dom/client'  // module for effective rendering
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
