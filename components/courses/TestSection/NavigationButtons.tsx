// components/Test/NavigationButtons.tsx
'use client';

import { Button } from "../../ui/button";
import { Answer } from "../types/test";

// types/test.ts (добавить новые типы)

interface NavigationButtonsProps {
    currentQuestionIndex: number;
    totalQuestions: number;
    listAnswer: Answer[];
    goToPrevious: () => void;
    goToNext: () => void;
    handleCheckAnswers: () => void;
}
export const NavigationButtons = ({ 
    currentQuestionIndex,
    totalQuestions,
    listAnswer,
    goToPrevious,
    goToNext,
    handleCheckAnswers
}: NavigationButtonsProps) => {
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
    
    return (
        <div className="flex justify-between items-center mt-4">
            <Button
                onClick={goToPrevious}
                disabled={currentQuestionIndex === 0}
                className={`px-6 py-2 rounded-lg ${
                    currentQuestionIndex === 0
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[#B7C5F9] hover:bg-[#A0B3E8] text-[#1D1D1F]'
                }`}
            >
                Предыдущий
            </Button>
            
            <span className="text-sm text-[#6E6E73]">
                {currentQuestionIndex + 1} / {totalQuestions}
            </span>

            <Button
                onClick={isLastQuestion ? handleCheckAnswers : goToNext}
                disabled={isLastQuestion && totalQuestions > listAnswer.length}
                className="bg-[#B7C5F9] hover:bg-[#A0B3E8] text-[#1D1D1F] px-6 py-2 rounded-lg"
            >
                {isLastQuestion ? 'Завершить' : 'Следующий'}
            </Button>
        </div>
    );
};