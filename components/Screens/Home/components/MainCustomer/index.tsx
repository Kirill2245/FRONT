import { UserRole } from "@/types/user-role.enum"
import React from "react"
import StatsCard from "./StatsCard"
import { title } from "process"
import IconProject from '@/public/images/IconProject.svg'
import IconWastes from '@/public/images/IconWastes.svg'
import IconSave from '@/public/images/IconSave.svg'
import IconAccuracy from '@/public/images/IconAccuracy.svg'
interface MainCustomerpProps{
    user:{
        id?: string
        email?: string
        firstName?: string
        lastName?: string
        role?: UserRole
        [key: string]: unknown
    }
}
const MainCustomer:React.FC<MainCustomerpProps> = ({user}) =>{
    const stats = [
        {
            title:"Активные проекты",
            stat:"+2 на этой неделе",
            icon:IconProject,
            countStat:8
        },
        {
            title:"Всего потрачено",
            stat:"+2 на этой неделе",
            icon:IconWastes,
            countStat:8
        },
        {
            title:"Сохранено фрилансеров",
            stat:"+2 на этой неделе",
            icon:IconSave,
            countStat:8
        },
        {
            title:"Точность AI",
            stat:"+2 на этой неделе",
            icon:IconAccuracy,
            countStat:8
        },
    ]
    return (
        <div 
            className="flex flex-col w-full h-screen pl-6 pr-6 pt-6 pb-6 gap-8 gradient-bg"
            style={{
                background: 'linear-gradient(121deg, rgba(99, 99, 164, 0.32) 9.61%, rgba(208, 194, 155, 0.12) 83.17%, rgba(220, 204, 154, 0.10) 99.99%)'
            }}
        >
            <section aria-labelledby="welcome-heading">
                <header className="flex-col gap-2.15">
                    <h1 id="welcome-heading" className="font-semibold text-[32px] text-[#030213]">
                        С возвращением, {user.firstName?.split(' ')[0]}
                    </h1>
                    <p className="text-muted-foreground text-[14px]">
                        Вот что происходит с вашими проектами сегодня.
                    </p>
                </header>
            </section>

            <section aria-label="stats-heading" className="flex flex-wrap w-full gap-5" role="list">
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
        </div>
    );
}

export default MainCustomer