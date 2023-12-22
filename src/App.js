/* -----> Third Party Packages <----- */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* -----> External COmponents <----- */
import Login from './Pages/Login';
import Header from './Layout/Header';
import Home from './Pages/Home';
import Data from './Pages/Data';

/* -----> Styles <----- */
import './App.css';

/* -----> Component <----- */
const App = () => {
	console.log('App Component');
	return (
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
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
