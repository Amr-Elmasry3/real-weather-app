"use client";

import { createContext } from "react";

// Import React Hooks
import { useState } from "react";

// Create Current Weather Context
export const WeatherDataContext = createContext({
  currentWeather: null,
  airQulity: null,
  _5DaysForecast: null,
  todayAt: null,
  setWeatherData: null,
});

function WeatherDataProvider({ children }) {
  const [weatherData, setWeatherData] = useState({
    currentWeather: null,
    airQulity: null,
    _5DaysForecast: null,
    todayAt: null,
  });

  const handleWeatherData = (data) => {
    if (data) {
      setWeatherData(data);
    } else {
      setWeatherData({
        currentWeather: null,
        airQulity: null,
        _5DaysForecast: null,
        todayAt: null,
      });
    }
  };

  return (
    <WeatherDataContext.Provider
      value={{
        currentWeather: weatherData.currentWeather,
        airQulity: weatherData.airQulity,
        _5DaysForecast: weatherData._5DaysForecast,
        todayAt: weatherData.todayAt,
        setWeatherData: handleWeatherData,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
}

export default WeatherDataProvider;
