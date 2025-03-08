import type { Metadata } from "next";
import {
  Allura,
  Kurale,
  Poppins,
  Jomolhari,
  Zeyada,
  Instrument_Serif,
  Heebo,
  Inter,
  Pathway_Gothic_One,
  Murecho,
  Italianno,
  Domine,
  Inria_Serif,
  Playfair_Display,
  IBM_Plex_Mono,
  Roboto,
  Roboto_Condensed,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

// Import Google Fonts
const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-allura",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const robotoCondensed = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-robotoCondensed",
});
const IBMPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-IBMPlexMono",
});
const italianno = Italianno({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-italianno",
});
const domine = Domine({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-domine",
});
const pathwayGothicOne = Pathway_Gothic_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pathwayGothicOne",
});
const kurale = Kurale({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-kurale",
});
const murecho = Murecho({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-murecho",
});
const inriaSerif = Inria_Serif({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-inriaSerif",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfairDisplay",
});
const heebo = Heebo({
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-heebo",
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});
const jomolhari = Jomolhari({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jomolhari",
});

const zeyada = Zeyada({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-zeyada",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrumentSerif",
});

export const metadata: Metadata = {
  title: "Bouvardia Beauty",
  description: "Elegant, Fashion, Stories",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${allura.variable} ${roboto.variable} ${robotoCondensed.variable} ${IBMPlexMono.variable} ${kurale.variable} ${murecho.variable} ${italianno.variable} ${domine.variable} ${playfairDisplay.variable} ${inriaSerif.variable} ${pathwayGothicOne.variable} ${poppins.variable} ${jomolhari.variable} ${inter.variable} ${zeyada.variable} ${instrumentSerif.variable} ${heebo.variable} antialiased `}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
