import StarIconAI from "@/public/icons/StarIconAI";
import AISection from "./AISection";
import HelpSection from "./HelpSection";
import Examples from "./Examples";

interface FileWithPreview extends File {
    preview?: string
    id: string
}

interface RightPanelProps {
    formData: {
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
    }
    onLoadExample?: (title: string) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ formData, onLoadExample }) => {
    // Добавляем проверки на существование полей с помощью optional chaining
    const budget = 
        formData?.budgetType?.length > 1 &&
        (formData?.maxBudget ?? 0) > 0 &&
        formData?.timeline?.length > 1 &&
        formData?.startDate?.length > 1;

    return (
        <aside className="w-100 flex flex-col gap-4">
                <AISection 
                    name={!!formData?.projectName} 
                    category={!!formData?.category} 
                    description={!!formData?.description && formData.description.trim().length > 25}
                    skils={(formData?.skills?.length ?? 0) >= 3}
                    budget={budget}
                    attachments={formData.attachments.length > 0}
                />
                <Examples onLoadExample={onLoadExample}/>
                <HelpSection/>
        </aside>
    );
}

export default RightPanel;