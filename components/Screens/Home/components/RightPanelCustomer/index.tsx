import AI from "./AI";
import CostOverview from "./CostOverview";
import FastActions from "./FastActions";
import Notificatons from "./Notificatons";

const RightPanelCustomer = () =>{
    return (
        <aside className="flex flex-col w-80 h-auto p-6 bg-white gap-6 max-[1200px]:hidden">
            <AI/>
            <FastActions/>
            <Notificatons/>
            <CostOverview/>
        </aside>
    );
}

export default RightPanelCustomer