import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { initializeSecurity } from './Security/security.js'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import App from './App'

initializeSecurity();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
