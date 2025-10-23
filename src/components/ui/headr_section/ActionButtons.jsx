"use client";

// Import React Icons
import { MdMyLocation } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

// Import React Hooks
import { useContext } from "react";

// Import Custom Hooks
import { useFetchData } from "@/hooks/useFetchData";

// Import Contexts
import { CurrentLocationContext } from "@/contexts/CurrentLocationContext";
import { SearchBoxContext } from "@/contexts/SearchBoxContext";

function ActionButtons() {
  const { isUsed, setIsUsedLocation } = useContext(CurrentLocationContext);
  const { setIsOpen } = useContext(SearchBoxContext);
  const { fetchAllData } = useFetchData();

  const handleCurrentLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (!isUsed) {
        fetchAllData(position.coords.latitude, position.coords.longitude);

        setIsUsedLocation(true);
      }
    });
  };

  return (
    <div className="action-buttons flex items-center gap-[10px]">
      <div className="search-icon bg-surface max-sm:block hidden p-[12px] rounded-circle">
        <FaSearch
          className="text-[15px] text-on-surface-variant-2 min-w-fit cursor-pointer"
          onClick={setIsOpen}
        />
      </div>

      <button
        className={`location flex items-center gap-[12px] bg-my-primary hover:bg-[#c4b6e5] max-xs:py-[12px] py-[10px] px-[12px] text-[14px] font-[500] text-on-primary rounded-28 ${
          isUsed ? "opacity-[0.4] cursor-no-drop" : "opacity-[1] cursor-pointer"
        } my-transition`}
        onClick={handleCurrentLocation}
      >
        <MdMyLocation className="text-[16px]" />
        <span className="max-xs:hidden">Current Location</span>
      </button>
    </div>
  );
}

export default ActionButtons;
