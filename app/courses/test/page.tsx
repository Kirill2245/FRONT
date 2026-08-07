'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { courseApi } from '@/api/services/course';
import { withAuth } from '@/hooks/withAuth';
import { TestFullData } from '@/api/dto/course/course.dto';
import TestSection from '@/components/courses/TestSection';

function TestPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const testId = searchParams.get('testID'); 
    const [test, setTest] = useState<TestFullData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLecture = async () => {
            try {
                setLoading(true);
                if (!testId) {
                    return;
                }
                const data = await courseApi.getTest(testId);
                
                // If no question parameter in URL, set it to 0
                if (!searchParams.has('question')) {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('question', '0');
                    router.replace(`?${params.toString()}`, { scroll: false });
                }
                
                setTest(data);
                setError(null);
            } catch (err: any) {
                console.error('Error fetching test:', err);
                setError(err.message || 'Ошибка загрузки');
            } finally {
                setLoading(false);
            }
        };

        fetchLecture();
    }, [testId, router, searchParams]);

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

    if (error || !test) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold text-red-600">Ошибка</h1>
                <p className="text-gray-600 mt-2">{error || 'Тест не найден'}</p>
                <button 
                    onClick={() => router.push('/courses')}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Назад к курсу
                </button>
            </div>
        );
    }

    return (
        <main className='bg-[#FBFBFD] w-full min-h-screen flex items-center justify-center p-4'>
            <TestSection {...test} />
        </main>
    );
}

export default withAuth(TestPage);