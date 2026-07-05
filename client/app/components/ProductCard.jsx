    "use client"
import { useState } from "react";

export default function ProductCard({ product, isHighlighted, index, searchQuery }) {
    
    const [copied, setCopied] = useState(false);
    
    const handleShare = () => {
        // Use original search query not product title!
        const shareUrl = `https://www.peakcheap.com/search?query=${encodeURIComponent(searchQuery)}&highlight=${product.id}`;
        console.log("Share URL:", shareUrl); // Check URL!
        navigator.clipboard.writeText(shareUrl);

        setCopied(true);

        setTimeout(()=> setCopied(false), 2000);
    }

    return(
        <div
        id={`product-${product.id}`}
         className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col
         ${isHighlighted ? 'border-2 border-blue-500 ring-2 ring-blue-300 ring-offset-2 ': 'border border-y-gray-100'}`}>

            {/* { Highlight Badge } */}
            {isHighlighted && (
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-2 text-center">
                🔥 Featured Deal!
                </div>
            )}


            {/* { Product Image } */}
        <div className="relative h-52 bg-gray-50 flex items-center justify-center p-4">
            {product.image ? (
                <img
                src={product.image}
                alt={product.name}
              className="h-full w-full object-contain"/>

            ): (
                <div className="text-gray-300 text-6xl">
                   📦
                </div>

                )}

                {/* { Platform Badge } */}
                <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full" >
                    {product.platform}
                </div>
        </div>

        {/* { Product Info } */}
        <div className="p-4 flex flex-col flex-1" >

        {/* { Name } */}
            <a href={product.url}
        target="_blank"
        rel="noopener noreferrer">

        <h3 className="text-gray-800 font-semibold text-sm mb-3 line-clamp-2 flex-1">
            {product.name}
        </h3>

</a>

        {/* { Price } */}
        <div className="flex items-center justify-between m-4">
            <span className="text-2xl font-extrabold text-blue-600">
                ${product.price}
            </span>
            <span className="text-gray-400 text-xs">
                {product.currency}
            </span>
        </div> 

        {/* { Buy Button } */}
        <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white text-center py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all duration-200">
Buy Now →

</a>
        {/* Share Button */}
        
      <button onClick={ handleShare }
      className={`px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200
      ${ copied ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        { copied ? ('✅') : (
  <svg 
    width="29px" 
    height="29px" 
    viewBox="0 0 24 24" 
    id="share-alt" 
    data-name="Flat Line" 
    xmlns="http://www.w3.org/2000/svg" 
    className="icon flat-line"
  >
    <path 
      id="secondary" 
      d="M16,3l5,4-5,4V9s-5,0-7,3c0,0,1-6,7-7Z" 
      style={{ fill: 'rgb(44, 169, 188)', strokeWidth: 2 }}
    />
    <path 
      id="primary" 
      d="M16,3l5,4-5,4V9s-5,0-7,3c0,0,1-6,7-7Z" 
      style={{ fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: 2 }}
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      id="primary-2" 
      data-name="primary" 
      d="M21,13v6a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H8" 
      style={{ fill: 'none', stroke: 'rgb(0, 0, 0)', strokeWidth: 2 }}
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
  ) }

      </button>
        </div>

        {/* { Copied Message } */}
        { copied && (
            <p className="text-green-500 text-xs text-center mt-2">
              Link copied! Share on social media! 🎉
            </p>
        )}

        </div>
    )
}