// Import Next components
import Image from "next/image";

// Import My Components
import SearchBox from "./search_box/SearchBox";
import ActionButtons from "./ActionButtons";

function Headr() {
  return (
    <div className="headr flex items-center justify-between gap-[10px]">
      <div className="logo-box">
        <Image
          src="./assets/logo.png"
          alt="logo_picture"
          width={150}
          height={150}
          loading="lazy"
        />
      </div>

      <div className="max-sm:hidden block w-[36%]">
        <SearchBox />
      </div>

      <div className="flex items-center gap-[15px]">
        <div className="max-sm:block hidden">
          <SearchBox />
        </div>

        <ActionButtons />
      </div>
    </div>
  );
}

export default Headr;
