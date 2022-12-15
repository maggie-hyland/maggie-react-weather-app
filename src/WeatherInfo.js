import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h1>{props.data.city}</h1>
        <div className="row weatherInfoRow">
          <div className="col-5">
            <ul className="dateDetails">
              <li>
                <FormattedDate date={props.data.date} />
              </li>
            </ul>
            <ul className="listDetails">
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
          <div className="col-7">
            <div className="clearfix">
              <div className="mainIcon">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                  size={50}
                />
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
