'use client'

import InputWithIcon from "@/components/ui/InputWithIcon"
import { Slider } from "@/components/ui/slider"
import { RussianRuble } from "lucide-react"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"

interface RangeBudgetProps {
    onRangeChange?: (min: number, max: number) => void;
    initialMin?: number;
    initialMax?: number;
}

const RangeBudget = ({ onRangeChange, initialMin = 0, initialMax = 100000 }: RangeBudgetProps) => {
    const [minBudget, setMinBudget] = useState(initialMin)
    const [maxBudget, setMaxBudget] = useState(initialMax)
    
    const data = ["Минимальный бюджет", "Максимальный бюджет"]
    const minLimit = 0
    const maxLimit = 1000000
    
    const isFirstRender = useRef(true);
    const prevRangeRef = useRef({ min: initialMin, max: initialMax });

    // Стабилизируем onRangeChange
    const stableOnRangeChange = useCallback((min: number, max: number) => {
        onRangeChange?.(min, max);
    }, [onRangeChange]);

    // Мемоизируем значения для слайдера
    const sliderValues = useMemo(() => [minBudget, maxBudget], [minBudget, maxBudget]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        
        // Проверяем, действительно ли изменились значения
        if (prevRangeRef.current.min !== minBudget || prevRangeRef.current.max !== maxBudget) {
            prevRangeRef.current = { min: minBudget, max: maxBudget };
            stableOnRangeChange(minBudget, maxBudget);
        }
    }, [minBudget, maxBudget, stableOnRangeChange]);

    const handleSliderChange = useCallback((newValues: number[]) => {
        const [newMin, newMax] = newValues;
        if (newMin !== minBudget) setMinBudget(newMin);
        if (newMax !== maxBudget) setMaxBudget(newMax);
    }, [minBudget, maxBudget]);

    const handleMinChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\s/g, '');
        let newMin = parseInt(rawValue) || 0;
        newMin = Math.max(minLimit, Math.min(newMin, maxBudget - 1000));
        if (newMin !== minBudget) {
            setMinBudget(newMin);
        }
    }, [maxBudget, minBudget]);

    const handleMaxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\s/g, '');
        let newMax = parseInt(rawValue) || 0;
        newMax = Math.min(maxLimit, Math.max(newMax, minBudget + 1000));
        if (newMax !== maxBudget) {
            setMaxBudget(newMax);
        }
    }, [minBudget, maxBudget]);

    const formatValue = useCallback((value: number) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }, []);

    const formattedMin = useMemo(() => formatValue(minBudget), [minBudget, formatValue]);
    const formattedMax = useMemo(() => formatValue(maxBudget), [maxBudget, formatValue]);

    return (
        <div className="flex gap-6 flex-1 flex-col">
            <div className="flex gap-4 flex-1">
                {data.map((item, index) => (
                    <div key={item} className="flex flex-col gap-2 flex-1">
                        <h3 className="text-[#101828] text-[14px] font-medium">{item}</h3>
                        <InputWithIcon 
                            rightIcon={<RussianRuble size={16} />}
                            value={index === 0 ? formattedMin : formattedMax}
                            onChange={index === 0 ? handleMinChange : handleMaxChange}
                            type="text"
                            inputMode="numeric"
                        />
                    </div>
                ))}
            </div>
            <Slider
                min={minLimit}
                max={maxLimit}
                step={1000}
                value={sliderValues}
                onValueChange={handleSliderChange}
                className="[&_[data-slot=slider-range]]:bg-[#101073] [&_[data-slot=slider-thumb]]:border-[#101073] [&_[data-slot=slider-thumb]]:ring-[#101073]/50"
            />
        </div>
    );
}

export default RangeBudget