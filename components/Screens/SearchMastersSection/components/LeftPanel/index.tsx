import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputWithIcon from "@/components/ui/InputWithIcon";
import StarIconAI from "@/public/icons/StarIconAI";
import { Search } from "lucide-react";
import Filters from "./Filters";

const LeftPanel = () => {
    return (
        <aside className="w-70 border border-[#F2F2F7] flex flex-col p-4 gap-4">
            <InputWithIcon 
                leftIcon={<Search size={16} />}
                placeholder="Search freelancers..."
            />
            <div className="bg-[#F2F4FE] w-full p-[16.8px] border border-[#88D3B04D] rounded-[14px] flex flex-col gap-5">
                <header className="flex flex-col gap-1">
                    <h4 className="flex gap-2 items-center text-[#101828] font-bold text-[14px]"><StarIconAI size={15}/>AI Ассистент</h4>
                    <span className="text-[#4A5565] text-xs">"Найдите мне старшего React разработчика с опытом разработки систем "</span>
                </header>
                <Button variant="outline" className="text-[#101073] border-[#88D3B04D]">Попробуйте поиск AI </Button>
            </div>
            <Filters/>
        </aside>
    );
}

export default LeftPanel