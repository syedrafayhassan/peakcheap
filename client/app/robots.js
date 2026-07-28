


export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/learn-forex-and-get-paid-from-mt5-forum',
                ],
            },
        ],
        sitemap: 'https://www.peakcheap.com/sitemap.xml',
    }
}