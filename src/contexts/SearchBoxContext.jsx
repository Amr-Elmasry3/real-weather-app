"use client";

import { createContext } from "react";

// Import React Hooks
import { useState } from "react";

// Create Current Location Context
export const SearchBoxContext = createContext({
  isOpen: false,
  setIsOpen: null,
});

function SearchBoxProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchBoxContext.Provider
      value={{ isOpen: isOpen, setIsOpen: handleIsOpenSearch }}
    >
      {children}
    </SearchBoxContext.Provider>
  );
}

export default SearchBoxProvider;
