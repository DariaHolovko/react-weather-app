import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <div className="row">
          <div className="col">
            <p>Kyiv, Ukraine</p>
            <img
              className="weather-img"
              src="https://cdn-icons-png.flaticon.com/512/4064/4064269.png"
              alt="sun and clouds"
            />
            <h1>19˚C</h1>
          </div>
          <div className="col">
            <ul>
              <li>Humidity: 30%</li>
              <li>Wind: 12km/h</li>
              <li> Feels like: 15˚C</li>
            </ul>
          </div>
        </div>
      </header>
      <div className="footer">
        <Forecast />
      </div>
    </div>
  );
}

export default App;
