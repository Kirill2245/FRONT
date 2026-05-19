// components/Screens/SearchMastersSection/components/FreelancerCard.tsx
import { Star } from 'lucide-react';
import { Freelancer } from '../../types/freelancer.types';
import StarIcon from '@/public/icons/StarIcon';
import { formatPriceNumber } from '@/helper/formatPriceNumber';
import { Button } from '@/components/ui/button';

interface FreelancerCardProps {
    freelancer: Freelancer;
    viewMode: 'grid' | 'list';
}

const FreelancerCard = ({ freelancer, viewMode }: FreelancerCardProps) => {
    if (viewMode === 'grid') {
        return (
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow max-w-100 flex-1 flex flex-col gap-4">
                <header className="flex items-center gap-3 ">
                    <img 
                        src={freelancer.avatar} 
                        alt={freelancer.name}
                        className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className='flex flex-col'>
                        <h4 className='text-[#101828] text-[18px] font-bold'>{freelancer.name}</h4>
                        <span>{freelancer.specialization}</span>
                        <div className='flex items-center gap-1'><StarIcon size={12}/><span>{freelancer.rating.toFixed(1)}</span></div>
                    </div>
                </header>
               <span className='max-h-10 overflow-hidden text-[14px] text-[#4A5565]'>{freelancer.description}</span>
               <ul className='flex gap-1.5'>
                    {freelancer.skills.slice(0,3).map((item, index) => (
                        <li key={index} className='bg-[#F2F4FE] px-2 py-1 rounded-xl border border-[#88D3B033] text-[#101073] text-xs'>
                            {item}
                        </li>
                    ))}
               </ul>
               <footer className='flex justify-between items-center'>
                    <span className='text-[14px] text-[#4A5565]'>
                        <span className='text-[18px] text-[#101828] font-bold'>
                            ₽{formatPriceNumber(+freelancer.price.toFixed(0))}
                        </span>
                        /час
                    </span>
                    <Button variant="outline">Посмотреть профиль</Button>
               </footer>
            </div>
        );
    }
    
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <img 
                src={freelancer.avatar} 
                alt={freelancer.name}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-[#101828]">{freelancer.name}</h4>
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-[#6A7282]">{freelancer.rating.toFixed(1)}</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                    {freelancer.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-[#F2F2F7] px-2 py-1 rounded">
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#101073]">{freelancer.price.toLocaleString()} ₽</span>
                    <button className="text-sm text-[#101073] hover:underline">Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default FreelancerCard;