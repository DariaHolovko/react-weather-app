import React from "react";
import WeatherIcon from "./weatherIcon";
import TemperatureDisplay from "./TemperatureDisplay";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureFull } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeatherInfo(props) {
  return (
    <div className="row current-weather">
      <div className="col main-info">
        <WeatherIcon code={props.data.iconURL} />
        <TemperatureDisplay temp={Math.round(props.data.temperature)} />
      </div>
      <div className="col else">
        <FormattedDate date={props.data.date} />
        <ul className="add-info">
          <li>
            Humidity <FontAwesomeIcon icon={faSmog} />: {props.data.humidity}%
          </li>
          <li>
            Wind <FontAwesomeIcon icon={faWind} />: {props.data.wind}km/h
          </li>
          <li>
            {" "}
            Feels like <FontAwesomeIcon icon={faTemperatureFull} />:{" "}
            {Math.round(props.data.feeling)} ˚C
          </li>
        </ul>
      </div>
    </div>
  );
}
