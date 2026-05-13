import StarIcon from "@/public/icons/StarIcon";
import StarIconAI from "@/public/icons/StarIconAI";
import { CheckCircle2, ClockCheck, DollarSign, InfoIcon, MessageCircleDashed, Star, Timer } from "lucide-react";


const LastActive =() => {
    const data = [
        {
            icon:<CheckCircle2
                size={25} 
                strokeWidth={2} 
                color="#101073"
            />,
            lable:"Этап проекта завершен",
            subtitle:"Редизайн сайта - Фаза 2 сдана",
            time:"2 часа назад"
        },
                {
            icon:<MessageCircleDashed
                size={20} 
                strokeWidth={2} 
                color="#101073"
            />,
            lable:"Этап проекта завершен",
            subtitle:"Редизайн сайта - Фаза 2 сдана",
            time:"2 часа назад"
        },
                {
            icon:<DollarSign
                size={20} 
                strokeWidth={2} 
                color="#101073"
            />,
            lable:"Этап проекта завершен",
            subtitle:"Редизайн сайта - Фаза 2 сдана",
            time:"2 часа назад"
        },
        {
            icon:<StarIconAI

            />,
            lable:"Этап проекта завершен",
            subtitle:"Редизайн сайта - Фаза 2 сдана",
            time:"2 часа назад"
        },
        {
            icon:<InfoIcon
                size={20} 
                strokeWidth={2} 
                color="#101073"
            />,
            lable:"Этап проекта завершен",
            subtitle:"Редизайн сайта - Фаза 2 сдана",
            time:"2 часа назад"
        }
    ]
    return (
        <article className="flex flex-col flex-1 bg-white pl-6.25 pr-6.25 pt-6.25 pb-26.75 rounded-[14px] gap-5  min-w-[291px]">
            <h2 className="text-[#030213] font-semibold text-[20px]">Последняя активность</h2>
            <ul className="flex flex-col gap-4.5">
                {
                    data.map((item,index) => (
                        <li className="flex gap-4" key={index}>
                            <div className="w-10 h-10 rounded-full bg-[#F2F4FE] flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div className="flex flex-col gap-[2.4px]">
                                <h5 className="text-[#030213] font-semibold text-[14px]">{item.lable}</h5>
                                <span className=" text-[#717182] text-xs">{item.subtitle}</span>
                                <span className="flex gap-1 items-center text-[#717182] text-xs"><ClockCheck size={14} strokeWidth={1.17} color="#717182"/>{item.time}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>

        </article>
    );
}

export default LastActive