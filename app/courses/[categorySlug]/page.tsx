// app/courses/[slug]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { courseApi } from '@/api/services/course';
import LectionsMenu from '@/components/courses/lectionsMenu';

interface CategoryWithLectures {
    id: string;
    name: string;
    slug: string;
    lectios: Array<{
        id: string;
        title: string;
        description: string;
        lectionsUrl: string;
        categoryId: string;
        testId: string;
    }>;
}

export default function CategoryPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.categorySlug as string;
    
    const [category, setCategory] = useState<CategoryWithLectures | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setLoading(true);
                const data = await courseApi.getLections(slug);
                setCategory(data);
                setError(null);
            } catch (err: any) {
                console.error('Error fetching category:', err);
                setError(err.message || 'Ошибка загрузки');
                
                if (err.message?.includes('not logged in')) {
                    router.push(`/login?redirect=/courses/${slug}`);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
    }, [slug, router]); // ✅ Правильные зависимости

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Загрузка...</p>
                </div>
            </div>
        );
    }

    if (error || !category) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold text-red-600">Ошибка</h1>
                <p className="text-gray-600 mt-2">{error || 'Категория не найдена'}</p>
                <button 
                    onClick={() => router.push('/')}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    На главную
                </button>
            </div>
        );
    }

    return (
        <main>
            <LectionsMenu lections={category.lectios} categoryName = {category.name} slug={slug}/>
        </main>
    );
}