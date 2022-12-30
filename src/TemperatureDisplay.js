import React, { useState } from "react";

export default function TemperatureDisplay(props) {
  const [unit, setUnit] = useState("celsius");
  let convertToFahrenheit = Math.round((props.temp * 9) / 5 + 32);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="celsius">
        <span className="tempInfo">
          {props.temp} ˚C |{" "}
          <a href="/" onClick={showFahrenheit} className="temperature-link">
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="fahrenheit">
        <span className="tempInfo">
          {convertToFahrenheit}{" "}
          <a href="/" onClick={showCelsius} className="temperature-link">
            ˚C
          </a>{" "}
          | ˚F
        </span>
      </div>
    );
  }
}
