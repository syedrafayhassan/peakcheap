

export default function SkeletonCard(){
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col animate-pulse">

        {/* { Image Skeleton } */}
        <div className="h-52 bg-gray-200"></div>

        {/* { Content Skeleton } */}
        <div className="p-4 flex flex-col gap-3">

        {/* { Title } */}
        <div className="h-4 bg-gray-200 rounded-full w-full"></div>
        <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>

        {/* { Price } */}
        <div className="h-6 bg-gray-200 rounded-full w-1/3 mt-2"></div>


        {/* { Button } */}
        <div className="h-10 bg-gray-200 rounded-xl w-full mt-2"></div>

        </div>

        </div>
    )
}