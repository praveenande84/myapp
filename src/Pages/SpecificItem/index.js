/* -----> Third Party Packages <----- */
import React from 'react';
import { useParams } from 'react-router-dom';

/* -----> Custom Hooks <----- */
import useFetchData from '../../Hooks/useFetchData';

/* -----> URLs <----- */
import { POSTS_DATA_URL } from '../../Services/constants';

/* -----> STyles <----- */
import './index.css';

/* -----> Component <----- */
const SpecificItem = () => {
	console.log('SpecificItem Page');
	const { itemId } = useParams();
	console.log(itemId);
	const EACH_POST_DATA_URL = POSTS_DATA_URL + itemId;
	const data = useFetchData(EACH_POST_DATA_URL);
	const { title, body } = data;
	return (
		<div className="specific-item-page">
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
};

/* -----> Export <----- */
export default SpecificItem;
