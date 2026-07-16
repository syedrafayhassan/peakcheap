import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  alternates: {
    canonical: 'https://www.peakcheap.com'
  },
  openGraph: {
    title: "PeakCheap - Find Cheapest Products Online",
    description: "Compare prices instantly and find cheapest deals!",
    url: "https://www.peakcheap.com",
    siteName: "PeakCheap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakCheap - Find Cheapest Products Online",
    description: "Compare prices instantly and find cheapest deals!",
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PeakCheap",
    "url": "https://www.peakcheap.com",
    "description": "Compare prices from eBay and AliExpress instantly!",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.peakcheap.com/search?query={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
     
    >
    <head>
      <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
    </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning={true}>
      <Navbar />
      {children}
      <Footer />




      </body>
    </html>
  );
}
