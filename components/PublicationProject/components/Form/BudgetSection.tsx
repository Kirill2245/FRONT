'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import Box from './box';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import RangeBudget from './RangeBudget';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface BudgetData {
    budgetType: 'fixed' | 'hourly';
    minBudget: number;
    maxBudget: number;
    timeline: string;
    startDate: string;
}

interface BudgetSectionProps {
    onDataChange?: (data: BudgetData) => void;
    initialData?: Partial<BudgetData>;
}

const BudgetSection = ({ onDataChange, initialData }: BudgetSectionProps) => {
    const [isLeftActive, setIsLeftActive] = useState(initialData?.budgetType === 'fixed');
    const [budgetRange, setBudgetRange] = useState({ 
        min: initialData?.minBudget ?? 0, 
        max: initialData?.maxBudget ?? 100000 
    });
    const [timeline, setTimeline] = useState(initialData?.timeline ?? "");
    const [startDate, setStartDate] = useState(initialData?.startDate ?? "Как можно скорее");
    
    const isFirstRender = useRef(true);
    const prevDataRef = useRef<BudgetData | null>(null);
    
    const selectData = [
        { name: "До 2 недель", value: "up-to-2-weeks" },
        { name: "2-4 недели", value: "2-4-weeks" },
        { name: "1-3 месяца", value: "1-3-months" },
        { name: "Более 3 месяцев", value: "more-than-3-months" },
    ];
    
    const dateBtn = ["Как можно скорее", "Через неделю", "Через месяц"];

    // Используем useMemo чтобы бюджетные данные не создавались заново при каждом рендере
    const budgetData = useMemo<BudgetData>(() => ({
        budgetType: isLeftActive ? 'fixed' : 'hourly',
        minBudget: budgetRange.min,
        maxBudget: budgetRange.max,
        timeline: timeline,
        startDate: startDate,
    }), [isLeftActive, budgetRange.min, budgetRange.max, timeline, startDate]);

    // Стабилизируем onDataChange
    const stableOnDataChange = useCallback((data: BudgetData) => {
        onDataChange?.(data);
    }, [onDataChange]);

    useEffect(() => {
        // Пропускаем первый рендер
        if (isFirstRender.current) {
            isFirstRender.current = false;
            // Отправляем начальные данные после монтирования
            stableOnDataChange(budgetData);
            return;
        }
        
        // Проверяем, действительно ли изменились данные
        if (prevDataRef.current) {
            const prev = prevDataRef.current;
            const current = budgetData;
            
            const isChanged = 
                prev.budgetType !== current.budgetType ||
                prev.minBudget !== current.minBudget ||
                prev.maxBudget !== current.maxBudget ||
                prev.timeline !== current.timeline ||
                prev.startDate !== current.startDate;
            
            if (isChanged) {
                prevDataRef.current = current;
                stableOnDataChange(current);
            }
        } else {
            prevDataRef.current = budgetData;
            stableOnDataChange(budgetData);
        }
    }, [budgetData, stableOnDataChange]);

    const handleBudgetRangeChange = useCallback((min: number, max: number) => {
        setBudgetRange({ min, max });
    }, []);

    // Стабильный обработчик для ToggleSwitch
    const handleToggleChange = useCallback((value: string) => {
        setIsLeftActive(value === 'left');
    }, []);

    return (
        <Box header="Бюджет и сроки">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <h3 className="text-[#101828] text-[14px] font-medium">Тип бюджета</h3>
                    <ToggleSwitch 
                        options={['Фиксированная цена', 'Почасовая оплата']}  
                        className="w-[376.82501220703125px]"
                        onChange={handleToggleChange}
                    />
                </div>
                
                <RangeBudget 
                    onRangeChange={handleBudgetRangeChange}
                    initialMin={budgetRange.min}
                    initialMax={budgetRange.max}
                />
                
                <label className="flex flex-col gap-2 text-[#101828] text-[14px] font-medium">
                    Категория
                    <Select onValueChange={setTimeline} value={timeline}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Выберите срок" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {selectData.map((item) => (
                                    <SelectItem value={item.value} key={item.value}>
                                        {item.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </label>
                
                <div className="flex flex-col gap-3">
                    <h3 className="text-[#101828] text-[14px] font-medium">Дата начала</h3>
                    <div className='flex gap-2'>
                        {dateBtn.map((item) => (
                            <Button 
                                type='button' 
                                key={item} 
                                variant={startDate !== item ? "outline" : "default"}
                                onClick={() => setStartDate(item)}
                            >
                                {item}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default BudgetSection