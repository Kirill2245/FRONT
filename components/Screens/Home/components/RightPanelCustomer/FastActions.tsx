import { FileText, List, Plus, UserRoundPlus } from "lucide-react";

const FastActions = () => {
    const linksActions = [
        {
            title:'Создать проект',
            icon:<Plus color="#101073" size={16}/>,
            link:"/"
        },
        {
            title:'Пригласить таланты',
            icon:<UserRoundPlus color="#101073" size={16}/>,
            link:"/"
        },
        {
            title:'Смотреть предложения',
            icon:<FileText color="#101073" size={16}/>,
            link:"/"
        },
    ]
    return (
        <div className="w-full h-auto border-[0.8] border-[#F2F2F7] flex flex-col p-5 rounded-[14px] gap-7">
            <h2 className="text-[#030213] font-semibold">Быстрые действия</h2>
            <div className="flex flex-col gap-8">
                {
                    linksActions.map((item,index) => (
                        <a href={item.link} key={index} className="flex gap-3 items-center">
                            <div className="flex items-center justify-center w-8 h-8 bg-[#F2F2F7] rounded-[10px]">
                                {item.icon}
                            </div>
                            {item.title}
                        </a>
                    ))
                }
            </div>

        </div>
    );
}

export default FastActions