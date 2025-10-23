// This Is Function Of Get Celsius Degrees

export const getCelsiusDegress = (degreesFahrenheit) => {
  const degreesCelsius = Math.round(degreesFahrenheit - 273);

  return degreesCelsius;
};
