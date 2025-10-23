"use client";

// Import Next Components
import Image from "next/image";

// Import My Components
import MainBoxCover from "@/components/common/MainBoxCover";
import MainTitle from "@/components/common/MainTitle";
import SecondBoxCover from "@/components/common/SecondBoxCover";

// Import React Icons
import { FiEye } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { RiTempHotLine } from "react-icons/ri";
import { PiWavesBold } from "react-icons/pi";
import { PiSunBold } from "react-icons/pi";
import { PiMoonBold } from "react-icons/pi";
import { PiWindBold } from "react-icons/pi";

// Import React Hooks
import { useContext } from "react";

// Import Contexts
import { WeatherDataContext } from "@/contexts/WeatherDataContext";

// Import Utils
import { getCelsiusDegress } from "@/utils/getCelsiusDegree";
import { getSunriseOrSunset } from "@/utils/getSunriseOrSunset";

// Handle Style
const title = ["text-[13px]", "text-on-surface-variant-2", "mb-[20px]"];
const flex = ["flex", "items-center", "justify-between", "gap-[20px]"];
const icon = ["text-[32px]", "text-white"];
const value = ["text-[24px]", "text-white"];
const unit = ["text-[16px]"];

const airQualityState = [
  { state: "Good", background: "bg-bg-aqi-1", color: "text-on-bg-aqi-1" },
  { state: "Fair", background: "bg-bg-aqi-2", color: "text-on-bg-aqi-2" },
  { state: "Moderate", background: "bg-bg-aqi-3", color: "text-on-bg-aqi-3" },
  { state: "Poor", background: "bg-bg-aqi-4", color: "text-on-bg-aqi-4" },
  { state: "Very Poor", background: "bg-bg-aqi-5", color: "text-on-bg-aqi-5" },
];

function TodaysHighlights() {
  const { currentWeather, airQulity } = useContext(WeatherDataContext);

  return (
    <MainBoxCover>
      <div className="todays-highlights">
        <MainTitle title="Todays Highlights" />

        <div
          className="highlights-info grid gap-[20px] overflow-x-scroll hidden-scrollbar"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          }}
        >
          <SecondBoxCover>
            <div className="head relative">
              <h2 className={`${title.join(" ")}`}>Air Quality Index</h2>

              <span
                className={`air-quality-state absolute top-[-5px] right-0 rounded-16 py-[6px] px-[12px] text-[13px] font-[600] ${
                  airQualityState[airQulity.list[0].main.aqi - 1].background
                } ${airQualityState[airQulity.list[0].main.aqi - 1].color}`}
              >
                {airQualityState[airQulity.list[0].main.aqi - 1].state}
              </span>
            </div>

            <div className={`air-quality ${flex.join(" ")}`}>
              <PiWindBold className={`${icon.join(" ")}`} />

              <div
                className={`info flex-1 flex-wrap ${flex.join(" ")}`}
                style={{ gap: "25px" }}
              >
                {Object.keys(airQulity.list[0].components).map((myKey) => {
                  return (
                    <div
                      className="flex flex-col gap-[10px] text-center"
                      key={myKey}
                    >
                      <span className="key text-[12px] text-on-surface-variant-2 uppercase">
                        {myKey}
                      </span>

                      <span className={`value ${value.join(" ")}`}>
                        {airQulity.list[0].components[myKey]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </SecondBoxCover>

          <SecondBoxCover>
            <h2 className={`${title.join(" ")}`}>Sunrise & Sunset</h2>

            <div className={`sunrise-sunset flex items-center justify-between`}>
              <div className={`sunrise ${flex.join(" ")}`}>
                <PiSunBold className={`${icon.join(" ")}`} />

                <div className="info flex flex-col gap-[10px]">
                  <span className="text-[12px] text-on-surface-variant-2">
                    Sunrise
                  </span>

                  <span className={`value ${value.join(" ")}`}>
                    {getSunriseOrSunset(currentWeather.sys.sunrise)}
                  </span>
                </div>
              </div>

              <div className={`sunset ${flex.join(" ")}`}>
                <PiMoonBold className={`${icon.join(" ")}`} />

                <div className="info flex flex-col gap-[10px]">
                  <span className="text-[12px] text-on-surface-variant-2">
                    Sunset
                  </span>

                  <span className={`value ${value.join(" ")}`}>
                    {getSunriseOrSunset(currentWeather.sys.sunset)}
                  </span>
                </div>
              </div>
            </div>
          </SecondBoxCover>

          <div
            className="humidity-pressure grid gap-[10px]"
            style={{ gridTemplateColumns: "repeat(2, calc(50% - 5px))" }}
          >
            <SecondBoxCover>
              <h2 className={`${title.join(" ")}`}>Humidity</h2>

              <div className={`humidity ${flex.join(" ")}`}>
                <WiHumidity className={`${icon.join(" ")}`} />

                <span className={`value ${value.join(" ")}`}>
                  {currentWeather.main.humidity}
                  <span className={`unit ${unit.join(" ")}`}>%</span>
                </span>
              </div>
            </SecondBoxCover>

            <SecondBoxCover>
              <h2 className={`${title.join(" ")}`}>Pressure</h2>

              <div className={`pressure ${flex.join(" ")}`}>
                <PiWavesBold className={`${icon.join(" ")}`} />

                <span className={`value ${value.join(" ")}`}>
                  {currentWeather.main.pressure}
                  <span className={`unit ${unit.join(" ")}`}>hPa</span>
                </span>
              </div>
            </SecondBoxCover>
          </div>

          <div
            className="visibility-feels grid gap-[10px]"
            style={{ gridTemplateColumns: "repeat(2, calc(50% - 5px))" }}
          >
            <SecondBoxCover>
              <h2 className={`${title.join(" ")}`}>Visibility</h2>

              <div className={`visibility ${flex.join(" ")}`}>
                <FiEye className={`${icon.join(" ")}`} />

                <span className={`value ${value.join(" ")}`}>
                  {currentWeather.visibility / 1000}
                  <span className={`unit ${unit.join(" ")}`}>Km</span>
                </span>
              </div>
            </SecondBoxCover>

            <SecondBoxCover>
              <h2 className={`${title.join(" ")}`}>Feels Like</h2>

              <div className={`feels ${flex.join(" ")}`}>
                <RiTempHotLine className={`${icon.join(" ")}`} />

                <span className={`value ${value.join(" ")}`}>
                  {getCelsiusDegress(currentWeather.main.feels_like)}
                  <sup className="text-[14px]">°С</sup>
                </span>
              </div>
            </SecondBoxCover>
          </div>

          <SecondBoxCover>
            <h2 className={`${title.join(" ")}`}>Wind</h2>

            <div className="flex items-center justify-between">
              <div className={`wind-speed ${flex.join(" ")}`}>
                <PiWindBold className={`${icon.join(" ")}`} />

                <span className={`value ${value.join(" ")}`}>
                  {currentWeather.wind.speed}
                  <span className={`unit ${unit.join(" ")}`}>M/sec</span>
                </span>
              </div>

              <div className={`wind-direction ${flex.join(" ")}`}>
                <Image
                  src="./assets/weather_icons/direction.png"
                  alt="direction_icon"
                  width={32}
                  height={32}
                  loading="lazy"
                  style={{ transform: `rotate(${currentWeather.wind.deg}deg)` }}
                />

                <span className={`value ${value.join(" ")}`}>
                  {currentWeather.wind.deg}
                  <span className={`unit ${unit.join(" ")}`}>Deg</span>
                </span>
              </div>
            </div>
          </SecondBoxCover>
        </div>
      </div>
    </MainBoxCover>
  );
}

export default TodaysHighlights;
