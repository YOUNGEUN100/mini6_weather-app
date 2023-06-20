import React, { useState } from 'react'
import './App.css'
import Search from './components/Search';
import Info from './components/Info';
import Today from './components/Today';

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [message, setMessage] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    // console.log(location);
  };  

  const fetchWeather = () => {
    const apiKey = "c406a836c908fbabe51c3a9c820d2872";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=kr`;

    fetch(url)
      .then((res)=>res.json())
      .then((data) => {
        if (data.cod === "404") {
          setWeather(null);
          setMessage("올바른 지역명이 아닙니다");
          return;
        }
        setWeather(data);
        console.log(weather);
      });
  };

  const handleWeatherSearch = (e) => {
    e.preventDefault();
    fetchWeather();
};

  return (
    <div className="app">
      <h1>Weather App</h1>
      <Today />
      <Search 
        handleWeatherSearch={handleWeatherSearch}
        location={location}
        handleLocationChange={handleLocationChange}
        />
      <Info weather={weather} message={message}/>
      </div>
  );
}

export default App
