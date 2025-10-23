// This I sFunction Of Get Sunrise And Sunset Time

export const getSunriseOrSunset = (value) => {
  const time = new Date(value * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return time;
};
