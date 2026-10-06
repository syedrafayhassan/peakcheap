
import { Suspense } from "react"
import SearchResults from "../components/SearchResults"
import SkeletonCard from "../components/SkeletonCard"


// Block search pages from index (prevent index bloat!)
export const metadata = {
    robots: {
        index: false,
        follow: true,
    }
}

export default function SearchPage(){
    return (
        <Suspense fallback={
            <div className="max-w-6xl mx-auto px-4 pt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(20)].map((_,i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </div>
        }>

        <SearchResults />
        </Suspense>
    )
}