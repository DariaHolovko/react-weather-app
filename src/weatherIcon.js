import React from "react";
import clearSkyDay from "./img/sunny.png";
import clearSkyNight from "./img/moon.png";
import fewCloudsNight from "./img/clear-cloudy-1.png";
import fewcloudsDay from "./img/clear-cloudy.png";
import cloudy from "./img/cloudy.png";
import mostlyCloudy from "./img/mostly-cloudy.png";
import showerRain from "./img/showers.png";
import rainDay from "./img/drizzle.png";
import rainNight from "./img/drizzle-1.png";
import thunderStorm from "./img/thunderstroms.png";
import snow from "./img/snow.png";
import mist from "./img/foggy.png";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "01d": clearSkyDay,
    "01n": clearSkyNight,
    "02d": fewcloudsDay,
    "02n": fewCloudsNight,
    "03d": cloudy,
    "03n": cloudy,
    "04d": mostlyCloudy,
    "04n": mostlyCloudy,
    "09d": showerRain,
    "09n": showerRain,
    "10d": rainDay,
    "10n": rainNight,
    "11d": thunderStorm,
    "11n": thunderStorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };
  return <img src={codeMapping[props.code]} alt="" />;
}
