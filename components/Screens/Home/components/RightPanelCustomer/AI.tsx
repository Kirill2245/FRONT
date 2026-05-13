import { Button } from "@/components/ui/button";
import StarIconAI from "@/public/icons/StarIconAI";

const AI = () => {
    return (
        <div className="w-full h-auto rounded-[14px] flex flex-col p-5 gap-3" style={{
                background: ' linear-gradient(135deg, rgba(225, 243, 255, 0.64) 32.21%, rgba(110, 137, 241, 0.53) 100%)'
            }}>
            <header className="flex gap-2 items-center text-[#030213] font-semibold">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#B7C5F9]">
                    <StarIconAI size={16}/>
                </div>
                <h2>AI-ассистент</h2>
            </header>
            <div className="w-full flex flex-col gap-[3.8px]">
                <span className="text-[14px] text-[#717182] leading-[22.75px]">На основе вашей недавней активности мы нашли 12 новых фрилансеров, которые идеально соответствуют потребностям ваших проектов.</span>
                <Button><span  className="text-[14px] text-[#101073] font-semibold">Смотреть AI-совпадения</span></Button>
            </div>
        </div>
    );
}

export default AI