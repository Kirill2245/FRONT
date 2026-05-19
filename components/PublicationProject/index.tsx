import { useCallback, useEffect, useState } from "react";
import Form from "./components/Form";
import RightPanel from "./components/RightPanel";
import { Button } from "../ui/button";
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
const PublicationProject = () => {
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
    const [externalProjectName, setExternalProjectName] = useState<string | null>(null);
    
    const updateFormData = (data:FormData) => {
        setFormData(data)
    }
    const handleLoadExample = useCallback((title: string) => {
        setExternalProjectName(title)
    }, []);

    useEffect(() => {console.log(externalProjectName)}, [])
    return (
        <div className="flex flex-1 flex-col">
            <header className="flex justify-between w-full pt-6 pb-6 pl-[71.6px] pr-[71.6px] bg-white border border-[#F2F2F7] items-center">
                <div className="flex flex-col gap-1.25">
                    <h1 className="text-[#0A0A0A] font-semibold text-4xl">Публикация проекта</h1>
                    <h3 className="text-[#6A7282]">Создайте подробное описание, чтобы привлечь лучших специалистов</h3>
                </div>
                <a href="/" className="text-[#6A7282] font-medium">Показать руководство</a>
            </header>
            <div className="flex gap-6 pt-8 pb-8 pl-[71.6px] pr-[71.6px]">
                <Form updateData={updateFormData} externalProjectName={externalProjectName}/>
                <RightPanel formData={formData} onLoadExample={handleLoadExample}/>
            </div>

        </div>
    );
}

export default PublicationProject