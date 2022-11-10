import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <ul className="listDetails">
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </ul>
        </div>
        <div className="col-6">

            <div className="clearfix">
              <div className="float-left icon">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                  size={50}
                />

              <div className="float-left">
                <div className="currentTemp">
                  <WeatherTemperature celsius={props.data.temperature} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
