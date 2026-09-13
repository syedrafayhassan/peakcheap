import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AffiliateBanner from "./components/AffiliateBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PeakCheap - Compare Prices & Find the Cheapest Deals Online",
  description: "PeakCheap compares prices from multiple online stores so you can find the best deal without checking every store yourself. Compare eBay & AliExpress instantly!",
  metadataBase: new URL('https://www.peakcheap.com'),
  alternates: {
    canonical: 'https://www.peakcheap.com'
  },
  verification: {
    google: "TVwr8Dq2_aMgt_w_2CZfotMjiOOYrOz6Pp4n5wIGXGo",
    other: {
      'p:domain_verify': 'd589e6b8827553081322f085a09cf75d',
      'mitgo-verification': 'd395090c-51be-4b15-95eb-1776ad67835c'
    }
  },

  openGraph: {
    title: "PeakCheap - Compare Prices & Find the Cheapest Deals Online",
    description: "Compare prices from eBay & AliExpress instantly!",
    url: "https://www.peakcheap.com",
    siteName: "PeakCheap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakCheap - Compare Prices & Find Cheapest Deals",
    description: "Compare prices instantly and save money!",
  }
};

  const structuredData = [
    {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PeakCheap",
    "alternateName": "Peak Cheap",
    "url": "https://www.peakcheap.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.peakcheap.com/search?query={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PeakCheap",
    "alternateName": "Peak Cheap",
    "url": "https://www.peakcheap.com/",
    "logo": "https://www.peakcheap.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/peakcheap",
      "https://www.facebook.com/peakcheap",
      "https://www.tiktok.com/@peakcheap",
      "https://www.pinterest.com/peakcheap"
    ]
  }
]

export default function RootLayout({ children }) {  
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
      <AffiliateBanner />




      </body>
    </html>
  );
}
