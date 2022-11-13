import React, { useEffect } from 'react'

export default function ForecastCard ({
		cityInfo,
		city,
		cityWeather
	}) {
	
	useEffect(() => {
		console.log("the city info:");
		console.log(cityInfo);
		console.log("the city weather:");
		console.log(cityWeather);
	});

	if (Object.keys(cityInfo).length !== 0) {
		return (
			<div>
				<br />
				{cityInfo.EnglishName}
			</div>
		);
	}
	else {
		return (
			<div></div>
		)
	}
}
