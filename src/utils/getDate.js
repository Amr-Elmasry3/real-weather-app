// This is Function Of Get Date

export const getDate = (milesecond) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octobar",
    "November",
    "December",
  ];

  const date = new Date(milesecond * 1000);

  const todayDate = {
    day: date.getDate(),
    dayName: days[date.getDay()],
    monthName: months[date.getMonth() - 1],
    year: date.getFullYear(),
  };

  return { todayDate };
};
