import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import StarIconAI from "@/public/icons/StarIconAI";

const AI = () => {
    return (
        <div className="w-full h-auto rounded-[14px] flex flex-col p-5 gap-3" style={{
                background: ' linear-gradient(135deg, rgba(225, 243, 255, 0.64) 32.21%, rgba(110, 137, 241, 0.53) 100%)'
            }}>
            <header className="flex gap-2 items-center text-[#030213] font-semibold">
                <StarIconAI size={16} color="#000000"/>
                <h2>AI уровень профиля</h2>
                <span className="ml-auto">85%</span>
            </header>
            <div className="w-full flex flex-col gap-[3.8px]">
                <ProgressBar percent={85}  useGradient={false} fillColor="#101073"/>
                <span className="text-[14px] text-[#717182] leading-[22.75px]">Ваш профиль показывает хорошие результаты! Добавьте еще 3 позиции в портфолио, чтобы достичь 95%.</span>
               
            </div>
        </div>
    );
}

export default AI