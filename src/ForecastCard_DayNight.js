
export default function DayNight ({forecast}) {
	return (
		<div className='DayNightSection'>
			<div>
				<div className='Title'>Day</div>
					<img src ={'./icons/' + forecast.Day.Icon + '.svg'} alt='weather icon'/>
				<div>
					{forecast.Day.IconPhrase}
				</div>
			</div>
			<div>
				<div className='Title'>Night</div>
				<img src ={'./icons/' + forecast.Night.Icon + '.svg'} alt='weather icon'/>
				<div>
					{forecast.Night.IconPhrase}
				</div>
			</div>
		</div>
		
	);
}
