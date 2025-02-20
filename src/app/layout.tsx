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
} from "next/font/google";
import "./globals.css";

// Import Google Fonts
const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-allura",
});

const kurale = Kurale({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-kurale",
});
const heebo = Heebo({
  weight: ["400"],
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
        className={`${allura.variable} ${kurale.variable} ${poppins.variable} ${jomolhari.variable} ${inter.variable} ${zeyada.variable} ${instrumentSerif.variable} ${heebo.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
