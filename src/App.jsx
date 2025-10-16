import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Mock weather data (no API key needed)
  const mockData = {
    Hyderabad: {
      name: "Hyderabad",
      sys: { country: "IN" },
      weather: [{ description: "Clear Sky" }],
      main: { temp: 31, humidity: 40 },
      wind: { speed: 3.2 },
    },
    London: {
      name: "London",
      sys: { country: "GB" },
      weather: [{ description: "Overcast Clouds" }],
      main: { temp: 18, humidity: 76 },
      wind: { speed: 5.1 },
    },
    Tokyo: {
      name: "Tokyo",
      sys: { country: "JP" },
      weather: [{ description: "Rainy" }],
      main: { temp: 24, humidity: 83 },
      wind: { speed: 4.5 },
    },
  };

  const fetchWeather = () => {
    const cityName = city.trim();
    if (!cityName) {
      setError("Please enter a city name!");
      setWeather(null);
      return;
    }

    if (mockData[cityName]) {
      setWeather(mockData[cityName]);
      setError("");
    } else {
      setError("❌ City not found. Please check the spelling!");
      setWeather(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <div className="app">
      <h1>🌤 Weather Forecast</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <h3>{weather.weather[0].description.toUpperCase()}</h3>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;