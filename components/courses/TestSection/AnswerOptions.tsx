import { getOptionText, getQuestionText } from "../helper/textHelper";
import { Question, Answer } from "../types/test";

interface AnswerOptionsProps {
    currentQuestion: Question | undefined;
    currentQuestionIndex: number;
    selectedAnswer: number | null;
    listAnswer: Answer[];
    handleAnswerSelect: (answerIndex: number) => void;
}

export default function AnswerOptions({ 
    currentQuestion, 
    currentQuestionIndex, 
    selectedAnswer, 
    listAnswer, 
    handleAnswerSelect 
}: AnswerOptionsProps) {
    return (
        <div className="bg-gray-50 rounded-lg p-6 min-h-[300px]">
            <div>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-4">
                    {getQuestionText(currentQuestion)}
                </h3>
                
                <div className="space-y-3">
                    {currentQuestion?.variants?.map((option: any, index: number) => {
                        const isSelected = selectedAnswer === index;
                        const isAnswered = listAnswer.some(
                            item => item.questionId === currentQuestionIndex && 
                            (item.answer === option.id || item.answer === option.text || item.answer === String(option))
                        );
                        
                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                                    isSelected || isAnswered
                                        ? 'border-[#B7C5F9] bg-[#F5F7FF]'
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                <span className="text-[#1D1D1F]">
                                    {String.fromCharCode(65 + index)}. {getOptionText(option)}
                                </span>
                                {isAnswered && (
                                    <span className="ml-2 text-green-500 text-sm">✓</span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>      
        </div>
    );
}