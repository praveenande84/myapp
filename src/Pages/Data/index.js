/* -----> Third Party Packages <----- */
import React from 'react';

/* -----> External Component <----- */
import Card from '../../Components/Card/index.js';

/* -----> URLs <----- */
import { POSTS_DATA_URL } from '../../Services/constants.js';

/* -----> Custom Hooks <----- */
import useFetchData from '../../Hooks/useFetchData';

/* -----> Styles <----- */
import './index.css';

/* -----> Component <----- */
const Data = () => {
	console.log('Data Page');
	const data = useFetchData(POSTS_DATA_URL);
	console.log(data);
	return (
		<div className="data-page">
			<ul className="card-list-container">
				{data.map((each) => (
					<Card key={each.id} cardData={each} />
				))}
			</ul>
		</div>
	);
};

/* ----- Export <----- */
export default Data;
