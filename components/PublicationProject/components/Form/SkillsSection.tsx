import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import Box from "./box";
import AddSkills from "./AddSkils";

interface SkillsSectionProps {
    skills: string[];
    onSkillsChange: (skills: string[]) => void;
    formData: {
        levelExperens: string;
    };
    updateFormData: (key: string, value: string) => void;
}

const SkillsSection = ({ skills, onSkillsChange, formData, updateFormData }: SkillsSectionProps) => {
    const [selectBtn, setSelectBtn] = useState<number | null>(() => {
        // Инициализация из formData при загрузке
        const levelExperens = ["Начальный", "Средний", "Эксперт"];
        const savedIndex = levelExperens.findIndex(level => level === formData.levelExperens);
        return savedIndex !== -1 ? savedIndex : null;
    });

    const levelExperens = [
        { title: "Начальный", subtitle: "Исполнители с опытом до 2 лет" },
        { title: "Средний", subtitle: "2-5 лет опыта" },
        { title: "Эксперт", subtitle: "Более 5 лет опыта" },
    ];

    useEffect(() => {
        if (selectBtn !== null) {
            updateFormData("levelExperens", levelExperens[selectBtn].title);
        }
    }, [selectBtn]);

    return (
        <Box header="Навыки и требования">
            <div className="flex flex-col gap-5">
                <AddSkills skills={skills} onSkillsChange={onSkillsChange} />
                
                <div className="flex flex-col gap-3">
                    <h3 className="text-[#101828] text-[14px] font-medium">Уровень опыта</h3>
                    {levelExperens.map((item, index) => (
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
                    ))}
                </div>
            </div>
        </Box>
    );
};

export default SkillsSection;