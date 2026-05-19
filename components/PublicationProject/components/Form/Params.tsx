import React, { useState } from "react";
import Box from "./box";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface ParamsProps{
    formData:{
        visibleProject:'Publick' | 'Private'
    }
}
const Params:React.FC<ParamsProps> = ({formData}) => {
    const [selectBtn, setSelectBtn] = useState<number | null>(() => {
            // Инициализация из formData при загрузке
            const typeProject = ["Публичный", "Приватный"];
            const savedIndex = typeProject.findIndex(type => type === formData.visibleProject);
            return savedIndex !== -1 ? savedIndex : 0;
        });

    const [setting, setSetting] = useState<{isVerificated:boolean, owerRating:boolean, fastClick:boolean }>({isVerificated:false, owerRating:false, fastClick:false})
    const typeProject = [  
        { title: "Публичный", subtitle: "Виден всем исполнителям" },
        { title: "Приватный", subtitle: "Только по приглашению" },
    ];
    const settingsAI = [
        {
            title:"Только верифицированные исполнители",
            subtitle:'Проверены платформой',
            key: 'isVerificated' as const,
            setting:setting.isVerificated
        },
        {
            title:"С рейтингом 4.5+",
            subtitle:'Высокие оценки от клиентов',
            key: 'owerRating' as const,
            setting:setting.owerRating
        },
        {
            title:"Быстрый отклик (в течение 24 часов)",
            subtitle:'Проверены платформой',
            key: 'fastClick' as const,
            setting:setting.fastClick
        }
    ]
    const handleSwitchChange = (key: keyof typeof setting) => {
        setSetting(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <Box header="Дополнительные параметры">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <h4 className="text-[#101828] font-medium text-[14px]">Видимость проекта</h4>
                    <div className="flex flex-col gap-2.5">
                        {
                            typeProject.map((item, index) => (
                                <button
                                    key={index}
                                    className={`w-full flex items-center border-[1.6px] transition-all duration-200 rounded-[10px] p-[13.6px] ${
                                        index === selectBtn 
                                            ? 'border-[#101073] bg-[#FBFBFD]' 
                                            : 'border-[#F2F2F7] bg-white hover:border-[#101073]/20'
                                    }`}
                                    onClick={() => setSelectBtn(index)}
                                    type="button"
                                >
                                    <div className="flex gap-3.25 items-center">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                                            index === selectBtn 
                                                ? 'border-[#101073] bg-[#101073]' 
                                                : 'border-[#D1D5DC] bg-white'
                                        }`}>
                                            {index === selectBtn && <Check size={10} strokeWidth={3} className="text-white" />}
                                        </div>
                                        <div className="flex flex-col flex-1 text-left">
                                            <h4 className="text-[#101828] text-[14px] font-medium">
                                                {item.title}
                                            </h4>
                                            <p className="text-[#6A7282] text-xs font-medium">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="text-[#101828] font-medium text-[14px]">Предпочтения ИИ-подбора</h4>
                    <ul className="flex flex-col gap-3">
                        {
                            settingsAI.map((item , index) => (
                                <li className="flex gap-3" key={index}>
                                    <Switch checked = {item.setting}  onCheckedChange={() => handleSwitchChange(item.key)} className="data-[state=checked]:bg-[#B7C5F9]"/>
                                    <div className="flex flex-col ">
                                        <span className="text-[#101828] text-[14px] font-medium">{item.title}</span>
                                        <span className="text-[#6A7282] text-xs font-medium">{item.subtitle}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Box>
    );
}

export default Params