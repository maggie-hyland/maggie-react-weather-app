import React, { useState, useEffect } from "react";
import "./css/Style.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

//* need to figure out how to use state management to let the 5-day forecast switch between celsius and fahrenheit *

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  //useEffect is needed to change something after the component has already loaded
  //read the following code as: useEffect will setLoaded to false when the props.coordinates change
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  //the purpose of the above code is to allow the 5-day forecast to update when a new city is searched...
  //...this is accomplished by changing the loaded variable to false which will then allow the "else" statement below to call on the api for new data...
  //...which will then update the loaded variable to true and allow the "if" statement below to run

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = `50c2acd53349fabd54f52b93c8650d37`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
