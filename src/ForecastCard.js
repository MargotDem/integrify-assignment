import React, { useEffect } from 'react'

export default function ForecastCard ({ cityInfo, city }) {
	
	useEffect(() => {
		console.log("the city info:");
		console.log(cityInfo);
	});

	if (Object.keys(cityInfo).length !== 0) {
		return (
			<div>
				the card
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
