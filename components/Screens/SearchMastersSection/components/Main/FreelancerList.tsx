
import FreelancerCard from './FreelancerCard';
import { Freelancer } from '../../types/freelancer.types';

interface FreelancerListProps {
    freelancers: Freelancer[];
    viewMode: 'grid' | 'list';
}

const FreelancerList = ({ freelancers, viewMode }: FreelancerListProps) => {
    if (freelancers.length === 0) {
        return (
            <div className="flex justify-center items-center flex-1 min-h-100">
                <div className="text-center text-[#6A7282]">
                    <p>Нет данных для отображения</p>
                </div>
            </div>
        );
    }

    if (viewMode === 'grid') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {freelancers.map((freelancer) => (
                    <FreelancerCard key={freelancer.id} freelancer={freelancer} viewMode={viewMode} />
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col">

            <div className="bg-[#F2F2F7] rounded-t-lg p-4">
                <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-[#6A7282]">
                    <div className="col-span-3">Фрилансер</div>
                    <div className="col-span-2">Рейтинг</div>
                    <div className="col-span-3">Навыки</div>
                    <div className="col-span-2 text-right">Оплата</div>
                    <div className="col-span-2 text-right">Статус / Действие</div>
                </div>
            </div>


            {freelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id} freelancer={freelancer} viewMode={viewMode} />
            ))}
        </div>
    );
};

export default FreelancerList;