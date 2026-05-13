import { useState } from "react";
import MainInfo from "./MainInfo";
import { useEffect } from "react";
import Description from "./Description";
import SkillsSection from "./SkillsSection";



interface FormData {
    projectName: string;
    category: string;
    description:string;
    skills: string[];
}
interface FormProps{
    updateData:(data:FormData) => void
}
const Form:React.FC<FormProps> = ({updateData}) => {
    const [formData, setFormData] = useState<FormData>({
        projectName: "",
        category: "",
        description:"",
        skills: []
    });

    useEffect(() => {
        updateData(formData)
    },[updateData, formData])

    const updateFormData = (key: string, value: string) => { // ← просто string
        setFormData(prev => ({ ...prev, [key]: value }));
    };
     const updateSkills = (skills: string[]) => {
        setFormData(prev => ({ ...prev, skills }));
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
            />
        </form>
    );
    }

export default Form;