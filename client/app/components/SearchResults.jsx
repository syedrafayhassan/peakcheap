
"use client"


import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation"; 
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";

export default function SearchPage(){
    const SearchParams = useSearchParams();
    const query = SearchParams.get("query");
    const highlightID = SearchParams.get("highlight");  // Get highlight ID!

    console.log("Highlight ID from URL:", highlightID)
// console.log("Products IDs:", products.map(p => p.id));


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState("low_to_high");
    const [platformFilter, setPlatformFilter] = useState("all");


useEffect(()=>{
    const fetchProducts = async () =>{
        try{
            setLoading(true)
            setError(null)
            setProducts([]) // Always reset to array!

            const response = await fetch(`/api/search?query=${query}`)

            // Check if response ok
            if(!response.ok){
              setProducts([]) // Set empty array on error!
              return
            }

            const data  = await response.json()
          
            setProducts(Array.isArray(data) ? data : [])

          
        }catch(err){
            setError("Something went wrong!");
        } finally{
            setLoading(false)
        }
    }

    if(query) fetchProducts()

}, [query]);

// Fix Scroll to highlighted product!
useEffect(() => {
    if(highlightID && !loading && products.length > 0){
        setTimeout(() => {
            // Find product by partial ID match!
          const element = document.getElementById(`product-${highlightID}`)
          if(element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
          }

        }, 1000)
    }
}, [highlightID, loading, products])


    // Filter & Sort Products
const filteredProducts = useMemo(() => {
    if(!products || !Array.isArray(products) || products.length === 0 ) return []

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
    <div className="max-w-6xl m-12!">

       { /* { Search Header } */}
        <div className="py-14">
            <h2 className="text-3xl font-bold text-gray-800">
                Result for 
                <span className="text-blue-600">"{query}"</span>
            </h2>
            <p className="text-gray-500">
                {filteredProducts.length} products found
            </p>
        </div>

        {/* { Filters Bar } */}
        <div className="shadow-[0px_2px_5px_-1px_rgba(50,50,93,0.25),0px_1px_3px_-1px_rgba(0,0,0,0.3)] bg-white px-4 py-3.5 rounded-2xl max-sm:justify-center flex flex-wrap gap-4 items-center my-2">
        
        {/* { sort Filter } */}
        <div className="flex items-center gap-2 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:my-6 ">
            <p className="text-gray-500 text-sm font-medium">
                Sort By:
            </p>
            <button
            onClick={()=> setSortBy("low_to_high")}
            className={`shadow-[0px_0px_0px_2px_rgba(6,24,44,0.4),0px_4px_6px_-1px_rgba(6,24,44,0.65),inset_0px_1px_0px_rgba(255,255,255,0.08)] px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${sortBy === "low_to_high" ? "bg-blue-600 text-white": "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                Price: Low to High ↑
            </button>
            <button
            onClick={()=> setSortBy("high_to_low")}
            className={`shadow-[0px_0px_0px_2px_rgba(6,24,44,0.4),0px_4px_6px_-1px_rgba(6,24,44,0.65),inset_0px_1px_0px_rgba(255,255,255,0.08)] px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${sortBy === "high_to_low" ? "bg-blue-600 text-white": "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                Price: High to Low ↓
            </button>

        </div>

        {/* { Divider } */}
        <div className="h-6 w-px bg-gray-200"></div>

        {/* { Platform Filter } */}
        <div className="flex items-center gap-2 max-sm:flex-wrap max-sm:justify-center max-sm:gap-4 max-sm:mb-6 ">
            <p className="text-gray-500 text-sm font-medium">
                Store:
            </p>
            {["all", "eBay", "AliExpress", "Amazon", "Walmart"].map((platform) =>(
                 <button
                key={platform}
                onClick={()=> setPlatformFilter(platform)}
                className={`shadow-[inset_3px_3px_6px_0px_rgb(204,219,232),inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5)] px-3 py-2 rounded-lg text-sm font-medium transition-all ${platformFilter === platform ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200" }`}>
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
        <div className="text-red-500 text-center text-xl">
            {error}
        </div>
    )}

    {/* { No Results } */}
    {!loading && !error && filteredProducts.length === 0 && (
        <div className="text-center min-h-dvh text-gray-500 text-xl">
            😊 This store is coming soon! Try "All Stores" for now.
        </div>
    )}

    {/* { Products Grid } */}
    {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index)=>(
               <ProductCard
                 key={product.id} 
                 product={product} 
                 isHighlighted={product.id === highlightID}
                 index={index}
                 searchQuery={query} // Pass original query!
                 />
    ))}
    
        </div>
    )}

    </div>



)
}



