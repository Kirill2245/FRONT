// components/Screens/SearchMastersSection/components/Main.tsx
import { useState } from 'react';
import { usePaginatedFreelancers } from '../../hooks/usePaginatedFreelancers';
import MainHeader from './MainHeader';
import FreelancerList from './FreelancerList';
import Pagination from '../Pagination';
import LoadingSpinner from './LoadingSpinner';

const Main = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const { 
        freelancers, 
        loading, 
        currentPage, 
        totalPages, 
        totalItems,
        goToPage 
    } = usePaginatedFreelancers(12);

    return (
        <div 
            className="flex flex-col flex-1 h-screen p-6 overflow-y-auto"
            style={{
                background: 'linear-gradient(127.16deg, rgba(99, 99, 164, 0.32) 27.97%, rgba(220, 204, 154, 0.1) 82.51%)'
            }}
        >
            <MainHeader 
                totalItems={totalItems}
                currentPage={currentPage}
                totalPages={totalPages}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
            />

            {loading ? (
                <div className="flex justify-center items-center flex-1 min-h-[400px]">
                    <LoadingSpinner />
                </div>
            ) : (
                <>
                    <FreelancerList 
                        freelancers={freelancers}
                        viewMode={viewMode}
                    />

                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={goToPage}
                    />
                </>
            )}
        </div>
    );
};

export default Main;