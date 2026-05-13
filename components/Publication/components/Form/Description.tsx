import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import StarIconAI from "@/public/icons/StarIconAI";
import Box from "./box";
interface DescriptionProps {
    formData: {
        projectName: string;
        category: string;
        description:string;
    };
    updateFormData: (key: string, value: string) => void;
}
const Description:React.FC<DescriptionProps> = ({formData,updateFormData}) => {
    return (
        <Box header="Описание проекта">
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="flex flex-col gap-2 text-[#101828] text-[14px] font-medium">
                    Подробное описание
                    <Textarea
                        placeholder="Описание проекта..."
                        className="min-h-[141.60000610351562px]"
                        onChange={(e) => updateFormData("description", e.target.value)}
                        value={formData.description}
                    />
                </label>
                <div className="flex items-center gap-3">
                    <Button className="bg-[#B7C5F9]">
                        <StarIconAI color="#FFFFFF"/>
                        <span className="text-white">Улучшить с помощью ИИ</span>
                    </Button>
                    <a href="/" className="text-[#101073] text-[14px] font-medium">
                        Посмотреть пример
                    </a>
                </div>
            </div>
        </Box>
    );
}

export default Description