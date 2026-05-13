import { title } from "process";

const Notificatons = () => {
    const notifications_data = [
        {
            title:"Получено предложение",
            body:"Новое предложение для проекта Маркетинговая кампания",
            time:"30 мин. назад"
        },
        {
            title:"Контракт подписан",
            body:"Новое предложение для проекта Маркетинговая кампания",
            time:"2 часа назад"
        },
        {
            title:"Напоминание об оплате",
            body:"Предстоящий платеж 240,000₽ на 18 марта",
            time:"30 мин. назад"
        },
        {
            title:"Получено предложение",
            body:"Новое предложение для проекта Маркетинговая кампания",
            time:"30 мин. назад"
        },        
    ]

    const visibleNotifications = notifications_data.slice(0, 3)
    return(
        <div className="w-full h-auto border-[0.8] border-[#F2F2F7] flex flex-col p-5 rounded-[14px] gap-4">
            <h2 className="text-[#030213] font-semibold">Уведомления</h2>
            <ul className="flex flex-col gap-4">
                {
                    visibleNotifications.map((item, index) => (
                        <li key={index} className="flex flex-col gap-1 border-b border-[#F2F2F7]">
                            <h3 className="text-[#030213]  font-semibold text-[14px]">{item.title}</h3>
                            <p className=" text-[#717182] text-xs">{item.body}</p>
                            <span className=" text-[#717182] text-xs">{item.time}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Notificatons