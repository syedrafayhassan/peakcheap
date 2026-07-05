import { NextResponse } from "next/server";


// Simple in-memory cache
const cache = new Map();
const CACHE_TIME = 21600000; // 6 hours for searches

const getEbayToken = async () => {
  // Check token cache!

  if (cache.has("ebay_token")) {
    const cached = cache.get("ebay_token");
    // Use eBay's actual expiry time!
    if (Date.now() < cached.expiresAt) {
      return cached.token;
    }
  }

  const credentials = Buffer.from(
    `${process.env.EBAY_APP_ID}:${process.env.EBAY_CERT_ID}`,
  ).toString("base64");

  const response = await fetch(
    "https://api.ebay.com/identity/v1/oauth2/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope",
    },
  );

  const data = await response.json();

  // Save token with eBay's expiry time!
  if (data.access_token) {
    cache.set("ebay_token", {
      token: data.access_token,
      // 5 minute safety buffer!
      expiresAt: Date.now() + (data.expires_in - 300) * 1000,
    });
  }

  return data.access_token;
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json([], { status: 200 });
    }


    // Check search cache first
    const cacheKey = `search_v3_${query.toLowerCase()}`;
    if (cache.has(cacheKey)) {
      const cached = cache.get(cacheKey);
      if (Date.now() - cached.time < CACHE_TIME) {
        return NextResponse.json(cached.data);
      }
    }

    const token = await getEbayToken();
    console.log("Token:", token ? "GOT IT ✅" : "MISSING ❌")

    if (!token) {
      return NextResponse.json([], { status: 200 });
    }

    const response = await fetch(
      `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(query)}&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();
    const items = data.itemSummaries || [];

  
    const products = items.map((item) => ({
      // clean ID - remove "v1|" prefix!
      id: item.itemId
      ? item.itemId.replace('|', '_') : `product_${index}`,
        name: item.title,
       price: parseFloat(item.price.value),
        currency: item.price.currency,
        image: item.image?.imageUrl,
        url: item.itemWebUrl,
        platform: "eBay",
      }));




    const sorted = products.sort((a, b) => a.price - b.price);

    // Save to search cache!
    cache.set(cacheKey, {
      data: sorted,
      time: Date.now(),
    });

    return NextResponse.json(sorted);

  } catch (error) {
    console.log("Error:", error.message);
    return NextResponse.json([], { status: 200 });
  }
}