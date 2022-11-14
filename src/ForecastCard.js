import React, { useEffect } from 'react'

export default function ForecastCard ({
		cityInfo,
		city,
		cityWeather
	}) {

	const sydneyInfo_str = '{"Version":1,"Key":"22889","Type":"City","Rank":11,"LocalizedName":"Sydney","EnglishName":"Sydney","PrimaryPostalCode":"","Region":{"ID":"OCN","LocalizedName":"Oceania","EnglishName":"Oceania"},"Country":{"ID":"AU","LocalizedName":"Australia","EnglishName":"Australia"},"AdministrativeArea":{"ID":"NSW","LocalizedName":"New South Wales","EnglishName":"New South Wales","Level":1,"LocalizedType":"State","EnglishType":"State","CountryID":"AU"},"TimeZone":{"Code":"AEDT","Name":"Australia/Sydney","GmtOffset":11,"IsDaylightSaving":true,"NextOffsetChange":"2023-04-01T16:00:00Z"},"GeoPosition":{"Latitude":-33.87,"Longitude":151.209,"Elevation":{"Metric":{"Value":1,"Unit":"m","UnitType":5},"Imperial":{"Value":3,"Unit":"ft","UnitType":0}}},"IsAlias":false,"SupplementalAdminAreas":[],"DataSets":["AirQualityCurrentConditions","AirQualityForecasts","Alerts","FutureRadar","MinuteCast","Radar"]}';

	const sydneyWeather_str = '{"Headline":{"EffectiveDate":"2022-11-15T14:00:00+11:00","EffectiveEpochDate":1668481200,"Severity":5,"Text":"Expect showers Tuesday afternoon","Category":"rain","EndDate":"2022-11-15T20:00:00+11:00","EndEpochDate":1668502800,"MobileLink":"http://www.accuweather.com/en/au/sydney/22889/daily-weather-forecast/22889?unit=c&lang=en-us","Link":"http://www.accuweather.com/en/au/sydney/22889/daily-weather-forecast/22889?unit=c&lang=en-us"},"DailyForecasts":[{"Date":"2022-11-14T07:00:00+11:00","EpochDate":1668369600,"Sun":{"Rise":"2022-11-14T05:45:00+11:00","EpochRise":1668365100,"Set":"2022-11-14T19:35:00+11:00","EpochSet":1668414900},"Moon":{"Rise":"2022-11-14T00:07:00+11:00","EpochRise":1668344820,"Set":"2022-11-14T09:48:00+11:00","EpochSet":1668379680,"Phase":"WaningGibbous","Age":20},"Temperature":{"Minimum":{"Value":15.2,"Unit":"C","UnitType":17},"Maximum":{"Value":28.2,"Unit":"C","UnitType":17}},"RealFeelTemperature":{"Minimum":{"Value":13.9,"Unit":"C","UnitType":17,"Phrase":"Cool"},"Maximum":{"Value":29.7,"Unit":"C","UnitType":17,"Phrase":"Very Warm"}},"RealFeelTemperatureShade":{"Minimum":{"Value":13.9,"Unit":"C","UnitType":17,"Phrase":"Cool"},"Maximum":{"Value":26,"Unit":"C","UnitType":17,"Phrase":"Pleasant"}},"HoursOfSun":12.6,"DegreeDaySummary":{"Heating":{"Value":0,"Unit":"C","UnitType":17},"Cooling":{"Value":4,"Unit":"C","UnitType":17}},"AirAndPollen":[{"Name":"AirQuality","Value":0,"Category":"Good","CategoryValue":1,"Type":"Ozone"},{"Name":"Grass","Value":0,"Category":"Low","CategoryValue":1},{"Name":"Mold","Value":0,"Category":"Low","CategoryValue":1},{"Name":"Ragweed","Value":0,"Category":"Low","CategoryValue":1},{"Name":"Tree","Value":0,"Category":"Low","CategoryValue":1},{"Name":"UVIndex","Value":11,"Category":"Extreme","CategoryValue":5}],"Day":{"Icon":2,"IconPhrase":"Mostly sunny","HasPrecipitation":false,"ShortPhrase":"Windy this afternoon","LongPhrase":"Mostly sunny and less humid; windy this afternoon","PrecipitationProbability":11,"ThunderstormProbability":0,"RainProbability":11,"SnowProbability":0,"IceProbability":0,"Wind":{"Speed":{"Value":27.8,"Unit":"km/h","UnitType":7},"Direction":{"Degrees":281,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":61.1,"Unit":"km/h","UnitType":7},"Direction":{"Degrees":290,"Localized":"WNW","English":"WNW"}},"TotalLiquid":{"Value":0,"Unit":"mm","UnitType":3},"Rain":{"Value":0,"Unit":"mm","UnitType":3},"Snow":{"Value":0,"Unit":"cm","UnitType":4},"Ice":{"Value":0,"Unit":"mm","UnitType":3},"HoursOfPrecipitation":0,"HoursOfRain":0,"HoursOfSnow":0,"HoursOfIce":0,"CloudCover":10,"Evapotranspiration":{"Value":6.3,"Unit":"mm","UnitType":3},"SolarIrradiance":{"Value":8449.1,"Unit":"W/m²","UnitType":33}},"Night":{"Icon":33,"IconPhrase":"Clear","HasPrecipitation":false,"ShortPhrase":"Clear","LongPhrase":"Clear","PrecipitationProbability":3,"ThunderstormProbability":0,"RainProbability":3,"SnowProbability":0,"IceProbability":0,"Wind":{"Speed":{"Value":14.8,"Unit":"km/h","UnitType":7},"Direction":{"Degrees":275,"Localized":"W","English":"W"}},"WindGust":{"Speed":{"Value":31.5,"Unit":"km/h","UnitType":7},"Direction":{"Degrees":255,"Localized":"WSW","English":"WSW"}},"TotalLiquid":{"Value":0,"Unit":"mm","UnitType":3},"Rain":{"Value":0,"Unit":"mm","UnitType":3},"Snow":{"Value":0,"Unit":"cm","UnitType":4},"Ice":{"Value":0,"Unit":"mm","UnitType":3},"HoursOfPrecipitation":0,"HoursOfRain":0,"HoursOfSnow":0,"HoursOfIce":0,"CloudCover":0,"Evapotranspiration":{"Value":0.8,"Unit":"mm","UnitType":3},"SolarIrradiance":{"Value":368.1,"Unit":"W/m²","UnitType":33}},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/en/au/sydney/22889/daily-weather-forecast/22889?unit=c&lang=en-us","Link":"http://www.accuweather.com/en/au/sydney/22889/daily-weather-forecast/22889?unit=c&lang=en-us"}]}';

		const sydneyInfo = JSON.parse(sydneyInfo_str);
		const sydneyWeather = JSON.parse(sydneyWeather_str);

	useEffect(() => {
		console.log("the city info:");
		console.log(cityInfo);
		console.log("the city weather:");
		console.log(cityWeather);
	});

	if (Object.keys(cityInfo).length === 0 || Object.keys(cityWeather).length === 0) {
		return (null);
		//cityInfo = sydneyInfo;
		//cityWeather = sydneyWeather;
	}

	return (
		<div className='ForecastCard'>
			<div className='CityHeader'>
				{cityInfo.EnglishName.toUpperCase()}
				<div className='CountryCode'>{cityInfo.Country.ID}</div>
			</div>
		
			<div className='Temperature'>
				<div>
					Min&nbsp;
					<span className='RealTemperature'>
						{cityWeather.DailyForecasts[0].Temperature.Minimum.Value} °C
					</span>
					<br/>
					<span className='FeelTemperature'>
						real feel {cityWeather.DailyForecasts[0].RealFeelTemperature.Minimum.Value} °C
					</span>
				</div>
				<div>
					Max&nbsp;
					<span className='RealTemperature'>
						{cityWeather.DailyForecasts[0].Temperature.Maximum.Value} °C
					</span>
					<br />
					<span className='FeelTemperature'>
						real feel {cityWeather.DailyForecasts[0].RealFeelTemperature.Maximum.Value} °C
					</span>
					
				</div>
			</div>
			<div className='DayNightSection'>
				<div>
					<div className='Title'>Day</div>
						<img src ={'./icons/' + cityWeather.DailyForecasts[0].Day.Icon + '.svg'} alt='weather icon'/>
					<div>
						{cityWeather.DailyForecasts[0].Day.IconPhrase}
					</div>
				</div>
				<div>
					<div className='Title'>Night</div>
					<img src ={'./icons/' + cityWeather.DailyForecasts[0].Night.Icon + '.svg'} alt='weather icon'/>
					<div>
						{cityWeather.DailyForecasts[0].Night.IconPhrase}
					</div>
				</div>
			</div>
			<div className='NextForecast'>
				<div></div>
				{cityWeather.Headline.Text}
			</div>
		</div>
	);
}
