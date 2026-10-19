// export default function SellerInfo ({ product }) {

//     // AliExpress - no seller data available
//     if(product.platform === 'AliExpress') {
//         return (
//             <div className="flex items-center gap-1">
//                 <span>🏪</span>
//                 <span className="text-xs text-gray-400">AliExpress Seller</span>
//             </div>
//         )
//     }

//     // eBay - show real seller data!
//     if(product.platform === 'eBay') {

//         const getFeedbackColor = (percentage) => {
//             if(!percentage) return 'text-gray-400'
//             if(percentage >= 99) return 'text-green-600'
//             if(percentage >= 95) return 'text-yellow-600'
//             return 'text-red-500';
//         }

//         const getFeedbackLabel = (percentage) => {
//             if(!percentage) return null
//             if(percentage >= 99) return '⭐ Star Rating'
//             if(percentage >= 95) return '✅ Good Rating'
//             return '⚠️ Check Reviews'
//         }

//         const getFeedbackBg = (percentage) => {
//             if(!percentage) return 'bg-gray-100 dark:bg-gray-700'
//             if(percentage >= 99) return 'bg-green-50 dark:bg-gray-900/30'
//             if(percentage >= 95) return 'bg-yellow-50 dark:bg-yellow-900/30'
//             return 'bg-red-50 dark:bg-red-900/20'
//         }

//         return (
//             <div className={`rounded-xl p-2.5 ${getFeedbackBg(product.sellerFeedback)}`}>

//             {/* Seller Name */}
//             <div className="flex item-center gap-1 mb-1">
//                 <span>🏪</span>
//                 <span className="text-xs text-gray-600 dark:text-gray-300 font-medium truncate max-w-37.5">
//                     {product.sellerName || 'eBay Seller'}
//                 </span>

//             </div>

//             {/* Feedback */}
//             {product.sellerFeedback && (
            
//             <div className="flex item-center gap-1 mt-1">
//                 <span className="text-xs text-gray-400">
//                     {product.sellerScore.toLocaleString()} reviews
//                 </span>
//             </div>
//             )}

//             </div>
//         )

//     }

//     return null
// }