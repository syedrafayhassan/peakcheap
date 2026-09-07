

export default function sitemap (){
    const categories = [
        'phones', 'laptops', 'watches', 'fashion', 'sports', 'cameras'
    ]

    return [
        {
            url: 'https://www.peakcheap.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: 'https://www.peakcheap.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.peakcheap.com/privacy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        // Category pages
        ...categories.map(cat => ({
            url: `https://www.peakcheap.com/category/${cat}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        }))
    ]
}