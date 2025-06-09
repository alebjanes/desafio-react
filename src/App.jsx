import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Footer from './components/Footer'
import Register from './components/forms/Register'
import Login from './components/forms/Login'
import { useState } from 'react'

function App() {
  const [view, setView] = useState('home')

  return (
    <>
      <Navbar setView={setView} />
      {view === 'home' && <Home />}
      {view === 'login' && <Login />}
      {view === 'register' && <Register />}
      <Footer />
    </>
  )
}

export default App
