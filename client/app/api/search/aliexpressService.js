import crypto from 'crypto';
import { format } from 'path';


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
            page_size: 20,
            currency: "USD",
            language: "en",
            sort: "SALE_PRICE_ASC",
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

        return items.map(item => ({
            id: `ali_${item.product_id}`,
            name: item.product_title,
            price: parseFloat(item.target_sale_price || item.sale_price),
            currency: item.target_sale_price_currency || "USD",
            image: item.product_main_image_url,
            url: item.promotion_link || item.product_detail_url,
            platform: "AliExpress"
        }))

    } catch (error){
        console.log("AliExpress error:", error.message)
        return []
    }
}


    export default getAliExpressProducts