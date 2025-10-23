export async function fetchCoords(city) {
  let cityCoords = [];

  if (city) {
    try {
      const coordsResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=9cc78840b765f90d02292b66a2a33b0f`
      );

      coordsResponse.ok
        ? (cityCoords = await coordsResponse.json())
        : (cityCoords = []);
    } catch (error) {
      console.log(Error("Something is wrong"));
    }
  }

  return cityCoords;
}
