"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 
    shadow-sm fixed px-10 top-0 w-full z-50 max-sm:px-3.5">
      <div className="max-w-6xl flex items-center 
      justify-between py-2">
        <Link href="/" className="max-sm:text-lg text-2xl font-extrabold 
        text-blue-600">
           PeakCheap
        </Link>

        {/* Desktop Menu */}
        <div className="md:flex hidden gap-6 items-center">
          <Link href="/" className="text-gray-500 
          hover:text-blue-600 transition text-sm">
            Home
          </Link>
          <Link href="/about" className="text-gray-500 
          hover:text-blue-600 transition text-sm">
            About
          </Link>
          <button className=" px-3 py-1.5 bg-blue-600 text-white 
           rounded-lg text-sm font-medium 
          hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

      {/* Burger Icon - Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-600 hover:text-blue-600 transition text-3xl"
      
      >
        {isOpen ? (
 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg>
) : (
  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
)}
      </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t text-center border-gray-100 px-6 py-4 flex flex-col gap-4">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-gray-500 text-sm hover:text-blue-600 transition"
        >
          Home
        </Link>
        <Link
        href="/about"
        onClick={() => setIsOpen(false)}
        className="text-gray-500 text-sm hover:text-blue-600 transition"
        >
          About
        </Link>
        <Link
        href="/"
        onClick={() => setIsOpen(false)}
        className="max-sm:text-sm bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-70 transition text-center"
        >
          Get Started
        </Link>
        </div>
      )}


    </nav>
  )
}