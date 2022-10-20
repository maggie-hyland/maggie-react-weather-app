import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
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
