// app/api/proxy/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const url = request.nextUrl.searchParams.get('url');
        
        if (!url) {
            return NextResponse.json(
                { error: 'URL parameter is required' },
                { status: 400 }
            );
        }

        // Декодируем URL (на случай двойного кодирования)
        const decodedUrl = decodeURIComponent(url);
        console.log('Fetching from S3:', decodedUrl);

        // Проверяем, что URL безопасен
        const allowedDomains = ['storage.yandexcloud.net', 's3.yandexcloud.net'];
        const isAllowed = allowedDomains.some(domain => decodedUrl.includes(domain));
        
        if (!isAllowed) {
            console.error('Access denied for URL:', decodedUrl);
            return NextResponse.json(
                { error: 'Access denied' },
                { status: 403 }
            );
        }

        // Делаем запрос к S3
        const response = await fetch(decodedUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (compatible; Next.js)',
            },
        });

        console.log('S3 response status:', response.status);
        console.log('S3 response headers:', Object.fromEntries(response.headers));

        if (!response.ok) {
            const text = await response.text();
            console.error('S3 error response:', text);
            return NextResponse.json(
                { error: `Failed to fetch from S3: ${response.status}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Proxy error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}