import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import autoAdaptTocreen from './utils/autoAdaptTocreen'
import './styles/index.scss'

const root = document.getElementById('root')!

autoAdaptTocreen(root)
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
