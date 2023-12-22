/* -----> Third Party Packages <----- */
import React, { useState, useEffect } from 'react';

/*  -----> Custom Hook <----- */
const useFetchData = (url) => {
	console.log('useFetchData custom hook');
	const [data, setData] = useState([]);

	// methods
	const getData = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setData(data);
		} catch {
			console.log('ERROR in useFetchData');
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return data;
};

export default useFetchData;
