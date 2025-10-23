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

// Import Utils
import { getDate } from "@/utils/getDate";
import { getCelsiusDegress } from "@/utils/getCelsiusDegree";

function WeatherNextDays() {
  const { _5DaysForecast } = useContext(WeatherDataContext);

  return (
    <div className="weather-next-days">
      <MainTitle title="5 Days Forecast" />

      <MainBoxCover>
        <ul className="flex flex-col">
          {_5DaysForecast.list.map((item) => {
            const { todayDate } = getDate(item.dt);
            const hour = new Date(item.dt_txt).getHours();

            if (hour === 15) {
              return (
                <li
                  className="grid items-center justify-between not-last-of-type:border-b not-last-of-type:border-b-solid not-last-of-type:border-b-outline py-[8px]! first-of-type:pt-0 last-of-type:pb-0"
                  key={item.dt}
                  style={{ gridTemplateColumns: "repeat(3, calc(100% / 3))" }}
                >
                  <div className="degree flex items-center gap-[6px]">
                    <Image
                      src={`./assets/weather_icons/${item.weather[0].icon}.png`}
                      alt="state"
                      width={30}
                      height={30}
                      loading="lazy"
                    />

                    <span className="relative text-[16px] font-[500] text-on-surface">
                      {getCelsiusDegress(item.main.temp)} <sup>o</sup>
                    </span>
                  </div>

                  <span className="date text-[13px] font-[500] text-on-surface-variant-2 text-center">
                    {todayDate.day}, {todayDate.monthName}
                  </span>

                  <span className="day text-[13px] font-[500] text-on-surface-variant-2 text-end">
                    {todayDate.dayName}
                  </span>
                </li>
              );
            }
          })}
        </ul>
      </MainBoxCover>
    </div>
  );
}

export default WeatherNextDays;
