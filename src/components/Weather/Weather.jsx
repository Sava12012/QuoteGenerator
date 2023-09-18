import {useState} from "react";
import './Weather.css'
import search_icon from "../assets/wheather/search.png"
import clear_icon from "../assets/wheather/clear.png"
import cloud_icon from "../assets/wheather/cloud.png"
import drizzle_icon from "../assets/wheather/drizzle.png"
import rain_icon from "../assets/wheather/rain.png"
import snow_icon from "../assets/wheather/snow.png"
import wind_icon from "../assets/wheather/wind.png"
import humidity_icon from "../assets/wheather/humidity.png"

const Weather = () => {

    let api_key = "dad534e1b6f44c17a1400dcb6a55ae63";
    const [wicon, setWicon] = useState(cloud_icon);
    const search = async () => {
        const element = document.getElementsByClassName('cityInput')
        if(element[0].value===""){
            return 0;
        }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidityPercent");
    const wind = document.getElementsByClassName("windRate");
    const temprature = document.getElementsByClassName("weatherTemp");
    const location = document.getElementsByClassName("weatherLocation");
    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp)+ "°c";
    location[0].innerHTML = data.name;

if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
    setWicon(clear_icon);
}
else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n") {
    setWicon(cloud_icon);
}
else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n") {
    setWicon(drizzle_icon);
}
else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n") {
    setWicon(drizzle_icon);
}
else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n") {
    setWicon(rain_icon);
}
else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n") {
    setWicon(rain_icon);
}
else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n") {
    setWicon(snow_icon);
}
else {
    setWicon(clear_icon);
}

    }

    return(
        <div className='weatherContainer'>
            <div className='topBar'>
                <input type='text' className='cityInput' placeholder='Search' />
                <div className='searchIcon' onClick={()=>{search()}}>
                    <img src={search_icon} alt=''/>
                </div>
            </div>
            <div className='weatherImage'>
                <img src={wicon} alt=''/>
            </div>
            <div className='weatherTemp'>14°c</div>
            <div className='weatherLocation'>London</div>
            <div className='dataContainer'>
                <div className='element'>
                    <img src={humidity_icon} alt='' className='iconData'/>
                    <div className='data'>
                        <div className='humidityPercent'>64%</div>
                        <div className="textWeather">Humidity</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icon} alt='' className='iconData'/>
                    <div className='data'>
                        <div className='windRate'>18 km/h</div>
                        <div className="textWeather">Wind Speed</div>
                    </div>
                </div>
            </div>
    </div>)
}

export default Weather;