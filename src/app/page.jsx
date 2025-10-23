// Import My Components
import Headr from "@/components/ui/headr_section/Headr";
import HomeContent from "@/components/ui/HomeContent";

// Import Providers
import Providers from "./providers";

export default async function Home() {
  return (
    <div className="weather-app">
      <div className="my-container m-[20px]">
        <Providers>
          <Headr />

          <HomeContent />
        </Providers>
      </div>
    </div>
  );
}
