// This is SSG - Google can read it!

export async function generateStaticParams() {
    return [
        { slug: "phones" },
        { slug: "laptop" },
        { slug: "watches" },
        { slug: "fashion" },
        { slug: "sports" },
        { slug: "cameras" },
        { slug: "headphones" },
        { slug: "tablets" },
    ]
}

export async function generateMetadata({ params }) {
    const { slug } = await params

    const categoryMeta = {
        phones: {
            title: "Cheap Phones & Smartphones - PeakCheap",
            description: "Find cheapest phones online! Compare prices from eBay and AliExpress instantly. Save money on iPhones, Samsung, and more.",
         },
         laptops: {
            title: "Cheap Laptops & Computers - PeakCheap",
            description: "Find cheapest laptops online! Compare prices from multiple stores. MacBook, Dell, HP and more at the best prices.",
         },
         watches: {
            title: "Cheap Watches & Smartwatches - PeakCheap",
            description: "Find cheapest watches online! Apple Watches, Samsung Watch, Casio and more. Compare prices instantly.",
         },
         fashion: {
            title: "Cheap Fashion & Clothing Deal - PeakCheap",
            description: "Find the cheapest fashion deals online! Nike, Adidas, sneakers and more. Compare prices from multiple stores.",
         },
         sports: {
            title: "Cheap Sports & Fitness Equipment - PeakCheap",
            description: "Find the cheapest sports equipment online! Basketball, football, yoga mats and more. Compare price.",
         },
         cameras: {
            title: "Cheap Cameras & Photography - PeakCheap",
            description: "Find the cheapest cameras online! Sony, Canon, DJI and more. Compare prices from eBay and AliExpress.",
         },
         headphones: {
            title: "Cheap Headphones & Earbuds - PeakCheap",
            description: "Find cheapest headphones online! AirPods, Sony, Bose and more. Compare prices.",
         },
         tablets: {
            title: "Cheap Tablets - PeakCheap",
            description: "Find cheapest tablets online! iPads, IPad, Samsung Tab and more. Compare prices from multiple stores.",
         },
    }

    const meta = categoryMeta[slug] || {
        title: `Cheap ${slug} Deals - PeakCheap`,
        description: `Find the cheapest ${slug} online! Compare prices from eBay and AliExpress instantly.`,
    }



    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `https://www.peakcheap.com/category/${slug}`
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `https://www.peakcheap.com/category/${slug}`,
        }
    }
}

export default async function CategoryPage({ params }) {
     const { slug } = params

    const categoryData = {
        phones: {
            title: "Cheap Phones & Smartphones",
            description: "Find the cheapest phones and smartphones online! PeakCheap compare prices from eBay and AliExpress so you always get the best deal.",
            icon: '📞',
            searches: ['iPhone 15', 'Samsung Galaxy S24', 'Google Pixel', 'OnePlus', "iPhone 14", 'Xiaomi Phones'],
            tips: [
                'Always check if phone is unlocked',
                'Compare condition (New/Excellent/Good)',
                'Check seller ratings before buying',
                'Look for free shipping deals'
            ]
        },
        laptops: {
            title: "Cheap Laptops & Computers",
            description: "Find the cheapest laptops online! Compare prices from multiple stores and save money on MacBook, Dell, HP and more.",
            icon: '👩‍💻',
            searches: ['MacBook Air', 'Dell XPS', 'HP Pavilion', 'Gaming Laptop', 'Asus Laptop','Students Laptop', "Business laptop", 'Chromebook' ],
            tips: [
                'Check RAM and storage specs',
                'Compare new vs refurbished prices',
                'Look for bundle deals',
                'Check warranty information'
            ]
        },
        watches: {
            title: "Cheap Watches & Smartwatches",
            description: "Find the cheapest watches online! Compare prices from eBay and AliExpress. Apple Watch, Samsung and more.",
            icon: '⏲',
            searches: ['Apple Watch', 'Samsung Watch', 'Casio', 'Fossil Watch', 'Men Watch','Women Watch', 'Kid Watch', 'Leather Watch', 'Smartwatch'],
            tips: [
                'Check if smartwatch is compatible with your phone',
                'Compare battery life specs',
                'Look for GPS models if needed',
                'Check band size compatibility'
            ]
        },
        fashion: {
            title: 'Cheap Fashion & Clothing Deals',
            description: 'Find cheapest fashion deals online! Nike, Adidas, sneakers and more. Compare prices from multiple stores.',
            icon: '👟 👗',
            searches: ['Nike Air Force 1', 'Adidas Sneakers', 'Sunglasses', 'Jacket', 'Handbag','Reebok shoes', 'Old Fashion', 'Men fashion', 'Women fashion', 'Kid fashion'],
           tips: [
            'Always check size charts carefully',
            'Read seller reviews for sizing accuracy',
            'Compare shipping times',
            'Check return policies'
           ]
        },
        sports: {
            title: 'Cheap Sports & Fitness Equipment',
            description: 'Find cheapest sports equipment online! Basketball, football, yoga mats and more at the best prices.',
            icon: '🤸',
            searches: ['Basketball', 'Football', 'Yoga Mat', 'Running Shoes', 'Dumbbells', 'Premium Sports Shoes'],
           tips: [
            'Check official size standards',
            'Compare material quality',
            'Look for bundle sets',
            'Check weight specifications'
           ]
        },
        cameras: {
            title: 'Cheap Cameras & Photography',
            description: 'Find cheapest cameras online! Sony, Canon, DJI and more. Compare prices from eBay and AliExpress.',
            icon: '📽️',
            searches: ['Sony Alpha', 'Canon EOS', 'GoPro', 'DJI Drone','Mirrorless Camera', 'Camera Lenses', 'Camera Accessories' ],
           tips: [
            'Check if lenses are included',
            'Compare sensor sizes',
            'Look for kit bundles',
            'Check battery type and availability'
           ]
        },
        headphones: {
            title: 'Cheap Headphones & Earbuds',
            description: 'Find cheapest headphones online! AirPods, Sony, Bose and more. Compare prices instantly.',
            icon: 'ᖳᖰ',
            searches: ['AirPods Pro', 'Sony WH-1000XM6', 'Bose QC45', 'Samsung Buds', 'Wireless Earbuds'],
           tips: [
            'Check noise cancellation quality',
            'Compare battery life',
            'Check if water resistant',
            'Look for multipoint connection'
           ]
        },
        tablets: {
            title: 'Cheap Tablets',
            description: 'Find cheapest tablets online! iPad, Samsung Tab and more. Compare prices from multiple stores.',
            icon: '🔲',
            searches: ['iPad Air', 'Samsung Galaxy Tab', 'iPad Pro', 'Amazon Fire', 'Android Tablet'],
           tips: [
            'Check storage capacity',
            'Compare screen resolution',
            'Look for WiFi vs cellular models',
            'Check stylus compatibility'
           ]
        },
    }

    const data = categoryData[slug] || {
        title: `$[slug] Deals`,
        description: `Find cheapest ${slug} online!`,
        icon:'🏷️',
        searches: [],
        tips: []
    }

    return (
        <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">

        {/* { Header } */}

        <div className="mb-10">
        <h1 className="max-sm:text-2xl text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {data.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
            {data.description}
        </p>
        </div>

        {/* Search Now CTA */}
        <div className="bg-blue-600 rounded-2xl p-6 mb-8 text-center">
            <p className="text-white text-lg font-semibold mb-4">
                Search & Compare {data.title} Prices Now!
            </p>
        <a
        href={`/search?query=${slug}`}
        className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-base hover:bg-blue-50 transition inline-block"
        >
            Compare {data.title} Prices →
        </a>
        </div>

        {/* Popular Searches */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-8">
        <h2 className="max-sm:text-lg text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Popular {data.title} Searches
        </h2>
        <div className="grid items-center grid-cols-2 md:grid-cols-4 gap-4">
            {data.searches.map((search) => (
                <a
                key={search}
                href={`/search?query=${encodeURIComponent(search)}`}
                className="bg-blue-50 max-sm:text-xs dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-3 rounded-xl text-center font-medium hover:bg-blue-100 transition-all"
                >
                {search}  
                </a>    
                
                      ))}
        </div>
        </div>

        {/* Why Use PeakCheap */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Why Use PeakCheap for {data.title}?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                PeakCheap is your go-to price comparison tool for finding the cheapest {data.title.toLowerCase()} online. We compare prices from eBay and AliExpress simultaneously so you never overpay.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Compare prices from multiple stores instantly
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Always find the cheapest price
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Save time - no need to check multiple websites
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                   100% free to use - no signup required
                </li>
            </ul>
        </div>

        {/* Buying Tips */}
        {data.tips.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Tips for Buying {data.title}
                </h2>
                <ul className="space-y-3">
                    {data.tips.map((tip, index) => (
                     <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                        <span className="text-blue-500 font-bold shrink-0">{index + 1}.</span>
                        {tip}
                     </li>
                    ))}
                </ul>
            </div>
        )}



        {/* CTA */}
        <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Ready to Find the Cheapest {data.title}?
        </h2>
         <a
         href={`/search?query=${slug}`}
         className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition inline-block"
         >
          Search {data.title} Now 🧙
         </a>
        </div>

          </div>
    )


}