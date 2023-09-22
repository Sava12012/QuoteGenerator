import { useState, useCallback } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Weather.css'
import search_icon from "../assets/wheather/search.png"
import clear_icon from "../assets/wheather/clear.png"
import cloud_icon from "../assets/wheather/cloud.png"
import drizzle_icon from "../assets/wheather/drizzle.png"
import rain_icon from "../assets/wheather/rain.png"
import snow_icon from "../assets/wheather/snow.png"
import wind_icon from "../assets/wheather/wind.png"
import humidity_icon from "../assets/wheather/humidity.png"
import { getWeatherData } from "../../API/weatherAPI.js";

const Weather = () => {
    const [wicon, setWicon] = useState(cloud_icon);

    const search = useCallback(async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return;
        }

        const city = element[0].value;

        try {
            const data = await getWeatherData(city);
            const humidity = document.getElementsByClassName("humidityPercent");
            const wind = document.getElementsByClassName("windRate");
            const temperature = document.getElementsByClassName("weatherTemp");
            const location = document.getElementsByClassName("weatherLocation");
            humidity[0].innerText = data.main.humidity + " %";
            wind[0].innerText = Math.floor(data.wind.speed) + " km/h";
            temperature[0].innerText = Math.floor(data.main.temp) + "°c";
            location[0].innerText = data.name;

            if (
                data.weather[0].icon === "01d" ||
                data.weather[0].icon === "01n"
            ) {
                setWicon(clear_icon);
            } else if (
                data.weather[0].icon === "02d" ||
                data.weather[0].icon === "02n"
            ) {
                setWicon(cloud_icon);
            } else if (
                data.weather[0].icon === "03d" ||
                data.weather[0].icon === "03n"
            ) {
                setWicon(drizzle_icon);
            } else if (
                data.weather[0].icon === "04d" ||
                data.weather[0].icon === "04n"
            ) {
                setWicon(drizzle_icon);
            } else if (
                data.weather[0].icon === "09d" ||
                data.weather[0].icon === "09n"
            ) {
                setWicon(rain_icon);
            } else if (
                data.weather[0].icon === "10d" ||
                data.weather[0].icon === "10n"
            ) {
                setWicon(rain_icon);
            } else if (
                data.weather[0].icon === "13d" ||
                data.weather[0].icon === "13n"
            ) {
                setWicon(snow_icon);
            } else {
                setWicon(clear_icon);
            }
        } catch (error) {
            toast.error(`Wrong city: ${error.message}`);
        }
    }, []);
    return(
        <>
            <ToastContainer />
            <div className='weatherContainer'>
                <div className='topBar'>
                    <input
                        type='text'
                        className='cityInput'
                        placeholder='Search'
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                search();
                            }
                        }}
                    />
                    <div className='searchIcon' onClick={search}>
                        <img src={search_icon} alt=''/>
                    </div>
                </div>
                <div className='weatherImage'>
                    <img src={wicon} alt='' width='64' height='64'/>
                </div>

                <div className='weatherTemp'>21°c</div>
                <div className='weatherLocation'>Tokyo</div>
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
            </div>
        </>
    )
}

export default Weather;
