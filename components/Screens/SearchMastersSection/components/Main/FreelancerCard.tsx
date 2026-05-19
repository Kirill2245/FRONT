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
        <div className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow border-b border-[#F2F2F7]">
            <div className="grid grid-cols-12 gap-4 items-center">

                <div className="col-span-3 flex items-center gap-3">
                    <img 
                        src={freelancer.avatar} 
                        alt={freelancer.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-[#101828] text-sm">{freelancer.name}</h4>
                        <span className="text-xs text-[#6A7282]">{freelancer.specialization}</span>
                    </div>
                </div>


                <div className="col-span-2">
                    <div className="flex items-center gap-1">
                        <StarIcon size={14} />
                        <span className="text-sm font-medium text-[#101828]">{freelancer.rating.toFixed(1)}</span>
                    </div>
                </div>


                <div className="col-span-3">
                    <div className="flex flex-wrap gap-1">
                        {freelancer.skills.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="text-xs bg-[#F2F2F7] px-2 py-0.5 rounded">
                                {skill}
                            </span>
                        ))}
                        {freelancer.skills.length > 3 && (
                            <span className="text-xs text-[#6A7282]">+{freelancer.skills.length - 3}</span>
                        )}
                    </div>
                </div>


                <div className="col-span-2 text-right">
                    <span className="text-base font-bold text-[#101828]">
                        ₽{formatPriceNumber(+freelancer.price.toFixed(0))}
                    </span>
                    <span className="text-xs text-[#4A5565]">/час</span>
                </div>

                <div className="col-span-2 flex items-center justify-end gap-3">

                    <span className={`text-xs px-2 py-1 rounded-full ${
                        freelancer.status === 'available' 
                            ? 'bg-green-100 text-green-700' 
                            : freelancer.status === 'busy'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-blue-100 text-blue-700'
                    }`}>
                        {freelancer.status === 'available' ? 'Доступно' : 
                         freelancer.status === 'busy' ? 'Занят' : 'Online'}
                    </span>

                    <Button variant="outline" size="sm" className="text-xs">
                        Смотреть
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FreelancerCard;