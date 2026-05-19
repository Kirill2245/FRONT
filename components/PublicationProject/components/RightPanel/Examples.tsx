// Examples.tsx
import { Button } from "@/components/ui/button";

interface ExamplesProps {
    onLoadExample?: (title: string) => void;
}

const Examples = ({ onLoadExample }: ExamplesProps) => {
    const examplesData = [
        "Разработка React приложения с ИИ",
        "Редизайн мобильного интерфейса",
        "Интеграция системы платежей",
        "Создание Telegram бота",
        "Разработка интернет-магазина на Next.js",
        "Верстка адаптивного лендинга",
        "Оптимизация скорости загрузки сайта",
        "Разработка iOS приложения для доставки",
        "Android приложение с картами и навигацией",
        "Кроссплатформенное приложение на Flutter",
        "Мобильный клиент для интернет-магазина",
        "Приложение для отслеживания привычек",
        "Мессенджер с шифрованием",
        "Логотип для IT-компании",
        "Дизайн мобильного приложения фитнес-трекера",
        "Брендбук с айдентикой и гайдлайнами",
        "UI/UX дизайн интернет-магазина",
        "Анимация интерфейса для веб-приложения",
        "Дизайн презентации для стартапа",
        "SEO-продвижение интернет-магазина",
        "Настройка контекстной рекламы (Яндекс.Директ, Google Ads)",
        "Ведение Instagram/TG канала",
        "Создание стратегии контент-маркетинга",
        "Настройка email-рассылок",
        "Анализ конкурентов и ключевых слов",
        "Разработка CRM системы для автосервиса",
        "Создание телеграм бота для онлайн-школы",
        "Верстка лендинга для стоматологической клиники",
        "Интеграция оплаты через СБП в приложение",
        "Редизайн и улучшение конверсии интернет-магазина",
        "Автоматизация документооборота в компании"
    ];
    const getRandomExamples = [...examplesData].map(a => ({a, r: Math.random()})).sort((a,b) => a.r - b.r).map(a => a.a).slice(0, 3); 
    return (
        <div className="flex flex-col border border-[#F2F2F7] p-5.5 rounded-[14px] gap-3 bg-white">
            <h3 className="text-[#0A0A0A] font-semibold">Примеры брифов</h3>
            <ul className="flex flex-col gap-2.5">
                {getRandomExamples.map((item, index) => (
                    <li key={index} className="flex justify-between bg-[#FBFBFD] p-3 rounded-[10px] items-center">
                        <span className="text-[13px] text-[#101828] font-medium">{item}</span>
                        <Button 
                            className="text-xs p-0 text-[#101073]" 
                            variant="ghost" 
                            size="ower_small"
                            onClick={() => onLoadExample?.(item)}
                        >
                            Загрузить
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Examples;