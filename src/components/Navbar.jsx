import React, { useState } from 'react'
import './Navbar.css' 

const Navbar = () => {
	const total = 25000;
	const [token, setToken] = useState(false);

  return (
    <nav>
			<div className='main-buttons'>
				Pizzería Mamma Mia!
				<button className="btn nav-btn">🍕 Home</button>
				<button className="btn nav-btn" onClick={() => !token && setToken(true)}>
          {token ? "🔓 Profile" : "🔐 Login"}
        </button>
        <button className="btn nav-btn" onClick={() => token ? setToken(false) : setToken(true)}>
          {token ? "🔒 Logout" : "🔐 Register"}
        </button>
			</div>

			<div className='total'>
				<button className="btn total-btn">🛒 Total: ${total.toLocaleString()}</button>
			</div>

		</nav>
  )
}

export default Navbar;