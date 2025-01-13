
import "./WeatherApp.css";
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from "react";

export default function WeatherApp() {
    const[weatherInfo , setWeatherInfo] = useState( {
        city: "wonderland",
        feelsLike: 13.97,
        temp: 14.05,
        weather: "mist",

    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    };

    return (
        <div className="weatherapp">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    );
};
