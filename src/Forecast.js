import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import ForecastDaily from "./ForecastDaily";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  //Check here for bugs in a function
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(
    function () {
      setLoaded(false);
    },
    [props.coordinates]
  );

  if (loaded) {
    return (
      <div className="forecast-section">
        <p className="m-3 pt-3 fw-bolder">5 Day Forecast</p>
        <div className="row forecast-info">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col forecast-component">
                  <ForecastDaily data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "701f06352d61835bc4fc894e7b084629";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
}
