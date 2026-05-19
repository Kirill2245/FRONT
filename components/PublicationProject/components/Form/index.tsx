import { useState } from "react";
import MainInfo from "./MainInfo";
import { useEffect } from "react";
import Description from "./Description";
import SkillsSection from "./SkillsSection";
import BudgetSection from "./BudgetSection";
import Attachments from "./Attachments";
import Params from "./Params";
import { Button } from "@/components/ui/button";


interface FileWithPreview extends File {
    preview?: string
    id: string
}

interface FormData {
    projectName: string;
    category: string;
    description: string;
    skills: string[];
    levelExperens: string;
    attachments: FileWithPreview[];
    budgetType: 'fixed' | 'hourly';
    minBudget: number;
    maxBudget: number;
    timeline: string;
    startDate: string;
    visibleProject:'Publick' | 'Private';
}

interface FormProps {
    updateData: (data: FormData) => void
    externalProjectName?:string | null
}

const Form: React.FC<FormProps> = ({ updateData, externalProjectName }) => {
    const [formData, setFormData] = useState<FormData>({
        projectName: "",
        category: "",
        description: "",
        skills: [],
        levelExperens: '',
        attachments: [],
        budgetType: 'fixed',
        minBudget: 0,
        maxBudget: 100000,
        timeline: '',
        startDate: '',
        visibleProject:'Publick'
    });

    useEffect(() => {
        updateData(formData)
        console.log('Form data updated:', formData)
    }, [updateData, formData])
    useEffect(() => {
        if (externalProjectName) {
            console.log('Setting project name from external:', externalProjectName);
            setFormData(prev => ({
                ...prev,
                projectName: externalProjectName
            }));
        }
    }, [externalProjectName]);
    const updateFormData = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const updateSkills = (skills: string[]) => {
        setFormData(prev => ({ ...prev, skills }));
    };

    const updateAttachments = (attachments: FileWithPreview[]) => {
        setFormData(prev => ({ ...prev, attachments }));
    };

    // Функция для обновления данных бюджета
    const updateBudgetData = (budgetData: {
        budgetType: 'fixed' | 'hourly';
        minBudget: number;
        maxBudget: number;
        timeline: string;
        startDate: string;
    }) => {
        setFormData(prev => ({
            ...prev,
            budgetType: budgetData.budgetType,
            minBudget: budgetData.minBudget,
            maxBudget: budgetData.maxBudget,
            timeline: budgetData.timeline,
            startDate: budgetData.startDate
        }));
    };

    return (
        <form className="flex flex-col gap-6 w-full">
            <MainInfo 
                formData={formData} 
                updateFormData={updateFormData}
            />
            <Description 
                formData={formData} 
                updateFormData={updateFormData}
            />
            <SkillsSection 
                skills={formData.skills}
                onSkillsChange={updateSkills}
                formData={formData} 
                updateFormData={updateFormData}
            />
            <BudgetSection onDataChange={updateBudgetData} />
            <Attachments onFilesChange={updateAttachments} />
            <Params formData={formData}/>
            <footer className="flex justify-between ">
                <Button variant="outline" className="h-[45.60000228881836px]">Предварительный просмотр</Button>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-[45.60000228881836px]">Сохранить черновик</Button>
                    <Button className="text-white h-[45.60000228881836px]" disabled = {true} >Опубликовать проект</Button>
                </div>
            </footer>
        </form>
    );
}

export default Form;