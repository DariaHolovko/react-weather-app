import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureFull } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      feeling: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weather.ready) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-8">
              <Search />
            </div>
            <div className="col-4">
              <p className="location">
                <FontAwesomeIcon icon={faLocationDot} /> {weather.city}
              </p>
            </div>
          </div>
          <div className="row current-weather">
            <div className="col main-info">
              <img
                className="weather-img"
                src="https://cdn-icons-png.flaticon.com/512/4064/4064269.png"
                alt="sun and clouds"
              />
              <h1>{Math.round(weather.temperature)} C˚</h1>
            </div>
            <div className="col else">
              <FormattedDate date={weather.date} />
              <ul className="add-info">
                <li>
                  Humidity <FontAwesomeIcon icon={faSmog} />: {weather.humidity}
                  %
                </li>
                <li>
                  Wind <FontAwesomeIcon icon={faWind} />: {weather.wind}km/h
                </li>
                <li>
                  {" "}
                  Feels like <FontAwesomeIcon icon={faTemperatureFull} />:{" "}
                  {Math.round(weather.feeling)} ˚C
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="App-footer">
          <Forecast />
        </div>
      </div>
    );
  } else {
    const apiKey = "3d44d643ae2932526e55a929951219db";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}

export default App;
