import { getInitials } from "@/helper/getInitials";
import { NotificationIcon } from "@/public/icons/NotificationIcon";
import Image from "next/image";
import React from "react";

interface HeaderProps{
    name:string
    avatarLink?:string | undefined
}

const Header:React.FC<HeaderProps> = ({name, avatarLink}) => {
    return (
        <header className="w-full h-16 pr-6 flex justify-end items-center border-b-[0.8px] border-border bg-[#FFFFFF]">
            <div className="w-auto flex items-center gap-4">
                <NotificationIcon hasNotifications = {true}/>
                <div className="flex gap-3 items-center">
                    {
                        avatarLink && avatarLink.length > 1 ? 

                        <div className="w-9 h-9 relative shrink-0">
                            <Image 
                                src={avatarLink} 
                                alt="user-avatar"
                                fill
                                sizes="32px"
                                className="rounded-full object-cover"
                            />
                        </div>
                            :
                        <div 
                            className="rounded-full w-8 h-8 bg-[#B7C5F9] flex items-center justify-center"
                            aria-label={`Аватар пользователя ${name}`}
                        >
                            <span className="text-white font-semibold">{getInitials(name)}</span>
                        </div>
                    }

                    <span className="font-medium">{name}</span>
                </div>
            </div>
        </header>
    );
}

export default Header