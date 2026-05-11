import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { formatPriceNumber } from "@/helper/formatPriceNumber";
import { getInitials } from "@/helper/getInitials";
import StarIcon from "@/public/icons/StarIcon";
import { Locate, MapIcon, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
interface MasterCardProps{
    name:string
    avatarLink?:string | undefined
    specialization:string
    aiMatch:number,
    rating:number,
    location:string,
    price:number,
    variantPay:string,
}
const MasterCard:React.FC<MasterCardProps> = ({name, avatarLink, specialization, aiMatch, location, rating, price, variantPay}) => {
    return (
        <div className="flex flex-col p-5 bg-white rounded-[14px] border-0.2 border-[#F2F2F7] gap-4 w-74 shrink-0">
            <header className="flex gap-3 items-center">
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
                        className="rounded-full w-8 h-8 flex items-center justify-center"
                        aria-label={`Аватар пользователя ${name}`}
                        style={{
                            background: 'linear-gradient(135deg, rgba(225, 243, 255, 0.64) 16.83%, rgba(110, 137, 241, 0.53) 88.46%)'
                        }}
                    >
                        <span className="text-white font-semibold">{getInitials(name)}</span>
                    </div>
                }
                <div className="flex flex-col gap-[2.4px]">
                    <div className="flex gap-1.5 ">
                        <h3 className="text-[#030213] font-semibold leading-6">{name}</h3>
                    </div>
                    <p className="text-[#717182] text-xs font-normal leading-4.5">{specialization}</p>
                </div>
                
            </header>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.75 w-full">
                    <div className="flex justify-between">
                        <h4 className="text-xs text-muted-foreground font-normal">AI-совпадение</h4>
                        <p className="text-[#101073] text-xs font-semibold">{aiMatch}%</p>
                    </div>
                    <ProgressBar percent={aiMatch}/>
                </div>
                <div className="flex items-center gap-4">
                    <span className="flex gap-1 items-center text-xs text-muted-foreground font-medium">
                        <StarIcon size={14}/>
                        {rating}
                    </span>
                    <span className="flex gap-1 items-center text-xs text-muted-foreground font-medium">
                        <MapPin size={14} color="#717182" strokeWidth={1.16667}/>
                        {location}
                    </span>
                </div>
            </div>
            <span className="text-[#030213] text-[14px] font-semibold">{formatPriceNumber(price)}₽/{variantPay}</span>
            <Button>
                Пригласить в проект
            </Button>

        </div>
    );
}

export default MasterCard