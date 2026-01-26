import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "4ELEMENTRA | Premium Organic Turf Care",
  description: "100% Natur, 0% Chemie – Organische Düngemittel für professionellen Sportrasen und Golfrasen. Bewährte Ergebnisse auf Bundesliga-Niveau.",
  keywords: "4ELEMENTRA, organische Düngemittel, Rasenbetreuung, Golfrasen, Sportrasen, Greenkeeper, nachhaltige Rasenpflege",
  authors: [{ name: "4ELEMENTRA" }],
  openGraph: {
    title: "4ELEMENTRA | Premium Organic Turf Care",
    description: "100% Natur, 0% Chemie – Organische Düngemittel für professionellen Sportrasen und Golfrasen.",
    type: "website",
    locale: "de_AT",
    siteName: "4ELEMENTRA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
