export function formatDateToRussian(date: Date | string | undefined): string {
    if (!date) return 'Дата не указана';
    
    try {
        const d = typeof date === 'string' ? new Date(date) : date;
        
        // Проверяем, что дата валидная
        if (isNaN(d.getTime())) {
            return 'Некорректная дата';
        }
        
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];
        
        const day = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();
        
        return `${day} ${month} ${year}`;
    } catch {
        return 'Некорректная дата';
    }
}