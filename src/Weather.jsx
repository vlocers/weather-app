import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!city) return; 

    setLoading(true);
    setError('');

    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
          params: {
            key: '9692a794231c4395a7d213535241509',  
            q: city
          }
        });
        setWeatherData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div className="weather-container">
      {weatherData && (
        <div className="weather-info">
          <div className="weather-header">
            <h2>{weatherData.location.name}</h2>
            <p>{weatherData.location.name}, Türkiye</p>
          </div>
          <div className="weather-details">
            <img
              src={`https:${weatherData.current.condition.icon}`}
              alt={weatherData.current.condition.text}
              className="weather-icon"
            />
            <p className="temperature">Sıcaklık: {weatherData.current.temp_c}°C</p>
            <p className="condition">Durum: {weatherData.current.condition.text}</p>
            <p className="humidity">Nem: {weatherData.current.humidity}%</p>
            <p className="wind">Rüzgar Hızı: {weatherData.current.wind_kph} km/saat</p>
            <p className="feelslike">Hissedilen Sıcaklık: {weatherData.current.feelslike_c}°C</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
