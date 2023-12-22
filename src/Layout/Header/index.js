/* -----> Third Party Packages <----- */
import React from 'react';
import { Link } from 'react-router-dom';

/* -----> Styles <----- */
import './index.css';

const Header = () => {
	console.log('Header Layout');
	return (
		<div className="header-layout">
			<nav className="navbar">
				<div className="logo-container">Logo</div>
				<ul className="nav-items-container">
					<li>
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/data" className="nav-link">
							Data
						</Link>
					</li>
				</ul>
				<div>
					<button type="button">Logout</button>
				</div>
			</nav>
		</div>
	);
};

export default Header;
