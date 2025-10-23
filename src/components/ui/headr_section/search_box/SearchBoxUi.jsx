"use client";

// Import React Icons
import { FaSearch } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

function SearchBoxUi({
  searchData,
  searchValue,
  handleChangeSearchValue,
  handleClickSearch,
  isOpen,
  setIsOpen,
}) {
  return (
    <div
      className={`seacrh-box max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-[100%] ${
        isOpen
          ? "max-sm:h-[100%] max-sm:pt-[20px] max-sm:px-[20px]"
          : "max-sm:h-0 max-sm:p-0!"
      } max-sm:rounded-[0]! max-sm:items-start max-sm:overflow-hidden z-30 relative flex items-center gap-[12px] bg-surface max-sm:py-[12px] py-[8px] px-[12px] ${
        searchData.isOpen ? "rounded-t-28" : "rounded-28"
      } my-transition`}
    >
      <FaSearch
        className="max-sm:hidden block text-[15px] text-on-surface-variant-2 min-w-fit cursor-pointer"
        onClick={handleClickSearch}
      />

      <FaArrowLeftLong
        className="max-sm:block hidden text-[15px] text-on-surface-variant-2 min-w-fit cursor-pointer"
        onClick={setIsOpen}
      />

      <input
        type="text"
        value={searchValue.current}
        placeholder="Search city..."
        className="text-white w-[100%]"
        onChange={(eve) => {
          handleChangeSearchValue(eve.target.value);
        }}
        onKeyDown={(eve) => {
          if (eve.key === "Enter") {
            handleClickSearch();
          }
        }}
      />

      <ul
        className={`absolute z-20 bg-surface ${
          searchData.isOpen
            ? "border-t border-t-solid border-t-outline"
            : "border-0 hidden"
        }  w-[100%] max-sm:top-[50px] top-[100%] left-0 rounded-b-28 flex flex-col overflow-hidden`}
      >
        {[...searchData.data].length === 0 ? (
          <span className="text-[16px] text-on-surface p-[15px] text-center">
            results no match
          </span>
        ) : (
          searchData.data.map((item) => {
            return (
              <li
                className="flex items-center hover:bg-white-alpha-8 gap-[12px] py-[10px]! px-[12px]! my-transition cursor-pointer"
                key={item.lat}
                onClick={() => {
                  handleClickSearch(item);
                }}
              >
                <SlLocationPin className="text-[17px] text-on-surface" />

                <div className="info flex flex-col gap-[8px]">
                  <span className="name text-[15px] font-[500] text-on-surface">
                    {item.name}
                  </span>

                  <span className="country text-[13px] text-on-surface-variant-2">
                    {item.state} {item.country}
                  </span>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default SearchBoxUi;
