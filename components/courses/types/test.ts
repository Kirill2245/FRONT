// types/test.ts
import { Lecture, Test } from "@/api/dto/course/course.dto";

export interface Variant {
    id: string;  // "A", "B", "C", "D"
    text: string;
    [key: string]: any;
}

export interface Question {
    id: number;  // Изменено с string на number, чтобы соответствовать данным с сервера
    text: string;
    variants: Variant[];
    [key: string]: any;
}

export interface Answer {
    questionId: number;
    answer: any;
}

export interface TestData {
    questions: Question[];
    trueResult: string[];
}

export interface TestFullData {
    test: Test;
    test_question: TestData;
}

export interface TestVariant {
    id: string;
    text: string;
}

export interface TestQuestion {
    id: number;
    text: string;
    variants: TestVariant[];
}
