
export const metadata = {
    title: "About PeakCheap - Free Price Comparison Website",
    description: "Learn about PeakCheap - the free price comparison tool that helps you find the cheapest products online from eBay and AliExpress. ",
    alternates: {
        canonical: 'https://www.peakcheap.com/about',
    },
}

export default function About(){
    return(
        <div className="max-w-4xl my-11! mx-auto! px-4 pt-32 pb-20">

        {/* { Header } */}

        <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 dark:text-white">
                About PeakCheap
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
               Last updated: {new Date().toLocaleDateString('en-US',{
                year: 'numeric',
                month: 'long',
                day: 'numeric'
               })}
            </p>
        </div>


        {/* What is PeakCheap */}
        <div className="bg-white my-6! p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">
               What is PeakCheap?
            </h2>
            <p className="text-gray-600 dark:text-grsy-400 leading-relaxed">
                PeakCheap is a free price comparison website that helps online shoppers find the cheapest products without visiting multiple stores. We search across eBay and AliExpress simultaneously and display result sorted by price, so you always see the best deal first.
            </p>
        </div>


       {/* Problem We Solve  */}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                What Problem Does PeakCheap Solve?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Online shoppers waste hours visiting multiple websites to compare prices. PeakCheap solves this by doing all the searching for you in one place. Type any product name and instantly see prices from multiple stores sorted from cheapest to most expensive.
            </p>
        </div>

        {/* How It Works */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                How PeakCheap Works
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
                <div className="text-4xl mb-3">🧙</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">1. Search</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Type any product name in our search bar
                </p>
            </div>
            <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">2. Compare</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    We instantly compare prices from multiple stores
                </p>
            </div>

            <div className="text-center">
                <div className="text-4xl mb-3">💵</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">3. Save</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Choose the cheapest option and save money!
                </p>
            </div>
        </div>

        {/* Where Data Comes From */}
        <div className="bg-whtie dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Where Does Our Data Come From?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                PeakCheap pulls real-time product and pricing data directly from offical store APIs: 
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>🧙 <strong>eBay</strong> - Via official eBay Browse API</li>
                <li>🧙 <strong>AliExpress</strong> - Via official AliExpress Affiliate API</li>
                <li>🧙 Prices are updated in real-time</li>
                <li>🧙 Products are fetched live on every search</li>
            </ul>
        </div>

            {/* Is It Free */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Is PeakCheap Free?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Yes! PeakCheap is 100% free to use. No signup required. No hidden fees. You will never pay more for a product by using PeakCheap - we simply help you find where it's cheapest.
                </p>
            </div>

            {/* Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-6">
               <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                   Contact Us
               </h2>
               <p className="text-gray-600 dark:text-gray-400">
                 Have questions or feedback? We'd love to hear from you:
               </p>
               <p className="text-blue-600 mt-2 font-semibold">
                 peakcheapteam@gmail.com
               </p>
            </div>

            {/* Affiliate Disclosure - ONE PLACE ONLY */}
            <div className="bg-blue-50 dark:bg-blue900/20 rounded-2xl border border-blue-100 dark:border-blue-800 p-6 text-center">
               <h3 className="text-blue-800 dark:text-blue-200 font-bold mb-2">
                 Affiliate Disclosure
               </h3>
               <p className="text-blue-700 dark:text-blue-300 text-sm">
                 PeakCheap is a price comparison tool and participates in affiliate programs including eBay Partner Network and AliExpress Affiliate Program. We earn a small commission when you click our links and make a purchase, at absolutely zero extra cost to you. This helps us kepp PeakCheap free for everyone.
               </p>
            </div>

        </div>
    )
}