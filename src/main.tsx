import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'
import { CountryProvider } from './context/CountryProvider'

createRoot(document.getElementById('root')!).render(
  <CountryProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CountryProvider>
)
