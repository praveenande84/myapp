/* -----> Third Party Packages <----- */
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyContext from './Context/MyContext';

/* -----> External COmponents <----- */
import Login from './Pages/Login';
import Header from './Layout/Header';
import Home from './Pages/Home';
import Data from './Pages/Data';
import SpecificItem from './Pages/SpecificItem';

/* -----> Styles <----- */
import './App.css';

/* -----> Component <----- */
const App = () => {
	console.log('App Component');
	const [isLogin, setIsLogin] = useState(false);

	const contextObject = {
		isLogin: isLogin,
		setIsLogin: setIsLogin,
	};

	return (
		<MyContext.Provider value={contextObject}>
			<div className="app-component">
				<BrowserRouter>
					<div className="header">
						<Header />
					</div>
					<div className="pages">
						<Switch>
							<Route exact path="/login" component={Login} />
							<Route exact path="/" component={Home} />
							<Route exact path="/data" component={Data} />
							<Route
								exact
								path="/data/:itemId"
								component={SpecificItem}
							/>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		</MyContext.Provider>
	);
};

export default App;
