import { UserRole } from "@/types/user-role.enum"
import React from "react"
import StatsCard from "./StatsCard"
import { title } from "process"
import IconProject from '@/public/images/IconProject.svg'
import IconWastes from '@/public/images/IconWastes.svg'
import IconSave from '@/public/images/IconSave.svg'
import IconAccuracy from '@/public/images/IconAccuracy.svg'
import StatsSection from "./StatsSection"
import AiTalentsSection from "./AiTalentsSection"

import LastActive from "./LastActive"
import ActiveProject from "./ActiveProject"
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
            className="flex flex-1 flex-col h-auto w-full pl-6 pr-6 pt-6 pb-6 gap-8 gradient-bg min-w-0"
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
            {/* <SimpleTest /> */}
            <StatsSection stats={stats}/>


            <AiTalentsSection/>

            <div className="flex gap-6 flex-wrap">
                <LastActive/>
                <ActiveProject/>
            </div>
        </div>
    );
}

export default MainCustomer