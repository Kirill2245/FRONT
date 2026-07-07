import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Star } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox";
const Filters = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [range, setRange] = useState<[number, number]>([0, 5000])
    const [minRating, setMinRating] = useState<1 | 2 | 3 | 4 | 5 | number>(1)
    const ratingData = [
        5,
        4,
        3,
        2,
        1
    ]
    return (
        <div className="flex flex-col gap-4 ">
            <h4 className="text-[#6A7282] text-[14px] font-bold">ФИЛЬТРЫ</h4>
            <div className="flex justify-between p-3.25 items-center bg-[#FBFBFD] rounded-[10px] border border-[#F2F2F7]}">
                <span className="text-[#101828] text-[14px]">Доступно сечас</span>
                <Switch className="data-[state=checked]:bg-[#B7C5F9]" checked = {isChecked}  onCheckedChange={() => setIsChecked(!isChecked)}/>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-[14px] text-[#364153] flex justify-between">Почасовая ставка <span className="text-[#6A7282] text-[14px] font-bold">{range[0]}₽ - {range[1]}₽</span></h3>
                <Slider
                    value={range}
                    onValueChange={(value) => setRange(value as [number, number])}
                    min={0}
                    max={10000}
                    step={50}
                    className="w-full"
                    color="#F5D76E"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-[14px] text-[#364153]">Минимальный рейтинг</h3>
                <ul className="flex flex-col gap-2">
                {ratingData.map((item, index) => (
                    <li key={index} className="flex gap-1">
                        <Checkbox 
                            className="data-[state=checked]:bg-yellow-400
                          data-[state=checked]:text-black 
                          data-[state=checked]:border-[#F5D76E]"
                            checked= {item === minRating}
                            onCheckedChange={() => {
                                if (![1, 2, 3, 4, 5].includes(item)) {
                                    return
                                }
                                setMinRating(item)
                            }}
                          >
                            
                          </Checkbox>
                        {Array.from({ length: item }, (_, i) => (
                            <Star color="#F5D76E" fill="#F5D76E" size={14}></Star>
                        ))}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}

export default Filters