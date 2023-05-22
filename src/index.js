import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.scss'

const container = document.getElementById('root')
createRoot(container).render(<App />)
