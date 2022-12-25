import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Forecast from "./Forecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureFull } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-8">
            <Search />
          </div>
          <div className="col-4">
            <p className="location">
              <FontAwesomeIcon icon={faLocationDot} /> Kyiv
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
            <h1>19˚C</h1>
          </div>
          <div className="col else">
            <ul className="add-info">
              <li>
                Humidity <FontAwesomeIcon icon={faSmog} />: 30%
              </li>
              <li>
                Wind <FontAwesomeIcon icon={faWind} />: 12km/h
              </li>
              <li>
                {" "}
                Feels like <FontAwesomeIcon icon={faTemperatureFull} />: 15˚C
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
}

export default App;
