import { Button } from "@/components/ui/button";
import LeftPanel from "./components/LeftPanel";
import Main from "./components/Main";
import RightPanel from "./components/RightPanel";

const SearchMastersSection = () => {
    return (
        <section className="flex flex-col flex-1 ">
            <header className="flex justify-between py-5 px-6 border-b border-b-[#F2F2F7]">
                <h2 className="text-[#101828] text-2xl font-bold">Найди фрилансера</h2>
                <div className="flex gap-3">
                    <Button variant="outline">Сохраненные </Button>
                    <a href="/publication" className="bg-[#B7C5F9] text-[#101828] text-[14px] flex items-center justify-center px-3 rounded-[10px]">Разместить проект</a>
                </div>
            </header>
            <div className="flex flex-1">
                <LeftPanel/>
                <Main/>
                <RightPanel/>
            </div>
        
        </section>
    );
}

export default SearchMastersSection