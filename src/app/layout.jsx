import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Turf Town | India's #1 Sports community",
  description:
    "Tried out @Turf Town today. Can never go back! Kudos team. ... Found a new 7's court in Adyar through @Turf Town today! Really cool app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
