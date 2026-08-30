"use client"
import { useState } from "react"


export default function AffiliateBanner() {
    const [ dismissed, setDismissed ] = useState(false);

    if(dismissed) return null

    return(
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1E90FF] text-white px-4 py-3 flex items-center justify-between shadow-lg" >
            <p className="text-sm">
                 💡 <strong>Affiliate Disclosure:</strong> PeakCheap 
        earns a commission when you click our links and make 
        a purchase at zero extra cost to you.
            </p>
            <button
            onClick={()=> setDismissed(true)}
            className="ml-4 text-white hover:text-blue-200 font-bold text-lg shrink-0"
            >
                X
            </button>
        </div>
    )







}