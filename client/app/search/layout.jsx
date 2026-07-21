// app/search/layout.jsx

export const metadata = {
  title: "PeakCheap - Find Cheapest Products Online",
  description: "Compare prices from eBay and AliExpress instantly! Find cheapest deals and save money.",
  metadataBase: new URL("https://www.peakcheap.com"),
  alternates: {
    canonical: "https://www.peakcheap.com",
  },

    robots: {
    index: false,
    follow: true,
  },

}


export default function SearchLayout({ children }) {
  return children;
}