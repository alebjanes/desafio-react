import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
	const total = 25000;
	const [token, setToken] = useState(false);

	return (
		<nav>
			<div className='main-buttons'>
				Pizzería Mamma Mia!
				<Link to="/" className="text-white ms-2 px-2 py-1 text-decoration-none nav-btn">🍕 Home</Link>
				<Link to="/login" className="text-white ms-2 px-2 py-1 text-decoration-none nav-btn">{token ? "🔓 Profile" : "🔐 Login"}</Link>
				<Link to="/register" className="text-white ms-2 px-2 py-1 text-decoration-none nav-btn">{token ? "🔒 Logout" : "🔐 Register"}</Link>
			</div>
			<div className='total'>
				<Link to="/profile" className="text-white ms-2 px-2 py-1 text-decoration-none nav-btn">Profile</Link>
				<Link to="/cart" className="text-white ms-2 px-2 py-1 text-decoration-none nav-btn">
					🛒 Total: ${total.toLocaleString()}
				</Link>
			</div>
		</nav>
	)
}

export default Navbar;