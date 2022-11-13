import React  from 'react'
import axios from 'axios'

export default function Form ({
	updateCity,
	city,
	updateCityInfo
}) {
	function handleSubmission (city) {
		console.log("form submitted, the city is '" + city + "'");
		axios.get(
			'http://dataservice.accuweather.com/locations/v1/cities/search',
			{ params: {
				q: city,
				apikey: process.env.REACT_APP_ACCUWEATHER_API_KEY
			}}
		)
		.then( res => {
			const cities = res.data;
			console.log("cities:");
			console.log(cities);
			updateCityInfo(cities[0]);
		});
	}

	function handleInputChange (e) {
		let city =  e.target.value;
		updateCity(city);
	}

	function handleKeyPress (event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			event.target.value = '';
			handleSubmission(city);
			//updateCity('');
		  }
	}

	return (
		<div>
			<form className='form' action=''>
				<input
					type='text'
					name='city'
					placeholder='City'
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					/>
				<div
					className='my-button'
					name='submit-button'
					onClick={() => { handleSubmission(city) }}
				>
					Search weather
				</div>
			</form>
			
		</div>
	);

}
