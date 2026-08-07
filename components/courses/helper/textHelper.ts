    // Функция для безопасного получения текста вопроса
export const getQuestionText = (question: any) => {
        if (!question) return '';
        
        if (typeof question.text === 'object' && question.text !== null) {
            return question.text.text || question.text.id || 'Вопрос';
        }
        
        if (typeof question.text === 'string') {
            return question.text;
        }
        
        if (question.questionText) {
            return typeof question.questionText === 'string' 
                ? question.questionText 
                : question.questionText.text || 'Вопрос';
        }
        
        return 'Вопрос';
    };

    // Функция для безопасного получения текста варианта ответа
export const getOptionText = (option: any) => {
        if (!option) return '';
        
        if (typeof option === 'string') return option;
        if (typeof option === 'object' && option.text) {
            return typeof option.text === 'string' ? option.text : option.text.text || '';
        }
        return String(option);
    };