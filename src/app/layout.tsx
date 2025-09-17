import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import { Playfair_Display, Poppins, ABeeZee, Instrument_Sans } from "next/font/google"
import "./globals.css"
import localFont from "next/font/local";
import Cursor from "@/components/Shared/Cursor";
import Footer from "@/components/Shared/Footer";
import ScrollToTop from "@/components/Shared/ScrollToTop";
import NextJsTopLoader from "@/components/Shared/NextJsTopLoader";
import SmoothScroll from "@/components/Shared/SmothScroll";
import ReduxStoreProvider from "@/utils/ReduxStoreProvider";

const engula = localFont({
  src: "../../fonts/Engula_ExtraBlack.ttf",
  // src: "../../../fonts/Engula_ExtraBlack.ttf",
  variable: "--font-engula",
  weight: "100 400 900",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "700"],
})

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  // style: ["normal", "italic"],
  weight: ["400", "700", "500", "600"],
})

const abeeze = ABeeZee({
  variable: "--font_ABeeZee",
  weight: ["400"],
  subsets: ["latin"],
  // display: "swap"
});

const popin = Poppins({
  variable: "--font_Poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  // display: "swap"
});

export const metadata: Metadata = {
  title: "Juliatong",
  description: "Juliatong, portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`font-serif ${playfairDisplay.variable} ${popin.variable} ${abeeze.variable} ${engula.variable} ${instrument.variable} antialiased`}
      >
        <NextJsTopLoader />
        <ScrollToTop />
        <ReduxStoreProvider>
          {children}
        </ReduxStoreProvider>
      </body>

    </html>
  );
}
