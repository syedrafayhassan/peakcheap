
// import { NextResponse } from "next/server";

// export async function GET (request) {
//     try {
//         // Get IP from request headers
//         const forwarded = request.header.get('x-forwarded-for');
//         const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip');

//         console.log("Detected IP:", ip);

//         // Use ip-api.com (free no key needed!)
//         const response = await fetch(
//             `http://ip-api.com/json/${ip}?fields=country,countryCode,city`, { next: { revalidate: 3600 } } // Cache 1 hour
//         );

//         const data = await response.json();

//         console.log("Location data:", data)

//         return NextResponse.json({
//             country: data.country || 'United State',
//             countryCode: data.countryCode || 'US',
//             city: data.city || 'Unknown'
//         });

//     } catch(error) {
//         console.log("Location error:", error.message)
//         // Default to US if fails
//         return NextResponse.json({
//             country: 'United States',
//             countryCode: 'US',
//             city: 'Unknown'
//         })
//     }
// }