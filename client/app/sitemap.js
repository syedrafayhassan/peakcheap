

export default function sitemap (){
    return [
        {
            url: "https://www.peakcheap.com",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: "https://www.peakcheap.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.peakcheap.com/search",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        }
    ]
}