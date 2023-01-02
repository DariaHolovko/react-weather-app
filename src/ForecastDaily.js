import React from "react";
import WeatherIcon from "./weatherIcon";

export default function ForecastDaily(props) {
  function temp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}˚C`;
  }
  function date() {
    let forecastDate = new Date(props.data.dt * 1000);
    let date = forecastDate.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date];
  }

  return (
    <div>
      <h5>{date()}</h5>
      <WeatherIcon code={props.data.weather[0].icon} size={36} color="white" />
      <p className="">{temp()}</p>
    </div>
  );
}
