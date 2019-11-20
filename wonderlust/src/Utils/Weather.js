import React from 'react';


function Weather(props){
let theWeather = props.location.consolidated_weather[0].weather_state_abbr

    return(
        <>
        {props.weather&&<img src={`https://www.metaweather.com/static/img/weather/${props.weather}.svg`}/>}
        </>
    )
}





export default Weather;