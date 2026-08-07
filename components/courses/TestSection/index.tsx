'use client';

import { TestFullData, TestResultResponse } from "@/api/dto/course/course.dto";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Progress } from "../../ui/progress";
import { convertAnswersForServer } from "../helper/convertAnswers";
import { courseApi } from "@/api/services/course";
import { Answer } from "../types/test";
import { TestHeader } from "./TestHeader";
import AnswerOptions from "./AnswerOptions";
import { NavigationButtons } from "./NavigationButtons";

export default function TestSection(props: TestFullData) {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const currentQuestionIndex = parseInt(searchParams.get('question') || '0', 10);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [listAnswer, setListAnswer] = useState<Answer[]>([]);
    const [resultTest, setResultTest] = useState<TestResultResponse | null>(null)
    const questions = props.test_question?.questions || [];
    const totalQuestions = questions.length;
    const currentQuestion = questions[currentQuestionIndex];

    const STORAGE_KEY = `test_answers_${props.test?.id || 'default'}`;
    
    // Загрузка ответов из localStorage при инициализации
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setListAnswer(parsed);
                }
            }
        } catch (error) {
            console.error('Ошибка загрузки из localStorage:', error);
        }
    }, [STORAGE_KEY]);

    // Сохранение ответов в localStorage при их изменении
    useEffect(() => {
        try {
            if (listAnswer.length > 0) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(listAnswer));
            }
        } catch (error) {
            console.error('Ошибка сохранения в localStorage:', error);
        }
    }, [listAnswer, STORAGE_KEY]);

    // Восстанавливаем выбранный ответ при загрузке вопроса
    useEffect(() => {
        const savedAnswer = listAnswer.find(item => item.questionId === currentQuestionIndex);
        if (savedAnswer) {
            const answerIndex = currentQuestion?.variants?.findIndex(
                (v: any) => v.id === savedAnswer.answer || v.text === savedAnswer.answer || String(v) === savedAnswer.answer
            );
            if (answerIndex !== undefined && answerIndex !== -1) {
                setSelectedAnswer(answerIndex);
            }
        } else {
            setSelectedAnswer(null);
        }
    }, [currentQuestionIndex, listAnswer, currentQuestion]);

    // Функция для сохранения ответа
    const saveAnswer = (answerIndex?: number) => {
        const indexToSave = answerIndex !== undefined ? answerIndex : selectedAnswer;
        
        if (indexToSave === null || !currentQuestion?.variants?.[indexToSave]) {
            return;
        }

        const selectedVariant = currentQuestion.variants[indexToSave];
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
    };

    // Навигация к конкретному вопросу
    const goToQuestion = (index: number) => {
        if (index >= 0 && index < totalQuestions) {
            if (selectedAnswer !== null) {
                saveAnswer(selectedAnswer);
            }
            
            const params = new URLSearchParams(searchParams.toString());
            params.set('question', index.toString());
            router.push(`?${params.toString()}`, { scroll: false });
        }
    };

    // Обработка следующего/предыдущего вопроса
    const goToNext = () => {
        if (selectedAnswer !== null) {
            saveAnswer(selectedAnswer);
        }
        goToQuestion(currentQuestionIndex + 1);
    };

    const goToPrevious = () => {
        if (selectedAnswer !== null) {
            saveAnswer(selectedAnswer);
        }
        goToQuestion(currentQuestionIndex - 1);
    };

    // Обработка выбора ответа
    const handleAnswerSelect = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
        saveAnswer(answerIndex);
    };

    const handleCheckAnswers = async () => {
        if (totalQuestions > listAnswer.length){
            alert('Вы ответили не на все вопросы')
            return 
        }

        try{
            const result = await courseApi.cheakAnswers(props.test?.id, {answers: convertAnswersForServer(totalQuestions, questions, listAnswer)})
            localStorage.removeItem(STORAGE_KEY);
            setSelectedAnswer(null);
            setResultTest(result)
            if (result !== null){
                router.push(`/courses/test/result?testId=${props.test.id}`);
            }
        }
        catch(err){
            console.error(err)
        }

    }

    // if (resultTest !== null && resultTest){
    //     return (
    //         <div>
    //             {resultTest.lection.title}
                
    //         </div>
    //     )
    // }

    return (
        <section className="flex flex-col bg-white gap-8 p-8 w-full max-w-300 mx-auto">
            <TestHeader title={props.test.lection?.title || props.test?.lection?.title || 'Тест'}/>


            {/* Счетчик вопросов */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[#6E6E73] text-sm font-medium">
                    Ответов {listAnswer.length} из {totalQuestions}
                </h2>
                <Progress 
                    value={(listAnswer.length / totalQuestions) * 100} 
                    indicatorColor="#B7C5F9" 
                    className="bg-[#F2F2F7]"
                />
            </div>

            <AnswerOptions
                currentQuestion={currentQuestion}
                currentQuestionIndex={currentQuestionIndex}
                selectedAnswer={selectedAnswer}
                listAnswer={listAnswer}
                handleAnswerSelect={handleAnswerSelect}
            />
            <NavigationButtons
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={totalQuestions}
                listAnswer={listAnswer}
                goToPrevious={goToPrevious}
                goToNext={goToNext}
                handleCheckAnswers={handleCheckAnswers}
            />
        </section>
    );
}