
// "use client"
// import { createContext, useContext, useState, useEffect } from "react";

// const LocationContext = createContext({
//     country: 'United States',
//     countryCode: 'US',
//     loading: true,
// })


// export function LocationProvider({ children }) {
//     const [location, setLocation] = useState({
//         country: 'United States',
//         countryCode: 'US',
//         loading: true,
//     })

//     useEffect(() => {
//         const detectLocation = async () =>{
//             try {
//                 // Check cache first!
//                 const cached = sessionStorage.getItem('userLocation');
//                 if(cached) {
//                     setLocation({ ...JSON.parse(cached), loading: false})
//                     return
//                 }

//                 const response = await fetch('/api/location');
//                 const data = await response.json();

//                 const locationData = {
//                     country: data.country,
//                     countryCode: data.countryCode,
//                     loading: false,
//                 }

//                 // Cache for session!
//                 sessionStorage.setItem('userLocation', JSON.stringify(locationData));
//                 setLocation(locationData);

//             } catch(error){
//                 console.log("Location detection failed:", error);
//                 setLocation({
//                     country: 'United State',
//                     countryCode: 'US',
//                     loading: false,
//                 })
//             }
//         }

//         detectLocation()
//     }, []);

//     return (
//         <LocationContext.Provider value={location} >
//         {children}
//         </LocationContext.Provider>
//     )
// }


// export const useLocation = () => useContext(LocationContext);