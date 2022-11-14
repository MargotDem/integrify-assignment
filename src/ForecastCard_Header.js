
export default function CityHeader ({cityInfo}) {
	return (
		<div className='CityHeader'>
			{cityInfo.EnglishName.toUpperCase()}
			<div className='CountryCode'>{cityInfo.Country.ID}</div>
		</div>
	);
}
