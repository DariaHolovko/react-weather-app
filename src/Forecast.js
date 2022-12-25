import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast() {
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
        <div className="col forecast-component">
          <h5>Fri</h5>
          <img
            className="forecast-img"
            src="https://cdn-icons-png.flaticon.com/512/4064/4064269.png"
            alt="sun and clouds"
          />
          <p>18˚C</p>
        </div>
        <div className="col forecast-component">
          <h5>Fri</h5>
          <img
            className="forecast-img"
            src="https://cdn-icons-png.flaticon.com/512/4064/4064269.png"
            alt="sun and clouds"
          />
          <p>18˚C</p>
        </div>
        <div className="col forecast-component">
          <h5>Fri</h5>
          <img
            className="forecast-img"
            src="https://cdn-icons-png.flaticon.com/512/4064/4064269.png"
            alt="sun and clouds"
          />
          <p>18˚C</p>
        </div>
        <div className="col forecast-component">
          <h5>Fri</h5>
          <img
            className="forecast-img"
            src="https://cdn-icons-png.flaticon.com/512/4064/4064269.png"
            alt="sun and clouds"
          />
          <p>18˚C</p>
        </div>
      </div>
    </div>
  );
}
