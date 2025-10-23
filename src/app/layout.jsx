import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Weather App",
  description:
    "This is app used to find out the weather conditions anywhere in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable}`}>{children}</body>
    </html>
  );
}
