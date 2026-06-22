"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center px-4">
      {/* Badge */}
      <div
        className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
        🔥 Compare prices from 3+ stores instantly
      </div>

      {/* Heading */}
      <h1
        className="text-5xl font-extrabold text-gray-900 text-center mb-4 leading-tight">
        Find The
        <span className="text-blue-600"> Cheapest </span>
        Price Online
      </h1>

      {/* Subheading */}
      <p
        className="text-gray-500 text-xl text-center mb-10 max-w-xl">
        Search any product and we'll compare prices from top stores to find you
        the best deal!
      </p>

      {/* Search Box */}
      <div
        className="flex w-full max-w-2xl bg-white rounded-2xl shadow-xl !mt-4 border border-gray-100 overflow-hidden">
        <input
          type="text"
          placeholder="Search for any product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 px-6 py-7 !p-4 text-lg outline-none text-gray-700 placeholder-gray-400"/>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-5 text-lg font-semibold hover:bg-blue-700 transition-all duration-200">
          Search 🔍
        </button>
      </div>

      {/* Popular Searches */}
      <div
        className="!mt-6 flex flex-wrap gap-2 justify-center">
        <p
          className="text-gray-400 text-sm w-full text-center mb-2">
          Popular Searches:
        </p>
        {["iPhone", "Nike Shoes", "Watch", "Laptop", "Headphones"].map(
          (item) => (
            <button
              key={item}
              onClick={() => {
                setQuery(item);
                router.push(`/search?query=${item}`);
              }}
              className="bg-white border border-gray-200 text-gray-600 !p-2 rounded-full text-sm hover:border-blue-400 hover:text-blue-600 transition-all"
            >
              {item}
            </button>
          ),
        )}
      </div>

      {/* Stats */}
      <div
        className="mt-16 grid grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-600">1M+</p>
          <p className="text-gray-500 text-sm mt-1">Products</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">3+</p>
          <p className="text-gray-500 text-sm mt-1">Stores</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">Free</p>
          <p className="text-gray-500 text-sm mt-1">Always</p>
        </div>
      </div>
    </div>
  );
}
