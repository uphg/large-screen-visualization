import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import autoAdaptTocreen from './utils/autoAdaptTocreen'

const root = document.getElementById('root')!

autoAdaptTocreen(root)
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
