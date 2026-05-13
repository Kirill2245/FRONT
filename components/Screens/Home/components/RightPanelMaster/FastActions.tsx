import { ExternalLink, FileText, List, Plus, UserRoundPlus } from "lucide-react";

const FastActions = () => {
    const linksActions = [
        {
            title:'Просмотр проектов',
            icon:<ExternalLink  size={16}/>,
            link:"/"
        },
        {
            title:'Редактировать портфолио',
            icon:<ExternalLink  size={16}/>,
            link:"/"
        },
        {
            title:'Посмотреть профиль',
            icon:<ExternalLink  size={16}/>,
            link:"/"
        },
    ]
    return (
        <div className="w-full h-auto border-[0.8] border-[#00000014] flex flex-col p-5 rounded-[14px] gap-7 bg-[#F2F4FE]">
            <h2 className="text-[#030213] font-semibold">Быстрые действия</h2>
            <div className="flex flex-col gap-2">
                {
                    linksActions.map((item,index) => (
                        <a href={item.link} key={index} className="flex gap-3 items-center bg-white h-10 rounded-[14px] justify-center border border-[#00000014]">
                            <div className="flex gap-2.5 items-center ">
                                {item.title}

                                {item.icon}
                            </div>
                        </a>
                    ))
                }
            </div>

        </div>
    );
}

export default FastActions