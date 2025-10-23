"use client";

// Import Next Components
import Image from "next/image";

// Import My Components
import WeatherNow from "./left_side/WeatherNow";
import WeatherNextDays from "./left_side/WeatherNextDays";
import TodaysHighlights from "./right_side/TodaysHighlights";
import TodaysAt from "./right_side/TodaysAt";

// Import React Hooks
import { useContext } from "react";

// Import Contexts
import { WeatherDataContext } from "@/contexts/WeatherDataContext";

function HomeContent() {
  const { currentWeather } = useContext(WeatherDataContext);

  if (currentWeather) {
    return (
      <div className="home-content max-sm:flex-col flex gap-[30px] mt-[40px]">
        <div className="left-side max-sm:w-[100%] max-lg:w-[35%] w-[25%] flex flex-col gap-[20px]">
          <WeatherNow />

          <WeatherNextDays />
        </div>

        <div className="right-side flex flex-col gap-[20px] max-sm:w-[100%] max-lg:w-[65%] w-[75%]">
          <TodaysHighlights />

          <TodaysAt />
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative top-[80px] left-[50%] translate-x-[-50%] flex flex-col items-center gap-[20px]">
        <span className="text-white">---Search City---</span>

        <Image
          src="./assets/curiosity_search.gif"
          alt="search_icon"
          width={320}
          height={320}
          priority
          className="rounded-circle"
        />
      </div>
    );
  }
}

export default HomeContent;
