import React from 'react';

function Weather({ data }) {
  return (
    <div className="weather">
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>🌡️ Temp: {data.main.temp}°C</p>
      <p>💨 Wind: {data.wind.speed} m/s</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
    </div>
  );
}

export default Weather;
