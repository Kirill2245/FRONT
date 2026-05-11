import React from "react";
import StatsCard from "./StatsCard";

interface Stats{
    stat:string,
    icon:string,
    title:string,
    countStat:number
}
interface StatsSectionProps{
    stats: Stats[]
}
const StatsSection:React.FC<StatsSectionProps> = ({stats}) => {
    return (
        <section aria-label="stats-heading" className="flex flex-wrap w-full h-auto gap-5" role="list">
            {
                stats.map((item,index) => (
                    <StatsCard
                        title={item.title} 
                        icon={item.icon} 
                        countStat={item.countStat} 
                        stat={item.stat} 
                        key={index} 
                    />
                ))
            }
        </section>
    );
}

export default StatsSection