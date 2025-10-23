"use client";

import { createContext } from "react";

// Import React Hooks
import { useState } from "react";

// Create Current Location Context
export const CurrentLocationContext = createContext({
  isUsed: false,
  setIsUsedLocation: null,
});

function CurrentLocationProvider({ children }) {
  const [isUsedLocation, setIsUsedLocation] = useState(false);

  const handleCurrentLocation = (value) => {
    setIsUsedLocation(value);
  };

  return (
    <CurrentLocationContext.Provider
      value={{
        isUsed: isUsedLocation,
        setIsUsedLocation: handleCurrentLocation,
      }}
    >
      {children}
    </CurrentLocationContext.Provider>
  );
}

export default CurrentLocationProvider;
