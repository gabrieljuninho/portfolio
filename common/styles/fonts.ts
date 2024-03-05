import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const fontHeading = localFont({
  src: "../../styles/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading"
});
