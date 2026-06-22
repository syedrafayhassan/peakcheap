export default function ProductCard({ product }) {
    return(
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">

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

        </div>


        </div>
    )
}