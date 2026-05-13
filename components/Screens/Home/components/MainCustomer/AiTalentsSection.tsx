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
        <section className="flex flex-col gap-5 w-full min-w-0 max-w-full overflow-hidden" >
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
            <div className="grid grid-cols-1">
                <div className="overflow-x-auto">
                <div className="flex gap-5 pb-4 px-4">
                    {masters.map((master, index) => (
                    <div key={index} className="shrink-0 w-[296px]">
                        <MasterCard {...master} />
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};

export default AiTalentsSection;