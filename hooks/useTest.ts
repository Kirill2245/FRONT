// hooks/useTest.ts
import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Answer, Question } from '@/components/courses/types/test';
import { findAnswerIndex } from '@/components/courses/helper/testHelpers';


interface UseTestProps {
    questions: Question[];
    totalQuestions: number;
    storageKey: string;
}

export const useTest = ({ questions, totalQuestions, storageKey }: UseTestProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const currentQuestionIndex = parseInt(searchParams.get('question') || '0', 10);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [listAnswer, setListAnswer] = useState<Answer[]>([]);

    const currentQuestion = questions[currentQuestionIndex];

    // Восстанавливаем выбранный ответ при загрузке вопроса
    useEffect(() => {
        const savedAnswer = listAnswer.find(item => item.questionId === currentQuestionIndex);
        if (savedAnswer && currentQuestion) {
            const answerIndex = findAnswerIndex(currentQuestion, savedAnswer);
            if (answerIndex !== -1) {
                setSelectedAnswer(answerIndex);
            }
        } else {
            setSelectedAnswer(null);
        }
    }, [currentQuestionIndex, listAnswer, currentQuestion]);

    // Сохранение ответа
    const saveAnswer = useCallback((answerIndex: number) => {
        if (!currentQuestion?.variants?.[answerIndex]) return;

        const selectedVariant = currentQuestion.variants[answerIndex];
        const newAnswer: Answer = {
            questionId: currentQuestionIndex,
            answer: selectedVariant.id || selectedVariant.text || String(selectedVariant)
        };

        setListAnswer(prevList => {
            const existingIndex = prevList.findIndex(
                item => item.questionId === currentQuestionIndex
            );

            let updatedList: Answer[];
            if (existingIndex !== -1) {
                updatedList = [...prevList];
                updatedList[existingIndex] = newAnswer;
            } else {
                updatedList = [...prevList, newAnswer];
            }
            
            return updatedList;
        });
    }, [currentQuestion, currentQuestionIndex]);

    // Очистка всех ответов
    const clearAllAnswers = useCallback(() => {
        if (confirm('Вы уверены, что хотите очистить все ответы?')) {
            setListAnswer([]);
            localStorage.removeItem(storageKey);
            setSelectedAnswer(null);
        }
    }, [storageKey]);

    // Навигация
    const goToQuestion = useCallback((index: number) => {
        if (index >= 0 && index < totalQuestions) {
            if (selectedAnswer !== null) {
                saveAnswer(selectedAnswer);
            }
            
            const params = new URLSearchParams(searchParams.toString());
            params.set('question', index.toString());
            router.push(`?${params.toString()}`, { scroll: false });
        }
    }, [selectedAnswer, saveAnswer, totalQuestions, router, searchParams]);

    const goToNext = useCallback(() => {
        if (selectedAnswer !== null) {
            saveAnswer(selectedAnswer);
        }
        goToQuestion(currentQuestionIndex + 1);
    }, [selectedAnswer, saveAnswer, goToQuestion, currentQuestionIndex]);

    const goToPrevious = useCallback(() => {
        if (selectedAnswer !== null) {
            saveAnswer(selectedAnswer);
        }
        goToQuestion(currentQuestionIndex - 1);
    }, [selectedAnswer, saveAnswer, goToQuestion, currentQuestionIndex]);

    const handleAnswerSelect = useCallback((answerIndex: number) => {
        setSelectedAnswer(answerIndex);
        saveAnswer(answerIndex);
    }, [saveAnswer]);

    return {
        currentQuestionIndex,
        selectedAnswer,
        listAnswer,
        currentQuestion,
        setListAnswer,
        saveAnswer,
        clearAllAnswers,
        goToQuestion,
        goToNext,
        goToPrevious,
        handleAnswerSelect,
    };
};