import { Input } from "@/components/ui/input";
import { Button } from "../../ui/button";
import { ClosedCaption, ClosedCaptionIcon, Copy, X } from "lucide-react";
import ShareIcon from "@/public/icons/ShareIcon";

export default function SharpResult({ onClose }: { onClose: () => void }){
    const listMessangers = [
        {
            icon: 'social.svg',
            name:"VK"
        },
        {
            icon: 'instagram.svg',
            name:"Instagram"
        },
        {
            icon: 'shareIcon.svg',
            name:"WhatsApp"
        },
        {
            icon: 'telega.svg',
            name:"Telegram"
        }
    ]
    return(
        <div className="flex absolute  bg-[#00000080] z-10 w-full h-full top-0 left-0 items-center justify-center gap-6" onClick={onClose}>
            <section className="flex flex-col p-8 bg-white rounded-[14px] gap-6" onClick={(e) => e.stopPropagation()}>
                <header className="flex gap-4 items-center justify-center w-full">
                    <h4 className="text-2xl text-[#1D1D1F] font-semibold">Поделиться сертификатом</h4>
                    <Button className="w-6 h-6 bg-transparent" onClick={onClose}><X size={24}/></Button>
                    
                </header>
                <div className="flex flex-col gap-4 w-full">
                    <ul className="flex justify-center items-center flex-1 gap-3 max-w-full">
                    {listMessangers.map((item) => (
                            <li key={item.name} className="flex flex-col flex-1 items-center justify-center gap-2">
                                <Button className="bg-transparent p-1 h-20.5 w-21.75 hover:bg-gray-50 rounded-[50%] flex flex-col">
                                    <img src={`/images/${item.icon}`} alt="icon" className="w-6 h-6" />
                                    <span className="text-[#6E6E73] text-xs">{item.name}</span>
                                </Button>

                            </li>
                        )
                    )}
                    </ul>
                    <div className="flex gap-2">
                        <Input className="bg-[#F2F2F7] h-11.25"/>
                        <Button className="w-13 h-11.25"><Copy /></Button>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}