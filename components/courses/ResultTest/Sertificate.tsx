import { TestResultResponse } from "@/api/dto/course/course.dto";
import { formatDateToRussian } from "@/helper/formatDate";

interface SertificateProps {
    title: string;
    percentageCorrectAnswers: number;
    user_name: string;
    updatedAt?: Date | string;
}

export default function Sertificate(props: SertificateProps) {
    const CornerSVG = () => (
        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
                <path d="M0 1.6001C0 -42.5827 35.8172 -78.3999 80 -78.3999C124.183 -78.3999 160 -42.5827 160 1.6001C160 45.7829 124.183 81.6001 80 81.6001C35.8172 81.6001 0 45.7829 0 1.6001Z" fill="#B7C5F9"/>
            </g>
        </svg>
    );

    return (
        <div className="relative flex flex-col items-center justify-center w-full max-w-225 bg-white p-12.5 rounded-[14px] border-[0.8px] border-[#F2F2F7] gap-4 overflow-hidden">
            <div className="absolute top-0 right-0">
                <CornerSVG />
            </div>
            <div className="absolute bottom-0 left-0 rotate-180">
                <CornerSVG />
            </div>
            
            {/* Исправленный SVG с camelCase атрибутами */}
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48Z" 
                    fill="url(#paint0_linear_2_96)"
                />
                <path 
                    d="M54.954 49.78L57.984 66.832C58.0179 67.0328 57.9898 67.2392 57.9032 67.4235C57.8167 67.6079 57.676 67.7614 57.4999 67.8636C57.3237 67.9658 57.1206 68.0118 56.9176 67.9954C56.7146 67.9791 56.5215 67.9011 56.364 67.772L49.204 62.398C48.8583 62.1398 48.4384 62.0003 48.007 62.0003C47.5755 62.0003 47.1556 62.1398 46.81 62.398L39.638 67.77C39.4806 67.8989 39.2877 67.9767 39.085 67.9931C38.8822 68.0095 38.6793 67.9637 38.5033 67.8618C38.3273 67.7598 38.1865 67.6067 38.0998 67.4227C38.0131 67.2387 37.9846 67.0327 38.018 66.832L41.046 49.78" 
                    stroke="white" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M48 52C54.6274 52 60 46.6274 60 40C60 33.3726 54.6274 28 48 28C41.3726 28 36 33.3726 36 40C36 46.6274 41.3726 52 48 52Z" 
                    stroke="white" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <defs>
                    <linearGradient 
                        id="paint0_linear_2_96" 
                        x1="0" 
                        y1="0" 
                        x2="96" 
                        y2="96" 
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.413462" stopColor="#B3DEF6" stopOpacity="0.54"/>
                        <stop offset="1" stopColor="#395AEF" stopOpacity="0.51"/>
                    </linearGradient>
                </defs>
            </svg>
            
            <header className="flex flex-col gap-1.5 items-center justify-center">
                <span className="text-[#6E6E73] text-[14px]">Light Certified</span>
                <h2 className="text-3xl text-[#1D1D1F] font-semibold text-center">{props.title}</h2>
            </header>
            
            <div className="flex flex-col gap-px items-center">
                <span className="text-[#6E6E73] text-[14px]">Награжден</span>
                <h3 className="text-2xl text-[#1D1D1F] font-medium">{props.user_name}</h3>
            </div>

            <ul className="flex justify-between w-full max-w-42">
                <li className="flex flex-col gap-px items-center">
                    <h4 className="text-[#6E6E73] text-[14px]">Уровень</h4>
                    <span className="text-[#101073] text-xl font-semibold">Эксперт</span>
                </li>
                <li className="flex flex-col gap-px items-center">
                    <h4 className="text-[#6E6E73] text-[14px]">Результат</h4>
                    <span className="text-[#101073] text-xl font-semibold">{props.percentageCorrectAnswers}%</span>
                </li>
            </ul>
            <div className="flex justify-between w-full max-w-95 border-t-[#F2F2F7] border-t-[0.8px] pt-[14.8px]">
                <span className="text-[#6E6E73] text-[14px]">Дата : {formatDateToRussian(props.updatedAt)} </span>
                <span className="text-[#6E6E73]">·</span>
                <span className="text-[#6E6E73] text-[14px]"> Light ID: LT-2026-ABC123 </span>
            </div>
        </div>
    );
}