// components/Screens/SearchMastersSection/components/FreelancerList.tsx
import FreelancerCard from './FreelancerCard';
import { Freelancer } from '../../types/freelancer.types';

interface FreelancerListProps {
    freelancers: Freelancer[];
    viewMode: 'grid' | 'list';
}

const FreelancerList = ({ freelancers, viewMode }: FreelancerListProps) => {
    if (freelancers.length === 0) {
        return (
            <div className="flex justify-center items-center flex-1 min-h-[400px]">
                <div className="text-center text-[#6A7282]">
                    <p>Нет данных для отображения</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`flex-1 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' : 'flex flex-col gap-3'}`}>
            {freelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id} freelancer={freelancer} viewMode={viewMode} />
            ))}
        </div>
    );
};

export default FreelancerList;