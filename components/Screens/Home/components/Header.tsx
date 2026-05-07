import { getInitials } from "@/helper/getInitials";
import React from "react";

interface HeaderProps{
    name:string
}

const Header:React.FC<HeaderProps> = ({name}) => {
    return (
        <header className="w-full h-16 pr-6 flex justify-end items-center">
            <div className="w-auto flex items-center gap-4">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5566 25.5C16.7029 25.7533 16.9133 25.9637 17.1667 26.11C17.42 26.2563 17.7074 26.3333 18 26.3333C18.2925 26.3333 18.5799 26.2563 18.8333 26.11C19.0866 25.9637 19.297 25.7533 19.4433 25.5" stroke="#717182" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.7183 20.7717C10.6095 20.891 10.5376 21.0394 10.5115 21.1988C10.4855 21.3582 10.5063 21.5217 10.5714 21.6695C10.6366 21.8173 10.7433 21.943 10.8785 22.0312C11.0138 22.1195 11.1718 22.1665 11.3333 22.1667H24.6667C24.8282 22.1667 24.9862 22.1199 25.1216 22.0318C25.2569 21.9437 25.3637 21.8181 25.4291 21.6704C25.4944 21.5227 25.5154 21.3592 25.4895 21.1998C25.4637 21.0404 25.392 20.892 25.2833 20.7725C24.175 19.63 23 18.4158 23 14.6667C23 13.3406 22.4732 12.0688 21.5355 11.1311C20.5979 10.1935 19.3261 9.66667 18 9.66667C16.6739 9.66667 15.4021 10.1935 14.4645 11.1311C13.5268 12.0688 13 13.3406 13 14.6667C13 18.4158 11.8242 19.63 10.7183 20.7717Z" stroke="#717182" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 10C22 7.79086 23.7909 6 26 6C28.2091 6 30 7.79086 30 10C30 12.2091 28.2091 14 26 14C23.7909 14 22 12.2091 22 10Z" fill="#F5D76E"/>
                </svg>
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