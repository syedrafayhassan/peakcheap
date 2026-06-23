
import { NextResponse } from "next/server";


const getEbayToken = async () => {
    const credentials = Buffer.from(
        `${process.env.EBAY_APP_ID}:${process.env.EBAY_CERT_ID}`
    ).toString('base64')

    const response = await fetch(
        "https://api.ebay.com/identity/v1/oauth2/token",
        {
            method: "POST",
            header: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope"
        }
    )

    const data = await response.json();
    return data.acess_token;

}


export async function GET(request){
    try{
        const { searchParams } = new URL(request.url);
        const query = searchParams.get("query");

        if(!query) {
            return NextResponse.json(
                { error: 'Please provide a search query' },
                { status: 400 }
            )
        }

        const token = await getEbayToken()

        const response = await fetch(
            `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${query}&limit=20`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        )

        const data = await response.json();
        const items = data.itemSummaries || [];

        const products = items.map(item => ({
            id: item.itemId,
            name: item.title,
            price: parseFloat(item.price.value),
            currency: item.price.currency,
            image:item.image?.imageUrl,
            url:item.itemWebUrl,
            platform: 'eBay'
        }))

        const sorted = products.sort((a, b) => a.price - b.price)

        return NextResponse.json(sorted)

    
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}