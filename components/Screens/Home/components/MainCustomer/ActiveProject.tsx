import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { formatPriceNumber } from "@/helper/formatPriceNumber";

const ActiveProject= () => {
    const data = [
        {
            lable:"Редизайн сайта",
            status:"В работе",
            master:"Сара Чен",
            progress:65,
            date:"25 мар. 2026",
            price:480000
        },
                {
            lable:"Редизайн сайта",
            status:"В работе",
            master:"Сара Чен",
            progress:65,
            date:"25 мар. 2026",
            price:480000
        },
                {
            lable:"Редизайн сайта",
            status:"В работе",
            master:"Сара Чен",
            progress:65,
            date:"25 мар. 2026",
            price:480000
        },
                        {
            lable:"Редизайн сайта",
            status:"В работе",
            master:"Сара Чен",
            progress:65,
            date:"25 мар. 2026",
            price:480000
        },
                        {
            lable:"Редизайн сайта",
            status:"В работе",
            master:"Сара Чен",
            progress:65,
            date:"25 мар. 2026",
            price:480000
        },

    ]
     const displayedData = data.slice(0, 3);
    return (
        <article className="flex flex-col flex-1 bg-white p-6.25 rounded-[14px] gap-5">
            <h2 className="text-[#030213] font-semibold text-[20px]">Активные проекты</h2>
            <ul className="flex flex-col gap-4 owerlow-y-hidden">
                {displayedData.map((item,index) => (
                    <li className="flex flex-col gap-3 border-b-[0.8px] border-[#F2F2F7] pb-4" key={index}>
                        <header className="flex justify-between">
                            <div className="flex flex-col">
                                <h4 className="text-[#030213] font-semibold text-[14px]">{item.lable}</h4>
                                <span className="text-[#717182] text-xs">c {item.master}</span>
                            </div>
                            <div className=" flex w-[72.46px] h-6.5 bg-[#F2F4FE] rounded-[10px] text-xs items-center justify-center ">
                                <span className="text-[#101073]">{item.status}</span>
                            </div>
                        </header>
                        <div className="w-full gap-2 flex flex-col">
                            <div className="w-full gap-[6.2px] flex flex-col">
                                <header className="w-full flex justify-between">
                                    <h5 className="text-[#717182] text-xs">Прогресс</h5>
                                    <span className="text-[#030213] font-semibold text-xs">{item.progress}%</span>
                                </header>
                                <ProgressBar percent={item.progress} />
                            </div>
                            <div className="flex w-full justify-between">
                                <span className="text-[#717182] text-xs">Срок {item.date}</span>
                                <span className="text-[#030213] text-xs font-semibold">{formatPriceNumber(item.price)}₽</span>
                            </div>
                        </div>
                    </li>
                ))
                }
            </ul>
            {data.length >= 3 && <Button className="bg-white border-2 border-[#F2F2F7]">
                Все проекты
            </Button>}

        </article>
    );
}

export default ActiveProject