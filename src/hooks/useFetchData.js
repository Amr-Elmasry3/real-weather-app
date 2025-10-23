"use client";

// Import React Hooks
import { useContext } from "react";

// Import Context
import { WeatherDataContext } from "@/contexts/WeatherDataContext";

// Import Fetch Method
import { fetchWeatherData } from "@/actions/fetchWeatherData";

export function useFetchData() {
  const { setWeatherData } = useContext(WeatherDataContext);

  const fetchAllData = async (lat, lon) => {
    if (lat && lon) {
      // Fetch City Weather Data
      const currentWeatherData = await fetchWeatherData(
        "currentWeather",
        lat,
        lon
      );

      const airQualityData = await fetchWeatherData("airQuality", lat, lon);

      const _5DaysForecastData = await fetchWeatherData(
        "_5DaysForecast",
        lat,
        lon
      );

      const todayAtData = await fetchWeatherData("todayAt", lat, lon);

      // Set Weather Data In Context
      const weatherData = {
        currentWeather: currentWeatherData,
        airQulity: airQualityData,
        _5DaysForecast: _5DaysForecastData,
        todayAt: todayAtData,
      };

      setWeatherData(weatherData);
    } else {
      setWeatherData(null);
    }
  };

  return { fetchAllData };
}
