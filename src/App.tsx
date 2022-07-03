import { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import './styles/App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
