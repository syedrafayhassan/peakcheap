import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PeakCheap - Find Cheapest Products Online",
  description: "Compare prices from multiple stores. Find the cheapest deals",
  metadataBase: new URL("https://www.peakcheap.com"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
     
    >
      <body className="min-h-full flex flex-col">
      <Navbar />
      {children}
      <Footer />

    {/* {Skimlinks} */}
    {/* <script type="text/javascript" src="https://s.skimresources.com/js/305317X1793513.skimlinks.js"></script> */}


    {/* {Skimlinks} */}
       <Script
          src="https://s.skimresources.com/js/305317X1793513.skimlinks.js"
          strategy="afterInteractive"
        />


      </body>
    </html>
  );
}
