import { UserRole } from "@/types/user-role.enum";
import Profile from "./Profile";
import StatsCard from "./StatsCard";
import { Clock, Eye, icons, Timer } from "lucide-react";
import { it } from "node:test";
import StarIconAI from "@/public/icons/StarIconAI";
import LastActive from "./LastActive";

interface MainMasterProps{
    user:{
        id?: string
        email?: string
        firstName: string
        lastName?: string
        role?: UserRole
        emailVerified:boolean
        createdAt:string
        [key: string]: unknown
    }
}
const MainMaster:React.FC<MainMasterProps> = ({user}) =>{
    const stats = [
        {
            title:"Профиль Просмотры",
            count:"2,847",
            subtitle:"+12% на этой неделе",
            icon:Eye
        },
        {
            title:"AI Match Score",
            count:"92%",
            subtitle:"Excellent compatibility",
            icon:StarIconAI
        },
        {
            title:"Время",
            count:"<2h",
            subtitle:"Быстрее других на 95% ",
            icon:Clock
        }
    ]
    return (
        <div 
            className="flex flex-1 flex-col h-auto w-full p-11.75 gap-8 gradient-bg min-w-0"
            style={{
                background: 'linear-gradient(180deg, rgba(99, 99, 164, 0.32) 0%, rgba(220, 204, 154, 0.1) 100%)'
            }}
        >
            <Profile 
                avatarLink={user?.titleImg as string | undefined} 
                firstName={user.firstName} 
                emailVerified = {user.emailVerified} 
                createdAt={user.createdAt}
                specialization="Старший дизайнер и UX - стратег"
                location="Россия,Москва"
            />
            <div className="flex gap-4 flex-wrap">
                {stats.map((item, index) => (
                    <StatsCard title={item.title} subtitle={item.subtitle} icon={item.icon} count={item.count} key={index}/>
                ))}
            </div>
            <LastActive/>
        </div>
    );
}

export default MainMaster