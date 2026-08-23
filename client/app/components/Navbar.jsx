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
 "x"
) : (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="16"
    height="16"
    viewBox="0 0 48 48"
  >
    <path d="M39,29H9c-1.657,0-3-1.343-3-3v-3h36v3C42,27.657,40.657,29,39,29z" />
    <path
      fill="#fff"
      d="M39,27H9c-1.105,0-2-0.895-2-2v-3h34v3C41,26.105,40.105,27,39,27z"
    />
    <path d="M39,28H9c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v3C42,26.654,40.654,28,39,28z M8,23v2c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1v-2H8z" />

    <path d="M39,17H9c-1.657,0-3-1.343-3-3v-3h36v3C42,15.657,40.657,17,39,17z" />
    <path
      fill="#fff"
      d="M39,15H9c-1.105,0-2-0.895-2-2v-3h34v3C41,14.105,40.105,15,39,15z"
    />
    <path d="M39,16H9c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v3C42,14.654,40.654,16,39,16z M8,11v2c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1v-2H8z" />

    <path d="M39,41H9c-1.657,0-3-1.343-3-3v-3h36v3C42,39.657,40.657,41,39,41z" />
    <path
      fill="#fff"
      d="M39,39H9c-1.105,0-2-0.895-2-2v-3h34v3C41,38.105,40.105,39,39,39z"
    />
    <path d="M39,40H9c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v3C42,38.654,40.654,40,39,40z M8,35v2c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1v-2H8z" />
  </svg>
)}
      </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t text-center border-gray-100 px-6 py-4 flex flex-col gap-4">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-blue-600 transition text-base"
        >
          Home
        </Link>
        <Link
        href="/about"
        onClick={() => setIsOpen(false)}
        className="text-gray-500 hover:text-blue-600 transition text-base"        
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