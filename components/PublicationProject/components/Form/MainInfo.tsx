import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Box from "./box";

interface MainInfoProps {
    formData: {
        projectName: string;
        category: string;
    };
    updateFormData: (key: string, value: string) => void;
    externalProjectName?:string | null
}

const MainInfo:React.FC<MainInfoProps> = ({ formData, updateFormData }) => {
    const selectData = [
        {
            name: "Веб-разработка",
            value: "web-development"
        },
        {
            name: "Мобильная разработка",
            value: "mobile-development"
        },
        {
            name: "Дизайн и графика",
            value: "design-graphics"
        },
        {
            name: "Копирайтинг и контент",
            value: "copywriting-content"
        },
        {
            name: "SEO и маркетинг",
            value: "seo-marketing"
        },
        {
            name: "Администрирование и поддержка",
            value: "admin-support"
        },
        {
            name: "IT и программирование",
            value: "it-programming"
        },
        {
            name: "Анимация и видео",
            value: "animation-video"
        }
    ];
    return (
        <Box header="Основная информация">
            <div className="flex flex-col gap-5">
                <label className="flex flex-col gap-2">
                    <span className="flex justify-between text-[#101828] text-[14px] font-medium">
                        Название проекта 
                        <span className="text-[#6A7282] text-[14px]">{formData.projectName.length}/100</span>
                    </span>
                    <Input 
                        placeholder="Например: Разработка мобильного приложения для доставки еды" 
                        onChange={(e) => updateFormData("projectName", e.target.value)}
                        value={formData.projectName}
                    />
                </label>
                <label htmlFor="" className="flex flex-col gap-2 text-[#101828] text-[14px] font-medium">
                    Категория
                    <Select                   
                        value={formData.category} 
                        onValueChange={(value) => updateFormData("category", value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue  />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup >
                            {
                                selectData.map((item,index) => (
                                    <SelectItem value={item.value} key={index}>{item.name}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                </label>
            </div>
        </Box>
    );
}

export default MainInfo