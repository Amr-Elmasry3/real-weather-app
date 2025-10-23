"use client";

// Import My Components
import SearchBoxUi from "./SearchBoxUi";

// Import React Hooks
import { useState, useRef, useContext } from "react";

// Import Fetch Methods
import { fetchCoords } from "@/actions/fetchCoords";

// Import Custom Hooks
import { useFetchData } from "@/hooks/useFetchData";

// Import Contexts
import { CurrentLocationContext } from "@/contexts/CurrentLocationContext";
import { SearchBoxContext } from "@/contexts/SearchBoxContext";

function SearchBox() {
  const searchValue = useRef("");
  const [searchData, setSearchData] = useState({ data: [], isOpen: false });
  const { setIsUsedLocation } = useContext(CurrentLocationContext);
  const { isOpen, setIsOpen } = useContext(SearchBoxContext);
  const { fetchAllData } = useFetchData();

  const handleChangeSearchValue = async (value) => {
    searchValue.current = value;

    // Open Search Results
    setSearchData({ ...searchData, isOpen: true });

    // Fetch Search Results
    const cityCoordsData = await fetchCoords(value);

    // Set Search Results
    setSearchData({
      data: cityCoordsData,
      isOpen: cityCoordsData ? true : false,
    });
  };

  const handleClickSearch = async () => {
    if (searchValue.current) {
      let cityData;

      // Check Search Data To Get City Data
      if ([...searchData.data].length) {
        cityData = searchData.data[0];
      } else {
        cityData = undefined;
      }

      // Check City Data
      if (cityData) {
        // Fetch All Weather Data (Current Weather, _5Days Forecast, ...)
        fetchAllData(cityData.lat, cityData.lon);
      } else {
        fetchAllData(null, null);
      }

      // Reset Search Input Value
      searchValue.current = "";

      // Reset Search Results
      setSearchData({ data: [], isOpen: false });

      // Reset Current Location
      setIsUsedLocation(false);

      // Close Search Box In Small Screens
      if (window.innerWidth <= 767) {
        setIsOpen();
      }
    }
  };

  return (
    <SearchBoxUi
      searchData={searchData}
      searchValue={searchValue}
      handleChangeSearchValue={handleChangeSearchValue}
      handleClickSearch={handleClickSearch}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
}

export default SearchBox;
