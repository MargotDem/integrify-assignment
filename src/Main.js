import React, { useState, useEffect } from 'react'
import FormContainer from './FormContainer'
import ForecastCard from './ForecastCard'

export default function Main () {
	const [city, setCity] = useState('');
	const [cityInfo, setCityInfo] = useState({});
	const [cityWeather, setCityWeather] = useState({});
	
	const updateCity = city => {
		setCity(city);
	}

	const updateCityInfo = cityInfo => {
		setCityInfo({...cityInfo});
	}

	const updateCityWeather = cityWeather => {
		setCityWeather({...cityWeather});
	}

	useEffect(() => {
		//console.log("here");
		//console.log(cityInfo);
	});
	
	return (
		<div>
				<FormContainer
					city={city}
					updateCity={updateCity}
					updateCityInfo={updateCityInfo}
					updateCityWeather={updateCityWeather}
				/>
      			<ForecastCard
				  	city={city}
				  	cityInfo={cityInfo}
				  	cityWeather={cityWeather}
				/>
		</div>
	)
}
