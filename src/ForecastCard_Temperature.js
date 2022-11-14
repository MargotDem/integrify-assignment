export default function Temperature ({forecast}) {
	return (
		<div className='Temperature'>
			<div>
				Min&nbsp;
				<span className='RealTemperature'>
					{forecast.Temperature.Minimum.Value} °C
				</span>
				<br/>
				<span className='FeelTemperature'>
					real feel {forecast.RealFeelTemperature.Minimum.Value} °C
				</span>
			</div>
			<div>
				Max&nbsp;
				<span className='RealTemperature'>
					{forecast.Temperature.Maximum.Value} °C
				</span>
				<br />
				<span className='FeelTemperature'>
					real feel {forecast.RealFeelTemperature.Maximum.Value} °C
				</span>
				
			</div>
		</div>
	);
}
