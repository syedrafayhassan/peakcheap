

export default function sitemap (){
    return [
        {
            url: "https://www.peakcheap.com",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: "https://www.peakcheap.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ]
}