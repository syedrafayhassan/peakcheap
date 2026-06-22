import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 
    px-4 py-4 shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center 
      justify-between">
        <Link href="/" className="text-2xl font-extrabold 
        text-blue-600">
          🔍 PriceHunt
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-gray-500 
          hover:text-blue-600 transition text-sm">
            Home
          </Link>
          <Link href="/about" className="text-gray-500 
          hover:text-blue-600 transition text-sm">
            About
          </Link>
          <button className="bg-blue-600 text-white 
          px-4 py-2 rounded-lg text-sm font-medium 
          hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}