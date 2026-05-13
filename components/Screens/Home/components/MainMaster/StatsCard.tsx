
interface StatsCardProps{
    title:string;
    icon:React.ComponentType<{ className?: string; color?:string; size?: number; strokeWidth?: number }>;
    subtitle:string;
    count:string
}

const StatsCard:React.FC<StatsCardProps> = ({title, icon: Icon, subtitle, count}) => {
    return (
        <div className="p-6.25 bg-white border border-[#00000014] flex-1 rounded-2xl flex flex-col gap-2.5">
            <header className="flex justify-between">
                <h3 className="text-[#717182]">{title}</h3>
                <Icon color="#101073"/>
            </header>
            <span className="text-4xl text-[#0A0A0A]">{count}</span>
            <span className="text-[#101073] text-[14px]">{subtitle}</span>
        </div>
    );
}

export default StatsCard