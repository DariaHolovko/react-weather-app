import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Forecast(props) {
  const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="forecast-section">
      <p className="m-3 pt-3 fw-bolder">5 Day Forecast</p>
      <div className="row forecast-info">
        <div className="col forecast-component">
          <h5>Fri</h5>
          <img
            className="forecast-img"
            src="https://cdn-icons-png.flaticon.com/512/4064/4064269.png"
            alt="sun and clouds"
          />
          <p className="">18˚C</p>
        </div>
      </div>
    </div>
  );
}
