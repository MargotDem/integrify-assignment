import React, { useState }  from 'react'
import Form  from './Form'
import axios from 'axios'

export default function FormContainer ({
	updateCity,
	city,
	updateCityInfo
}) {

	const [error, setError] = useState(null);

	const updateError = error => {
		setError(error);
	}

	function handleSubmission (city) {
		axios.get(
			'http://dataservice.accuweather.com/locations/v1/cities/search',
			{ params: {
				q: city,
				apikey: process.env.REACT_APP_ACCUWEATHER_API_KEY,
			}}
		)
		.then(res => {
			const cities = res.data;
			//console.log("cities:");
			//console.log(cities);
			if (Object.keys(cities).length === 0) {
				setError('There is no match for this city');
			}
			else {
				updateCityInfo(cities[0]);
			}
		})
		.catch(err => {
			console.log('There was an error with the request:');
			setError('There was an error with the request');
			console.log(err);
		});
	}
	function handleInputChange (e) {
		let city =  e.target.value;
		updateCity(city);
		updateCityInfo(null);
		updateError(null);
	}

	function handleKeyPress (event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			event.target.value = '';
			handleSubmission(city);
		}
	}

	return (
		<Form
			handleInputChange={handleInputChange}
			handleSubmission={handleSubmission}
			handleKeyPress={handleKeyPress}
			city={city}
			error={error}
		/>
	);

}
