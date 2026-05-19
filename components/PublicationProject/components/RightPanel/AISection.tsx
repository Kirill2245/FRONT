import { ProgressBar } from "@/components/ui/progress-bar";
import StarIconAI from "@/public/icons/StarIconAI";
import { Check } from "lucide-react";

interface AISectionProps{
    name?:boolean,
    category?:boolean,
    description?:boolean,
    skils?:boolean,
    budget?:boolean,
    attachments?:boolean
}
const AISection:React.FC<AISectionProps> = ({name = false, category = false, description = false, skils = false, budget = false, attachments = false}) => {
    const data = [name, category, description, skils, budget, attachments]
    const trueData = data.filter(item => item === true)
    const countFill = ((trueData.length / data.length) * 100).toFixed(1)
    const fillDataMarcker = [
        {
            name:"Название проекта",
            fill:name
        },
        {
            name:"Категория и подкатегория",
            fill:category
        },
        {
            name:"Подробное описание",
            fill:description
        },
        {
            name:"Минимум 3 навыка",
            fill:skils
        },
        {
            name:"Бюджет и сроки",
            fill:budget
        },
        {
            name:"Вложения",
            fill:attachments
        },
    ]
    return (
        <div className="flex flex-col border border-[#F2F2F7] p-5.5 rounded-[14px] gap-4" style={{
                background: 'linear-gradient(121.02deg, rgba(225, 243, 255, 0.64) 25.56%, rgba(110, 137, 241, 0.32) 100.04%)'
            }}>
                <header className="flex gap-2 items-center">
                    <StarIconAI/>
                    <h3 className="font-semibold text-[#0A0A0A]">ИИ Ассистент</h3>
                </header>
                <div className="flex flex-col gap-2">
                    <header className="flex justify-between">
                        <h4>Заполнение</h4>
                        <span>{countFill}%</span>
                    </header>
                    <ProgressBar percent={+countFill} useGradient={false} fillColor="#101073"/>
                </div>
                <ul className="flex flex-col gap-2.5">
                    {
                        fillDataMarcker.map((item,index) => (
                            <li key={index} className="flex gap-2.5 items-center">
                                <div className={`w-3.75 h-3.75 rounded-full border-[1.5px] flex items-center justify-center transition-colors duration-200 ${
                                    item.fill ? 'border-[#101073] bg-[#101073]' : 'border-[#D1D5DC]'
                                }`}>
                                    {item.fill && <Check size={11} strokeWidth={3} className="text-white" />}
                                </div>
                                <span className="text-[13px] text-[#6A7282]">{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
    );
}

export default AISection