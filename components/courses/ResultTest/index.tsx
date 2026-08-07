import { TestResultResponse } from "@/api/dto/course/course.dto";
import ResultHeader from "./ResultHeader";
import Sertificate from "./Sertificate";
import ControllerButton from "./ControllerButton";
interface ResultTestProps{
    result:TestResultResponse;
    testId:string | null;
}

export default function ResultTest({result, testId}: ResultTestProps){
    return (
        <section className="flex flex-col items-center justify-center bg-[#ebebf5] w-full h-auto gap-7.5 p-12">
            <ResultHeader 
                trueAnswer={result.countTrueAnswers} 
                falseAnswer={result.countFalseAnswers} 
                percentageCorrectAnswers={result.percentageCorrectAnswers} 
                isSuccessfully = {result.isSuccessfully}
                testId = {testId} 
            />
            {result.isSuccessfully && (
                <div className="flex flex-col items-center justify-center w-full h-auto gap-7.5">
                    <Sertificate 
                        percentageCorrectAnswers={result.percentageCorrectAnswers} 
                        updatedAt={result.updatedAt} 
                        user_name={result.user.firstName} 
                        title={result.lection.title}
                    />
                    <ControllerButton/>
                </div>
                
            )}
            
        </section>
    );
}