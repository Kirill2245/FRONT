
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

const Pagination = ({ currentPage, totalPages, onPageChange, className }: PaginationProps) => {
    const getVisiblePages = () => {
        const delta = 2;
        const range: (number | string)[] = [];
        const rangeWithDots: (number | string)[] = [];
        let l: number | string;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
                range.push(i);
            }
        }

        range.forEach((i) => {
            if (l) {
                if (typeof i === 'number' && typeof l === 'number') {
                    if (i - l === 2) {
                        rangeWithDots.push(l + 1);
                    } else if (i - l !== 1) {
                        rangeWithDots.push('...');
                    }
                }
            }
            rangeWithDots.push(i);
            l = i;
        });

        return rangeWithDots;
    };

    if (totalPages <= 1) return null;

    return (
        <div className={cn("flex justify-center items-center gap-2 mt-6 pt-4 border-t border-white/20", className)}>
            <Button
                variant="outline"
                size="sm"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-9 px-3"
            >
                <ChevronLeft size={16} />
                <span className="ml-1 hidden sm:inline">Назад</span>
            </Button>

            <div className="flex gap-1">
                {getVisiblePages().map((page, index) => (
                    typeof page === 'number' ? (
                        <Button
                            key={index}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => onPageChange(page)}
                            className={cn(
                                "h-9 w-9",
                                currentPage === page && 'bg-[#101073] text-white hover:bg-[#101073]/90'
                            )}
                        >
                            {page}
                        </Button>
                    ) : (
                        <span key={index} className="px-2 py-2 text-[#6A7282]">
                            {page}
                        </span>
                    )
                ))}
            </div>

            <Button
                variant="outline"
                size="sm"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-9 px-3"
            >
                <span className="mr-1 hidden sm:inline">Вперед</span>
                <ChevronRight size={16} />
            </Button>
        </div>
    );
};

export default Pagination;