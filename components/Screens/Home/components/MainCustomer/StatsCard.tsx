import { icons } from "lucide-react";
import Image from "next/image";
import React from "react";


interface StatsCardProps{
    stat:string,
    icon:string,
    title:string,
    countStat:number
}

const StatsCard: React.FC<StatsCardProps> = ({ stat, icon, title, countStat }) => {
    return (
        <article className="p-6 rounded-[14px] border-[#F2F2F7] bg-card gap-4 flex flex-col flex-1 min-w-53.5 " role="listitem">
            <div className="gap-4 flex items-center">
                <div 
                    className="bg-[#F2F2F7] w-10 h-10 rounded-[10px] flex justify-center items-center"
                    aria-hidden="true"
                >
                    <Image src={icon} alt="" aria-hidden="true" />
                </div>
                <span className="font-medium text-xs text-[#101073]">{stat}</span>
            </div>
            <dl className="flex flex-col gap-[3.2px]">
                <dt className="text-[#717182] font-medium text-xs">{title}</dt>
                <dd className="text-[32px] h-8 leading-8 font-semibold">
                    {countStat}
                </dd>
            </dl>
        </article>
    );
};

export default StatsCard