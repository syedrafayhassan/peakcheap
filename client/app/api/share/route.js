 
 import { NextResponse } from "next/server";


// Generate random short token
// Encode data in the token itself!

const generateToken = (query, productId) => {
    const data = { query, productId }
    const encoded = Buffer.from(
        JSON.stringify(data)
    ).toString("base64url")
    return encoded;
    

}

// Decoded token in to data
const decodeToken = (token) => {
    const decoded = Buffer.from(
        token, 'base64url'
    ).toString('utf8')
    return JSON.parse(decoded);
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
        const shareData = shareStore.get(token);
        
        return NextResponse.json(shareData);

    } catch(error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}