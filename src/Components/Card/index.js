/* -----> Third Party Packages <----- */
import React from 'react';

/* -----> Styles <----- */
import './index.css';

/* -----> Component <----- */
const Card = (props) => {
	console.log('Card Component');
	const { cardData } = props;
	const { title, body, useId } = cardData;
	return (
		<li className="card-component">
			<h1>{title}</h1>
			<p>{body}</p>
		</li>
	);
};

export default Card;
