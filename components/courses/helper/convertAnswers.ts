import { TestQuestion } from "@/api/dto/course/course.dto";

// Интерфейсы для типизации
interface Variant {
    id?: string;
    text?: string;
    [key: string]: any;
}

interface Question {
    id?: string;
    text?: string | { text?: string; id?: string };
    variants?: Variant[];
    [key: string]: any;
}

interface Answer {
    questionId: number;
    answer: any;
}

/**
 * Преобразует сохраненные ответы в массив букв (A, B, C, ...)
 * @param totalQuestions - Общее количество вопросов
 * @param questions - Массив вопросов
 * @param listAnswer - Массив сохраненных ответов
 * @returns Массив строк с буквами ответов в правильном порядке
 */
export const convertAnswersForServer = (
    totalQuestions: number,
    questions: TestQuestion[],
    listAnswer: Answer[]
): string[] => {
    const serverAnswers: string[] = [];
    
    // Проходим по всем вопросам по порядку
    for (let i = 0; i < totalQuestions; i++) {
        const question = questions[i];
        const savedAnswer = listAnswer.find(item => item.questionId === i);
        
        if (savedAnswer && question?.variants) {
            const answerIndex = question.variants.findIndex(
                (v: Variant) => 
                    v.id === savedAnswer.answer || 
                    v.text === savedAnswer.answer || 
                    String(v) === savedAnswer.answer
            );
            
            if (answerIndex !== -1) {
                const letter = String.fromCharCode(65 + answerIndex); // 'A', 'B', 'C', ...
                serverAnswers.push(letter);
            }
        }
    }
    console.log('=== Преобразованные ответы ===');
    console.log('Исходные ответы:', listAnswer);
    console.log('Результат:', serverAnswers);
    console.log('Количество отвеченных:', listAnswer.length);
    
    return serverAnswers;
};