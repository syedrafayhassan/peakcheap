
"use client"

export const dynamic = "force-dynamic"

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation"; 
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";


export default function SearchPage(){
    const SearchParams = useSearchParams();
    const query = SearchParams.get("query");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState("low_to_high");
    const [platformFilter, setPlatformFilter] = useState("all");


useEffect(()=>{
    const fetchProducts = async () =>{
        try{
            setLoading(true)
            const response = await fetch(`http://localhost:5000/api/search?query=${query}`)
            const data  = await response.json()
            setProducts(data)

            console.log("First product platform:", data[0].platform)
        }catch(err){
            setError("Something went wrong!");
        } finally{
            setLoading(false)
        }
    }

    if(query) fetchProducts()

}, [query])

    // Filter & Sort Products
const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Platform Filter
    if(platformFilter !== "all"){
        filtered = filtered.filter(
            (p) => p.platform.toLowerCase() === platformFilter.toLowerCase()
        )
    }

    // Sort 
    if (sortBy === "low_to_high") {
        filtered.sort((a, b)=> a.price - b.price)
    } else if (sortBy === "high_to_low") {
        filtered.sort((a, b) => b.price - a.price)
    }

    return filtered;
}, [products, sortBy, platformFilter]); 



return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-10 !m-12">

       { /* { Search Header } */}
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
                Result for 
                <span className="text-blue-600">"{query}"</span>
            </h2>
            <p className="text-gray-500 mt-2">
                {filteredProducts.length} products found
            </p>
        </div>

        {/* { Filters Bar } */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 flex flex-wrap gap-4 items-center">
        
        {/* { sort Filter } */}
        <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm font-medium">
                Sort By:
            </p>
            <button
            onClick={()=> setSortBy("low_to_high")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${sortBy === "low_to_high" ? "bg-blue-600 text-white": "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                Price: Low to High ↑
            </button>
            <button
            onClick={()=> setSortBy("high_to_low")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${sortBy === "high_to_low" ? "bg-blue-600 text-white": "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                Price: High to Low ↓
            </button>

        </div>

        {/* { Divider } */}
        <div className="h-6 w-px bg-gray-200"></div>

        {/* { Platform Filter } */}
        <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm font-medium">
                Store:
            </p>
            {["all", "eBay", "Amazon", "Walmart"].map((platform) =>(
                 <button
                key={platform}
                onClick={()=> setPlatformFilter(platform)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${platformFilter === platform ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200" }`}>
                    {platform === "all" ? "All Stores" : platform}
                </button>
            ))}
        </div>

        </div>

    {/* { Loading } */}
    {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {[...Array(20)].map((_,i) => (
            <SkeletonCard key={i} />
           ))}
        </div>
    )}

    {/* { Error } */}
    {error && (
        <div className="text-red-500 text-center text-xl mt-10">
            {error}
        </div>
    )}

    {/* { No Results } */}
    {!loading && !error && filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 text-xl mt-10">
            😊 This store is coming soon! Try "All Stores" for now.
        </div>
    )}

    {/* { Products Grid } */}
    {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product)=>(
               <ProductCard
                 key={product.id} 
                 product={product} 
                 />
    ))}
        </div>
    )}

    </div>



)
}



