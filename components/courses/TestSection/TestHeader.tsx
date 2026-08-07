// components/Test/TestHeader.tsx
'use client';

interface TestHeaderProps {
    title: string;
    badge?: string;
}

export const TestHeader = ({ title, badge = 'Light Certified' }: TestHeaderProps) => {
    return (
        <header className="flex gap-0.25 justify-center items-center">
            <div className="flex gap-0.125 items-center mr-[10%]">
                <h1 className="font-semibold text-[#1D1D1F] text-[20px]">
                    {title || 'Тест'}
                </h1>
                <span className="bg-[#B7C5F9] h-7.25 rounded-2xl px-3 flex items-center justify-center text-[#1D1D1F] text-[14px] font-medium">
                    {badge}
                </span>
            </div>
        </header>
    );
};