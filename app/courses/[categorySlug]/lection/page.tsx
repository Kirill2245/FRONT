'use client';

import { useEffect, useState } from 'react';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { courseApi } from '@/api/services/course';
import { Logo } from "@/components/shared/logo"
import Link from 'next/link';
interface Lectures {
    id: string;
    title: string;
    description: string;
    lectionsUrl: string;
    categoryId: string;
    testId: string;
}

export default function CategoryPage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const slug = params.slug as string; // Это slug категории (например, "ui-ux-design")

    const lectureId = searchParams.get('lectureId'); // ID лекции из query
    const lectureNumber = searchParams.get('lectureNumber');
    const categoryName = searchParams.get('categoryName');

    const [lecture, setLecture] = useState<Lectures | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchLecture = async () => {
            try {
                setLoading(true);
                // Используем ID (UUID) для получения лекции
                if (!lectureId){
                    return 
                }
                const data = await courseApi.getLecture(lectureId); // или getLecture(slug)
                setLecture(data);
                setError(null);
            } catch (err: any) {
                console.error('Error fetching lecture:', err);
                setError(err.message || 'Ошибка загрузки');
                
                if (err.message?.includes('not logged in')) {
                    router.push(`/login?redirect=/courses/${categoryName}/${slug}`);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchLecture();
    }, [slug, categoryName, router]);

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

    if (error || !lecture) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold text-red-600">Ошибка</h1>
                <p className="text-gray-600 mt-2">{error || 'Лекция не найдена'}</p>
                <button 
                    onClick={() => router.push(`/courses/${categoryName || ''}`)}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Назад к курсу
                </button>
            </div>
        );
    }

    return (
        <main className='flex flex-col h-screen'>
            <header className="px-5.5 border-b border-gray-200 h-21 flex items-center justify-between">
                <div className='flex gap-20 items-center'>
                    <Logo showText={false} size={64}/>
                    <h1 className="text-xl font-semibold">
                        Лекция {lectureNumber}: {lecture.title}
                    </h1>
                </div>
                <Link href={{
                        pathname: `/courses/test`,
                        query: {
                            testID:lecture.testId
                        }
                    }} className='bg-[#B7C5F9] w-36.5 h-11 flex items-center justify-center rounded-[10px]'>
                    <span className='text-[#1D1D1F] font-medium'>
                        Пройти тест
                    </span>
                </Link>
            </header>
            <iframe
                src={lecture.lectionsUrl}
                className="w-full flex-1 border-0"
                title={lecture.title}
            />
        </main>
    );
}