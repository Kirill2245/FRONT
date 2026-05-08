import { getInitials } from "@/helper/getInitials";
import { NotificationIcon } from "@/public/icons/NotificationIcon";
import React from "react";

interface HeaderProps{
    name:string
}

const Header:React.FC<HeaderProps> = ({name}) => {
    return (
        <header className="w-full h-16 pr-6 flex justify-end items-center border-b-[0.8px] border-border/">
            <div className="w-auto flex items-center gap-4">
                <NotificationIcon hasNotifications = {true}/>
                <div className="flex gap-3 items-center">
                    <div className="rounded-full w-8 h-8 bg-[#B7C5F9] flex items-center justify-center">
                        <span className="text-white font-semibold">{getInitials(name)}</span>
                    </div>
                    <span className="font-medium">{name}</span>
                </div>
            </div>
        </header>
    );
}

export default Header