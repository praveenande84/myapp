/* -----> Third Party Packages <----- */
import React from 'react';
import { Link } from 'react-router-dom';

/* -----> Styles <----- */
import './index.css';

/* -----> Component <----- */
const Card = (props) => {
	console.log('Card Component');
	const { cardData } = props;
	const { id, title, body } = cardData;

	return (
		<Link to={`/data/${id}`} className="card-link">
			<li className="card-component">
				<h1>{title}</h1>
				<p>{body}</p>
			</li>
		</Link>
	);
};

export default Card;
