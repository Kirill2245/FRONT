import CornerUpRightIcon from "@/public/icons/CornerUpRightIcon";

const Recommendations = () => {
    const rec = ["Отвечайте на запросы в течение 2 часов, чтобы повысить рейтинг", "Добавьте навыки, связанные с AI и машинным обучением", "Пройдите верификацию, чтобы разблокировать премиум-проекты"]
    return (
        <div className="w-full h-auto border-[0.8] border-[#00000014] flex flex-col p-5 rounded-[14px] gap-3 bg-[#F2F4FE]">
            <header className="flex gap-2 items-center">
                <CornerUpRightIcon color="#F5D76E"/>
                <h2 className="text-[#030213] font-semibold">Советы</h2>
            </header>
            <ul className="list-disc pl-5 gap-2">
                {rec.map((item, index) => (
                    <li key={index} className="text-[#717182]">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recommendations