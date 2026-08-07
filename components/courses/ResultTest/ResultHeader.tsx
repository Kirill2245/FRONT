import { Progress } from "@/components/ui/progress";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
interface ResultHeaderProps{
    trueAnswer: number;
    falseAnswer: number;
    percentageCorrectAnswers: number;
    isSuccessfully: boolean;
    testId: string | null
}

export default function ResultHeader({trueAnswer, falseAnswer, percentageCorrectAnswers, isSuccessfully, testId}:ResultHeaderProps) {
    const router = useRouter();
    
    return (
        <header className="flex flex-col items-center justify-center w-full max-w-225 bg-white p-12.5  rounded-[14px] border-[0.8px] border-[#F2F2F7] gap-4">
            <div className="flex flex-col justify-center items-center gap-6">
                <span className="text-6xl">{isSuccessfully ? '🎉':'😢'}</span>
                <h2 className="text-[32px] font-semibold text-[#1D1D1F]">{isSuccessfully ? 'Поздравляем! Вы сдали тест!':'К сожалению вы не сдали тест :('}</h2>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <span className="text-[#6E6E73] text-xl">Ваш результат {trueAnswer} из {trueAnswer + falseAnswer} правильных ответов {`(${percentageCorrectAnswers} %)`}</span>
                <Progress 
                        value={percentageCorrectAnswers} 
                        indicatorColor="#B7C5F9" 
                        className="bg-[#F2F2F7]"
                />
            </div>
            <span className="text-[#6E6E73] text-[14px]">Проходной порог: 75 %</span>
            {!isSuccessfully && (<div className="flex w-full gap-4">
                <Button variant={"outline"} className="flex-1" onClick={() => {router.push(`/courses/test?testID=${testId}`)}}> Пересдать тест</Button>
                <Button variant={"outline"} className="flex-1" onClick={() => {router.push('/')}}> На главную</Button>
            </div>)}
        </header>
    );
}