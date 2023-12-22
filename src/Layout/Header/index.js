/* -----> Third Party Packages <----- */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

/* -----> Context <----- */
import MyContext from '../../Context/MyContext';

/* -----> Styles <----- */
import './index.css';

const Header = () => {
	console.log('Header Layout');
	const { isLogin, setIsLogin } = useContext(MyContext);
	const login_text = isLogin ? 'Login' : 'Logout';
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
					<button
						type="button"
						onClick={() => {
							setIsLogin(!isLogin);
						}}
					>
						{login_text}
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Header;
