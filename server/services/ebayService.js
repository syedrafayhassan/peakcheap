
const axios = require('axios')
const NodeCache = require("node-cache")


//  Cache result for 1 hour
const cache = new NodeCache({ stdTTL: 3600 })


const getEbayToken = async () =>{
    const credentials = Buffer.from(
        `${process.env.EBAY_APP_ID}:${process.env.EBAY_CERT_ID}`
    ).toString('base64')

    const response = await axios.post(
        'https://api.ebay.com/identity/v1/oauth2/token',
        'grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope',
        {
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    )

    return response.data.access_token

}

exports.search = async (query) =>{
    
    // Check cache first
    const cacheKey = `search_${query.toLowerCase()}`
    const cacheResult = cache.get(cacheKey)

    if(cacheResult) {
        console.log(`Cache hit for: ${query}`)
        return cacheResult  // Return cache result, no API call!
    }


    // If not in cache, call eBay API
    const token = await getEbayToken()

    const response = await axios.get(
        'https://api.ebay.com/buy/browse/v1/item_summary/search',
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            params: {
                q: query,
                limit:20
            }
        }
    )

    const items = response.data.itemSummaries || []

    const products = items.map(item =>({
        id: item.itemId,
        name: item.title,
        price: parseFloat(item.price.value),
        currency: item.price.currency,
        image: item.image?.imageUrl,
        url: item.itemWebUrl,
        platform: 'eBay'

    }));

    // Save to cache
    cache.set(cacheKey, products)
    console.log(`Cached results for: ${query}`)

    return products
}