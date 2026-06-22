
export default function About(){
    return(
        <div className="max-w-4xl !m-auto px-4 pt-32 pb-20">

        {/* { Header } */}

        <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                About <span className="text-blue-600">PeakCheap</span>
            </h1>
            <p className="text-xl text-gray-500">
                Helping you find the cheapest prices online, every time.
            </p>
        </div>


        {/* { Mission } */}
        <div className="bg-white !my-6 !p-14 rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
                PeakCheap was build with one simple goal - save you time and money when shopping online. Instead of checking multiple websites for the best price, we bring all the deals to one place so you can shop smarter, not harder.
            </p>
        </div>


        {/* { Disclaimer } */}

        <div className="bg-yellow-50 border !p-12 border-yellow-200 rounded-2xl p-6 text-center mb-8">
            <h3 className="text-yellow-800 font-bold mb-2">
                ⚠️ Affiliate Disclosure
            </h3>
            <p className="text-yellow-700 text-sm">
                PeakCheap is a participant in affiliate programs including eBay Partner Network and others. We may earn a small commission when you click links and make a purchase, at absolutely No extra cost to you. This helps us keep PeakCheap free for everyone! 💛
            </p>
        </div>


        </div>
    )
}