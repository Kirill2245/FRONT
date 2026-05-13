import AI from "./AI";
import FastActions from "./FastActions";
import Recommendations from "./Recommendations";


const RightPanelMaster = () =>{
    return (
        <aside className="flex flex-col w-92 h-auto p-6 bg-white gap-6 max-[1100px]:hidden">
            <AI/>
            <FastActions/>
            <Recommendations/>
        </aside>
    );
}

export default RightPanelMaster