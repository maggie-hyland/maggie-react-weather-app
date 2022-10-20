import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Detroit</h1>
      <ul>
        <li>Thursday 09:00</li>
        <li>Rainy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="Rainy"
          />
          3°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 85%</li>
            <li>Humidity: 76%</li>
            <li>Wind: 11 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
