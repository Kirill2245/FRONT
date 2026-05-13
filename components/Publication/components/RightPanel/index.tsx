import StarIconAI from "@/public/icons/StarIconAI";
import AISection from "./AISection";
interface RightPanelProps {
    formData:{
        projectName: string;
        category: string;
        description:string;
        skills: string[];
    }
}
const RightPanel:React.FC<RightPanelProps> = ({formData}) => {
    return (
        <aside className="w-100 flex flex-col gap-4">
            <AISection 
                name = {!!formData.projectName} 
                category = {!!formData.category} 
                description = {!!formData.description}
                skils = {formData.skills.length >= 3 }
            />
        </aside>
    );
}

export default RightPanel