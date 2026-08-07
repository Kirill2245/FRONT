export interface Lecture {
  id: string;
  lectionsUrl: string;
  title: string;
  description: string;
  categoryId: string;
  testId: string;
}


export interface CategoryWithLectures {
  id: string;
  name: string;
  slug: string;
  lectios: Lecture[];  
}

export interface Test{
    id: string;
    testUrl: string;
    lection:Lecture;
}
export interface TestVariant {
    id: string;        // "A", "B", "C", "D"
    text: string;      // Текст варианта ответа
}

// Вопрос теста
export interface TestQuestion {
    id: number;               // Номер вопроса
    text: string;             // Текст вопроса
    variants: TestVariant[];  // Варианты ответов
}

// Полная структура теста из JSON
export interface TestData {
    questions: TestQuestion[];
    trueResult: string[];     // Массив правильных ответов (id вариантов)
}

export interface TestFullData{
    test:Test;
    test_question:TestData
}

// types/test-results.ts

export interface TestResultResponse {
    countTrueAnswers: number;
    countFalseAnswers: number;
    isSuccessfully: boolean;
    percentageCorrectAnswers: number;
    updatedAt: Date | string;
    user: {
        firstName: string;
    };
    lection: {
        title: string;
    };
}