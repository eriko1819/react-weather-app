import React, { useState }from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ ready: false});
  function handlResponse(response) {
    console.log(response.data);   
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00,",
      wind: response.data.wind.speed,
      city: response.data.name,
      descr: response.data.weather[0].description,
      iconUrl: ""
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="serach"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date} 07:00</li>
          <li className="text-capitalize">{weatherData.descr}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <img
                  src={weatherData.iconurl}
                  alt={weatherData.description}
                  className="float-left"
                />
              </div>
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
  } else {
    const apiKey = `9656d85472f993f571de9d36d411cd1e`;
    let city = "Atlanta";
    let api = `https://api.openweathermap.org/data/2.5/weather`;
    let apiUrl = `${api}?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handlResponse);

    return "Loading...";
    }
  }
