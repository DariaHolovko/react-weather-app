import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("Kyiv");

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      feeling: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      iconURL: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "3d44d643ae2932526e55a929951219db";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-8">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Enter your city..."
                  className="search-form"
                  onChange={handleChange}
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </form>
            </div>
            <div className="col-4">
              <p className="location">
                <FontAwesomeIcon icon={faLocationDot} /> {weather.city}
              </p>
            </div>
          </div>
          <WeatherInfo data={weather} />
        </header>
        <div className="App-footer">
          <Forecast />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default App;
