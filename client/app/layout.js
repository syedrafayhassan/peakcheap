import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import AffiliateBanner from "./components/AffiliateBanner";
import robots from "./robots";
// import { LocationProvider } from "./context/LocationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.peakcheap.com"),
  title: {
    template: "%s | PeakCheap",
    default: "PeakCheap - The Open Price Comparison Engine"
  },
  description: "PeakCheap is the open price comparison engine.Compare prices from eBay and AliExpress instantly to find the cheapest deals without checking every store yourself.",

  // Add icons here !
  icons: {
  icon: [
    { url: './favicon_io/favicon.ico' },
    { url: './favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: './favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
  apple: [
    { url: './favicon_io/apple-touch-icon.png', sizes: '180x180' },
  ],
  other: [
    {
      rel: 'android-chrome-192x192',
      url: './favicon_io/android-chrome-192x192.png',
    },
    {
      rel: 'android-chrome-512x512',
      url: './favicon_io/android-chrome-512x512.png',
    },

  ],
  },

  keywords: [
    "price comparison",
    "peakcheap",
    "cheapest price online",
    "compare prices",
    "eBay deals",
    "AliExpress deals",
    "find cheap products",
    "discount finder",
    "deal comparison",
    "best online bargains",
    "where to buy cheap online",
    "discount shopping engine",
    "budget shopping finder"
  ],
  alternates: {
    canonical: "https://www.peakcheap.com",
  },
   openGraph: {
    title: "PeakCheap - The Open Price Comparison Engine",
    description: "Compare prices from eBay & AliExpress instantly!",
    url: "https://www.peakcheap.com",
    siteName: "PeakCheap",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakCheap - The Open Price Comparison Engine",
    description: "Compare prices instantly and save money!",
    site: "@peakcheap",
  },
  verification: {
    google: "TVwr8Dq2_aMgt_w_2CZfotMjiOOYrOz6Pp4n5wIGXGo",
    other: {
      'p:domain_verify': 'd589e6b8827553081322f085a09cf75d',
      'mitgo-verification': 'd395090c-51be-4b15-95eb-1776ad67835c',
      'impact-site-verification': 'ec3b6e70-01a4-4d56-9c00-3f08871e9f56',
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}; 
  // Structured Data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PeakCheap",
    "alternateName": "Peak Cheap",
    "url": "https://www.peakcheap.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type" : "EntryPoint",
        "urlTemplate": "https://www.peakcheap.com/search?query={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PeakCheap",
    "alternateName": "Peak Cheap",
    "url": "https://www.peakcheap.com/",
    "sameAs": [
      "https://www.instagram.com/peakcheap",
      "https://www.facebook.com/peakcheap",
      "https://www.tiktok.com/@peakcheap",
      "https://www.pinterest.com/peakcheap"
    ]
  }


export default function RootLayout({ children }) {  
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
     suppressHydrationWarning={true}
    >
    <head>
      <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteSchema, organizationSchema])
       }} 
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
