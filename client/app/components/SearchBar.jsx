"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [emptySearch, setEmptySearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
    else {
     setEmptySearch("Are you searching for inner peace?")
     setTimeout(() => {
      setEmptySearch('');
     }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center">
  
      {/* Heading */}
      <h1
        className="max-sm:text-3xl text-5xl font-extrabold text-gray-900 text-center mb-4 leading-tight">
        <span className="text-blue-600"> Find Cheapest Deals  </span> & <br />
        Compare Prices 
      </h1>

     

      {/* Search Box */}
      <div
        className="flex w-full max-w-2xl bg-white rounded-2xl shadow-xl mt-4! border border-gray-100 overflow-hidden">
        <input
          type="text"
          placeholder= {emptySearch ? emptySearch : "Search anything you want"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className={"flex-1 p-4! max-sm:text-sm text-lg outline-none text-gray-700 placeholder-gray-400"} />
        <button
          onClick={handleSearch}
          className="max-sm:text-sm bg-blue-600 cursor-pointer text-white p-3 text-lg font-semibold hover:bg-blue-700 transition-all duration-200">
          Search 🧙
        </button>
      </div>

       {/* Subheading */}
      <p
        className="max-sm:text-xs max-sm:px-7 max-sm:w-dvw text-gray-600 tracking-[0.5px] mb-4 text-center max-w-2xl w-[40%] text-[16px] mt-8">
        PeakCheap compares prices from multiple online stores so you can find the best deal without checking every store yourself.
      </p>

      {/* Popular Searches */}
      <div
        className="mt-6! flex flex-wrap gap-2 justify-center">
        <h2
          className="text-gray-400 text-sm w-full text-center">
          Popular Searches:
        </h2>
        {["iPhone", "Nike Shoes", "Watch", "Laptop", "Headphones"].map(
          (item) => (
            <button
              key={item}
              onClick={() => {
                setQuery(item);
                router.push(`/search?query=${item}`);
              }}
              className="bg-white text-gray-500 p-2! my-2.5 rounded-full text-sm hover:text-black hover:font-semibold transition-all cursor-pointer"
            >
              {item}
            </button>
          ),
        )}
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-3 gap-8 text-center">
        <div>
          <p className="max-sm:text-xl text-3xl font-bold text-gray-600 ">1M+</p>
          <p className="text-gray-500 text-sm">Products</p>
        </div>
        <div>
          <p className="max-sm:text-xl text-3xl font-bold text-gray-600">3+</p>
          <p className="text-gray-500 text-sm">Stores</p>
        </div>
        <div>
          <p className="max-sm:text-xl text-3xl font-bold text-gray-600">Free</p>
          <p className="text-gray-500 text-sm">Always</p>
        </div>
      </div>
    </div>
  );
}
