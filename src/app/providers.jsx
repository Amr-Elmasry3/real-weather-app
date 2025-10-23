"use client";

// Import Providers
import WeatherDataProvider from "@/contexts/WeatherDataContext";
import CurrentLocationProvider from "@/contexts/CurrentLocationContext";
import SearchBoxProvider from "@/contexts/SearchBoxContext";

function Providers({ children }) {
  return (
    <WeatherDataProvider>
      <CurrentLocationProvider>
        <SearchBoxProvider>{children}</SearchBoxProvider>
      </CurrentLocationProvider>
    </WeatherDataProvider>
  );
}

export default Providers;
