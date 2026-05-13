import { useState } from "react";
import Form from "./components/Form";
import RightPanel from "./components/RightPanel";
interface FormData {
    projectName: string;
    category: string;
    description:string;
    skills: string[];
}
const Publication = () => {
    const [formData, setFormData] = useState<FormData>({
            projectName: "",
            category: "",
            description:"",
            skills:[]
        });

    const updateFormData = (data:FormData) => {
        setFormData(data)
    }
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
                <Form updateData={updateFormData}/>
                <RightPanel formData={formData}/>
            </div>
        </div>
    );
}

export default Publication