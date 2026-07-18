
"use client"

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";


export default function SharePage() {
    const { token } = useParams();
    const router = useRouter();

    useEffect(() =>{
        const resolveShare = async () =>{
           try {
            const response = await fetch(`/api/share?token=${token}`);
            const data = await response.json();

            if(data.error){
                router.push('/')
                return
            }

            // Redirect to search with highlight!
            router.push(
                `/search?query=${encodeURIComponent(data.query)}&highlight=${data.productId}`
            )

           } catch(error) {
            router.push('/')
           }
        }

        if(token) resolveShare();

    }, [token]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="text-6xl">🔍</div>
                <p className="text-xl text-blue-600 font-semibold animate-pulse">
                    Loading deal...
                </p>
            </div>
        </div>
    )

};