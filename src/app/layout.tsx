import type { Metadata } from "next";
import { Allura, Kurale, Jomolhari } from "next/font/google";
import "./globals.css";

// Import Google Fonts
const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});

const kurale = Kurale({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kurale",
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
      <body className={`${allura.variable} ${kurale.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}
