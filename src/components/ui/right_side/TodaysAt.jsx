"use client";

// Import Next Components
import Image from "next/image";

// Import My Components
import MainBoxCover from "@/components/common/MainBoxCover";
import MainTitle from "@/components/common/MainTitle";

// Import React Hooks
import { useContext } from "react";

// Import Contexts
import { WeatherDataContext } from "@/contexts/WeatherDataContext";

export const meteoToWeatherIcon = {
  0: { day: "01d", night: "01n" },

  1: { day: "01d", night: "01n" },

  2: { day: "02d", night: "02n" },
  3: { day: "02d", night: "02n" },

  45: { day: "50d", night: "50n" },
  48: { day: "50d", night: "50n" },

  51: { day: "09d", night: "09n" },
  53: { day: "09d", night: "09n" },
  55: { day: "09d", night: "09n" },

  61: { day: "10d", night: "10n" },
  63: { day: "10d", night: "10n" },
  65: { day: "10d", night: "10n" },

  71: { day: "13d", night: "13n" },
  73: { day: "13d", night: "13n" },
  75: { day: "13d", night: "13n" },
  77: { day: "13d", night: "13n" },

  80: { day: "09d", night: "09n" },
  81: { day: "09d", night: "09n" },
  82: { day: "09d", night: "09n" },

  85: { day: "13d", night: "13n" },
  86: { day: "13d", night: "13n" },

  95: { day: "11d", night: "11n" },
  96: { day: "11d", night: "11n" },
  99: { day: "11d", night: "11n" },
};

function TodaysAt() {
  const { todayAt } = useContext(WeatherDataContext);

  const getTime = (time) => {
    const timeNow = new Date(time).toLocaleTimeString("en-US", {
      hour: "numeric",
    });

    return timeNow;
  };

  return (
    <div className="todays-at">
      <MainTitle title="Today At" />

      <div className="cover overflow-hidden">
        <div className="flex items-center gap-[12px] overflow-x-scroll hidden-scrollbar">
          {todayAt.hourly.time.map((item, index) => {
            return (
              <div className="flex flex-col gap-[12px]" key={item}>
                <MainBoxCover>
                  <div className="temp min-w-[45px] flex flex-col items-center gap-[7px]">
                    <span className="time text-[12px] text-white">
                      {getTime(item)}
                    </span>

                    <Image
                      src={`./assets/weather_icons/${
                        todayAt.hourly.is_day[index]
                          ? meteoToWeatherIcon[
                              todayAt.hourly.weather_code[index]
                            ].day
                          : meteoToWeatherIcon[
                              todayAt.hourly.weather_code[index]
                            ].night
                      }.png`}
                      alt={`weather_icon`}
                      width={30}
                      height={30}
                      loading="lazy"
                    />

                    <span className="temp text-[12px] text-white">
                      {Number(todayAt.hourly.temperature_2m[index]).toFixed(0)}
                      <sup>o</sup>
                    </span>
                  </div>
                </MainBoxCover>

                <MainBoxCover>
                  <div className="wind-deg min-w-[45px] flex flex-col items-center gap-[7px]">
                    <span className="time text-[12px] text-white">
                      {getTime(item)}
                    </span>

                    <Image
                      src="./assets/weather_icons/direction.png"
                      alt="alt_icon"
                      width={30}
                      height={30}
                      loading="lazy"
                      style={{
                        transform: `rotate(${todayAt.hourly.wind_direction_10m[index]}deg)`,
                      }}
                    />

                    <span className="deg text-[12px] text-white">
                      {todayAt.hourly.wind_direction_10m[index]} deg
                    </span>
                  </div>
                </MainBoxCover>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodaysAt;
