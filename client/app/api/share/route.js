 
 import { NextResponse } from "next/server";

//  In-memory store for share tokens
const shareStore = new Map();

// Generate random short token
const generateToken = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for(let i = 0; i < 6; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    console.log(token);
    return token;

}


// Post - Create share link
export async function POST(request) {
    try {
        const body = await request.json();
        const { query, productId } = body;

        if(!query || !productId) {
            return NextResponse.json(
                { error: "Missing query or productId" },
                { status: 400 }
            )
        }

        // Generate unique token
        let token = generateToken();
        while(shareStore.has(token)) {
            token = generateToken()
        }

        // Save to store
        shareStore.set(token, {
            query,
            productId,
            createdAt: Date.now()
        })

        console.log(`Share token created: ${token}`)

        return NextResponse.json({ token })

    } catch (error) {
        console.log("Share error:", error.message)
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}


    // Get - Get share data
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const token = searchParams.get('token');

        if(!token) {
            return NextResponse.json(
                { error: "Missing token" },
                { status: 400 }
            )
        }

        const shareData = shareStore.get(token);

        if(!shareData) {
            return NextResponse.json(
                { error: "Share link not found or expired" },
                { status: 404 }
            )
        }

        return NextResponse.json(shareData);

    } catch(error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}