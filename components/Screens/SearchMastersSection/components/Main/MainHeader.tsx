// components/Screens/SearchMastersSection/components/MainHeader.tsx
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import { Grid, List } from "lucide-react";

interface MainHeaderProps {
    totalItems: number;
    currentPage: number;
    totalPages: number;
    viewMode: 'grid' | 'list';
    onViewModeChange: (value: 'grid' | 'list') => void;
}

const MainHeader = ({ totalItems, currentPage, totalPages, viewMode, onViewModeChange }: MainHeaderProps) => {
    return (
        <header className="flex justify-between items-start mb-6">
            <div className="flex flex-col gap-0.5">
                <h3 className="text-[#101828] text-[18px] font-bold">
                    Найдено {totalItems.toLocaleString()} фрилансеров
                </h3>
                <span className="text-[#6A7282] text-[14px]">
                    Страница {currentPage} из {totalPages}
                </span>
            </div>
            <ToggleSwitch 
                options={[
                    { label: 'Grid', icon: <Grid size={16} /> },
                    { label: 'List', icon: <List size={16} /> }
                ]}
                onChange={(value) => onViewModeChange(value === 'left' ? 'grid' : 'list')}
                sliderClassName="bg-[#B7C5F9]/50"
                className="w-[178.2375030517578px] text-xs bg-white border border-[#F2F2F7]"
                activeClassName="text-[#101828] font-semibold" 
                inactiveClassName="text-[#6A7282]"
            />
        </header>
    );
};

export default MainHeader;