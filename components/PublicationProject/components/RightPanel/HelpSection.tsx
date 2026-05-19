import { HelpCircle } from "lucide-react";

const HelpSection = () => {
    const helpers = ["Как написать хороший бриф?", "Советы по установке бюджета", "Как выбрать исполнителя?"]
    return (
        <div className="flex flex-col border border-[#F2F2F7] p-5.5 rounded-[14px] gap-3 bg-white">
            <header className="flex items-center gap-2">
                <HelpCircle size={18} color="#99A1AF"/>
                <h3 className="text-[#0A0A0A] font-semibold">Помощь</h3>
            </header>
            <ul className="flex flex-col gap-2">
                {helpers.map((item,index) => (
                    <li key={index}><a href="/" className="text-[#4A5565] text-[13px]"> {item}</a></li>
                ))}
            </ul>

            <div className="h-[36.79999923706055px] border-t border-[#F2F2F7] pt-[14.6px]">
                <a href="/" className="text-[#101073] text-[13px] font-medium ">Связаться с поддержкой →</a>
            </div>
        </div>
    );
}

export default HelpSection;