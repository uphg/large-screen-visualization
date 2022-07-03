import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import autoAdaptScreen from './utils/autoAdaptScreen'
import './styles/index.scss'

const root = document.getElementById('root')!

autoAdaptScreen(root)
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
