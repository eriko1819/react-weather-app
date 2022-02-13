import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from"./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.descr}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
                <div className="float-left">
                <WeatherIcon 
                  code={props.data.icon} 
                  alt={props.data.decr} 
                />
              </div>

              <div className="float-left">
              <span className="temp">{Math.round(weatherData.temp)}</span>
              <span className="units">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        </div>
    );
}