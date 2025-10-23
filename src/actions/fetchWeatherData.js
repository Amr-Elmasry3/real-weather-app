export async function fetchWeatherData(type, lat, lon) {
  let weatherData;
  const key = "9cc78840b765f90d02292b66a2a33b0f";
  let urlNow = "";

  switch (type) {
    case "currentWeather":
      urlNow = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      break;

    case "airQuality":
      urlNow = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;
      break;

    case "_5DaysForecast":
      urlNow = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;
      break;

    case "todayAt":
      urlNow = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,wind_direction_10m,weather_code,is_day&forecast_days=1`;
      break;

    default:
      break;
  }

  if (lat && lon) {
    try {
      const response = await fetch(urlNow);

      weatherData = await response.json();
    } catch (error) {
      console.log(Error("Something is wrong"));
    }
  }
  return weatherData;
}
