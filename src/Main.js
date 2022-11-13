import React, { useState, useEffect } from 'react'
import Form from './Form'
import ForecastCard from './ForecastCard'

export default function Main () {
	const [city, setCity] = useState('');
	const [cityInfo, setCityInfo] = useState({

	});
	
	const updateCity = city => {
		setCity(city);
	}

	const updateCityInfo = cityInfo => {
		setCityInfo({...cityInfo});
	}

	useEffect(() => {
		console.log("here");
		console.log(cityInfo);
	  });
	
	 return (
		<div>
				<Form
					updateCity={updateCity}
					city={city}
					updateCityInfo={updateCityInfo}
				/>
      			<ForecastCard
				  	city={city}
				  	cityInfo={cityInfo}
				/>
		</div>
	)
}
