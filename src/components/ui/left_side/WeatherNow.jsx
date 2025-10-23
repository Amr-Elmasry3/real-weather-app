"use client";

// Import Next Components
import Image from "next/image";

// Import My Components
import MainBoxCover from "@/components/common/MainBoxCover";
import MainTitle from "@/components/common/MainTitle";

// Import React Icons
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

// Import React Hooks
import { useContext } from "react";

// Import Contexts
import { WeatherDataContext } from "@/contexts/WeatherDataContext";

// Import Utils
import { getDate } from "@/utils/getDate";
import { getCelsiusDegress } from "@/utils/getCelsiusDegree";

function WeatherNow() {
  const { currentWeather } = useContext(WeatherDataContext);
  const { todayDate } = getDate(currentWeather.dt);

  return (
    <MainBoxCover>
      <div className="weather-now">
        <MainTitle title="Now" />

        <div className="details-box">
          <div className="weather-info pb-[12px]">
            <div className="degree flex items-center justify-between mb-[10px]">
              <span className="relative text-[60px] text-white ">
                {getCelsiusDegress(currentWeather.main.temp)}
                <sup className="text-[30px]">°С</sup>
              </span>

              <Image
                src={`./assets/weather_icons/${currentWeather.weather[0].icon}.png`}
                alt={`currentWeather.weather[0].description_shape`}
                width={65}
                height={65}
                loading="lazy"
              />
            </div>

            <span className="state text-[14px] font-[600] text-on-surface-variant-2 capitalize">
              {currentWeather.weather[0].description}
            </span>
          </div>

          <div className="search-info pt-[12px] border-t border-t-solid border-t-outline flex flex-col gap-[12px]">
            <div className="date-box flex items-center gap-[8px]">
              <FaRegCalendarAlt className="text-[16px] text-on-surface" />

              <span className="text-[13px] text-on-surface-variant-2">
                {todayDate.dayName} {todayDate.day}, {todayDate.monthName}
              </span>
            </div>

            <div className="location-box flex items-center gap-[8px]">
              <SlLocationPin className="text-[16px] text-on-surface" />

              <span className="text-[13px] text-on-surface-variant-2">
                {currentWeather.name}, {currentWeather.sys.country}
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainBoxCover>
  );
}

export default WeatherNow;
