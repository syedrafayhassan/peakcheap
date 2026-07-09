import crypto from 'crypto';


const createSign = (params, secret) => {
    // Sort params alphabetically
    const sortedKeys = Object.keys(params).sort();

    // Build sign string
    let signString = secret;
    for(const key of sortedKeys) {
        if(key !== 'sign' && params[key] !== ''){
            signString += key + params[key]
        }
    }
    signString += secret;

    // Use MD5 (not HMAC_MD5!)
    return crypto
    .createHash('md5')
    .update(signString, 'utf8')
    .digest('hex')
    .toUpperCase()
}

    // Words that lower score (accessories)
    const NEGATIVE_WORDS = {
        'case': -20,
        'cover': -20,
        'screen protector': -20,
        'tempered glass': -20,
        'charger': -15,
        'cable': -15,
        'adapter': -15,
        'holder': -15,
        'stand': -15,
        'mount': -15,
        'sleeve': -15,
        'pouch': -15,
        'strap': -15,
        'band': -15,
        'bumper': -15,
        'skin': -15,
        'shell': -15,
        'sticker': -10,
        'lace': -20,
        'paint': -20,
        'repair': -10,
        'tool': -10,
    }

    const getRelevanceScore = (productTitle, query) =>{
        if(!productTitle || !query) return 0;

        const title = productTitle.toLowerCase();
        const searchWords = query.toLowerCase().split(" ");
    
        let score = 0;
    
        // Add points for each matching search word
        searchWords.forEach(word => {
            if(word.length > 2 && title.includes(word)){
                score += 10;
            }
        })

        // Subtract points for accessory words
        Object.entries(NEGATIVE_WORDS).forEach(([word, penalty]) => {
            if(title.includes(word)) {
                score += penalty   // penalty is negative!
            }
        })
        
        return score;

    }



const getAliExpressProducts = async (query) => {
    try {
        const appKey = process.env.ALIEXPRESS_APP_KEY;
        const appSecret = process.env.ALIEXPRESS_APP_SECRET;
    
        if(!appKey || !appSecret){
            console.log("AliExpress keys missing!")
            return []
        }

        // Timestamp in correct format
        const timestamp = new Date().toISOString().replace('T', ' ').replace(/\..+/,'')

        const params = {
            app_key: appKey,
            method: "aliexpress.affiliate.product.query",
            keywords: query,
            page_no: 1,
            page_size: 40,
            currency: "USD",
            language: "en",
            sort: "LAST_VOLUME_DESC",
            timestamp: timestamp,
            sign_method: "md5",
            v: "2.0",
            format: "json",
        }

        // Create signature
        params.sign = createSign(params, appSecret);
        

        const queryString = new URLSearchParams(params).toString();

        const response = await fetch(
            `https://api-sg.aliexpress.com/sync?${queryString}`
        )

        const data = await response.json()
        console.log("AliExpress response:", JSON.stringify(data).slice(0,300))

        const items = data?.aliexpress_affiliate_product_query_response?.resp_result?.result?.products?.product || []

        return items
        .map(item => ({
            id: `ali_${item.product_id}`,
            name: item.product_title,
            price: parseFloat(item.target_sale_price || item.sale_price),
            currency: item.target_sale_price_currency || "USD",
            image: item.product_main_image_url,
            url: item.promotion_link || item.product_detail_url,
            platform: "AliExpress",
            // Add relevance score!
            score: getRelevanceScore(item.product_title, query)
        }))

        // Sort by score (Highest first!)
        .sort((a,b) => b.score - a.score)
        
       // Take top 20!
        .slice(0, 20)
        
        // Remove score from final output!
        .map(({ score, ...item }) => item)


    } catch (error){
        console.log("AliExpress error:", error.message)
        return []
    }
}


    export default getAliExpressProducts