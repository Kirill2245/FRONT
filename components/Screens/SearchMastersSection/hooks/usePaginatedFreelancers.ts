
import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Freelancer } from '../types/freelancer.types';
import { generateMockFreelancers } from '../utils/mockData';

interface Filters {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
}

interface UsePaginatedFreelancersReturn {
    freelancers: Freelancer[];
    loading: boolean;
    currentPage: number;
    totalPages: number;
    totalItems: number;
    filters: Filters;
    goToPage: (page: number) => void;
    updateFilters: (newFilters: Partial<Filters>) => void;
    nextPage: () => void;
    prevPage: () => void;
}

export const usePaginatedFreelancers = (itemsPerPage: number = 12): UsePaginatedFreelancersReturn => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Получаем параметры из URL
    const pageFromUrl = Number(searchParams.get('page')) || 1;
    const filtersFromUrl: Filters = {
        category: searchParams.get('category') || undefined,
        minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
        maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
        rating: searchParams.get('rating') ? Number(searchParams.get('rating')) : undefined,
    };
    
    const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(pageFromUrl);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [filters, setFilters] = useState<Filters>(filtersFromUrl);

    const loadFreelancers = useCallback(async (page: number, currentFilters: Filters) => {
        setLoading(true);
        
        // Симуляция задержки сети
        await new Promise(resolve => setTimeout(resolve, 800));
        
        try {
            const limit = itemsPerPage;
            // Передаем фильтры в генерацию данных
            const newFreelancers = generateMockFreelancers(page, limit);
            const totalItemsCount = 2847;
            const totalPagesCount = Math.ceil(totalItemsCount / itemsPerPage);
            
            setFreelancers(newFreelancers);
            setTotalItems(totalItemsCount);
            setTotalPages(totalPagesCount);
        } catch (error) {
            console.error('Error loading freelancers:', error);
        } finally {
            setLoading(false);
        }
    }, [itemsPerPage]);

    useEffect(() => {
        loadFreelancers(currentPage, filters);
    }, [currentPage, filters, loadFreelancers]);

    // Обновляем URL при изменении страницы или фильтров
    const updateURL = (page: number, newFilters: Filters) => {
        const params = new URLSearchParams();
        
        if (page > 1) params.set('page', page.toString());
        if (newFilters.category) params.set('category', newFilters.category);
        if (newFilters.minPrice) params.set('minPrice', newFilters.minPrice.toString());
        if (newFilters.maxPrice) params.set('maxPrice', newFilters.maxPrice.toString());
        if (newFilters.rating) params.set('rating', newFilters.rating.toString());
        
        const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
        router.push(newUrl, { scroll: false });
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            setCurrentPage(page);
            updateURL(page, filters);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const updateFilters = (newFilters: Partial<Filters>) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);
        setCurrentPage(1); // Сбрасываем на первую страницу при изменении фильтров
        updateURL(1, updatedFilters);
    };

    // Синхронизируем состояние с URL при изменении URL (назад/вперед)
    useEffect(() => {
        const page = Number(searchParams.get('page')) || 1;
        const newFilters: Filters = {
            category: searchParams.get('category') || undefined,
            minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
            maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
            rating: searchParams.get('rating') ? Number(searchParams.get('rating')) : undefined,
        };
        
        if (page !== currentPage) {
            setCurrentPage(page);
        }
        
        if (JSON.stringify(newFilters) !== JSON.stringify(filters)) {
            setFilters(newFilters);
        }
    }, [searchParams]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    };

    return {
        freelancers,
        loading,
        currentPage,
        totalPages,
        totalItems,
        filters,
        goToPage,
        updateFilters,
        nextPage,
        prevPage,
    };
};