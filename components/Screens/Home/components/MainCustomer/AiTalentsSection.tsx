import MasterCard from "./MasterCard";

const AiTalentsSection = () => {

    const masters = [
        {
            name:"Сара Чен",
            specialization:"Старший UI/UX дизайнер",
            aiMatch:96,
            rating:4.9,
            location:"Сан-Франциско, США",
            price:9500,
            variantPay:"Час",
        },
        {
            name:"Сара Чен",
            specialization:"Старший UI/UX дизайнер",
            aiMatch:36,
            rating:4.9,
            location:"Сан-Франциско, США",
            price:9500,
            variantPay:"Час",
        },
        {
            name:"Сара Чен",
            specialization:"Старший UI/UX дизайнер",
            aiMatch:96,
            rating:4.9,
            location:"Сан-Франциско, США",
            price:9500,
            variantPay:"Час",
        },
                {
            name:"Сара Чен",
            specialization:"Старший UI/UX дизайнер",
            aiMatch:36,
            rating:4.9,
            location:"Сан-Франциско, США",
            price:9500,
            variantPay:"Час",
        },
        {
            name:"Сара Чен",
            specialization:"Старший UI/UX дизайнер",
            aiMatch:96,
            rating:4.9,
            location:"Сан-Франциско, США",
            price:9500,
            variantPay:"Час",
        },

    ]
    return (
        <section className="flex flex-col gap-5 w-full">
            <header className="flex justify-between w-full items-center">
                <div className="flex flex-col gap-1 ">
                    <h2 className="text-[#030213] text-[20px] font-semibold">Таланты, рекомендованные AI</h2>
                    <span className="text-muted-foreground">Совпадения на основе потребностей проектов и предпочтений</span>
                </div>
                <a 
                    href="" 
                    className="text-[#101073] text-[14px] hover:text-[#2c2cc2] transition-colors duration-200"
                >
                    Все совпадения →
                </a>
            </header>
            <div className="w-full overflow-x-auto overflow-y-hidden">
            <ul className="flex gap-5 pb-4" style={{ width: 'max-content' }}>
                {masters.map((master, index) => (
                <li key={index} className="shrink-0">
                    <MasterCard {...master} />
                </li>
                ))}
            </ul>
            </div>
        </section>
    );
};

export default AiTalentsSection;