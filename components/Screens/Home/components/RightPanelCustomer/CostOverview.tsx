import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { formatPriceNumber } from "@/helper/formatPriceNumber";
import CornerUpRightIcon from "@/public/icons/CornerUpRightIcon";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const CostOverview = () => {
    const chartConfig = {
        expenses: {
            label: "Расходы",
            color: "#F5D76E",
        },
    }

    const data = [
        { month: "Янв", expenses: 125000 },
        { month: "Фев", expenses: 98000 },
        { month: "Мар", expenses: 142000 },
        { month: "Апр", expenses: 87000 },
        { month: "Май", expenses: 156000 },
        { month: "Июн", expenses: 112000 },
    ]

    const totalExpenses = data.reduce((sum, item) => sum + item.expenses, 0)

    return (
        <div className="w-full h-auto border-[0.8] border-[#F2F2F7] flex flex-col p-5 rounded-[14px] gap-4">
            <div className="flex justify-between">
                <h3 className="text-[#030213] font-semibold">Обзор расходов</h3>
                <CornerUpRightIcon />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[#030213] text-2xl font-semibold">{formatPriceNumber(totalExpenses)}₽</p>
                <p className="text-[#717182] text-xs">За последние 6 месяцев</p>
            </div>
            <ChartContainer config={chartConfig} className="h-[128px] w-full">
                <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#717182" }}
                    />
                    <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#717182" }}
                        tickFormatter={(value) => `${value / 1000}K`}
                    />
                    <ChartTooltip 
                        content={<ChartTooltipContent formatter={(value) => formatPriceNumber(value as number)} />} 
                    />
                    <Line
                        type="monotone"
                        dataKey="expenses"
                        stroke="var(--color-expenses)"
                        strokeWidth={2}
                        dot={{ fill: "#F5D76E", strokeWidth: 0, r: 3 }}
                        activeDot={{ r: 5 }}
                    />
                </LineChart>
            </ChartContainer>
        </div>
    );
}

export default CostOverview;