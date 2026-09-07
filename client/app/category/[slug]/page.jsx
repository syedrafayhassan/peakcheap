// This is SSG - Google can read it!

export async function generateStaticParams() {
    return [
        { slug: "phones" },
        { slug: "laptop" },
        { slug: "watches" },
        { slug: "fashion" },
        { slug: "sports" },
        { slug: "cameras" },
    ]
}

export async function generateMetadata({ params }) {
    const category = {
        phone: {
            title: "Cheap Phones & Smartphones | Peakcheap",
            description: "Find cheapest phones online! Compare prices from eBay and AliExpress."
         },
         laptops: {
            title: "Cheap Laptops & Computers | PeakCheap",
            description: "Find cheapest laptops online! Compare prices instantly."
         },
         watches: {
            title: "Cheap Watches & Smartwatches | PeakCheap",
            description: "Find cheapest watches online! Compare prices from multiple stores."
         },
    }

    return {
        title: category.title,
        description: category.description,
        alternates: {
            canonical: `https://www.peakcheap.com/category/${params.slug}`
        }
    }
}

export default async function CategoryPage({ params }) {
     const { slug } = await params

    const categoryInfo = {
        phones: {
            title: "Cheap Phones & Smartphones",
            description: "Find the cheapest phones and smartphones online! Compare prices from eBay and AliExpress to save money on your next phone purchase.",
            keywords: [ 'Cheap phones', 'Smartphone', 'iPhone deals', 'Samsung deals', 'Phones', 'Xiaomi phones', 'Google Phones', 'Cheap phones', 'Low price phone', 'iphone'],
            searches: ['iPhone 15', 'Samsung Galaxy', 'Google Pixel', 'OnePlus', "iPhone", 'Xiaomi Phones', 'Smartphones' ]
        },
        laptops: {
            title: "Cheap Laptops & Computers",
            description: "Find the cheapest laptops online! Compare prices from multiple stores.",
            keywords: ['cheap laptops', 'laptop', 'laptop deals', 'Macbook deals', 'gaming laptop', 'used laptops', 'big laptops', 'highend laptops', 'normal laptops'],
            searches: ['MacBook Air', 'Dell Latops', 'HP Laptops', 'Gaming Laptops', 'Asus Laptops','Students Laptops', "Business laptop" ]
        },
        watches: {
            title: "Cheap Watches & Smartwatches",
            description: "Find the cheapest watches online! Compare prices from eBay and AliExpress.",
            keywords: ['cheap fashion', 'clothing deals', 'cheap watches', 'smartwatch deals', 'Apple watch deals', 'stainless steel watches', 'Men Watch','Women Watch', 'Kid Watch', 'Leather Watch' ],
            searches: ['Apple Watches', 'Samsung Watch', 'Fossil Watch', 'Casio Watch', 'Stainless steel Watch', 'Men Watch','Women Watch', 'Kid Watch', 'Leather Watch']
        },
        fashion: {
            title: 'Fashion Deals & Clothing',
            description: 'Find cheapest fashion deals online! Compare prices from multiple stores.',
            keyword: ['Cheap fashion', 'Clothing deals', 'Nike deals', 'Adidas deals', 'Women Clothes', 'Men clothes','Kid clothes', 'Fashion','New fashion', 'New styles','old fashion','Kid fashion'],
            searches: ['Nike Shoes', 'Adidas', 'Sneakers', 'Sunglasses', 'Nike deals', 'Adidas deals', 'Puma deals', 'Nike Air', 'Reebok', 'Clothes', 'New style', 'Fashion', 'Old Fashion', 'Men fashion', 'Women fashion', 'Kid fashion']
        },
        sports: {
            title: 'Sports & Fitness Deals',
            description: 'Find cheapest sports equipment online! Compare prices instantly.',
            keyword: ['Cheap sports', 'Fitness deals', 'Sports equipment'],
            searches: ['Basketball', 'Football', 'Yoga Mat', 'Running shoes', 'Premium sport shoes']
        },
        cameras: {
            title: 'Cheap Camera & Photography',
            description: 'Find cheapest cameras online! Compare prices from multiple stores.',
            keywords: ['Cheap cameras', 'Camera deals', 'Sony camera', 'Canon deals', 'Camera lens', 'camera for youtube'],
            searches: ['Sony Camera', 'Canon', 'GoPro', 'DJI Drone','Latest camera', 'Camera lens' ]
        },
    }

    const info = categoryInfo[slug] || {
        title: `$[slug] Deals`,
        description: `Find cheapest ${slug} online!`,
        keywords: [],
        searches: []
    }

    return (
        <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">

        {/* { Header } */}

        <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {info.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
            {info.description}
        </p>
        </div>

        {/* Popular Searches */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Popular {info.title} Searches
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {info.searches.map((search) => (
                <a
                key={search}
                href={`/search?query=${encodeURIComponent(search)}`}
                className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-3 rounded-xl text-center font-medium hover:bg-blue-100 transition-all"
                >
                {search}  
                </a>    
                
                      ))}
        </div>
        </div>

        {/* Keywords Section - Good for SEO! */}
        <div className="bg-white dark:bg-gray-8-- rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray 800 dark:text-white mb-4">
            Why Use PeakCheap for {info.title}?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
            PeakCheap is your go-to price comparsion tool for finding the cheapest {slug} online. We search across eBay and AliExpress simultaneously to find you the best deals available rigth now.
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
         <li>🧙 Compare prices from multiple stores instantly</li>
         <li>🧙 Find cheapest {slug} deals online</li>
         <li>🧙 Save money on every purchase</li>
         <li>🧙 Updated prices in real-time</li>
         <li>🧙 100% free to use</li>
        </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
         <a
         href={`/search?query=${slug}`}
         className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition inline-block"
         >
          Search {info.title} Now 🧙
         </a>
        </div>

          </div>
    )


}