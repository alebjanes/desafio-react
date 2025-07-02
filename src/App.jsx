import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Register from './components/forms/Register'
import Login from './components/forms/Login'
import Pizza from './components/Pizza'
import { useState } from 'react'
import { pizzas } from './data/pizzas'

function App() {
  const [view, setView] = useState('pizza')

  return (
    <>
      <Navbar setView={setView} />
      {view === 'home' && <Home pizzas={pizzas} />}
      {view === 'login' && <Login />}
      {view === 'register' && <Register />}
      {view === 'cart' && <Cart />}
      {view === 'pizza' && <Pizza />}
      <Footer />
    </>
  )
}

export default App
