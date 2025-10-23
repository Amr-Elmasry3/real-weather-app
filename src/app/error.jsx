"use client";

// Import Next Components
import Image from "next/image";

function Error() {
  return (
    <div className="error-section flex flex-col items-center justify-center gap-[12px] h-[100vh]">
      <p className="text-white">---Somthing went wrong---</p>

      <Image
        src="./assets/404_erro_with_a_landscape.gif"
        alt="error_picture"
        width={320}
        height={320}
        loading="lazy"
        className="rounded-circle"
      />

      <button
        className="reload-btn bg-my-primary hover:bg-[#c4b6e5] max-xs:py-[12px] py-[10px] px-[12px] text-[14px] font-[500] text-on-primary rounded-28 cursor-pointer"
        onClick={() => {
          window.location.reload();
        }}
      >
        Relaod
      </button>
    </div>
  );
}

export default Error;
