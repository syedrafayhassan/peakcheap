 
 import { NextResponse } from "next/server";


// Encode data in the token itself!
const generateToken = (query, productId) => {
    const data = JSON.stringify({ query, productId })
    return Buffer.from(data)
         .toString("base64")
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');

}

// Decoded token in to data
const decodeToken = (token) => {
    const base64 = token
    .replace(/-/g, '+')
    .replace(/_/g, '/');
    const decoded = Buffer.from(base64, 'base64').toString('utf8')
    return JSON.parse(decoded)
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

        // Generate token with data inside!
        let token = generateToken(query, productId)
        console.log(`Share token created: ${ token }`)

        return NextResponse.json({ token });


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

        // Decode data from token!
        const shareData = decodeToken(token);
        console.log("Share data:", shareData)
        
        return NextResponse.json(shareData);

    } catch(error) {
        console.log("Decode error:", error.message)
        return NextResponse.json(
            { error: 'Invalid share link' },
            { status: 404 }
        )
    }
}